totalWeight
numStairs
distance
palletCount
boxCount
unpack
delArea



var basePrice;

function addBasedOnRange(totalParam, paramRange){
	var addedCost;
	for(var i = 0; totalParam >= paramRange[i][0]; i++) {
		addedCost = (paramRange[i][1]);
	}
	return addedCost;
}
	
function addFixed(totalParam, fixedCostPerUnit){
		return totalParam*fixedCostPerUnit;
}

function calc(totalWeight, numStairs, distance, palletCount, boxCount, unpack){
	var whiteGloveTotalPrice;
	var weightRange = [[0,50],[25,100],[50,150],[75,200],[1000,300]];
	var distanceRange = [[0,15],[30,25],[50,30],[70,40],[80,50]];
	var pricePerBox = 5;
	var i = 0;
	var weightPrice;
	var stairPrice;
	 
	 
	 
	var 
	
	
	whiteGloveTotalPrice += addBasedOnRange(totalWeight, weightRange);
	whiteGloveTotalPrice += addBasedOnRange(totalDistance, distanceRange);
	
	if(unpack){
		addFixed(boxCount, pricePerBox);
	}
	
	
	
	return whiteGloveTotalPrice;
}

