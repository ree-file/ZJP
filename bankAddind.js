define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var bank = require('./js/bank');
	var base64 = require("$UI/system/lib/base/base64");
	var lang;
	if(localStorage.getItem("lang")=="en_us")
	{
		lang = require('./js/en_us');
	}
	else{
		lang = require('./js/zh_cn');
	}
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelActive = function(event){
		this.modelLoad(event);
	};

	Model.prototype.button5Click = function(event){
		var nameInput = this.getElementByXid("nameInput").value;
		var number = this.getElementByXid("cardidInput").value;
		var bankname = this.comp('bankSelect').val();
		var otherbankInput = this.getElementByXid("otherbankInput").value;
		if (bankname == lang.bankAddind[6]) {
			var is_success = bank.cardAdding(nameInput,number,otherbankInput);
		}
		else {
			var is_success = bank.cardAdding(nameInput,number,bankname);
		}
		if (is_success == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt(lang.showprompt[0]);
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
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword",page:"main"});
		}
	};

	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
			"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
		});
		$(".x-hint").find("button[class='close']").hide();
	};

	Model.prototype.modelLoad = function(event){
		$(this.getElementByXid("otherbankrow")).hide();
		this.comp("title").set({
			title:lang.bankAddind[0]
		});
		$(this.getElementByXid("span2")).html(lang.bankAddind[1]);
		$(this.getElementByXid("span1")).html(lang.bankAddind[2]);
		$(this.getElementByXid("span7")).html(lang.bankAddind[3]);
		$(this.getElementByXid("span9")).html(lang.bankAddind[4]);
		$(this.getElementByXid("span12")).html(lang.bankAddind[5]);
		$(this.getElementByXid("otherbankName")).html(lang.bankAddind[6]);
		var bankData = this.comp("bankData");
		for (var i = 0; i < 18; i++) {
			bankData.add({
				"name": lang.bank[i],
			});
		}
	};

	Model.prototype.bankSelectChange = function(event){
		var bankSelect = this.comp('bankSelect').val();
		if (bankSelect == lang.bankAddind[6] ) {
			$(this.getElementByXid("otherbankrow")).show();
		}
		else {
			$(this.getElementByXid("otherbankrow")).hide();
		}
	};

	return Model;
});
