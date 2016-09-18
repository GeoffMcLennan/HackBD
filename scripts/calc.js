var whiteGloveBase = 150;

function calc() {
    var weightRange = [[0,50],[25,100],[50,150],[75,200],[1000,300]];

    //Add weight portion
    whiteGloveBase += addBasedOnRange(totalWeight, weightRange);
    console.log(whiteGloveBase);

    //Add distance portion
    whiteGloveBase += selectDistance[distance][1];
    console.log(whiteGloveBase);

    //Add delArea portion
    whiteGloveBase += selectArea[delArea][1];
    console.log(whiteGloveBase);

    //Add choke portion
    whiteGloveBase += selectChoke[chokePoint][1];

    console.log(whiteGloveBase);
    $("h1#estimate").empty();
    $("h1#estimate").append("$" + whiteGloveBase.toFixed(2));
    whiteGloveBase = 150;

}

function deliveryArea() {
    if (delArea.localeCompare("yard") == 0) {
        return 0;
    } else if(delArea.localeCompare("house") == 0) {
        return 100;
    } else {
        return 200;
    }
}

function checkUnpack() {
    if(unpack) {
        return 5 * boxCount;
    } else {
        return 0;
    }
}

function addBasedOnRange(totalParam, paramRange){
	var addedCost;
	for(var i = 0; totalParam >= paramRange[i][0]; i++) {
		addedCost = (paramRange[i][1]);
	}
	return addedCost;
}
