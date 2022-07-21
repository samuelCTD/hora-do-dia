

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    if(hora >= 5 && hora < 12){
        msg.innerHTML = `São ${hora}hrs. Bom dia!`
        img.src = './img/manha01.jpg'
        document.body.style.background = 'rgb(233, 171, 135)'
    } else if(hora >= 12 && hora < 19){
        msg.innerHTML = `São ${hora}hrs. Boa tarde!`
        img.src = './img/tarde01.jpg'
        document.body.style.background = 'rgb(156, 156, 223)'
    } else{
        msg.innerHTML = `São ${hora}hrs. Boa noite!`
        img.src = './img/noite01.jpg'
        document.body.style.background = 'rgb(10, 10, 34)'
    }
}