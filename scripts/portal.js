/* Form inputs for the metric types */
var linear = '<tr><td><input type="text" name="name"></td>' +
  '<td><input type="text" name="unit"></td>' +
  '<td><input type="text" name="coefficient"></td>' +
  '<td><input type="text" name="heading"></td>' +
  '<td><textarea name="description" rows="4" cols="30"></textarea></td>' +
  '<td><textarea name="description" rows="4" cols="30"></textarea></td></tr>';

var ranged = '<tr><td><input type="text" name="name"></td>' +
  '<td><input type="text" name="unit"></td>' +
  '<td>from<input type="text" name="range-lower" size="10"> to<input type="text" name="range-upper" size="10">' +
    '<br> from<input type="text" name="range-lower" size="10"> to<input type="text" name="range-upper" size="10">' +
    '<br> from<input type="text" name="range-lower" size="10"> to<input type="text" name="range-upper" size="10">' +
    '<br> from<input type="text" name="range-lower" size="10"> to<input type="text" name="range-upper" size="10"><br></td>' +
  '<td><input type="text" name="range-lower" size="10"><br>' +
    '<input type="text" name="range-lower" size="10"><br>' +
    '<input type="text" name="range-lower" size="10"><br>' +
    '<input type="text" name="range-lower" size="10"><br></td>' +
  '<td><input type="text" name="heading"></td>' +
  '<td><textarea name="description" rows="4" cols="30"></textarea></td>' +
  '<td><textarea name="description" rows="4" cols="30"></textarea></td></tr>';

$(function(){
    if (localStorage.getItem("metricSet") !== null) {
        metricSet = JSON.parse(localStorage["metricSet"]);
    }
    console.log(metricSet);

    $.each(metricSet, function(index, val) {
        $("table#scalar-table").append("<tr><td>" + val.name + "</td><td>" +
            val.priceRel + "</td><td>" + val.desc + "</td><td>" + val.quest + "</td></tr>"
        );
    });
});

function addMult() {
    var name = $("input#name").val();
    var unit = $("input#unit").val();
    var coefficient = $("input#coefficient").val();
    var heading = $("input#heading").val();
    var desc = $("textarea#description").val();
    var quest = $("textarea#question").val();

    var newMetric = new Metric(name, "scalar", coefficient, desc, quest);
    console.log(newMetric);
    if (localStorage.getItem("metricSet") !== null) {
        metricSet = JSON.parse(localStorage.getItem("metricSet"));
    }
    metricSet.push(newMetric);
    localStorage["metricSet"] = JSON.stringify(metricSet);
}
