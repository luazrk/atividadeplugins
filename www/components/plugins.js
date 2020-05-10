// This is a JavaScript file

$(document).on("click", "#alerta", function(){
  navigator.notification.alert("Minha mensagem",null,"Aviso!!!","Aceito");
});



$(document).on("click","#confirm", function(){

  function confirma(buttonIndex){
    if (buttonIndex == 1){
      navigator.notification.alert("Escolheu a opção A");
    }else{
      navigator.notification.alert("Escolheu a opção B");
  
     }
    }
    navigator.notification.confirm("Escolha A ou B",confirma,"Escolha:", ['A','B']);
});




$(document).on("click", "#beep", function(){
  navigator.notification.beep(3)
  });



  $(document).on("click", "#vibrar", function(){
  navigator.vibrate(4000);
  });





function mostraMapa (lat, long, alt){
    L.mapquest.key = 'AYnoigYeSElYaFzrUkt9G1ylbFk6pAIU';

        var map = L.mapquest.map('map', {
          center: [lat, long ,alt],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
        });

        map.addControl(L.mapquest.control());

        L.marker([lat,long,alt], {
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).bindPopup().addTo(map);
}



  
  $(document).on("click", "#local", function(){
   var onSuccess = function(position) {
    mostraMapa(position.coords.latitude, position.coords.longitude,position.coords.altitude )
      
    };
    
     function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });