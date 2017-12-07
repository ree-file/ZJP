define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.input5Focus = function(event){
		$(this.getElementByXid("input5")).css("border-color","#5D92E2");
		$(this.getElementByXid("input5")).css("border-width","0px 0px 2px 0px");
		

	};

	Model.prototype.input5Blur = function(event){
	$(this.getElementByXid("input5")).css("border-color","#FFFFFF");
	$(this.getElementByXid("input5")).css("border-width","0px 0px 1px 0px");

	};

	Model.prototype.input6Focus = function(event){
		$(this.getElementByXid("input6")).css("border-color","#5D92E2");
		$(this.getElementByXid("input6")).css("border-width","0px 0px 2px 0px");

	};

	Model.prototype.input6Blur = function(event){
		$(this.getElementByXid("input6")).css("border-color","#FFFFFF");
		$(this.getElementByXid("input6")).css("border-width","0px 0px 1px 0px");
	};

	Model.prototype.password1Focus = function(event){
		$(this.getElementByXid("password1")).css("border-color","#5D92E2");
		$(this.getElementByXid("password1")).css("border-width","0px 0px 2px 0px");
	};

	Model.prototype.password1Blur = function(event){
		$(this.getElementByXid("password1")).css("border-color","#FFFFFF");
		$(this.getElementByXid("password1")).css("border-width","0px 0px 1px 0px");
	};

	Model.prototype.button3Click = function(event){
		justep.Shell.showPage("mailLogin");

	};

	return Model;
});