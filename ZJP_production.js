define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var nest = require('./js/nests');
	var action ="";
	var worth = "1800（二级产品）";//后期用页面数据传递得到
	var name = "chenggong";//后期通过页面数据传递获得
	var contract_id = 1;//后期通过页面数据传递获得
	var current_rank ;
	var config_egg ;
	var handleProduction = require('./js/handleProduction');
	var users = require('./js/users');
	var config = require('./js/config');
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
			var premission=nest.community_premission(benefit_name);
			console.log(premission);
			switch (premission) {
			case 1:
				this.comp("radio1").set({disabled:false});
				break;
			case 2:
				this.comp("radio1").set({disabled:false});
				this.comp("radio2").set({disabled:false});
				break;
			case 3:
				this.comp("radio1").set({disabled:false});
				this.comp("radio2").set({disabled:false});
				this.comp("radio3").set({disabled:false});
				break;
			default:
				this.showprompt("没有这个用户");
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
		action = "invite";
		if (action=="upgrade") {
			config_egg = config.configegg();
			current_rank = config_egg.level_worth[1];
			var my_money = users.getMymoney();
			$(this.getElementByXid("production_worth")).html(worth);
			$(this.getElementByXid("money")).html(my_money['active']);
			$(this.getElementByXid("investment")).html(my_money['limit']);
			$(this.getElementByXid("need_money")).html(0);
			$(this.getElementByXid("create_benefit")).addClass("common_show");
			this.comp("row4").addClass("common_show");
			this.comp("row5").addClass("common_show");
			this.comp("titleBar1").title = "猫窝升级";
			
		}
		else if(action =="Re-investment"){
			config_egg = config.configegg();
			current_rank = 0;
			var my_money = users.getMymoney();
			$(this.getElementByXid("money")).html(my_money['active']);
			$(this.getElementByXid("investment")).html(my_money['limit']);
			$(this.getElementByXid("need_money")).html(0);
			$(this.getElementByXid("production_worth")).html(0);
			$(this.getElementByXid("create_benefit")).addClass("common_show");
			this.comp("row4").addClass("common_show");
			this.comp("row5").addClass("common_show");
			this.comp("titleBar1").set({
				title:"猫窝复投"
			});
			$(this.getElementByXid("h51")).text("关于复投");
		}
		else if(action == "create"){
			config_egg = config.configegg();
			current_rank = 0;
			var my_money = users.getMymoney();
			$(this.getElementByXid("money")).html(my_money['active']);
			$(this.getElementByXid("investment")).html(my_money['limit']);
			$(this.getElementByXid("upgrade-message")).addClass("common_show");
			this.comp("titleBar1").set({
				title:"猫窝创建"
			});
			$(this.getElementByXid("row4")).addClass("common_show");
			$(this.getElementByXid("row5")).addClass("common_show");
			$(this.getElementByXid("h51")).text("关于创建");
		}
		else if(action=="invite"){
			
		}
	};
	//下拉框内容变动时做出的改变
	Model.prototype.check_money=function(production,object){
		
		if (current_rank*config_egg.egg_val>=production) {
				this.showprompt("不能选择比当前产品低或者一样的产品");
				object.val("");
			}
			else{
				if ((parseFloat(production)-parseFloat(worth))<(parseFloat($(this.getElementByXid("money")).html())+parseFloat($(this.getElementByXid("investment")).html())))
				 {
					
					$(this.getElementByXid("need_money")).html((parseFloat(production)-parseFloat(current_rank*config_egg.egg_val)).toFixed(2));
				}
				else{
					this.showprompt("账户金额少于所需金额");
					object.val("");
				}
	
			}
	}
	Model.prototype.select1Change = function(event){
	console.log(event.source.val());
		switch (event.source.val()) {
		case "第一级产品":
			this.check_money(config_egg.egg_val*config_egg.level_worth[0],event.source);
			break;
		case "第二级产品":
			this.check_money(config_egg.egg_val*config_egg.level_worth[1],event.source);
			break;
		case "第三级产品":
			this.check_money(config_egg.egg_val*config_egg.level_worth[2],event.source);
			break;
		case "第四级产品":
			this.check_money(config_egg.egg_val*config_egg.level_worth[3],event.source);
			break;
		default:
			break;
		}
	};
	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{	
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};
	//输入二级密码后确认是否正确然后提交数据
	Model.prototype.button7Click = function(event){
		var secondPassword = $.trim($(this.getElementByXid("password1")).val());
		if (secondPassword) {
			var is_real = users.realsecondPassword(secondePassword);
			if (is_real) {
				//进行提交操作
			}
			else{
				this.showprompt("二级密码错误");
			}
		}else{
			this.showprompt("二级密码不能为空");
		}
		
	};
	//提交数据
	Model.prototype.button6Click = function(event){
	this.comp("secondPassword").show();
//		if (action=="upgrade") {
//			var paymoney =parseFloat($(this.getElementByXid("need_money")).html());
//			var active_money=parseFloat($(this.getElementByXid("money")).html());
//			var limit_money=parseFloat($(this.getElementByXid("investment")).html());
//			var rank = this.comp("select1").val();
//			var eggs =0;
//			switch (rank) {
//					case "第一级产品":
//						eggs = config_egg.level_worth[0]-current_rank;
//					break;
//					case "第二级产品":
//						eggs = config_egg.level_worth[1]-current_rank;
//					break;
//					case "第三级产品":
//						eggs = config_egg.level_worth[2]-current_rank;
//					break;
//					case "第四级产品":
//						eggs = config_egg.level_worth[3]-current_rank;
//					break;
//				default:
//					break;
//			}
//			if (eggs !=0) {
//				var data =[];
//				data["contract_id"] =contract_id;
//				data['eggs']=eggs;
//				data['paymoney']=paymoney;
//				data['limit_money']=limit_money;
//				data['active_money']=active_money;
//				var val =handleProduction.upgrade_production(data);
//				if (val.code==200) {
//					$(this.getElementByXid("need_money")).html(0);
//					$(this.getElementByXid("money")).html(active_money-val.pay_active);
//					$(this.getElementByXid("investment")).html(limit_money-val.pay_limit);
//					this.comp("select1").val(rank);
//					$(this.getElementByXid("production_worth")).text((eggs+current_rank)*config_egg.egg_val+rank);
//					current_rank = (eggs+current_rank)*config_egg.egg_val;
//				}
//			}else{
//				this.showprompt("检查等级是否合适");
//			}
//			
//		}
//		else if(action=="Re-investment"){
//					var paymoney =parseFloat($(this.getElementByXid("need_money")).html());
//			var active_money=parseFloat($(this.getElementByXid("money")).html());
//			var limit_money=parseFloat($(this.getElementByXid("investment")).html());
//			var rank = this.comp("select1").val();
//			var eggs =0;
//			switch (rank) {
//					case "第一级产品":
//						eggs = config_egg.level_worth[0]-current_rank;
//					break;
//					case "第二级产品":
//						eggs = config_egg.level_worth[1]-current_rank;
//					break;
//					case "第三级产品":
//						eggs = config_egg.level_worth[2]-current_rank;
//					break;
//					case "第四级产品":
//						eggs = config_egg.level_worth[3]-current_rank;
//					break;
//				default:
//					break;
//			}
//			if (eggs !=0) {
//				var data =[];
//				data["nest_id"] =1;
//				data['eggs']=eggs;
//				data['paymoney']=paymoney;
//				data['limit_money']=limit_money;
//				data['active_money']=active_money;
//				var val =handleProduction.reinvestProduction(data);
//				if (val.code==200) {
//					$(this.getElementByXid("need_money")).html(0);
//					$(this.getElementByXid("money")).html(active_money-val.pay_active);
//					$(this.getElementByXid("investment")).html(limit_money-val.pay_limit);
//					this.comp("select1").val(rank);
//					$(this.getElementByXid("production_worth")).text((eggs+current_rank)*config_egg.egg_val+rank);
//					current_rank = (eggs+current_rank)*config_egg.egg_val;
//				}
//			}else{
//				this.showprompt("查看所选等级是否合适");
//			}
//			
//		}
	};
//检查邀请人是否存在
	Model.prototype.input2Blur = function(event){
		var name = this.comp("input2").val();
		if ($.trim(name)) {
			if(!nest.is_live(name)){
				this.showprompt("不存在巢");
			}
		}
		else{
			this.showprompt("请输入一个巢名");
		}
		
	};

	Model.prototype.input1Blur = function(event){
	var reg="^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$";
	var vdt = new RegExp(reg);
		var name = this.comp("input1").val();
		debugger;
		if ($.trim(name)) {
			if(vdt.test(name)){
				if(!users.userlive(name)){
				this.showprompt("将会创建一个用户");
			}
			}else{
				this.showprompt("邮箱不合法");
			}
			
		}
		else{
			this.showprompt("请输入邮箱地址");
		}
		
	};

	Model.prototype.button10Click = function(event){
		this.comp("select1").val("");
		$(this.getElementByXid("need_money")).html(0);
	};
//前往二级密码重置页面
	Model.prototype.button9Click = function(event){

	};

	return Model;
});