define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var bank = require('./js/bank');

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelActive = function(event){
	};
	
	Model.prototype.button5Click = function(event){
		var nameInput = this.getElementByXid("nameInput").value;
		var number = this.getElementByXid("cardidInput").value;
		var bankname = this.comp('bankSelect').val();
		bank.cardAdding(nameInput,number,bankname);
		// console.log(nameInput);
		// console.log(number);
		// console.log(bankname);
	};

	return Model;
});
