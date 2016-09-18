function Metric(name, type, priceRel, desc, quest) {
	this.name = name;
	this.type = type;
	this.priceRel = priceRel;
	this.desc = desc;
	this.quest = quest;
	
	this.cost = function(value) {
		if(this.type === "scalar"){
			return value * this.priceRel;
		} else if (this.type === "range") {
			return this.priceRel[value];
		}
	}
}

