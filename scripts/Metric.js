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
			return this.priceRel[value][1];
		}
	}

	this.generateForm = function (id) {
		var contentBody = document.createElement("div");
		$(contentBody).attr({
			"id": "content" + id,
			"class": "content-body"
		});
		$("#content-carousel").append(contentBody);

		var contentImg = document.createElement("div");
		$(contentImg).attr("class", "content-img");
		$("#content" + id).append(contentImg);

		var bodyBox = document.createElement("div");
		$(bodyBox).attr("class", "body-box");
		$("#content" + id).append(bodyBox);

		var pic = document.createElement("img");
		$(pic).attr(
			{"id": "picture",
			"src": "../images/" + (id + 1) + ".png"
		});
		$('.content-img', '#content' + id).append(pic);

		var heading = document.createElement("h2");
		$(heading).attr("class", "body-title");
		$(heading).text(this.name);
		$('.body-box', '#content' + id).append(heading);

		var bodyText = document.createElement("p");
		$(bodyText).attr("class", "body-text");
		$(bodyText).text(this.desc);
		$('.body-box', '#content' + id).append(bodyText);

		$('.body-box', '#content' + id).append("<br>");

		var question = document.createElement("b");
		$(question).attr("class", "questions");
		$(question).text(this.quest);
		$('.body-box', '#content' + id).append(question);

		var selector = document.createElement("div");
		$(selector).attr("id", this.name + "-field");

		if(this.type === "range") {
			var list = document.createElement("select");
			$(list).attr("id", this.name + "list");
			$('.body-box', '#content' + id).append(list);

			for(var i = 0; i < (this.priceRel.length); i++){
				var opt = document.createElement("option");
				$(opt).attr("value", i);
				$(opt).text(priceRel[i][0]);
				$("#" + this.name + "list").append(opt);
			}

		} else if (this.type === "scalar") {
			var field = document.createElement("input");
			$(field).attr({
				"id": this.name + "Input",
				"type": "text"
			});
			$('.body-box', '#content' + id).append(field);
		}

		$('.body-box', '#content' + id).append("<br>");
		$('.body-box', '#content' + id).append("<br>");

	}
}
