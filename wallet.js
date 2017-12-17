define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personalMoney = require('./js/personal');
	var pwState = true;

	var Model = function(){
		this.callParent();
	};

	Model.prototype.showhidBtnClick = function(event){
		var monetspan1 = $(this.getElementByXid("marketMSpan"));
		var monetspan2 = $(this.getElementByXid("activeMSpan"));
		var monetspan3 = $(this.getElementByXid("limitMSpan"));
		var monetspan4 = $(this.getElementByXid("allMSpan"));
		if (!pwState) {
			monetspan1.text("******");
			monetspan2.text("******");
			monetspan3.text("******");
			monetspan4.text("******");
      pwState = true;
    } else {
      monetspan1.text("12312.1");//money_market
      monetspan2.text("0.00");//money_active
      monetspan3.text("22.49");//money_limit
      monetspan4.text("22.49");//money_market+money_active+money_limit
      pwState = false;
    }
	};

	Model.prototype.modelLoad = function(event){
		personalMoney.money();
	};

	Model.prototype.row14Click = function(event){
		justep.Shell.showPage("recharge");
	};

	return Model;
});
