define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personaljs = require("./js/personal");
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

	Model.prototype.setupButtonClick = function(event){
		var user_id = this.getElementByXid("useridInput").value;
		var money = this.getElementByXid("moneyInput").value;
		var securityInput = this.getElementByXid("securityInput").value;
			var is_success = personaljs.transferMoney(money,user_id,securityInput);
			if (is_success == -1) {
				this.comp("windowDialog1").open();
				this.showprompt(lang.showprompt[0]);
				return;
			}
			else if (is_success == 1) {
				this.setupButtonClick(event);
				return;
			}
			else if (is_success == 2) {
				this.close();
			}
	};

	Model.prototype.modelLoad = function(event){
		this.comp("title").set({
			title:lang.transferMymoney[0]
		});
		$(this.getElementByXid("span2")).html(lang.transferMymoney[1]);
		$(this.getElementByXid("span6")).html(lang.transferMymoney[2]);
		$(this.getElementByXid("span8")).html(lang.transferMymoney[3]);
		$(this.getElementByXid("span9")).html(lang.transferMymoney[4]);
		$(this.getElementByXid("span10")).html(lang.transferMymoney[5]);
		$(this.getElementByXid("content1")).css("display","block");
	};

	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
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
		}
		else if(event.data.reset){
			this.comp("windowDialog1").close();
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword",page:"main"});
		}
	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.closePage();
	};

	return Model;
});
