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
			title:lang.transferGetmoney[0]
		});

		$(this.getElementByXid("span2")).html(lang.transferGetmoney[1]);
		$(this.getElementByXid("span7")).html(lang.transferGetmoney[2]);
		$(this.getElementByXid("span3")).html(lang.transferGetmoney[3]);
		$(this.getElementByXid("otherbankName")).html(lang.transferGetmoney[4]);
		$(this.getElementByXid("span9")).html(lang.transferGetmoney[5]);
		$(this.getElementByXid("span11")).html(lang.transferGetmoney[6]);
		$(this.getElementByXid("span13")).html(lang.transferGetmoney[7]);
		$(this.getElementByXid("span12")).html(lang.transferGetmoney[8]);
		$(this.getElementByXid("span4")).html(lang.transferGetmoney[9]);
		$(this.getElementByXid("otherbankrow")).hide();
	};

	Model.prototype.setupButtonClick = function(event){
		var to = this.comp('toSelect').val();
		var cardnumber = this.getElementByXid("cardidInput").value;
		var money = this.getElementByXid("moneyInput").value;
		var otherbankInput = this.getElementByXid("otherbankInput").value;
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
	};

	Model.prototype.toSelectChange = function(event){
		var toSelect = this.comp('toSelect').val();
		if (toSelect == lang.transferGetmoney[11] ) {
			$(this.getElementByXid("otherbankrow")).show();
		}
		else {
			$(this.getElementByXid("otherbankrow")).hide();
		}
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

	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};

	return Model;
});
