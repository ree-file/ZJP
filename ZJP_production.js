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
	var current_rank =-1 ;//通过页面传参数获得用于产品升级时做比较，另外一律为-1；
	var config_egg ;//通过向服务端请求获得产品的配置信息
	var me;
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
		me =this;
	};
//提示
	Model.prototype.button2Click = function(event){
		this.comp("popOver1").show();
		if (action =="upgrade") {
			$(this.getElementByXid("p2")).text(lang.ZJP_production[25]);
		}
		else if(action =="invite"){
			$(this.getElementByXid("p2")).text(lang.ZJP_production[24]);
			
		}
		else{
			$(this.getElementByXid("p2")).text(lang.ZJP_production[23]);
		}
		
	};
//提示
	Model.prototype.button4Click = function(event){
		this.comp("popOver1").show();
		$(this.getElementByXid("p2")).text(lang.ZJP_production[22]);
	};
//提示
	Model.prototype.button5Click = function(event){
		this.comp("popOver1").show();
		
		$(this.getElementByXid("p2")).text(lang.ZJP_production[21]);
		
	};
//提示
	Model.prototype.button3Click = function(event){
		this.comp("popOver1").show();
		$(this.getElementByXid("p2")).text(lang.ZJP_production[20]);
		
	};
//提示
	Model.prototype.button1Click = function(event){
		this.comp("popOver1").show();
		$(this.getElementByXid("p2")).text(lang.ZJP_production[19]);
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
				this.showprompt(lang.showprompt[46]);
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
//			$(this.getElementByXid("row4")).animate({height:0},"slow",function(){
				$(me.getElementByXid("row4")).addClass("common_show");
//			});
//			$(this.getElementByXid("row5")).animate({height:0},"slow",function(){
				$(me.getElementByXid("row5")).addClass("common_show");
//			});
//			$(this.getElementByXid("create_benefit")).animate({height:0},"slow",function(){
				$(me.getElementByXid("create_benefit")).addClass("common_show");
//			});
			nest_id = this.params.nest_id;
			if (action=="upgrade") {
					this.comp("titleBar1").set({
						title:lang.ZJP_production[18]
					});
					nest_id = this.params.nest_id;
					current_rank = this.params.current_rank;
					worth = this.params.current_worth;
					$(this.getElementByXid("span21")).html(lang.ZJP_production[17]);
			}
			else{
					this.comp("titleBar1").set({
						title:lang.ZJP_production[16]
					});
					nest_id = this.params.nest_id;
					worth = 0;
					$(this.getElementByXid("span21")).html(lang.ZJP_production[15]);
				}
			$(this.getElementByXid("production_worth")).html(worth);
			
		}
		else if (action == "create") {
			
			this.comp("titleBar1").set({
				title:lang.ZJP_production[14]
			});
			nest_id = this.params.nest_id;
			current_rank = this.params.current_rank;
			worth = this.params.current_worth;
			$(this.getElementByXid("span21")).html(lang.ZJP_production[13]);
//			创建的时候不需要邮箱地址也不需要邀请人，更不需要产品信息
//			$(this.getElementByXid("upgrade-message")).animate({height:0},"slow",function(){
				$(me.getElementByXid("upgrade-message")).addClass("common_show");
//			});
//			$(this.getElementByXid("row4")).animate({height:0},"slow",function(){
				$(me.getElementByXid("row4")).addClass("common_show");
//			});
			$(this.getElementByXid("p1")).text(lang.ZJP_production[12]);
			
		}
		else if(action=="invite")
		{
			current_rank = -1;
			worth = 0
//			$(this.getElementByXid("upgrade-message")).animate({height:0},"slow",function(){
				$(me.getElementByXid("upgrade-message")).addClass("common_show");
//			});
			this.comp("titleBar1").set({
				title:lang.ZJP_production[11]
			});
			$(this.getElementByXid("span21")).html(lang.ZJP_production[10]);
		}
		$(this.getElementByXid("div1")).css("display","block");
	};
	//不同的action不同的操作
	Model.prototype.modelParamsReceive = function(event){
		if(!this.params){
			this.showprompt(lang.showprompt[45]);
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
				this.showprompt(lang.showprompt[44]);
				object.val("");
			}
			else{
				if ((parseFloat(production)-parseFloat(current_worth))<(parseFloat($(this.getElementByXid("money")).html())+parseFloat($(this.getElementByXid("investment")).html())))
				 {
					
					$(this.getElementByXid("need_money")).html((parseFloat(production)-parseFloat(current_worth)).toFixed(2));
				}
				else{
					this.showprompt(lang.showprompt[43]);
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
			showprompt(lang.showprompt[43]);
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
			this.showprompt(lang.showprompt[42]);return;
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
							
							this.showprompt(lang.showprompt[41]);
						}
						else if(is_success==undefined){
							this.showprompt(lang.showprompt[0]);
							this.comp("secondPassword").hide();
							this.comp("windowDialog1").open();
							
						}
						else{
							this.showprompt(lang.showprompt[40]);
						}
					}
					
				}
				else if(action=="create"){
					var params = this.createParams();
					if (params) {
						var is_success = nest.createnest(params);
						if (is_success) {
							this.showprompt(lang.showprompt[39]);
							this.success(params);
						
						}
						else if(is_success==undefined){
							this.showprompt(lang.showprompt[0]);
							this.comp("secondPassword").hide();
							this.comp("windowDialog1").open();
							
						}
						else{
							this.showprompt(lang.showprompt[38]);
						}
					}
					
				}
				else if(action =="invite"){
					var params = this.createParams();
					if (params) {
						var is_success = nest.invitenest(params);
						if (is_success) {
							this.showprompt(lang.showprompt[39]);
							this.success(params);
							
						}
						else if(is_success==undefined){
							this.showprompt(lang.showprompt[0]);
							this.comp("secondPassword").hide();
							this.comp("windowDialog1").open();
						
						}
						else{
							this.showprompt(lang.showprompt[38]);
						}
					}
					
				}
			}
			else{
				this.showprompt(lang.showprompt[37]);
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
			this.showprompt(lang.showprompt[36]);
			this.input4Blur(event);return;
		}
		if (!$.trim(this.comp("input2").val())&&(action=="create"||action=="invite")) {
			this.showprompt(lang.showprompt[35]);
		}
		else if(!$.trim(this.comp("input4").val())&&(action=="create"||action=="invite")){
			this.showprompt(lang.showprompt[34]);
		}
		else if($.trim($(this.getElementByXid("need_money")).html())==0)
		{
			this.showprompt(lang.showprompt[33]);
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
				this.showprompt(lang.showprompt[31]);
			}
		}
		else{
			this.showprompt(lang.showprompt[32]);
		}
		
	};

	Model.prototype.input1Blur = function(event){
	var reg="^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$";
	var vdt = new RegExp(reg);
		var name = this.comp("input1").val();

		if ($.trim(name)) {
			if(!vdt.test(name)){
			this.showprompt(lang.showprompt[30]);
			}
		}else{
			this.showprompt(lang.showprompt[1]);
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
		action ="";//用于判断页面需要执行什么操作
		worth ;//后期用页面数据传递得到用于产品升级和复投的显示
		nest_id;//后期通过页面数据传递获得用于产品升级和复投的传参数
		contract_id;//后期通过页面数据传递获得用于产品复投的传参数
		current_rank =-1 ;//通过页面传参数获得用于产品升级时做比较，另外一律为-1；
		config_egg ;//通过向服务端请求获得产品的配置信息
		if (this.params.page=="main") {
			justep.Shell.showPage("main");
		}
		else if(this.params.page=="nestMain"){
			justep.Shell.showPage("nestMain");
		}
		else{
			justep.Shell.closePage();
		}
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
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword",page:"main"});
		}
	};

	Model.prototype.modelLoad = function(event){
		$(this.getElementByXid("span20")).html(lang.ZJP_production[0]);
		$(this.getElementByXid("span3")).html(lang.ZJP_production[1]);
		$(this.getElementByXid("span4")).html(lang.ZJP_production[2]);
		$(this.getElementByXid("span16")).html(lang.ZJP_production[3]);
		$(this.getElementByXid("span8")).html(lang.ZJP_production[4]);
		$(this.getElementByXid("span9")).html(lang.ZJP_production[5]);
		$(this.getElementByXid("h55")).html(lang.ZJP_production[6]);
		$(this.getElementByXid("h56")).html(lang.ZJP_production[7]);
		$(this.getElementByXid("h57")).html(lang.ZJP_production[8]);
		$(this.getElementByXid("span19")).html(lang.ZJP_production[9]);
	};

	return Model;
});