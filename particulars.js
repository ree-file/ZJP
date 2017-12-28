define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var nestParticulars = require('./js/marketparticulars');
	var orderid;
	var base64 = require("$UI/system/lib/base/base64");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelParamsReceive = function(event){
		var orderIDSpan = $(this.getElementByXid("orderIDSpan"));
		var eggstotalspan = $(this.getElementByXid("eggstotalspan"));
		var eggsrestspan = $(this.getElementByXid("eggsrestspan"));
		var eggscasespan = $(this.getElementByXid("eggscasespan"));
		var nestGrandchildrenLengthSpan = $(this.getElementByXid("nestGrandchildrenLengthSpan"));
		orderid = this.params.id;
		orderIDSpan.text(orderid);//订单id
		eggstotalspan.text(this.params.type);//总蛋数
		eggsrestspan.text(this.params.remaing);//剩余蛋数
		eggscasespan.text(this.params.freeseeggs);//蛋的孵化情况
		nestGrandchildrenLengthSpan.text(this.params.grandchildren);//孙子数
		var orderparticulars = nestParticulars.orders(orderid);
		if (orderparticulars == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt("请重新登录");
			return;
		}
		else if (orderparticulars == true) {
			this.modelParamsReceive(event);
			return;
		}
		var sellerIDSpan = $(this.getElementByXid("sellerIDSpan"));
		var sellerEmailSpan = $(this.getElementByXid("sellerEmailSpan"));
		var priceSpan = $(this.getElementByXid("priceSpan"));
		var nestIDSpan = $(this.getElementByXid("nestIDSpan"));
		var nestNameSpan = $(this.getElementByXid("nestNameSpan"));
		var nestChildrenLengthSpan = $(this.getElementByXid("nestChildrenLengthSpan"));
		var communitySpan = $(this.getElementByXid("communitySpan"));
		sellerIDSpan.text(orderparticulars.seller.id);//卖家id
		sellerEmailSpan.text(orderparticulars.seller.email);//卖家邮箱
		priceSpan.text(orderparticulars.price);//价格
		nestIDSpan.text(orderparticulars.nest.id);//巢id
		nestNameSpan.text(orderparticulars.nest.name);//巢姓名
		nestChildrenLengthSpan.text(orderparticulars.nest.children.length);//子数
		communitySpan.text(orderparticulars.nest.community);//子数
	};

	Model.prototype.modelLoad = function(event){
	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.closePage();
	};

	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
				"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
			});
			$(".x-hint").find("button[class='close']").hide();
	};

	Model.prototype.windowDialog1Receive = function(event){
		if (event.data.data) {
			var token=localStorage.getItem("jwt_token");
			var ids = token.split(".");
			var id = JSON.parse(base64.decode(ids[1]));
			if (id&&event.data.email) {
				localStorage.setItem("thismyuserId", id.sub);
				localStorage.setItem("email", event.data.email);
			}
			this.comp("windowDialog1").close();
		}
		else if(event.data.reset){
			this.comp("windowDialog1").close();
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword"});
		}
	};

	return Model;
});
