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

	Model.prototype.modelLoad = function(event){
		this.comp("title").set({
			title:lang.transfermoney[0]
		});
		
		$(this.getElementByXid("span2")).html(lang.transfermoney[1]);
		$(this.getElementByXid("span7")).html(lang.transfermoney[2]);
		$(this.getElementByXid("span3")).html(lang.transfermoney[3]);
		$(this.getElementByXid("otherbankName")).html(lang.transfermoney[4]);
		$(this.getElementByXid("span9")).html(lang.transfermoney[5]);
		$(this.getElementByXid("span11")).html(lang.transfermoney[6]);
		$(this.getElementByXid("span13")).html(lang.transfermoney[7]);
		$(this.getElementByXid("span12")).html(lang.transfermoney[8]);
		$(this.getElementByXid("otherbankrow")).hide();
	};

	Model.prototype.setupButtonClick = function(event){
		var from = this.comp('fromSelect').val();
		var to = this.comp('toSelect').val();
		var cardnumber = this.getElementByXid("cardidInput").value;
		var money = this.getElementByXid("moneyInput").value;
		var otherbankInput = this.getElementByXid("otherbankInput").value;
		var securityInput = this.getElementByXid("securityInput").value;
		if (from == to) {
			this.showprompt(lang.showprompt[25]);
		}
		else if(from != lang.transfermoney[9]&& to !=lang.transfermoney[9]) {
			this.showprompt(lang.showprompt[25]);
		}
		else if(from == lang.transfermoney[9] && to == lang.transfermoney[10]){
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
		else if(from ==lang.transfermoney[10] && to ==lang.transfermoney[9]){
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
		else if(from == lang.transfermoney[9]){
			if (to == lang.transfermoney[11]) {
				var is_success3 = personaljs.supplies(money,"get",cardnumber,otherbankInput);
				if (is_success3 == undefined) {
					this.comp("windowDialog1").open();
					this.showprompt(lang.showprompt[0]);
					return;
				}
				else if (is_success3 == true) {
					this.setupButtonClick(event);
					return;
				}
			}
			else {
				var is_success4 = personaljs.supplies(money,"get",cardnumber,to);
				if (is_success4 == undefined) {
					this.comp("windowDialog1").open();
					this.showprompt(lang.showprompt[0]);
					return;
				}
				else if (is_success4 == true) {
					this.setupButtonClick(event);
					return;
				}
			}
		}
		else if(to == lang.transfermoney[9]){
			if (from == lang.transfermoney[11]) {
				var is_success5 = personaljs.supplies(money,"save",cardnumber,otherbankInput);
				if (is_success5 == undefined) {
					this.comp("windowDialog1").open();
					this.showprompt(lang.showprompt[0]);
					return;
				}
				else if (is_success5 == true) {
					this.setupButtonClick(event);
					return;
				}
			}
			else {
				var is_success6 = personaljs.supplies(money,"save",cardnumber,from);
				if (is_success6 == undefined) {
					this.comp("windowDialog1").open();
					this.showprompt(lang.showprompt[0]);
					return;
				}
				else if (is_success6 == true) {
					this.setupButtonClick(event);
					return;
				}
			}
		}
	};

	Model.prototype.fromSelectChange = function(event){
		var fromSelect = this.comp('fromSelect').val();
		var toSelect = this.comp('toSelect').val();
		if (fromSelect == lang.transfermoney[11] ) {
			$(this.getElementByXid("otherbankrow")).show();
		}
		else if(toSelect != lang.transfermoney[11]){
			$(this.getElementByXid("otherbankrow")).hide();
		}
	};
	//↑↓银行选择与其他银行的选取
	Model.prototype.toSelectChange = function(event){
		var fromSelect = this.comp('fromSelect').val();
		var toSelect = this.comp('toSelect').val();
		if (toSelect == lang.transfermoney[11] ) {
			$(this.getElementByXid("otherbankrow")).show();
		}
		else if(fromSelect != lang.transfermoney[11]){
			$(this.getElementByXid("otherbankrow")).hide();
		}
	};

	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
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
		}
		else if(event.data.reset){
			this.comp("windowDialog1").close();
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword"});
		}
	};

	return Model;
});
