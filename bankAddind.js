define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var bank = require('./js/bank');
	var base64 = require("$UI/system/lib/base/base64");
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
		else if (is_success == true) {
			this.button5Click(event);
			return;
		}
	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.closePage();
	};

	Model.prototype.windowDialog1Receive = function(event){
		if (event.data.data) {
			var token=localStorage.getItem("jwt_token");
			var ids = token.split(".");
			var id = JSON.parse(base64.decode(ids[1]));
			if (id&&event.data.email) {
				localStorage.setItem("thismyuserId", id.sub);
				localStorage.setItem("email", event.data.email);
			}
			this.comp("windowDialog1").close();
			this.button5Click(event);
		}
		else if(event.data.reset){
			this.comp("windowDialog1").close();
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword"});
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
