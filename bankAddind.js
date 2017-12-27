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
		var is_success = bank.cardAdding(nameInput,number,bankname);
		if (is_success == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt("请重新登录");
			return;
		}
	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.closePage();
	};

	Model.prototype.windowDialog1Receive = function(event){
		if (event.data.data) {
			this.comp("windowDialog1").close();
		}
	};

	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
			"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
		});
		$(".x-hint").find("button[class='close']").hide();
	};

	return Model;
});
