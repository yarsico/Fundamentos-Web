let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOk = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = "100%"
email.style.width = "100%"
mensagem.style.width = "100%"


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length <= 2) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        let nomeOK = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 ) {
        txtEmail.innerHTML= 'E-mail inválido'
        txtEmail.style.color = 'red'
        let emailOk = true

    } else {
        txtEmail.innerHTML= 'E-mail válido'
        txtEmail.style.color = 'green'
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML ='Texto é muito grande, digite no maximo 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        let assuntoOK = true
    }
}

function enviar() {
    if(nomeOK == true && emailOk == true && assuntoOK == true) {
        alert('Formulário enviado com sucesso!')
    }else {
        alert ('Preencha o formulário corretamente antes de enviar')

    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.heigth = '600px'


}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.heigth = '250px'

}