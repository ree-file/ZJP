define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Message = require("$UI/system/components/justep/common/common");
	var personaljs = require("./js/personal");

	var Model = function(){
		this.callParent();
		this.flag = Message.flag;
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
		var user = personaljs.money();//支付密码的验证
		console.log(user);
		if(from == "市场金额"){
			if (to == "钱包金额") {

			}
			else {
				Message.message('aler','\"市场金额\"只能转入\"钱包\"');
				console.log('\"市场金额\"只能转入\"钱包\"');
			}
		}
		if (from == "钱包金额" && to =="市场金额") {

		}
		if (from != "钱包金额" && to !="钱包金额") {
			Message.message('aler','\"来源\"与\"去向\"有且只有一个\"钱包金额\"');
			console.log('\"来源\"与\"去向\"有且只有一个\"钱包金额\"');
		}
		if (from == "钱包金额" && to =="钱包金额") {
			Message.message('aler','\"来源\"与\"去向\"有且只有一个\"钱包金额\"');
			console.log('\"来源\"与\"去向\"有且只有一个\"钱包金额\"');
		}
		else if(from == "钱包金额"){
			if (to == "其他银行") {
				personaljs.activeToMarket("get",cardnumber,money,otherbankInput);
			}
			else {
				personaljs.activeToMarket("get",cardnumber,money,to);
			}
		}
		else if(to == "钱包金额"){
			if (from == "其他银行") {
				personaljs.activeToMarket("get",cardnumber,money,otherbankInput);
			}
			else {
				personaljs.activeToMarket("get",cardnumber,money,to);
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

	return Model;
});
