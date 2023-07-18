
//ajustando a dimensão do palco
var altura  = 0
var largura = 0
var vidas = 1
var tempo = 10
var criaMosquitoTempo = 1500
// nível do jogo
var nivel = window.location.search
nivel =  nivel.replace('?', '')

if(nivel === 'normal'){
    criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
    criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()
// fim da dimensão do palco

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
   
    
} ,1000)

// posição randomica do mosquito
function posicaoRandomica() {

    //removendo o mosquito anterior(caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'fim_do_jogo.html'
        }else{
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        vidas++
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90 
    var posicaoY = Math.floor(Math.random() * altura) - 90
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)
    
    //criando o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio()
                       + ' '
                       +  ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    
    mosquito.onclick = function() {
        this.remove()
    }


    document.body.appendChild(mosquito)

    tamanhoAleatorio()
}


//tamanho dos mosquitos
function tamanhoAleatorio() {

    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
        
    }

}

//mostrar lado aleatorio da imagem do mosquito
function ladoAleatorio() {

    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }

}