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
    link.href = `tech-gear/paginas-produtos/${dado.namePagina}.html`
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

function createFooter(pastaAtual){
    let footer = document.querySelector("footer")
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
    switch(pastaAtual){
        case 'sameFolder':
            lista1.innerHTML = '<li><a href="index.html">Home</a></li><li><a href="produtos.html">Produtos</a></li><li><a href="contato.html">Contato</a></li><li><a href="carrinho.html">Carrinho</a></li>'
            break
        case 'folderProdutos':
            lista1.innerHTML = '<li><a href="../index.html">Home</a></li><li><a href="../produtos.html">Produtos</a></li><li><a href="../contato.html">Contato</a></li><li><a href="../carrinho.html">Carrinho</a></li>'
            break
    }
    
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
    //div links => div link
    divLinks.appendChild(linkItens1)
    divLinks.appendChild(linkItens2)
    //footer finalizando
    footer.appendChild(divLinks)
    footer.appendChild(disclaimer)
}

function createHeader(pastaAtual){
    let header = document.querySelector("header")
    let divHeaderTop = document.createElement("div")
    divHeaderTop.classList.add("header-top")
    //nav buttons
    let navButtons = document.createElement("nav")
    navButtons.classList.add("buttons")
    let linkButtons1 = document.createElement("a")
    linkButtons1.href = "carrinho.html"
    let linkButtons2 = document.createElement("a")
    linkButtons2.href = "contato.html"
    linkButtons1.innerHTML = '<span class="material-symbols-outlined">shopping_cart</span>'
    linkButtons2.innerHTML = '<span class="material-symbols-outlined">contact_support</span>'
    navButtons.appendChild(linkButtons1)
    navButtons.appendChild(linkButtons2)
    divHeaderTop.appendChild(navButtons)
    //Div Logo
    let divLogo = document.createElement("div")
    divLogo.classList.add("logo")
    let imgLogo = document.createElement("img")
    imgLogo.src = "img/outros/icon-logo.png"
    imgLogo.alt = "logo engrenagem"
    let linkImgLogo = document.createElement("a")
    switch(pastaAtual){
        case 'sameFolder':
            linkImgLogo.href = "index.html"
            break
        case 'folderProdutos':
            linkImgLogo.href = "../index.html"
            break
    }
    linkImgLogo.appendChild(imgLogo)
    let spanTitulosHeader = document.createElement("span")
    spanTitulosHeader.classList.add("titulos-header")
    spanTitulosHeader.innerHTML = "<h1>Teck Gear Emporium</h1><p>Sua loja de Equipamentos eletrônicos</p>"
    divLogo.appendChild(linkImgLogo)
    divLogo.appendChild(spanTitulosHeader)
    divHeaderTop.appendChild(divLogo)
    //div buttons responsivos
    let divButtonsResponse = document.createElement("div")
    divButtonsResponse.classList.add("buttons-response")
    switch(pastaAtual){
        case 'sameFolder':
            divButtonsResponse.innerHTML = '<ul><li><a href="produtos.html">Produtos</a></li><li><a href="contato.html">Contato</a></li><li><a href="carrinho.html">Carrinho</a></li></ul>'
            break
        case 'folderProdutos':
            divButtonsResponse.innerHTML = '<ul><li><a href="../produtos.html">Produtos</a></li><li><a href="../contato.html">Contato</a></li><li><a href="../carrinho.html">Carrinho</a></li></ul>'
            break
    }
    divHeaderTop.appendChild(divButtonsResponse)
    header.appendChild(divHeaderTop)
    //nav menu hamburger
    let navMenu = document.createElement("nav")
    navMenu.classList.add("menu")
    navMenu.innerHTML = '<span class="material-symbols-outlined btn-hamb" onclick="abreFechaMenuHamb()">menu</span>'
    let divMenuHamb = document.createElement("div")
    divMenuHamb.classList.add("menu-hamb")
    switch(pastaAtual){
        case 'sameFolder':
            divMenuHamb.innerHTML = '<ul><li><a href="produtos.html">Produtos</a></li><li><a href="contato.html">Contato</a></li><li><a href="carrinho.html">Carrinho</a></li></ul>'
            break
        case 'folderProdutos':
            divMenuHamb.innerHTML = '<ul><li><a href="../">Produtos</a></li><li><a href="../">Contato</a></li><li><a href="../">Carrinho</a></li></ul>'
            break
    }
    navMenu.appendChild(divMenuHamb)
    header.appendChild(navMenu)
}