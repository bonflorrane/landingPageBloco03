let nome = document.querySelector('#nome')
let email= document.querySelector(' #Email') 
let assunto = document.querySelector('#Assunto') 
let nomeOK = false;
let emailOk = false;
let assuntoOK = false;

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length <3){
       txt.innerHTML='Nome inválido'
       txt.style.color='red'
    } else{
        txt.innerHTML='Nome válido'  
        txt.style.color='green'
    }
}

function validaEmail() {
    let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
  
    if (email.value.match(regex)){
      txtEmail.style.color = 'green';
      txtEmail.innerHTML = 'E-mail válido';
      emailOk = true;
    } else {
      txtEmail.style.color = 'red'
      txtEmail.innerHTML = 'E-mail  inválido';
      emailOk = false;
    }
  }

  function validaAssunto(){
      let txtAssunto = document.querySelector('#txtAssunto')

      if(assunto.value.length >=100){
          txtAssunto.innerHTML='Texto é muito grande, digite no máximo 100 caracteres'
          txtAssunto.style.color='red'
      }else{
        txtAssunto.innerHTML='Texto válido'
        txtAssunto.style.color= 'green'
        assuntoOK=true
      }
  }

  function enviar(){
    if(nomeOK== true && emailOk == true && assuntoOK == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Prencha o formulário corretamente antes de enviar")
    }
}

function mapaZoom(){
   mapa.style.width = "800px"
   mapa.style.height = "650px"

}

function mapaNormal(){
    mapa.style.width = "600px"
    mapa.style.height = "450px"

}


