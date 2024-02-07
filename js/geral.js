//indicie do carrossel
let index = 0;

function carrosselAuto(getimgs, numImgs){
    const imgs = document.querySelector(getimgs)
    index++
    if(index > numImgs - 1){
        index = 0
    }
    imgs.style.transform = `translateX(${(-index)*100}%)`
}

function abreFechaMenuHamb(){
    let menuHamb = document.querySelector("div.menu-hamb")
    let ulHamb = document.querySelector("div.menu-hamb ul")
    if(menuHamb.style.display == "" || menuHamb.style.display == "none"){
        menuHamb.style.display = "block"
        ulHamb.setAttribute('class', "hamb-anim-down")
        setTimeout(() => {
            ulHamb.setAttribute("class", "hamb-fix-down")
        }, 1100)

    }else{
        ulHamb.setAttribute('class', "hamb-anim-up")
        setTimeout(() => {
            menuHamb.style.display = "none"
            ulHamb.setAttribute("class", "hamb-fix-up")
        }, 380)
    }
}
function novidadesHome(){
    createCarrossel("section.carrossel",3,"img/novidades/assistente-novidade.jpg","img/novidades/vr-novidade.jpg","img/novidades/relogio-novidade.jpg")
}
function destaquesHome(){
    fetch("dados.json").then(response => response.json()).then(
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
    setInterval("carrosselAuto('div.carr-images',3)",5000)
}