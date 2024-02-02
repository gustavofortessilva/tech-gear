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
        }, 500)
    }
}