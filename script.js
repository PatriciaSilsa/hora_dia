function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()
var hora = data.getHours()
var minuto = data.getMinutes()
    if (minuto < 10) {
        minuto ='0'+ minuto
    }

msg.innerHTML = `Hoje é dia ${dia}/${mes}/${ano}. Agora são ${hora}:${minuto} horas.`
if (hora >= 0 && hora < 12){
    img.src ='morning.png'
    document.body.style.background = '#e5dc97'
} else if (hora >= 12 && hora < 18) {
    img.src = 'afternoon.png'
    document.body.style.background = '#eeb3b4'
} else {
    img.src = 'night.png'
    document.body.style.background = '#4e4a50'
}
}
 var tempo = setInterval(carregar, 1000)

