window.onload = getMyLocation;
console.log('Deu certo')
function getMyLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayLocation);
  }else{
alert('Ops, no geolocation suport')
  }
}

function displayLocation(position){
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  var div = document.getElementById("location");
  div.innerHTML = `A posição atual é: longitude:  ${longitude} e latitude: ${latitude}`
}