define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.modelActive = function(event){
	};

	Model.prototype.content1Active = function(event){
		var allBtn = $(this.getElementByXid("allBtn"));
		$(allBtn).css({
			"color": "#757575",
			"background-color":"#5D92E2"
		});
	};

	Model.prototype.content2Active = function(event){
	var SecondBtn = $(this.getElementByXid("SecondBtn"));
		$(SecondBtn).css({
			"color": "#757575",
			"background-color":"#5D92E2"
		});
	};

	Model.prototype.content3Active = function(event){
		var ThirdBtn = $(this.getElementByXid("ThirdBtn"));
		$(ThirdBtn).css({
			"color": "#757575",
			"background-color":"#5D92E2"
		});
	};


	Model.prototype.content1Inactive = function(event){
		var allBtn = $(this.getElementByXid("allBtn"));
		$(allBtn).css({
			"color": "#FFFFFF",
			"background-color":"#282D40"
		});
	};


	Model.prototype.content2Inactive = function(event){
	var SecondBtn = $(this.getElementByXid("SecondBtn"));
		$(SecondBtn).css({
			"color": "#FFFFFF",
			"background-color":"#282D40"
		});
	};


	Model.prototype.content3Inactive = function(event){
		var ThirdBtn = $(this.getElementByXid("ThirdBtn"));
		$(ThirdBtn).css({
			"color": "#FFFFFF",
			"background-color":"#282D40"
		});
	};


	return Model;
});
