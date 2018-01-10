define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var nestParticulars = require('./js/marketparticulars');
	var nest_id;
	var seller_id;
	var base64 = require("$UI/system/lib/base/base64");
	var lang;
	if(localStorage.getItem("lang")=="en_us")
	{
		lang = require('./js/en_us');
	}
	else{
		lang = require('./js/zh_cn');
	}
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelParamsReceive = function(event){
		var orderIDSpan = $(this.getElementByXid("orderIDSpan"));
		var eggstotalspan = $(this.getElementByXid("eggstotalspan"));
		var eggsrestspan = $(this.getElementByXid("eggsrestspan"));
		var nestGrandchildrenLengthSpan = $(this.getElementByXid("nestGrandchildrenLengthSpan"));
		var sellerIDSpan = $(this.getElementByXid("sellerIDSpan"));
		var sellerEmailSpan = $(this.getElementByXid("sellerEmailSpan"));
		var priceSpan = $(this.getElementByXid("priceSpan"));
		var nestIDSpan = $(this.getElementByXid("nestIDSpan"));
		var nestNameSpan = $(this.getElementByXid("nestNameSpan"));
		var nestChildrenLengthSpan = $(this.getElementByXid("nestChildrenLengthSpan"));
		var nestGrandGrandchildrenLengthSpan = $(this.getElementByXid("nestGrandGrandchildrenLengthSpan"));
		nest_id = this.params.nest_id;
		seller_id = this.params.seller_id;
		// orderIDSpan.text(this.params.order_id);//订单id
		sellerIDSpan.text(seller_id);//卖家id
		sellerEmailSpan.text(this.params.email);//卖家邮箱
		priceSpan.text(this.params.worth);//价格
		var nestparticulars = nestParticulars.nests(nest_id);
		if (nestparticulars == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt(lang.showprompt[0]);
			return;
		}
		else if (nestparticulars == true) {
			this.modelParamsReceive(event);
			return;
		}
		nestIDSpan.text(nestparticulars.id);//巢id
		nestNameSpan.text(nestparticulars.name);//巢姓名
		nestChildrenLengthSpan.text(nestparticulars.analyse.depth1_count);//下一数
		nestGrandchildrenLengthSpan.text(nestparticulars.analyse.depth2_count);//下二数
		nestGrandGrandchildrenLengthSpan.text(nestparticulars.analyse.depth3_count);//下三数
		var contractsparticulars = nestParticulars.contracts(nest_id);
		if (contractsparticulars == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt(lang.showprompt[0]);
			return;
		}
		else if (contractsparticulars == true) {
			this.modelParamsReceive(event);
			return;
		}
		for (var i = 0; i < contractsparticulars.length; i++) {
			if (contractsparticulars[i].is_finished == 0 && contractsparticulars[i].nest_id == nest_id) {
				eggstotalspan.text(contractsparticulars[i].eggs);//总蛋数
				eggsrestspan.text(contractsparticulars[i].eggs-contractsparticulars[i].hatches);//剩余蛋数
			}
		}
	};

	Model.prototype.modelLoad = function(event){
		this.comp("titile").set({
			title:lang.particulars[0]
		});
		$(this.getElementByXid("span1")).html(lang.particulars[1]);
		$(this.getElementByXid("span5")).html(lang.particulars[3]);
		$(this.getElementByXid("span7")).html(lang.particulars[4]);
		$(this.getElementByXid("span9")).html(lang.particulars[5]);
		$(this.getElementByXid("span4")).html(lang.particulars[2]);
		$(this.getElementByXid("span12")).html(lang.particulars[7]);
		$(this.getElementByXid("span14")).html(lang.particulars[8]);
		$(this.getElementByXid("span20")).html(lang.particulars[9]);
		$(this.getElementByXid("span22")).html(lang.particulars[10]);
		// $(this.getElementByXid("span24")).html(lang.particulars[11]);
		$(this.getElementByXid("span16")).html(lang.particulars[12]);
		$(this.getElementByXid("span19")).html(lang.particulars[13]);
		$(this.getElementByXid("span6")).html(lang.particulars[14]);
		$(this.getElementByXid("span11")).html(lang.particulars[6]);
		this.modelParamsReceive(event);
		$(this.getElementByXid("content1")).css("display","block");
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
//			var token=localStorage.getItem("jwt_token");
//			var ids = token.split(".");
//			var id = JSON.parse(base64.decode(ids[1]));
			if (event.data.email) {
//				localStorage.setItem("thismyuserId", id.sub);
				localStorage.setItem("email", event.data.email);
			}
			this.comp("windowDialog1").close();
		}
		else if(event.data.reset){
			this.comp("windowDialog1").close();
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword",page:"main"});
		}
	};

	Model.prototype.modelActive = function(event){
		this.modelParamsReceive(event);
	};

	return Model;
});
