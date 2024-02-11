let maxElementsInicio = 3
let maxElements = maxElementsInicio
let indexConstruct = 0
let indexVezCriaBtn = 1
let ultimoCardCriado = 0
function cardsProdutos(){
    fetch("jsons/produtos.json").then(response => response.json()).then(
        dados =>{
            dados.map(
                dado =>{
                    indexConstruct = 0
                    if(dado.destaque == true &&  dados.indexOf(dado) < maxElements && dados.indexOf(dado) >= ultimoCardCriado ){
                        createCardProduto(dado, "section.produtos")
                    }else if(dados.indexOf(dado) < 6){
                        vejaMais(dados.indexOf(dado))
                        indexConstruct++
                    }
                }
            )
            dados.map(
                dado =>{
                    if(dado.destaque != true && dados.indexOf(dado) < maxElements && dados.indexOf(dado) >= ultimoCardCriado){
                        createCardProduto(dado, "section.produtos")
                    }else if(dados.indexOf(dado) < 6){
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
        let main = document.querySelector("main")
        let btn = document.createElement("button")
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
    ultimoCardCriado = maxElements
    maxElements = maxElements * 2
    cardsProdutos()
}