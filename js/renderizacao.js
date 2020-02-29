// Renderizando Conteúdo

function renderizaConteudo(dados) {
    const listas = desetruturaDados(dados)

    for (let i = 0; i < dados.medias.length; i++) {
        const figureFeed = document.createElement("figure")

        figureFeed.innerHTML = `
            <a href=${listas.listaLinks[i]}>
            <picture>
                <source media="(min-width: 640px)" srcset=${listas.listaImagens[i].resolucaoPadrao.url}>
                <source media="(min-width: 320px)" srcset=${listas.listaImagens[i].resolucaoMedia.url}>
                <source media="(min-width: 150px)" srcset=${listas.listaImagens[i].thumbnail.url}>
                <img src="${listas.listaImagens[i].thumbnail.url}" alt="Foto em miniatura do usuário">
            </picture>
            <figcaption class="legenda-invisivel ">
                <span>${listas.listaNomeUsuarios[i]}</span>
                <span>${listas.listaNumeroCurtidas[i]}</span>
                <span>${listas.listaNumeroComentarios[i]}</span>
                <span>${listas.listaDataPublicacoes[i]}</span>
            </figcaption>
            </a>
        `

        secaoFeed.appendChild(figureFeed)
    }
}