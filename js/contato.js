const selectAssunto = document.querySelector("div.form-item select")
const assuntoMsg = document.querySelector("div.assunto-msg")
let verificadorAssunto = 0
function verifyAssunto(){
    if(selectAssunto.value !== 'outro'){
        assuntoMsg.style.display = 'none'
        verificadorAssunto = 0
    }else if(selectAssunto.value == 'outro'){
        assuntoMsg.style.display = 'block'
        verificadorAssunto = 28
    }
}
function msgConfirm(){
    const mensagem = document.querySelector("div.confirm-msg")
    const container = document.querySelector("div.messages-container")
    //descer msg
    mensagem.style.transform = `translateY(${0 + verificadorAssunto}%)`
    setTimeout(() =>{
        //subir msg
        mensagem.style.transform = `translateY(-${110 + verificadorAssunto}%)`
    },2000)
}

function msgDeny(erro){
    const mensagem = document.querySelector("div.deny-msg")
    mensagem.innerHTML = ""
    let texto = "Algo deu errado, sua mensagem não foi enviada! "
    mensagem.innerHTML += texto + erro
    //descer msg
    mensagem.style.transform = `translateY(${0 + verificadorAssunto}%)`
    setTimeout(() =>{
        //subir msg
        mensagem.style.transform = `translateY(-${110 + verificadorAssunto}%)`
    },2000)
}

function verifyEnvioForm(){
    let nome = document.querySelector("input#nome")
    let email = document.querySelector("input#email")
    let assunto = document.querySelector("select#assunto")
    let assuntoMsg = document.getElementById("assunto-msg")
    let mensagem = document.querySelector("textarea")
    let contador = 0
    if(nome.value.length == 0){
        msgDeny("[Complete o nome]")
    }else {
        contador++
        if(email.value.length == 0){
            msgDeny("[Complete o email]")
        }else{
            contador++
            if(assunto.value == 'Selecione:'){
                msgDeny("[Selecione o assunto]")
                
            }else if(assunto.value == 'outro' && assuntoMsg.value.length == 0){
                msgDeny("[Escreva o assunto]")
            }else if(mensagem.value.length == 0){
                msgDeny("[Escreva a Mensagem]")
            }else if((mensagem.value.length > 800) || (nome.value.length > 40) || (email.value.length > 40) || (assuntoMsg > 40)){
                msgDeny("[Quantidade de Caracteries Inválida]")
            }else{
                msgConfirm()
            }
        } 
    }
    
    
}   