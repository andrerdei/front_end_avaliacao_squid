// Desestruturando Dados
  
function desetruturaDados(dados) {
    const listaLinks = desestruturaLinks(dados)
    const listaImagens = desestruturaImagens(dados)
    const listaNomeUsuarios = desestruturaNomes(dados)
    const listaNumeroCurtidas = desestruturaCurtidas(dados)
    const listaNumeroComentarios = desestruturaComentarios(dados)
    const listaDataPublicacoes = desestruturaDataPublicacoes(dados)
    
    return { listaLinks, listaImagens, listaNomeUsuarios, listaNumeroCurtidas, listaNumeroComentarios, listaDataPublicacoes }
}

function desestruturaLinks(dados) {
    return dados.medias.map(media => {
        const { link } = media
        return link
    })
}

function desestruturaImagens(dados) {
    return dados.medias.map(media => {
        const { imagens } = media
        return imagens
    })
}

function desestruturaNomes(dados) {
    return dados.medias.map(media => {
        const { username } = media.usuario
        return username
    })
}

function desestruturaCurtidas(dados) {
    return dados.medias.map(media => {
        const { upvotes } = media
        return upvotes
    })
}

function desestruturaComentarios(dados) {
    return dados.medias.map(media => {
        const { comentarios } = media
        return comentarios
    })
}

function desestruturaDataPublicacoes(dados) {
    return dados.medias.map(media => {
        const { criadoEm } = media
        const dataFormatada = new Date(criadoEm)
        return formataData(dataFormatada)
    })
}

function desestruturaPaginacao(dados) {
    const { next_url } = dados.pagination
    return encodeURIComponent(next_url)
}