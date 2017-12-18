define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
	};

	Model.prototype.col11Click = function(event){
		$(this.getElementByXid("popOver1")).show();
	};

	return Model;
});
