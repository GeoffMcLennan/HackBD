/* Fetches JSON object via HTTP */
function fetchProduct() {
    var sku = $("input#skuNumber").val();

    var params = {
        // Request paramters
    };

    $.ajax({
        url: "https://api.builddirect.io/products/" + sku + "?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","d83e94bef8644cec98cd9b9662f534c8");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        var weightPerBox = data.data.sellUnitDetails.weight;
        getParams(weightPerBox);
    })
    .fail(function() {
        alert("error");
    });
}

/* Calculates all necessary parameters for rate calculation. */
function getParams(weightPerBox) {
    boxCount = $("input#boxCount").val();
    palletCount = $("input#palletCount").val();
    delArea = $("select#location").val();
    distance = parseInt($("input#distance").val());
    numStairs = $("input#numStairs").val();
    chokePoint = $("input#chokePoint").val();

    totalWeight = weightPerBox * boxCount;

    //$("p#skuOutput").append(totalWeight + ", " + numStairs + ", " + distance + ", "
    //    + palletCount + ", " + boxCount + ", " + unpack + ", " + delArea);
    calc();
}
