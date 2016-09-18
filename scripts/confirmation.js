$(function confirmation() {
  var frame = $('p#confirmation-content');
  var house = $('input[name=house-select]:checked').val();
  var distance = $("select#distanceList").val();
  var houseString;
  var distString;

  if (house == 0) {
    houseString = "Outdoors";
  } else if (house == 1) {
    houseString = "House";
  } else if (house == 2) {
    houseString = "Apartment";
  }

  switch(distance) {
    case 0:
        distString = "Less than 15&#39;";
        break;
    case 1:
        distString = "15&#39; - 30&#39;";
        break;
    case 2:
        distString = "30&#39; - 50&#39;";
        break;
    case 4:
        distString = "More than 50&#39;";
        break;
    default:
        distString = "Less than 15&#39;";
  }

  frame.append("Destination type: " + houseString + "<br>");
  frame.append("Distance: " + distString + "<br>");
});
