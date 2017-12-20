define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personalMoney = require('./js/personal');
	var pwState = true;
	var moneymarket;
	var moneyactive;
	var moneylimit;

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
		moneyspan1.text(moneyall.money_active);
		moneyspan2.text(moneyall.money_market);
		moneyspan3.text(moneyall.money_limit);
		moneyactive = moneyall.money_active;
		moneymarket = moneyall.money_market;
		moneylimit = moneyall.money_limit;
		moneyspan4.text((Number(moneyall.money_market)+Number(moneyall.money_active)+Number(moneyall.money_limit)).toFixed(2));
	};

	Model.prototype.row14Click = function(event){
		justep.Shell.showPage("recharge");
	};

	return Model;
});
