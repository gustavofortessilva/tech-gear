function destaquesHome(){
    fetch("dados.json").then(response => response.json()).then(
        dados =>{
            dados.map(
                dado => {
                    if(dado.destaque == true){
                        const destaques = document.querySelector("section.destaques")
                        let item = document.createElement("div")
                        item.classList.add("dest-item")
                        let image = document.createElement("img")
                        let titulo = document.createElement("h3")
                        let preco = document.createElement("p")
                        titulo.innerText = dado.name
                        image.src = dado.capa
                        image.alt = dado.name
                        preco.innerHTML = dado.preco
                        item.appendChild(image)
                        item.appendChild(titulo)
                        item.appendChild(preco)
                        destaques.appendChild(item)
                    }
                }
            )
        }
    )
}
