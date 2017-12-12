define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Community = require('./js/community');
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

	return Model;
});