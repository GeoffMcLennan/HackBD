$(function confirmation() {
  var frame = document.getElementById('confirmation-content');
  var house = $(".house-radio").val();
  var distance = $("")
  var houseString;
  
  if (house == 0) {
    houseString = "Outdoors";
  } else if (house == 1) {
    houseString = "House";
  } else if (house == 2) {
    houseString = "Apartment";
  }
  
  frame.innerHTML = "Destination type: " + houseString + "<br>";
});