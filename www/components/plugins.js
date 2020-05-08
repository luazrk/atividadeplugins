// This is a JavaScript file

$(document).on("click", "#alerta", function(){
  function retorno(){

  }

navigator.notification.alert("Minha mensagem",retorno,"Aviso!!!","Aceito");
});