define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personaljs = require("./js/personal");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
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
			this.showprompt('\"来源\"与\"去向\"有且只有一个\"钱包金额\"');
		}
		else if(from != "钱包金额" && to != "钱包金额") {
			this.showprompt('\"来源\"与\"去向\"有且只有一个\"钱包金额\"');
		}
		else if(from == "钱包金额" && to == "市场金额"){
			var is_success1 = personaljs.transferMoney(money,"active-to-market",securityInput);
			if (is_success1 == undefined) {
				this.comp("windowDialog1").open();
				this.showprompt("请重新登录");
				return;
			}
		}
		else if(from == "市场金额" && to == "钱包金额"){
			var is_success2 = personaljs.transferMoney(money,"market-to-active",securityInput);
			if (is_success2 == undefined) {
				this.comp("windowDialog1").open();
				this.showprompt("请重新登录");
				return;
			}
		}
		else if(from == "钱包金额"){
			if (to == "其他银行") {
				var is_success3 = personaljs.supplies(money,"get",cardnumber,otherbankInput);
				if (is_success3 == undefined) {
					this.comp("windowDialog1").open();
					this.showprompt("请重新登录");
					return;
				}
			}
			else {
				var is_success4 = personaljs.supplies(money,"get",cardnumber,to);
				if (is_success4 == undefined) {
					this.comp("windowDialog1").open();
					this.showprompt("请重新登录");
					return;
				}
			}
		}
		else if(to == "钱包金额"){
			if (from == "其他银行") {
				var is_success5 = personaljs.supplies(money,"save",cardnumber,otherbankInput);
				if (is_success5 == undefined) {
					this.comp("windowDialog1").open();
					this.showprompt("请重新登录");
					return;
				}
			}
			else {
				var is_success6 = personaljs.supplies(money,"save",cardnumber,from);
				if (is_success6 == undefined) {
					this.comp("windowDialog1").open();
					this.showprompt("请重新登录");
					return;
				}
			}
		}
	};

	Model.prototype.fromSelectChange = function(event){
		var fromSelect = this.comp('fromSelect').val();
		var toSelect = this.comp('toSelect').val();
		if (fromSelect == "其他银行" ) {
			$(this.getElementByXid("otherbankrow")).show();
		}
		else if(toSelect != "其他银行"){
			$(this.getElementByXid("otherbankrow")).hide();
		}
	};
	//↑↓银行选择与其他银行的选取
	Model.prototype.toSelectChange = function(event){
		var fromSelect = this.comp('fromSelect').val();
		var toSelect = this.comp('toSelect').val();
		if (toSelect == "其他银行" ) {
			$(this.getElementByXid("otherbankrow")).show();
		}
		else if(fromSelect != "其他银行"){
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
			this.comp("windowDialog1").close();
		}
	};

	return Model;
});
