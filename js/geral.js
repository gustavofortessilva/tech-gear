// onload páginas
function loadPage(folder){
    createFooter(folder)
    createHeader(folder)
    geralHead(folder)
    fixMenu()
}

function geralHead(folder){
    let head = document.head
    document.title = "Tech Gear Emporium"
    let link1 = document.createElement("link")
    let link2 = document.createElement("link")
    let link3 = document.createElement("link")

    link1.setAttribute("rel", "stylesheet")
    if(folder == "sameFolder"){
        link1.setAttribute("href", "styles/geral.css")
        link3.setAttribute("href", "img/outros/favicon.ico")
    }else if(folder == "folderProdutos"){
        link1.setAttribute("href", "../styles/geral.css")
        link3.setAttribute("href", "../img/outros/favicon.ico")
    }else{
        alert("Algo deu Errado")
    }

    link2.setAttribute("rel", "stylesheet")
    link2.setAttribute("href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0")
    link3.setAttribute("rel", "shortcut icon")
    link3.setAttribute("type", "image/x-icon")
    head.appendChild(link1)
    head.appendChild(link2)
    head.appendChild(link3)
}

//indicie do carrossel
function carrosselAuto(getimgs, numImgs){
    const imgs = document.querySelector(getimgs)
    index++
    if(index > numImgs - 1){
        index = 0
    }
    imgs.style.transform = `translateX(${(-index)*100}%)`
}

let index = 0
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