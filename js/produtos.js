let maxElementsInicio = 3
let maxElements = maxElementsInicio
let indexConstruct = 0
let indexVezCriaBtn = 1
let numElements = 6
let produtos = document.querySelector("section.produtos")
let main = document.querySelector("main")
let btn = document.createElement("button")

function cardsProdutos(){
    fetch("jsons/produtos.json").then(response => response.json()).then(
        dados =>{
            produtos.innerHTML = ""
            dados.map(
                dado =>{
                    indexConstruct = 0
                    if(dado.destaque == true &&  dados.indexOf(dado) < maxElements){
                        createCardProduto(dado, "section.produtos")
                    }else if(dados.indexOf(dado) < numElements){
                        vejaMais(dados.indexOf(dado))
                        indexConstruct++
                    }
                }
            )
            dados.map(
                dado =>{
                    if(dado.destaque != true && dados.indexOf(dado) < maxElements){
                        createCardProduto(dado, "section.produtos")
                    }else if(dados.indexOf(dado) < numElements){
                        vejaMais(dados.indexOf(dado))
                        indexConstruct++
                    }
                }
            )
        }
    )
}

function vejaMais(index){
    if(index == maxElements && indexConstruct < 1){
        btn.classList.add("btn-veja-mais")
        btn.innerHTML = "Veja mais"
        btn.setAttribute("onclick", "clickVejaMais()")
        main.appendChild(btn)
        indexVezCriaBtn++
    }
}

function clickVejaMais(){
    let btn = document.querySelector("button.btn-veja-mais")
    btn.innerHTML = ""
    maxElements = maxElements * 2
    cardsProdutos()
}