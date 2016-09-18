function load(arrayOfMetric) {
  var count = arrayOfMetric.length;
  
  for (var i = 0; i < arrayOfMetric.length; i++) {
    arrayOfMetric[i].generateForm(i + 2);
    console.log(arrayOfMetric[i].name);
  }
}