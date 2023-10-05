var altura = 0
var largura = 0
var vidas = 3
var tempo = 15
var criarMosquitoTempo = 1500
var nivel = window.location.search

nivel = nivel.replace('?', '')

if(nivel === "normal"){
    criarMosquitoTempo = 1500
}else if (nivel === "dificil"){
    criarMosquitoTempo = 1000
}else if(nivel === "chucknorris"){
    criarMosquitoTempo = 750
}

function tamanhoDaJanela(){
    largura = window.innerWidth
    altura = window.innerHeight
}

function posicaoRandomica(){

    //Removendo o mosquito caso já exista
    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()
        
        //Controle de vidas do jogador
        if(vidas <= 0){
            window.location.href = "fim_de_jogo.html"
        }else{
            document.getElementById("v" + vidas).src = "./imagens/coracao_vazio.png"
            vidas--
        }
        
        
    }

    //Definindo a coordenada do mosquiro
    posicaoX = Math.floor(Math.random() * largura) - 90
    posicaoY = Math.floor(Math.random() * altura) - 90

    //Impede que a coordenada tenha valores negativos
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Criando o elemento img do mosquito dinamicamente
    var mosquito = document.createElement("img")
    mosquito.src = "./imagens/mosquito.png"
    mosquito.className = tamanhoRandomico() + " " + ladoRandomico()
    mosquito.id = "mosquito"

    //Atribuindo a coordenada ao elemento img
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = "absolute"
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function tamanhoRandomico(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){

        case 0:
            return "mosquito1"
        case 1:
            return "mosquito2"
        case 2: 
            return "mosquito3"
    }
}

function ladoRandomico(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){

        case 0:
            return "ladoA"
        case 1:
            return "ladoB"
    }
}

tamanhoDaJanela()

var cronometro = setInterval( function(){  
    tempo--

    if(tempo >= 0){
        document.getElementById("cronometro").innerHTML = tempo
    } else{
        clearInterval(cronometro)
        clearInterval(criarMosquito) 
        window.location.href = "vitoria.html"
    }
}, 1000)

