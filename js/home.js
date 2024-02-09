let indexRelatos = 0
function novidadesHome(){
    createCarrossel("section.carrossel",3,"img/novidades/assistente-novidade.jpg","img/novidades/vr-novidade.jpg","img/novidades/relogio-novidade.jpg")
}

function destaquesHome(){
    fetch("produtos.json").then(response => response.json()).then(
        dados =>{
            dados.map(
                dado => {
                    if(dado.destaque == true){
                        createCardProduto(dado,"section.destaques")
                    }
                }
            )
        }
    )
}

function carrosselHome(){
    setInterval("carrosselAuto('div.carr-images',3)",4500)
}

function moveCarrosselRelatosHome(direcao){
    let imagens = document.querySelector("div.top-rel div.rel-images-container")
    let nomes = document.querySelector("div.bottom-rel div.rel-nomes-container") 
    let textos = document.querySelector("div.rel-txts-container")
    let tamanhosNomes = [0,133,268,413]
    let botaoDireita = document.getElementById("buttonRight")
    let botaoEsquerda = document.getElementById("buttonLeft")
    let mudarSlide = (dir) =>{
        if(dir == 'right'){
            botaoEsquerda.classList.remove("no-click")
            indexRelatos++
            imagens.style.transform = `translateX(-${indexRelatos*100}%)`;
            nomes.style.transform = `translateX(-${tamanhosNomes[indexRelatos]}%)`;
            textos.style.transform = `translateX(-${indexRelatos*20}%)`
            if(indexRelatos > 2){
                botaoDireita.classList.add("no-click")
            }
        }else if(dir == 'left'){
            botaoDireita.classList.remove("no-click")
            indexRelatos--
            imagens.style.transform = `translateX(-${indexRelatos*100}%)`;
            nomes.style.transform = `translateX(-${tamanhosNomes[indexRelatos]}%)`;
            textos.style.transform = `translateX(-${indexRelatos*20}%)`
             if(indexRelatos < 1){
                 botaoEsquerda.classList.add("no-click")
            }
        }
    }
    if(direcao == 'right' && indexRelatos != 3){
        mudarSlide(direcao)
    }else if(direcao == 'left' && indexRelatos != 0){
        mudarSlide(direcao)
    }
    
}