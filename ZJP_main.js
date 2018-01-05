define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var user = require("./js/users");
	var nest = require("./js/nests");
	var config = require("./js/config");
	var base64 = require("$UI/system/lib/base/base64");
	var mainInfo;
	var personalInvite;
	var lang;
	if(localStorage.getItem("lang")=="en_us")
	{
		lang = require('./js/en_us');
	}
	else{
		lang = require('./js/zh_cn');
	}
	var Model = function() {
		this.callParent();
	};

//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};
	Model.prototype.modelModelConstructDone = function(event){
		
		personalInvite = mainInfo.receivers_eggs*parseFloat(config.configegg().egg_val);
		//获得用户所有巢的信息
		this.comp("NestsAccount").refreshData();
		//把nestInfo填充到各个data数据和今日收益，和总投资里
	};

	Model.prototype.modelLoad = function(event){
		this.comp("titleBar1").set({
			title:lang.ZJP_main[0]
		});
		$(this.getElementByXid("span3")).html(lang.ZJP_main[1]);
		$(this.getElementByXid("span5")).html(lang.ZJP_main[2]);
		$(this.getElementByXid("span6")).html(lang.ZJP_main[3]);
		$(this.getElementByXid("span12")).html(lang.ZJP_main[4]);
		$(this.getElementByXid("span13")).html(lang.ZJP_main[5]);
		$(this.getElementByXid("span14")).html(lang.ZJP_main[6]);
		$(this.getElementByXid("span1")).html(lang.ZJP_main[7]);
		$(this.getElementByXid("span15")).html(lang.ZJP_main[8]);
		$(this.getElementByXid("span16")).html(lang.ZJP_main[9]);
		$(this.getElementByXid("span39")).html(lang.ZJP_main[10]);
		$(this.getElementByXid("span17")).html(lang.ZJP_main[11]);
		$(this.getElementByXid("h51")).html(lang.ZJP_main[12]);
		$(this.getElementByXid("h52")).html(lang.ZJP_main[13]);
		$(this.getElementByXid("span35")).html(lang.ZJP_main[14]);
		//获得今日收益比例
		var incomeAnalyse =	user.getUserIncomeAnalyse();
		if (incomeAnalyse==undefined) {
			this.comp("windowDialog1").open();
			this.showprompt(lang.showprompt[0]);
			return;
		}
		var coins = incomeAnalyse.coins;
		var money_active_sum = incomeAnalyse.money_active_sum;
		var money_limit_sum = incomeAnalyse.money_limit_sum;
		var all = coins+money_active_sum+money_limit_sum;
		var rightRotate = 180-parseFloat(coins/all)*360;
		var leftRotate = 180-parseFloat(money_limit_sum/all)*360;
		if (rightRotate<0) {
			$(this.getElementByXid("span24")).html(lang.ZJP_main[16]);
			$(this.getElementByXid("span25")).html(lang.ZJP_main[17]);
			$(this.getElementByXid("span26")).html(lang.ZJP_main[15]);
		}
		else if(leftRotate<0){
			$(this.getElementByXid("span24")).html(lang.ZJP_main[17]);
			$(this.getElementByXid("span25")).html(lang.ZJP_main[15]);
			$(this.getElementByXid("span26")).html(lang.ZJP_main[16]);
		}else{
			$(this.getElementByXid("span24")).html(lang.ZJP_main[15]);
			$(this.getElementByXid("span25")).html(lang.ZJP_main[17]);
			$(this.getElementByXid("span26")).html(lang.ZJP_main[16]);
		}
		
		$(this.getElementByXid("right")).css("transform","rotate("+rightRotate+"deg)");
		$(this.getElementByXid("left")).css("transform","rotate(-"+leftRotate+"deg)");
		$(this.getElementByXid("span4")).html("$"+parseFloat(all).toFixed(2));
	};
