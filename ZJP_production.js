define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Community = require('./js/nests');
	var action ="";
	var worth = 1800;//后期用页面数据传递得到
	var my_money = 5000;//后期通过php的api接口获得
	var name = "chenggong";//后期通过页面数据传递获得
	var contract_id = 1;//后期通过页面数据传递获得
	var limit_money =1000;
	var handleProduction = require('./js/handleProduction');
	var users = require('./js/users');
	var Model = function(){
		this.callParent();
	};
//提示
	Model.prototype.button2Click = function(event){
		this.comp("popOver1").show();

		$(this.getElementByXid("p2")).text("此选项表明你升级后猫窝的价值");

				$(this.getElementByXid("p2")).text("此选项表明你升级后猫窝的价值");

	};
//提示
	Model.prototype.button4Click = function(event){
		this.comp("popOver1").show();
		$(this.getElementByXid("p2")).text("此选项将决定此猫窝的上级");
	};
//提示
	Model.prototype.button5Click = function(event){
		this.comp("popOver1").show();
		
		$(this.getElementByXid("p2")).text("A社区：直接加速成长；B社区：直接加速和社区加速【每日最多加速现猫窝投资额的30%】；C社区：直线加速和社区加速【每日最多加速此猫窝累计投资额的30%】");
		
	};
//提示
	Model.prototype.button3Click = function(event){
		this.comp("popOver1").show();
		$(this.getElementByXid("p2")).text("填入一个猫窝的编码，该编码的猫窝将会获得直线加速");
		
	};
//提示
	Model.prototype.button1Click = function(event){
		this.comp("popOver1").show();
		$(this.getElementByXid("p2")).text("此选项将决定猫窝的归属交易账户，若是一个新邮箱，将会建立一个新的交易账户");
	};
//填写收益人时触发各种判断	
	Model.prototype.input4Blur = function(event){
		var benefit_name = this.comp("input4").val();
		var communitys =$(this.getElementByXid("community"));
		if ($.trim(benefit_name)) {
			//还要拿benefit_name去数据查看他社区开通了哪些
			var premission=Community.community_premission(benefit_name);
			console.log(premission);
			switch (premission) {
			case 1:
				this.comp("radio1").set({disabled:false});
				break;
			case 2:
				this.comp("radio1").set({disabled:false});
				this.comp("radio2").set({disabled:false});
			case 3:
				this.comp("radio1").set({disabled:false});
				this.comp("radio2").set({disabled:false});
				this.comp("radio3").set({disabled:false});
				break;
			default:
				justep.Util.hint("没有这个用户");
				this.comp("radio1").set({disabled:true,checked:false});
				this.comp("radio2").set({disabled:true,checked:false});
				this.comp("radio3").set({disabled:true,checked:false});
				break;
			}
			if (premission!=404) {
				communitys.css("height",0);
				communitys.removeClass("community_show");
				communitys.animate({height:42});
			}
			
			
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
		action = "upgrade";
		if (action=="upgrade") {
			my_money = users.getMymoney();
			$(this.getElementByXid("create_benefit")).addClass("common_show");
			this.comp("row4").addClass("common_show");
			this.comp("row5").addClass("common_show");
			$(this.getElementByXid("production_worth")).html(worth);
			$(this.getElementByXid("money")).html(my_money['active']);
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
				if (parseFloat(production-worth)<(parseFloat(my_money['active'])+parseFloat(my_money['limit']))) {
					
					$(this.getElementByXid("need_money")).html((production-worth).toFixed(2));
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
			limit_money = 1000;
			active_money = 3200;
			console.log(paymoney);
			var rank = this.comp("select1").val();
			handleProduction.upgrade_production(contract_id,rank,limit_money,active_money,action);
		}
	};

	return Model;
});