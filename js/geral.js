let index = 0
//indicie do carrossel

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
        }, 990)

    }else{
        ulHamb.setAttribute('class', "hamb-anim-up")
        setTimeout(() => {
            menuHamb.style.display = "none"
            ulHamb.setAttribute("class", "hamb-fix-up")
        }, 480)
    }
}
function fixMenu(){
    if(Number(document.body.style.width) < 500){
        document.querySelector("div.menu-hamb").style.display = 'none'
    }
}