function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas.`

    if (horas >= 0 && horas < 12) {
        img.src = 'imagens/manha-p.png'
        document.body.style.background = '#ece2bf'
    } else if (horas >= 12 && horas < 18) {
        img.src = 'imagens/tarde-p.png'
        document.body.style.background = '#d0852a'
    } else {
        img.src = 'imagens/noite-p.png'
        document.body.style.background = '#9a7bb6'
    }































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































}