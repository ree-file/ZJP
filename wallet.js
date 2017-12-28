define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personalMoney = require('./js/personal');
	var pwState = true;
	var moneymarket;
	var moneyactive;
	var moneylimit;
	var base64 = require("$UI/system/lib/base/base64");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.showhidBtnClick = function(event){
		var moneyspan1 = $(this.getElementByXid("activeMSpan"));
		var moneyspan2 = $(this.getElementByXid("marketMSpan"));
		var moneyspan3 = $(this.getElementByXid("limitMSpan"));
		var moneyspan4 = $(this.getElementByXid("allMSpan"));
		if (!pwState) {
			moneyspan1.text("******");
			moneyspan2.text("******");
			moneyspan3.text("******");
			moneyspan4.text("******");
      pwState = true;
    } else {
      moneyspan1.text(moneyactive);//moneyactive
      moneyspan2.text(moneymarket);//moneymarket
      moneyspan3.text(moneylimit);//money_limit
      moneyspan4.text((Number(moneyactive)+Number(moneymarket)+Number(moneylimit)).toFixed(2));//money_market+money_active+money_limit
      pwState = false;
    }
	};

	Model.prototype.modelLoad = function(event){
		var moneyspan1 = $(this.getElementByXid("activeMSpan"));
		var moneyspan2 = $(this.getElementByXid("marketMSpan"));
		var moneyspan3 = $(this.getElementByXid("limitMSpan"));
		var moneyspan4 = $(this.getElementByXid("allMSpan"));
		var moneyall = personalMoney.money();
		if (moneyall == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt("请重新登录");
			return;
		}
		else if (moneyall == true) {
			this.modelLoad(event);
			return;
		}
		moneyspan1.text(moneyall.money_active);
		moneyspan2.text(moneyall.money_market);
		moneyspan3.text(moneyall.money_limit);
		moneyactive = moneyall.money_active;
		moneymarket = moneyall.money_market;
		moneylimit = moneyall.money_limit;
		moneyspan4.text((Number(moneyall.money_market)+Number(moneyall.money_active)+Number(moneyall.money_limit)).toFixed(2));
	};

	Model.prototype.row14Click = function(event){
			justep.Shell.showPage("transfermoney");
	};

	Model.prototype.resetSecurityClick = function(event){
			justep.Shell.showPage("ZJP_resetPassword", {action:"resetsecondPassword"});
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
	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};

	Model.prototype.modelActive = function(event){
		this.modelLoad(event);
	};

	return Model;
});
