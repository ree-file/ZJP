define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var nest = require('./js/nests');
	var handleProduction = require('./js/handleProduction');
	var users = require('./js/users');
	var config = require('./js/config');
	var base64 = require("$UI/system/lib/base/base64");
	var action ="";//用于判断页面需要执行什么操作
	var worth ;//后期用页面数据传递得到用于产品升级和复投的显示
	var nest_id;//后期通过页面数据传递获得用于产品升级和复投的传参数
	var contract_id;//后期通过页面数据传递获得用于产品复投的传参数
	var current_rank =-1 ;//通过页面传参数获得用于产品升级时做比较，另外一律为0；
	var config_egg ;//通过向服务端请求获得产品的配置信息
	var me;
	var Model = function(){
		this.callParent();
		me =this;
	};
//提示
	Model.prototype.button2Click = function(event){
		this.comp("popOver1").show();
		if (action =="upgrade") {
			$(this.getElementByXid("p2")).text("此选项表明你升级后猫窝的价值");
		}
		else if(action =="invite"){
			$(this.getElementByXid("p2")).text("此选项表明新建的邮箱用户获得的猫窝的价值");
			
		}
		else{
			$(this.getElementByXid("p2")).text("此选项表明你将获得的猫窝的价值");
		}
		
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
		$(this.getElementByXid("p2")).text("将会建立一个新的交易账户，猫窝的归属交易账户。");
	};
