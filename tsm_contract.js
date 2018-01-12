define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
		this.owner.send({check:true});
	};

	Model.prototype.button2Click = function(event){
		this.owner.send({check:false});
	};

	return Model;
});