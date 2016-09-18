/* Global Variables to save user inputs. */
$.getScript("Metric.js", function(){

   alert("Script loaded but not necessarily executed.");

});
var totalWeight;
var numStairs;
var distance;
var palletCount;
var boxCount;
var delArea;
var chokePoint;
var selectArea = [["yard", 0], ["house", 100], ["apartment", 200]];
var selectDistance = [["0 - 15ft", 0], ["15 - 30ft", 30], ["30 - 50ft", 70], ["50+ft", 120]];
var selectStairs = [["Flat Surface", 0], ["One Storey", 75], ["Two Stories", 150]];
var selectChoke = [["Less than 40", 100], ["Greater than 40", 0]];


var dist = new Metric("Distance", "range",[["Less than 15\'", 0], ["15 - 29\'", 30],["30 - 50\'", 70]["More than 50\'", 120]],
  "The walking distance to your drop-off destination from the curb", "What is the distance to your drop-point?");

var elevation = new Metric("Stairs", "range", [["no steps or stairs", 0], ["one story", 50],["two stories", 100],["Three or more stories", 200]],
    "No matter the journey, our White Glove service experts will get your goods where they need to go!", "What is the elevation of your destination?");
var chokePoint = new Metric();
dist.generateForm(2);
elevation.generateForm(3);