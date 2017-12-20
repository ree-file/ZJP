define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
  var Message = require("$UI/system/components/justep/common/common");
	var bank = require('./js/bank');

	var Model = function(){
		this.callParent();
    this.flag = Message.flag;
	};

	Model.prototype.modelActive = function(event){
	};

	Model.prototype.button5Click = function(event){
		var nameInput = this.getElementByXid("nameInput").value;
		var number = this.getElementByXid("cardidInput").value;
		var bankname = this.comp('bankSelect').val();
		var ifsuccess = bank.cardAdding(nameInput,number,bankname);
		if(!ifsuccess){
			Message.message("aler", "审核会在1~2个工作日得到答复");
		}
		else {
			Message.message("aler", "审核会在1~2个工作日得到答复");
		}
	};

	return Model;
});
