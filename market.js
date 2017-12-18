define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var getorders = require('./js/market');

	var Model = function(){
		this.callParent();
		this.type1=justep.Bind.observable('0');
		this.type2=justep.Bind.observable('999999999');
	};

	Model.prototype.modelLoad = function(event){
		var allorders = getorders.getorders();
		// console.log(allorders);
		var marketdata = this.comp("marketdata");
        // for (var i = 0; i <= getorders.length-1; i++) {
				// 	marketdata.add({
        //     "id": i+1,
        //     "username": getorders[i].username,
        //     "number": getorders[i].number,
        //     "bankname": getorders[i].bankname
        //   });
        // }
	};

	Model.prototype.button4Click = function(event){
		$(this.getElementByXid("popOver1")).hide();
	};
	var nest_id,user_id,money;
	Model.prototype.col3Click = function(event){
		$(this.getElementByXid("popOver1")).show();
	  nest_id = event.bindingContext.$object.val('nest_id');
	  user_id = event.bindingContext.$object.val('user_id');//获取数据库当前行的孵化器的信息。然后把该孵化器信息的交易提交
		money = event.bindingContext.$object.val('money');
	};

	Model.prototype.selectbtnClick = function(event){
		var min = this.getElementByXid("minInput").value;
		var max = this.getElementByXid("maxInput").value;
		this.type1.set(min);
		this.type2.set(max);
	};

	Model.prototype.paybuttonClick = function(event){
		console.log(nest_id);
		console.log(user_id);
		console.log(money);

	};

	return Model;
});
