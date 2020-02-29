// Formatando Data

function formataData(data){
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()

    const horas = data.getUTCHours()
    const minutos = data.getMinutes()

    return `${dia}/${mes}/${ano} ${horas}:${minutos}`
}