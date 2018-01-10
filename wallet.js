define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personalMoney = require('./js/personal');
	var pwState = true;
	var catcoins;
	var moneyactive;
	var moneylimit;
	var userid;
	var money_withdrawal;
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

	Model.prototype.showhidBtnClick = function(event){
		var moneyspan0 = $(this.getElementByXid("allMSpan"));
		var moneyspan1 = $(this.getElementByXid("activeMSpan"));
		var moneyspan2 = $(this.getElementByXid("coinsMSpan"));
		var moneyspan3 = $(this.getElementByXid("limitMSpan"));
		var moneyspan4 = $(this.getElementByXid("cangetSpan"));
		if (!pwState) {
			moneyspan1.text("******");
			moneyspan0.text("******");
			moneyspan2.text("******");
			moneyspan3.text("******");
			moneyspan4.text("******");
     		 pwState = true;
   		 } else {
			moneyspan0.text(Number(moneyactive) + Number(catcoins) + Number(moneylimit) + Number(money_withdrawal));//all
			moneyspan1.text(moneyactive);//moneyactive
			moneyspan2.text(catcoins);//catcoins
			moneyspan3.text(moneylimit);//money_limit
			moneyspan4.text(money_withdrawal);//money_limit
			pwState = false;
    	}
	};

	Model.prototype.modelLoad = function(event){
		this.comp("title").set({
			title:lang.wallet[0]
		});
		$(this.getElementByXid("span10")).html(lang.wallet[1]);
		$(this.getElementByXid("span7")).html(lang.wallet[2]);
		$(this.getElementByXid("span8")).html(lang.wallet[4]);
		$(this.getElementByXid("span6")).html(lang.wallet[14]);
		$(this.getElementByXid("span22")).html(lang.wallet[5]);
		$(this.getElementByXid("span13")).html(lang.wallet[6]);
		$(this.getElementByXid("span16")).html(lang.wallet[8]);
		$(this.getElementByXid("span18")).html(lang.wallet[15]);
		$(this.getElementByXid("span17")).html(lang.wallet[9]);
		$(this.getElementByXid("span19")).html(lang.wallet[10]);
		$(this.getElementByXid("span1")).html(lang.wallet[11]);
		$(this.getElementByXid("span9")).html(lang.wallet[12]);
		$(this.getElementByXid("span12")).html(lang.wallet[13]);
		$(this.getElementByXid("span3")).html(lang.wallet[16]);
		var moneyspan0 = $(this.getElementByXid("allMSpan"));
		var moneyspan1 = $(this.getElementByXid("activeMSpan"));
		var moneyspan2 = $(this.getElementByXid("coinsMSpan"));
		var moneyspan3 = $(this.getElementByXid("limitMSpan"));
		var moneyspan4 = $(this.getElementByXid("cangetSpan"));
		var moneyall = personalMoney.money();
		userid = moneyall.id;
		if (moneyall == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt(lang.showprompt[0]);
			return;
		}
		else if (moneyall == true) {
			this.modelLoad(event);
			return;
		}
		money_withdrawal = moneyall.money_withdrawal;
		moneyspan0.text(Number(moneyall.money_active) + Number(moneyall.coins) + Number(moneyall.money_limit) + Number(money_withdrawal));
		moneyspan1.text(moneyall.money_active);
		moneyspan2.text(moneyall.coins);
		moneyspan3.text(moneyall.money_limit);
		moneyspan4.text(money_withdrawal);
		moneyactive = moneyall.money_active;
		catcoins = moneyall.coins;
		moneylimit = moneyall.money_limit;
		$(this.getElementByXid("content2")).css("display","block");
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
//			var token=localStorage.getItem("jwt_token");
//			var ids = token.split(".");
//			var id = JSON.parse(base64.decode(ids[1]));
			if (event.data.email) {
//				localStorage.setItem("thismyuserId", id.sub);
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

	Model.prototype.modelActive = function(event){
		this.modelLoad(event);
	};

	Model.prototype.row15Click = function(event){
		justep.Shell.showPage("transferMymoney", {moneyactive:moneyactive,money_withdrawal:money_withdrawal});
	};

	Model.prototype.row1Click = function(event){
		justep.Shell.showPage("transferGetmoney", {money_withdrawal:money_withdrawal});
	};

	Model.prototype.row16Click = function(event){
		justep.Shell.showPage("transferRecord",{user_id:userid});
	};

	return Model;
});
