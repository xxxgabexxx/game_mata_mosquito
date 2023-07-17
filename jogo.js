
//ajustando a dimensão do palco
var altura  = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()
// fim da dimensão do palco


// posição randomica do mosquito
function posicaoRandomica() {

    //removendo o mosquito anterior(caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
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