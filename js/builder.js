function createCardProduto(dado,container){
    //seção destaques
    const destaques = document.querySelector(container)
    //item destaque
    let item = document.createElement("div")
    item.classList.add("dest-item")
    //imagem produto
    let image = document.createElement("img")
    //bottom produto
    let divBottom = document.createElement("div")
    divBottom.classList.add("item-dest-bottom")
    //div textos produto
    let divtxt = document.createElement("div")
    divtxt.classList.add("dest-txt")
    //titulo do item
    let titulo = document.createElement("h3")
    //div precos
    let divprecos = document.createElement("div") 
    divprecos.classList.add("precos")
    //preco do produto
    let preco = document.createElement("p")
    preco.classList.add("preco-atual")
    //preco anterior do produto
    let precoantes = document.createElement("p")
    precoantes.classList.add("preco-antes")
    //link produto
    let link = document.createElement("a")
    link.classList.add("dest-link")
    //atribuindo informações aos itens
    titulo.innerText = dado.name
    image.src = dado.capa
    image.alt = dado.name
    preco.innerHTML = dado.preco
    link.innerHTML = "Veja mais informações"
    link.href = `tech-gear/paginas-produtos/${dado.name}.html`
    //atribuindo elementos a página
    if(dado.destaque == true){
        precoantes.innerHTML = dado.precoanterior
        divprecos.appendChild(precoantes)
    }
    divprecos.appendChild(preco)
    divtxt.appendChild(titulo)
    divtxt.appendChild(divprecos)
    item.appendChild(image)
    divBottom.appendChild(divtxt)
    divBottom.appendChild(link)
    item.appendChild(divBottom)
    destaques.appendChild(item)
}

function createCarrossel(elementoPai,numImgs,src1,src2,src3,src4){
    container = document.querySelector(elementoPai)
    let carrossel = document.createElement("div")
    carrossel.classList.add("carrossel")
    let image1 = document.createElement("img")
    let image2 = document.createElement("img")
    image1.classList.add("img-carrossel")
    image2.classList.add("img-carrossel")
    let divImages = document.createElement("div")
    divImages.classList.add("carr-images")
    image1.src = src1
    image2.src = src2
    divImages.appendChild(image1)
    divImages.appendChild(image2)
    if(numImgs > 2){
        let image3 = document.createElement("img")
        image3.classList.add("img-carrossel")
        image3.src = src3
        divImages.appendChild(image3)
    }
    if(numImgs > 3){
        let image4 = document.createElement("img")
        image4.classList.add("img-carrossel")
        image4.src = src4
        divImages.appendChild(image4)
    }
    carrossel.appendChild(divImages)
    container.appendChild(carrossel)
}

function createFooter(){
    let footer = document.querySelector("footer.f1")
    //logo
    let logoFooter = document.createElement("div")
    logoFooter.classList.add("logo-footer")
    //img logo
    let imgLogo = document.createElement("img")
    imgLogo.src = "img/outros/icon-logo.png"
    imgLogo.alt = "logo engrenagem"
    logoFooter.appendChild(imgLogo)
    //h2 logo
    let tituloLogo = document.createElement("h2")
    tituloLogo.innerHTML = "Teck Gear Emporium"
    logoFooter.appendChild(tituloLogo)
    //colocar logo no footer
    footer.appendChild(logoFooter)
    //div links
    let divLinks = document.createElement("div")
    divLinks.classList.add("links")
    //links1
    let linkItens1 = document.createElement("div")
    linkItens1.classList.add("links-itens")
    //itens links1
    let tituloLinks1 = document.createElement("h3")
    tituloLinks1.innerHTML = "Páginas:"
    //lista de links 1
    let lista1 = document.createElement("ul")
    lista1.innerHTML = '<li><a href="#">Home</a></li><li><a href="#">Produtos</a></li><li><a href="#">Contato</a></li><li><a href="#">Carrinho</a></li>'
    //borda em baixo
    let bordaBaixo1 = document.createElement("div")
    bordaBaixo1.classList.add("border-bottom")
    //atribuir elementos na div links 1
    linkItens1.appendChild(tituloLinks1)
    linkItens1.appendChild(lista1)
    linkItens1.appendChild(bordaBaixo1)
    //links2
    let linkItens2 = document.createElement("div")
    linkItens2.classList.add("links-itens")
    //itens links 2
    let tituloLinks2 = document.createElement("h3")
    tituloLinks2.innerHTML = "Links para Contato:"
    //lista links 2
    let lista2 = document.createElement("ul")
    lista2.innerHTML = '<li><span class="material-symbols-outlined">call</span><a href="#">Telefone</a></li><li><img src="img/outros/icons/icon-instagram.png" alt="" width="25px"><a href="#">Instagram</a></li><li><img src="img/outros/icons/icon-facebook.png" alt=""><a href="#">Facebook</a></li><li><img src="img/outros/icons/icon-whatsapp.png" id="whats" alt="" width="28px"><a href="#">Whatsapp</a></li>'
    //borda em baixo 2
    let bordaBaixo2 = document.createElement("div")
    bordaBaixo2.classList.add("border-bottom")
    //disclaimer
    let disclaimer = document.createElement("p")
    disclaimer.innerHTML = 'Esta página foi criada por <strong><a href="https://github.com/gustavofortessilva" target="_blank">Gustavo Fortes</a></strong>, como um modelo, portanto não possui funcionalidade real. Algumas funcionalidades não estão funcionando completamente, como carrinho e compra de itens, pois este site é somente para exercitar minhas habilidades com HTML, CSS e JavaScript'
    //atribuir Elementos na div links 2
    linkItens2.appendChild(tituloLinks2)
    linkItens2.appendChild(lista2)
    linkItens2.appendChild(bordaBaixo2)
    linkItens2.appendChild(disclaimer)
    //div links => div link
    divLinks.appendChild(linkItens1)
    divLinks.appendChild(linkItens2)
    //footer finalizando
    footer.appendChild(divLinks)
}