
/*two arguments: array and id of select field */
function buildSelect(arr, id) {

  for(var i = 0; i < arr.length();i++){
    $(id).append("<option value=\"" + i + "\">" + arr[i][0] + ""</option>"");
    i++;
  }
}

function buildInput(){

}
/*
Factor title
Description
Question/prompt
type of question(numerical vs range)
  thus select vs text box
if range
  array of ranges/values (as key value pairs)
*/