//若用户输入账号密码登录则要检查一下用户是否有二级密码--许鑫君
	Model.prototype.modelParamsReceive = function(event){	
			//检查用户是否有二级密码--许鑫君
			var is_live = user.checksecondPassword();
			if (is_live ==undefined) {
				this.comp("windowDialog1").open();
				this.showprompt(lang.showprompt[0]);
				return;
			}
			if (!is_live) {
				//跳到设置二级密码页面
				this.showprompt(lang.showprompt[26]);
				this.comp("setSecondPassword").show();
			}
	};

	Model.prototype.password1Blur = function(event){
		var secondpassword = $.trim($(this.getElementByXid("password1")).val());
		if (!secondpassword) {
			this.showprompt(lang.showprompt[2]);
		}
	};

	Model.prototype.password2Blur = function(event){
		var confirmpassword = $.trim($(this.getElementByXid("password2")).val());
		var secondpassword = $.trim($(this.getElementByXid("password1")).val());
		if (confirmpassword!=secondpassword) {
			this.showprompt(lang.showprompt[27]);
		}
	};

	Model.prototype.button7Click = function(event){
		var confirmpassword = $.trim($(this.getElementByXid("password2")).val());
		var secondpassword = $.trim($(this.getElementByXid("password1")).val());
		if (confirmpassword&&secondpassword&&(confirmpassword==secondpassword)) {
			var is_success=user.setSecondPassword(secondpassword);
			if (is_success) {
				this.showprompt(lang.showprompt[28]);
				this.comp("setSecondPassword").hide();
			}
			else if(is_success==undefined){
				this.comp("windowDialog1").open();
				this.showprompt(lang.showprompt[0]);
			}
		}
		else{
			this.showprompt(lang.showprompt[27]);
		}
	};

	Model.prototype.incomeAccountCustomRefresh = function(event){
		if (mainInfo == undefined) {
			return;
		}
		var data = nest.incomeInfo(mainInfo.nests);
		for (var int = 0; int < data.MyincomeInfo.length; int++) {
			var date1 = Date.parse(data.MyincomeInfo[int].date);  
			for (var int2 = int; int2 < data.MyincomeInfo.length; int2++) {
				var date2 = Date.parse(data.MyincomeInfo[int2].date);
				if (date1<date2) {
					var temp;
					temp=data.MyincomeInfo[int];
					data.MyincomeInfo[int]=data.MyincomeInfo[int2];
					data.MyincomeInfo[int2]=temp;
					date1 =date2;
					
				}
			}	
		}
		event.source.loadData(data.MyincomeInfo);
		$(this.getElementByXid("span4")).html("$"+data.todayincome);
		mainInfo=undefined;
	};

	Model.prototype.NestsAccountCustomRefresh = function(event){
		
		
	};

	Model.prototype.button8Click = function(event){
		var row = event.bindingContext.$object;
		var params = {
				nest_id:row.val("nest_id"),
				contract_id:row.val("id"),
				page:"main"
		};
		justep.Shell.showPage("nestMain", params);
	};

	Model.prototype.button4Click = function(event){
		
	};

	Model.prototype.modelActive = function(event){
		this.modelModelConstructDone(event);
		this.modelLoad(event);
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
			this.comp("contents1").next();
			this.modelModelConstructDone(event);
			this.modelLoad(event);
		}
		else if(event.data.reset){
			this.comp("windowDialog1").close();
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword",page:"main"});
		}
	};

	Model.prototype.windowContainer1Receive = function(event){
		if (event.data.data) {
			
			this.comp("windowDialog1").open();
		}
	};

	Model.prototype.windowDialog1Received = function(event){
		
	};

	Model.prototype.button5Click = function(event){
		justep.Shell.showPage("market",{
			page:"main"
		});
	};

	Model.prototype.windowContainer1Load = function(event){
		
	};

	Model.prototype.contents1ActiveChange = function(event){
		if (event.to==2) {
			this.comp("windowContainer1").load("$UI/ZJP/personal.w",{personal:personalInvite});
		}
	};

	return Model;
});
