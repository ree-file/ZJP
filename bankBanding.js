define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var banked = require('./js/bank');

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		var bank = banked.banked();
		console.log(bank);
	};

	return Model;
});