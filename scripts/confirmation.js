function confirmation() {
  var frame = Document.getElementById('confirmation-content');
  var house = Document.getElementByName('house-select').value();
  var distance = Document.getElementByName('house-select').value();
  
  frame.innerHTML("Destination type: " + house + "<br>"
                  + "Distance: "
}