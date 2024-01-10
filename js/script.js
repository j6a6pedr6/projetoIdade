function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        alert('[ERRO] verifique o ano e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/boy250.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/teenBoy250.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/man250.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/oldMan250.jpg')
            }

        } else if (fsex[1].checked) {
            genero ='Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/girl250.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/teenGirl250.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/woman250.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/oldWoman250.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectoamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}