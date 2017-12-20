define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
  var Message = require("$UI/system/components/justep/common/common");

	var Model = function(){
		this.callParent();
    this.flag = Message.flag;
	};

	Model.prototype.setupButtonClick = function(event){
		var from = this.comp('fromSelect').val();
		var to = this.comp('toSelect').val();
		if(to == "流动金额"){
			Message.message("aler", "无法转入至流动金额");
			return;
		}
		else if(from == "流动金额" && to != "钱包金额"){
			Message.message("aler", "流动金额只能转入钱包金额");
		}
		else if(from != "钱包金额" && to != "钱包金额"){
			Message.message("aler", "只能实现钱包金额的充值体现");
		}
		else if(from == "流动金额" && to == "钱包金额"){
			return;
		}
		else if(from == "钱包金额"){
			return;
		}
		else if(to == "钱包金额"){
			return;
		}
	};

	return Model;
});
