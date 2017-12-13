define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Community = require('./js/community');
	var action ="";
	var worth = 1800;//后期用页面数据传递得到
	var my_money = 5000;//后期通过php的api接口获得
	var name = "一号产品";//后期通过页面数据传递获得
	var handleProduction = require('./js/handleProduction');
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button2Click = function(event){
		this.comp("popOver1").show();

		$(this.getElementByXid("p2")).text("此选项表明你需要升级到什么样的产品。（只能升到比当前产品等级高的产品）");
	};

	Model.prototype.button4Click = function(event){
		this.comp("popOver1").show();
		$(this.getElementByXid("p2")).text("此选项需要填入你已经购买的一个产品（或者叫巢）的名称，新建的产品（巢）会成为你的产品（巢）的下级");
	};

	Model.prototype.button5Click = function(event){
		this.comp("popOver1").show();
		
		$(this.getElementByXid("p2")).text("A社区：只有直线加速；B社区：有直线加速和社区加速（具体请看规则详情页）；C社区：有直线加速和社区加速（具体请看规则详情页）");
		
	};

	Model.prototype.button3Click = function(event){
		this.comp("popOver1").show();
		$(this.getElementByXid("p2")).text("填入一个产品（巢）的名称，可以获得直线加速");
		
	};

	Model.prototype.button1Click = function(event){
		this.comp("popOver1").show();
		$(this.getElementByXid("p2")).text("填入一个邮箱，若为本人则产品挂在本人名下，若为他人的则挂在他人名下，若邮箱未注册过，则会自动生成一个账号，然后挂在新账号名下");
	};
	
	Model.prototype.input4Blur = function(event){
		var benefit_name = this.comp("input4").val();
		var communitys =$(this.getElementByXid("community"));
		if ($.trim(benefit_name)) {
			//还要拿benefit_name去数据查看他社区开通了哪些
			Community.community_premission();
			communitys.css("height",0);
			communitys.removeClass("community_show");
			communitys.animate({height:42});
			
		}
		else{
			communitys.animate({height:0},function(){
				communitys.addClass("community_show");
			});
			
		}
	};
	function staticnum(){
		staticnum.num=++staticnum.num||1;
		return staticnum.num;
	}
	Model.prototype.button8Click = function(event){
		var article = $(this.getElementByXid("div2"));
		var height = article.height();
		if (staticnum()%2!=0) {
			article.css("height",0);
			article.removeClass("introduction-article");
			article.animate({height:height});
		}
		else{
			article.animate({height:0},function(){
				article.addClass("introduction-article");
				article.css("height",height);
			});
		}
		
		
	};
	//不同的action不同的操作
	Model.prototype.modelParamsReceive = function(event){
		action = "123";
		console.log(action);
		if (action=="upgrade") {
			$(this.getElementByXid("create_benefit")).addClass("common_show");
			this.comp("row4").addClass("common_show");
			this.comp("row5").addClass("common_show");
			$(this.getElementByXid("production_worth")).html(worth);
			$(this.getElementByXid("money")).html(my_money);
			$(this.getElementByXid("need_money")).html(0);
		}
	};
	//下拉框内容变动时做出的改变
	Model.prototype.check_money=function(production,object){
		if (worth>=production) {
				justep.Util.hint("不能选择比当前产品价值低或者一样的产品");
				object.val("");
			}
			else{
				if (production-worth<my_money) {
					$(this.getElementByXid("need_money")).html(production-worth);
				}
				else{
					justep.Util.hint("账户金额少于所需要的金额");
					object.val("");
				}
	
			}
	}
	Model.prototype.select1Change = function(event){
		switch (event.source.val()) {
		case "第一级产品600":
			this.check_money(600,event.source);
			break;
		case "第二级产品1800":
			this.check_money(1800,event.source);
			break;
		case "第三级产品6000":
			this.check_money(6000,event.source);
			break;
		case "第三级产品18000":
			this.check_money(18000,event.source);
			break;
		default:
			break;
		}
	};
	//重置
	Model.prototype.button7Click = function(event){
		this.comp("select1").val("");
		$(this.getElementByXid("need_money")).html(0);
		
	};
	//提交数据
	Model.prototype.button6Click = function(event){
		if (action=="upgrade") {
			var paymoney =$(this.getElementByXid("need_money")).html();
			var rank = this.comp("select1").val();
			handleProduction.upgrade_production(name,rank,paymoeny,action);
		}
	};

	return Model;
});