define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personaljs = require("./js/personal");
	var base64 = require("$UI/system/lib/base/base64");
	var lang;
	var type = 1;
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

	Model.prototype.changeClick = function(event){
		var button1 = $(this.getElementByXid("button1"));
		var button2 = $(this.getElementByXid("button2"));
		if ($(this.getElementByXid("span1")).html() == lang.transferMymoney[2]) {
			$(this.getElementByXid("span1")).html(lang.transferMymoney[3]);
			$(this.getElementByXid("span3")).html(lang.transferMymoney[2]);
			$(button1).css({
				"background-color":"#049FCC"
			});
			$(button2).css({
				"background-color":"#C71C22"
			});
			type = -type;
		}
		else if ($(this.getElementByXid("span1")).html() == lang.transferMymoney[3]) {
			$(this.getElementByXid("span1")).html(lang.transferMymoney[2]);
			$(this.getElementByXid("span3")).html(lang.transferMymoney[3]);
			$(button1).css({
				"background-color":"#C71C22"
			});
			$(button2).css({
				"background-color":"#049FCC"
			});
			type = -type;
		}
	};

	Model.prototype.setupButtonClick = function(event){
		var money = this.getElementByXid("moneyInput").value;
		var securityInput = this.getElementByXid("securityInput").value;
		if (type = 1) {
			var is_success1 = personaljs.transferMoney(money,"active-to-market",securityInput);
			if (is_success1 == undefined) {
				this.comp("windowDialog1").open();
				this.showprompt(lang.showprompt[0]);
				return;
			}
			else if (is_success1 == true) {
				this.setupButtonClick(event);
				return;
			}

		}
		else if (type = -1) {
			var is_success2 = personaljs.transferMoney(money,"market-to-active",securityInput);
			if (is_success2 == undefined) {
				this.comp("windowDialog1").open();
				this.showprompt(lang.showprompt[0]);
				return;
			}
			else if (is_success2 == true) {
				this.setupButtonClick(event);
				return;
			}
		}
		else {
			this.showprompt("转账失败，请检查网络情况");
		}
	};

	Model.prototype.modelLoad = function(event){
		this.comp("title").set({
			title:lang.transferMymoney[0]
		});
		$(this.getElementByXid("span2")).html(lang.transferMymoney[1]);
		$(this.getElementByXid("span1")).html(lang.transferMymoney[2]);
		$(this.getElementByXid("span3")).html(lang.transferMymoney[3]);
		$(this.getElementByXid("span11")).html(lang.transferMymoney[4]);
		$(this.getElementByXid("span5")).html(lang.transferMymoney[5]);
		$(this.getElementByXid("span12")).html(lang.transferMymoney[6]);
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

	return Model;
});
