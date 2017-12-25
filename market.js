define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var getorders = require('./js/market');
	var nest = require('./js/nests');
	var sell_nestId;//用于判断产品是否存在
	var complex_page=1;
	var filter_page=1;
	var datastatus=0;
	var Model = function(){
		this.callParent();
	};
//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};
	Model.prototype.modelLoad = function(event){
		
	};
	//"X"按钮
	Model.prototype.button4Click = function(event){
		$(this.getElementByXid("popOver1")).hide();
	};
	//确认支付按钮
	Model.prototype.paybuttonClick = function(event){
		var market = this.comp("marketdata");
		var orderId = market.val("id");
		var password = $.trim($(this.getElementByXid("passwordInput")).val());
		if (password) {
			var is_success = getorders.buy(orderId,password);
			if (is_success) {
				this.showprompt("购买成功");
				market.remove();
				this.comp("transactionrecord").newData({
					"defaultValues":[{
						productioncode:market.val("name"),
						transactionmoney:market.val("worth"),
						date:new Date(),
						status:"Bought"
					}]
				});
				debugger;
				$(this.getElementByXid("passwordInput")).val("");
				this.comp("popOver1").hide();
			}
			else{
				this.showprompt("购买失败");
			}
		}
		else{
			this.showprompt("安全密码不能为空");
		}
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
		var min = $.trim(this.getElementByXid("minInput").value);
		var max = $.trim(this.getElementByXid("maxInput").value);
		if (min&&max) {
			if (max!=0) {
				datastatus = 1;
			}
			this.comp("marketdata").refreshData();
		}
		else{
			this.showprompt("价格区间不能为空");
		}
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
		$(this.getElementByXid("minInput")).val(0);
		$(this.getElementByXid("maxInput")).val(0);
		datastatus =0;
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
	//判断产品是否属于当前用户
	Model.prototype.belongtouser=function(simpleinfo,name){
		for (var int = 0; int < simpleinfo.length; int++) {
			if (simpleinfo[int].name==name) {
				sell_nestId = simpleinfo[int].id;
				return true;
			}
		}
		return false;
	}
//交易记录加载/刷新--许鑫君
	Model.prototype.transactionrecordCustomRefresh = function(event){
		if (this.params.name) {
			this.comp("input1").val(this.params.name);
		}
		event.source.clear();
		var record = getorders.getTransactionRecord();
		if (record.length==0) {
			this.showprompt("无交易记录");
		}else{
			event.source.loadData(record);
		}
	};
//校验产品id是否属于当前用户--许鑫君
	Model.prototype.input1Blur = function(event){
		var name = $.trim(this.comp("input1").val());
		if (name) {
			var simpleinfo=nest.nestsimpleinfo();

			if (!this.belongtouser(simpleinfo, name)) {
				this.showprompt("产品不存在");
			}
		}
		else{
			this.showprompt("产品名称不能为空");
		}


	};
//将孵化器挂在交易榜上--许鑫君
	Model.prototype.button2Click = function(event){

		if (!sell_nestId) {
			this.showprompt("产品编号错误");
		}
		else{
			this.comp("secondPassword").show();
		}

	};
//若点击销售中的产品提示是否下架--许鑫君
	Model.prototype.li3Click = function(event){
		var row = event.bindingContext.$object;
		if(row.val('status')=="Selling"){
			this.comp("chooseSoleStatus").show();
		}

	};
//点击后把销售中的商品下架--许鑫君
	Model.prototype.button3Click = function(event){
		var id=this.comp("transactionrecord").val("id");
		var is_success = getorders.notSold(id);
		if (is_success) {
			this.showprompt("下架成功");
			this.comp("chooseSoleStatus").hide();
			$(this.getElementByXid("password1")).val("");
			this.comp("price").setValue("price", 0);
			this.comp("input1").val("");
			this.comp("transactionrecord").refreshData();
		}else{
			this.showprompt("下架失败请重新提交请求");
			this.comp("chooseSoleStatus").hide();
		}
	};
//点击后hide提示窗口--许鑫君
	Model.prototype.button6Click = function(event){
		this.comp("chooseSoleStatus").hide();
	};

	Model.prototype.button9Click = function(event){


	};
	Model.prototype.sell=function(price){

			var secondPassword = $.trim($(this.getElementByXid("password1")).val());
			if (secondPassword) {
				var is_success = getorders.sellProduction(sell_nestId,price,secondPassword);
				if (is_success) {
					this.showprompt("出售成功");
					this.comp("secondPassword").hide();
					this.comp("transactionrecord").refreshData();
					$(this.getElementByXid("password1")).val("");
					this.comp("price").setValue("price", 0);
					this.comp("input1").val("");
					}
					else{
					this.showprompt("出售失败");
					}
			}else{
				this.showprompt("二级密码不能为空");
			}


	};
	Model.prototype.button7Click = function(event){
		var price = this.comp("price").val("price");
		if(price==0){
			if (confirm("确定售价为0吗")) {
			this.sell(price);
			}
		}
		else{
			this.sell(price);
		}
	};

	Model.prototype.marketdataCustomRefresh = function(event){
		if(complex_page==1&&datastatus==0){
			event.source.clear();
			var records = getorders.getorders(complex_page);
			event.source.loadData(records);
		}
		else if(datastatus==0&&complex_page!=1){
			
		}
		if (filter_page==1&&datastatus==1) {
			event.source.clear();
			var records = getorders.filterOrders(filter_page,parseFloat(this.comp("minInput").val()),parseFloat(this.comp("maxInput").val()));
			event.source.loadData(records);
		}
		else if(datastatus==1&&filter_page!=1){
			
		}
		
	};

	Model.prototype.modelModelConstructDone = function(event){
	};

	Model.prototype.minInputBlur = function(event){
		var min = $.trim(this.comp("minInput").val());
		var max = $.trim(this.comp("maxInput").val());
		if (max) {
			if (parseFloat(min)>parseFloat(max)) {
				this.showprompt("价格区间错误");
			}
		}
	};

	Model.prototype.maxInputBlur = function(event){
		var min = $.trim(this.comp("minInput").val());
		var max = $.trim(this.comp("maxInput").val());
		if (min) {
			if (parseFloat(min)>parseFloat(max)) {
				this.showprompt("价格区间错误");
			}
		}
	};
//购买按钮
	Model.prototype.button1Click = function(event){
		$(this.getElementByXid("popOver1")).show();
		var row = event.bindingContext.$object;
		this.comp("marketdata").to(row);
		$(this.getElementByXid("moneynumberSpan")).html(this.comp("marketdata").val("worth"));
	};

	Model.prototype.li1Click = function(event){
		var row = event.bindingContext.$object;
		var type = row.val("type");
		var remaining = row.val("remainingeggs");
		var id = row.val("id");
		justep.Shell.showPage(require.toUrl("./particulars"),{type:type,remaing:remiang,id:id});
	};

	return Model;
});
