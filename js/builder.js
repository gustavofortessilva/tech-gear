function destaquesHome(){
    fetch("dados.json").then(response => response.json()).then(
        dados =>{
            dados.map(
                dado => {
                    if(dado.destaque == true){
                        //seção destaques
                        const destaques = document.querySelector("section.destaques")
                        //item destaque
                        let item = document.createElement("div")
                        item.classList.add("dest-item")
                        //imagem produto
                        let image = document.createElement("img")
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
                        //atribuindo informações aos itens
                        titulo.innerText = dado.name
                        image.src = dado.capa
                        image.alt = dado.name
                        preco.innerHTML = dado.preco
                        precoantes.innerHTML = dado.precoanterior
                        //atribuindo elementos a página
                        divprecos.appendChild(precoantes)
                        divprecos.appendChild(preco)
                        divtxt.appendChild(titulo)
                        divtxt.appendChild(divprecos)
                        item.appendChild(image)
                        item.appendChild(divtxt)
                        destaques.appendChild(item)
                    }
                }
            )
        }
    )
}
