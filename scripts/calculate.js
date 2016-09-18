const CHARGE_FOR_OUTSIDE_DELIVERY = 30;
const CHARGE_FOR_INSIDE_DELIVERY = 50;
const CHARGE_FOR_BEHIND_DELIVERY = 70;

const CHARGE_FOR_NO_STAIRS = 0;
const CHARGE_FOR_ONE_STORY = 30;
const CHARGE_FOR_TWO_STORIES = 60;
const CHARGE_FOR_THREE_OR_MORE_STORIES = 90;

const CHARGE_FOR_0_TO_30 = 100;
const CHARGE_FOR_30_TO_40 = 80;
const CHARGE_FOR_GREATER_THAN_40 = 0;

const CHARGE_FOR_LESS_THAN_15 = 0;
const CHARGE_FOR_15_TO_30 = 30;
const CHARGE_FOR_30_TO_50 = 60;
const CHARGE_FOR_MORE_THAN_50 = 100;

var finLocation = 0;
var finElevation = 0;
var finWidth = 0;
var finHeight = 0;
var finDistance = 0;
var finTotal = 0;

function locations() {
  var myList = document.getElementById("myList");
  finLocation = myList.options[myList.selectedIndex].value;
  document.getElementById("location").value = finLocation;
}

function elevations() {
  var elevationList = document.getElementById("elevationList");
  finElevation = elevationList.options[elevationList.selectedIndex].value;
  document.getElementById("elevation").value = finElevation;
}

function widths() {
  var widthList = document.getElementById("widthList");
  finWidth = widthList.options[widthList.selectedIndex].value;
  document.getElementById("width").value = finWidth;
}

function distances() {
  var distanceList = document.getElementById("distanceList");
  finDistance = distanceList.options[distanceList.selectedIndex].value;
  document.getElementById("distance").value = finDistance;
}

function calculateLocation() {
  if (finLocation == 0) {
    alert("Entry field missing. Please put in a value for location");
  } else if (finLocation == 1) {
    finTotal += CHARGE_FOR_INSIDE_DELIVERY;
  } else if (finLocation == 2) {
    finTotal += CHARGE_FOR_OUTSIDE_DELIVERY;
  } else if (finLocation == 3) {
    finTotal += CHARGE_FOR_BEHIND_DELIVERY;
  }
}

function calculateElevation() {
  if (finElevation == 0) {
    alert("Entry field missing. Please put in a value for elevation");
  } else if (finElevation == 1) {
    finTotal += CHARGE_FOR_NO_STAIRS;
  } else if (finElevation == 2) {
    finTotal += CHARGE_FOR_ONE_STORY;
  } else if (finElevation == 3) {
    finTotal += CHARGE_FOR_TWO_STORIES;
  } else if (finElevation == 4) {
    finTotal += CHARGE_FOR_THREE_OR_MORE_STORIES;
  }
}

function calculateWidth() {
  if (finWidth == 0) {
    alert("Entry field missing. Please put in a value for width");
  } else if (finWidth == 1) {
    finTotal += CHARGE_FOR_0_TO_30;
  } else if (finWidth == 2) {
    finTotal += CHARGE_FOR_30_TO_40;
  } else if (finWidth == 3) {
    finTotal += CHARGE_FOR_GREATER_THAN_40;
  }
}

function calculateDistance() {
  if (finDistance == 0) {
    alert("Entry field missing. Please put in a value for distance");
  } else if (finDistance == 1) {
    finTotal += CHARGE_FOR_LESS_THAN_15;
  } else if (finDistance == 2) {
    finTotal += CHARGE_FOR_15_TO_30;
  } else if (finDistance == 3) {
    finTotal += CHARGE_FOR_30_TO_50;
  } else if (finDistance == 4) {
    finTotal += CHARGE_FOR_MORE_THAN_50;
  }
}

function masterCalculate() {
  calculateElevation();
  calculateLocation();
  calculateWidth();
  document.getElementById("finalTotal").textContent = finTotal;
  return false;
}
