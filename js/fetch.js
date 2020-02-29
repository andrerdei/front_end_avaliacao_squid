/* Chamada Principal */

document.addEventListener("DOMContentLoaded", function () {
    realizaFetch(firstUrl)

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop >= secaoFeed.clientHeight - 2500
            && controlaEventoScroll == true) {
            controlaEventoScroll = false
            realizaFetch(`${firstUrl}?${nextUrl}`)
        }
    })
})


// Realiza Fetch

function realizaFetch(url) {
    fetch(url)
        .then(response => response.json())
        .then(result => {
            renderizaConteudo(result)
            nextUrl = desestruturaPaginacao(result)
            console.log(nextUrl)
            controlaEventoScroll = true
        })
        .catch(err => console.log("Não foi possível carregar o conteúdo, tente novamente"))
}

