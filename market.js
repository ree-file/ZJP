define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var getorders = require('./js/market');
	var is_live;//用于判断产品是否存在
	var Model = function(){
		this.callParent();
		this.type1=justep.Bind.observable('0');
		this.type2=justep.Bind.observable(Number.POSITIVE_INFINITY);
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
	//"X"按钮
	Model.prototype.button4Click = function(event){
		$(this.getElementByXid("popOver1")).hide();
	};

	//购买按钮
	var nest_id,user_id,money;
	Model.prototype.col3Click = function(event){
		$(this.getElementByXid("popOver1")).show();
	  nest_id = event.bindingContext.$object.val('nest_id');
	  user_id = event.bindingContext.$object.val('user_id');//获取数据库当前行的孵化器的信息。然后把该孵化器信息的交易提交
		console.log(user_id);
		money = event.bindingContext.$object.val('money');
	};
	//确认支付按钮
	Model.prototype.paybuttonClick = function(event){
		// console.log(nest_id);
		// console.log(user_id);
		// console.log(money);

	};
	//排序按钮
	Model.prototype.sortingBtnClick = function(event){
		if($(this.comp("sortingPopOver").$domNode).css("display")=="block"){
			this.comp("sortingPopOver").hide();
		} else {
			this.comp("sortingPopOver").show();
		}

		if($(this.comp("screeningPopOver").$domNode).css("display")=="block") {
			this.comp("screeningPopOver").hide();
		}
	};
	//筛选价值的确认按钮
	Model.prototype.betweenbuttonClick = function(event){
		var min = this.getElementByXid("minInput").value;
		var max = this.getElementByXid("maxInput").value;
		if (!min) {
			min = "0";
		}
		if (!max) {
			max = Number.POSITIVE_INFINITY;
		}
		this.type1.set(min);
		this.type2.set(max);
		this.comp("screeningPopOver").hide();
	};
	//排序下的按钮
	// 1、排序点击事件
	// 2、修改当前排序
	// 3、关闭排序窗口
	Model.prototype.sortingListClick = function(event){
		var data=this.comp("conditionData");
		data.setValue("fState","0",data.find(["fState"],["1"],true,true,true)[0]);
		var row = data.getCurrentRow();
		data.setValue("fState","1",row);
		this.comp("sortingBtn").set("label",data.getValue("fName",row));
		this.comp("sortingPopOver").hide();
		var rank = data.getValue("fName",row);
		console.log(rank);
	};
	//重置按钮
	Model.prototype.resetBtnClick = function(event){
		$(this.getElementByXid("minInput")).val("");
		$(this.getElementByXid("maxInput")).val("");
		var min = "0";
		var max = Number.POSITIVE_INFINITY;
		this.type1.set(min);
		this.type2.set(max);
	};
	//筛选按钮
	Model.prototype.screeningBtnClick = function(event){
		if($(this.comp("screeningPopOver").$domNode).css("display")=="block") {
			this.comp("screeningPopOver").hide();
		} else {
			this.comp("screeningPopOver").show();
		}
		if($(this.comp("sortingPopOver").$domNode).css("display")=="block") {
			this.comp("sortingPopOver").hide();
		}
	};

	Model.prototype.input3Keyup = function(event){
		console.log(this.getElementByXid("input3").value);
	};
//交易记录加载/刷新--许鑫君
	Model.prototype.transactionrecordCustomRefresh = function(event){
		var record = getorders.getTransactionRecord();
	};
//校验产品id是否属于当前用户--许鑫君
	Model.prototype.input1Blur = function(event){
		 is_live=getorders.checkProductionId();
		if (!is_live) {
			justep.Util.hint("产品不存在");
			$(this.getElementByXid("input1")).focus().select();
			
		}
		
	};
//将孵化器挂在交易榜上--许鑫君
	Model.prototype.button2Click = function(event){
		if (is_live!=undefined&&is_live) {

			var productionId = $.trim(this.comp("input1").val());
			if (!productionId) {
				justep.Util.hint("产品编号不能为空");
			}
			else{
				var is_success = getorders.sellProduction(procductionId);
				if (is_success) {
					justep.Util.hint("出售成功");
				}else{
					justep.Util.hint("出售失败，请重新提交");
				}
			}

		}
		
	};
//若点击销售中的产品提示是否下架--许鑫君
	Model.prototype.li3Click = function(event){
		var row = event.bindingContext.$object;
		if(row.val('status')=="出售中"){
			this.comp("chooseSoleStatus").show();
		}
		
	};
//点击后把销售中的商品下架--许鑫君
	Model.prototype.button3Click = function(event){
		var id=this.comp("transactionrecord").val("id");
		var is_success = getorders.notSold(id);
		if (is_success) {
			justep.Util.hint("下架成功");
		}else{
			justep.Util.hint("下架失败请重新提交请求");
			this.comp("chooseSoleStatus").hide();
		}
	};
//点击后hide提示窗口--许鑫君
	Model.prototype.button6Click = function(event){
		this.comp("chooseSoleStatus").hide();
	};

	return Model;
});
