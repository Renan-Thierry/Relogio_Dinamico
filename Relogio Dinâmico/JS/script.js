function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} Horas e ${minutos} Minutos`

    if (hora >= 0 && hora <= 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e0da96'
    }
    else if (hora >= 1 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#f8b068'
    }
    else if (hora >= 19 && hora <= 23) {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#554865'
    }
}
