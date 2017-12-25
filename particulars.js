define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var nestParticulars = require('./js/marketparticulars');

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		var orderparticulars = nestParticulars.orders("2");
		var orderIDSpan = $(this.getElementByXid("orderIDSpan"));
		var sellerIDSpan = $(this.getElementByXid("sellerIDSpan"));
		var sellerEmailSpan = $(this.getElementByXid("sellerEmailSpan"));
		var priceSpan = $(this.getElementByXid("priceSpan"));
		var nestIDSpan = $(this.getElementByXid("nestIDSpan"));
		var nestNameSpan = $(this.getElementByXid("nestNameSpan"));
		var eggstotalspan = $(this.getElementByXid("eggstotalspan"));
		var eggsrestspan = $(this.getElementByXid("eggsrestspan"));
		var eggscasespan = $(this.getElementByXid("eggscasespan"));
		var nestChildrenLengthSpan = $(this.getElementByXid("nestChildrenLengthSpan"));
		var nestGrandchildrenLengthSpan = $(this.getElementByXid("nestGrandchildrenLengthSpan"));
		orderIDSpan.text(orderparticulars.id);//订单id
		sellerIDSpan.text(orderparticulars.seller.id);//卖家id
		sellerEmailSpan.text(orderparticulars.seller.email);//卖家邮箱
		priceSpan.text(orderparticulars.price);//价格
		nestIDSpan.text(orderparticulars.nest.id);//巢id
		nestNameSpan.text(orderparticulars.nest.name);//巢姓名
		// eggstotalspan.text(orderparticulars);//总蛋数
		// eggsrestspan.text(orderparticulars);//剩余蛋数
		// eggscasespan.text(orderparticulars);//蛋的孵化情况
		nestChildrenLengthSpan.text(orderparticulars.nest.children.length);//子数
		// nestGrandchildrenLengthSpan.text(orderparticulars);//孙子数
	};

	return Model;
});