//填写收益人时触发各种判断	
	Model.prototype.input4Blur = function(event){
		var benefit_name = $.trim(this.comp("input4").val());
		var communitys =$(this.getElementByXid("community"));
		if (benefit_name) {
			//还要拿benefit_name去数据查看他社区开通了哪些
			var premission=nest.community_premission(benefit_name);
			if (premission==undefined) {
				this.comp("popOver1").hide();
				this.comp("windowDialog1").open();
				
				return;
			}
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
	Model.prototype.actionOption = function(action){
		//必要的信息获取和填充
		config_egg = config.configegg();
		this.comp("typedata").refreshData();
		var my_money = users.getUserMessage();
		$(this.getElementByXid("money")).html(my_money['active'].toFixed(2));
		$(this.getElementByXid("investment")).html(my_money['limit'].toFixed(2));
		if (this.params.name) {
			this.comp("input2").val(this.params.name);
			this.comp("input4").val(this.params.name);
		}
		
//		根据不同action执行相应操作
		if (action=="upgrade"||action=="Re-investment") {
			
			//不需要邀请人和邮箱地址和收益人（默认为之前的受益人）
			this.comp("row4").addClass("common_show");
			this.comp("row5").addClass("common_show");
			$(this.getElementByXid("create_benefit")).addClass("common_show");
			nest_id = this.params.nest_id;
			if (action=="upgrade") {
					this.comp("titleBar1").set({
						title:"猫窝升级"
					});
					nest_id = this.params.nest_id;
					current_rank = this.params.current_rank;
					worth = this.params.current_worth;
					$(this.getElementByXid("span21")).html("关于升级");
			}
			else{
					this.comp("titleBar1").set({
						title:"猫窝复投"
					});
					nest_id = this.params.nest_id;
					worth = 0;
					$(this.getElementByXid("span21")).html("关于升级");
				}
			$(this.getElementByXid("production_worth")).html(worth);
		}
		else if (action == "create") {
			
			this.comp("titleBar1").set({
				title:"猫窝创建"
			});
			$(this.getElementByXid("span21")).html("关于创建");
//			创建的时候不需要邮箱地址也不需要邀请人，更不需要产品信息
			$(this.getElementByXid("upgrade-message")).animate({height:0},function(){
				$(me.getElementByXid("upgrade-message")).addClass("common_show");
			});
			$(this.getElementByXid("row4")).animate({height:0},function(){
				$(me.getElementByXid("row4")).addClass("common_show");
			});
			$(this.getElementByXid("p1")).text("您将创建一个新的猫窝，该猫窝用有独立的家族结构和指定归属人");
		}
		else if(action=="invite")
		{
			$(this.getElementByXid("upgrade-message")).addClass("common_show");
			this.comp("titleBar1").set({
				title:"猫窝邀请"
			});
			$(this.getElementByXid("span21")).html("关于邀请");
		}
	};
	//不同的action不同的操作
	Model.prototype.modelParamsReceive = function(event){
		if(!this.params){
			this.showprompt("请重新在产品界面进入");
			return;
		}
		action = this.params.action;
//		action = "invite";
		this.actionOption(action);
	};
	//下拉框内容变动时做出的改变
	Model.prototype.check_money=function(production,object){
		var current_worth = current_rank==-1?0:Math.floor(config_egg.level_worth[current_rank]*config_egg.egg_val);
		if (current_worth>=production) {
				this.showprompt("不能选择比当前产品低或者一样的产品");
				object.val("");
			}
			else{
				if ((parseFloat(production)-parseFloat(current_worth))<(parseFloat($(this.getElementByXid("money")).html())+parseFloat($(this.getElementByXid("investment")).html())))
				 {
					
					$(this.getElementByXid("need_money")).html((parseFloat(production)-parseFloat(current_worth)).toFixed(2));
				}
				else{
					this.showprompt("账户金额少于所需金额");
					$(this.getElementByXid("need_money")).html(0);
					object.val("");
				}
	
			}
	}
	Model.prototype.select1Change = function(event){
		var id = event.source.val();
		this.comp("typedata").each(function(obj){
			if (obj.row.val("id")==id) {
				me.check_money(Math.floor(config_egg.egg_val*config_egg.level_worth[id-1]),event.source);
			}

		});
		
	};
	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{	
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};
	//获得每种金额需要支付的数量
	Model.prototype.paymoney=function(){
		var paylimit=0;var payactive=0;
		var active = parseFloat($(this.getElementByXid("money")).html());
		var limit = parseFloat($(this.getElementByXid("investment")).html());
		var need = parseFloat($(this.getElementByXid("need_money")).html());
		if (active+limit<need) {
			showprompt("金额不足");
		}else{
			if (limit<need) {
				 paylimit = limit;
				 payactive = need-limit;
			}
			else{
				 paylimit = limit-need;
				 payactive = 0;
			}
		}
		var money ={activepay:payactive,limitpay:paylimit};
		return money;
	};
	Model.prototype.createParams=function(){
		var paymoney = this.paymoney();
		var choose_rank = parseInt(this.comp("select1").val())-1;
		var current_worth = current_rank==-1?0:config_egg.level_worth[current_rank];
		var eggs = config_egg.level_worth[choose_rank]-current_worth;
		var email = $.trim(this.comp("input1").val());
		var radios = $("[name='community_radio']");
		var community = "";
		var is_hascommunity=0;
		for (var i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				switch (i) {
				case 1:
					community = "A";is_hascommunity=1
					break;
				case 3:
					community = "B";is_hascommunity=1
					break;
				case 5:
					community = "C";is_hascommunity=1
					break;
				default:
					
					break;
				}
			}
		}
		if (is_hascommunity==0&&(action=="create"||action=="invite")) {
			this.showprompt("请选择家族,点击上级猫窝的输入框在点击其他地方");return;
		}
		var invite_name = $.trim(this.comp("input2").val());
		var parent_name = $.trim(this.comp("input4").val());
		var secondPassword = $.trim($(this.getElementByXid("password1")).val());
		var params ={nest_id:nest_id,email:email,contract_id:contract_id,inviter_name:invite_name,parent_name:parent_name,security_code:secondPassword,pay_active:paymoney.activepay,pay_limit:paymoney.limitpay,eggs:eggs,community:community};
		return params;
	};
	Model.prototype.success=function(params){
		var active = parseFloat($(this.getElementByXid("money")).html());
		var limit = parseFloat($(this.getElementByXid("investment")).html());
		$(this.getElementByXid("money")).html(active-params.pay_active);
		$(this.getElementByXid("investment")).html(limit-params.pay_limit);
		this.comp("select1").val("");
		$(this.getElementByXid("need_money")).html(0);
		if (action =="upgrade"||action=="Re-investment") {
			worth = params.pay_active+params.pay_limit+worth;
			$(this.getElementByXid("production_worth")).html(worth);
		}
		this.comp("secondPassword").hide();
		justep.Shell.closePage();

		
	}
	//输入二级密码后确认是否正确然后提交数据
	Model.prototype.button7Click = function(event){
		var secondPassword = $.trim($(this.getElementByXid("password1")).val());
		if (secondPassword) {
				//进行提交操作
				if (action=="upgrade"||action=="Re-investment"){
					//获取参数
					var params = this.createParams();
					if (params) {
						var is_success = action=="upgrade"?nest.upgradenest(params):nest.reinvestment(params);
						if (is_success) {
							this.success(params);
							
							this.showprompt("提升成功");
						}
						else if(is_success==undefined){
							this.comp("secondPassword").hide();
							this.comp("windowDialog1").open();
							
						}
						else{
							this.showprompt("提升失败");
						}
					}
					
				}
				else if(action=="create"){
					var params = this.createParams();
					if (params) {
						var is_success = nest.createnest(params);
						if (is_success) {
							this.showprompt("创建成功");
							this.success(params);
						
						}
						else if(is_success==undefined){
							this.comp("secondPassword").hide();
							this.comp("windowDialog1").open();
							
						}
						else{
							this.showprompt("创建失败");
						}
					}
					
				}
				else if(action =="invite"){
					var params = this.createParams();
					if (params) {
						var is_success = nest.invitenest(params);
						if (is_success) {
							this.showprompt("创建成功");
							this.success(params);
							
						}
						else if(is_success==undefined){
							this.comp("secondPassword").hide();
							this.comp("windowDialog1").open();
						
						}
						else{
							this.showprompt("创建失败");
						}
					}
					
				}
			}
			else{
				this.showprompt("二级密码错误");
			}
		$(this.getElementByXid("password1")).val("");
	};
	//提交数据
	Model.prototype.button6Click = function(event){
		var is_hascommunity=0;
		var radios = $("[name='community_radio']");
		for (var i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				switch (i) {
				case 1:
					is_hascommunity=1;
					break;
				case 3:
					is_hascommunity=1
					break;
				case 5:
					is_hascommunity=1
					break;
				default:
					
					break;
				}
			}
		}
		if (is_hascommunity==0&&(action=="create"||action=="invite")) {
			this.showprompt("请选择社区");
			this.input4Blur(event);return;
		}
		if (!$.trim(this.comp("input2").val())&&(action=="create"||action=="invite")) {
			this.showprompt("邀请猫窝不能为空");
		}
		else if(!$.trim(this.comp("input4").val())&&(action=="create"||action=="invite")){
			this.showprompt("上级猫窝不能为空");
		}
		else if($.trim($(this.getElementByXid("need_money")).html())==0)
		{
			this.showprompt("产品类型必需选择");
		}
		else{
			this.comp("secondPassword").show();
		}
	};
//检查邀请人是否存在
	Model.prototype.input2Blur = function(event){
		var name = $.trim(this.comp("input2").val());
		if (name) {
			if(nest.community_premission(name)==404){
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

		if ($.trim(name)) {
			if(!vdt.test(name)){
			this.showprompt("请输入邮箱地址");
			}
		}else{
			this.showprompt("邮箱不能为空");
		}
	};

	Model.prototype.button10Click = function(event){
		this.comp("select1").val("");
		$(this.getElementByXid("need_money")).html(0);
	};
//前往二级密码重置页面
	Model.prototype.button9Click = function(event){
		justep.Shell.showPage("ZJP_resetPassword");
	};

	Model.prototype.typedataCustomRefresh = function(event){
		for (var i = 0; i < config_egg.level_worth.length; i++) {
			event.source.newData({"defaultValues":
				[{
					id:i+1,
					type:i+1+"级产品（$"+Math.floor(config_egg.level_worth[i]*config_egg.egg_val)+")",
					is_show:0
				}]
			});
		}
	};

	Model.prototype.button11Click = function(event){
		justep.Shell.closePage();
	};

	Model.prototype.windowDialog1Received = function(event){
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