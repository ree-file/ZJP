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
			personaljs.transferMoney(money,"active-to-market",securityInput);
		}
		else if(from == "市场金额" && to == "钱包金额"){
			personaljs.transferMoney(money,"market-to-active",securityInput);
		}
		else if(from == "钱包金额"){
			if (to == "其他银行") {
				personaljs.supplies(money,"get",cardnumber,otherbankInput);
			}
			else {
				personaljs.supplies(money,"get",cardnumber,to);
			}
		}
		else if(to == "钱包金额"){
			if (from == "其他银行") {
				personaljs.supplies(money,"save",cardnumber,otherbankInput);
			}
			else {
				personaljs.supplies(money,"save",cardnumber,from);
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

	return Model;
});
