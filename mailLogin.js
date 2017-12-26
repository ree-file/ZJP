define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var login = require("./js/login");
	var jwt = require('./js/jwt');
	var user = require('./js/users');
	var loginable =false;
	var Model = function(){
		this.callParent();
	};

	Model.prototype.password1Focus = function(event){
		$(this.getElementByXid("password1")).css("border-color","#567DC7");
		$(this.getElementByXid("password1")).css("border-width","0px 0px 2px 0px");
	};

	Model.prototype.password1Blur = function(event){
		$(this.getElementByXid("password1")).css("border-color","#FFFFFF");
		$(this.getElementByXid("password1")).css("border-width","0px 0px 1px 0px");
		var password = $.trim($(this.getElementByXid("password1")).val());
		if (!password) {
			this.showprompt("密码不能为空");
			
		}
		else{
			loginable =true;
		}
	};
	Model.prototype.input5Focus = function(event){
		$(this.getElementByXid("input5")).css("border-color","#567DC7");
		$(this.getElementByXid("input5")).css("border-width","0px 0px 2px 0px");
	};
	Model.prototype.input5Blur = function(event){
		$(this.getElementByXid("input5")).css("border-color","#FFFFFF");
		$(this.getElementByXid("input5")).css("border-width","0px 0px 1px 0px");
		//邮箱验证--许鑫君
		var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
		var email = $.trim($(this.getElementByXid("input5")).val());
		if (email) {
//				var is_live=login.emailIsLive(email);
//				is_live =true;
//				if (is_live) {
//					loginable=true;
//				}
//				else{
//					this.showprompt("邮箱不存在");
//				}
			loginable = true;
			
		}
		else{
			this.showprompt("邮箱不能为空");
			
			loginable =false;
		}
		
	};
	Model.prototype.button3Click = function(event){
		justep.Shell.showPage("main");
		
	};
	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{	
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};
	//邮箱登录--许鑫君
	Model.prototype.button1Click = function(event){
		if (loginable) {
			var password = $.trim($(this.getElementByXid("password1")).val());
			var email = $.trim($(this.getElementByXid("input5")).val());
			if(password&&email)
			{
				var is_success=login.emaillogin(email,password);
				if (is_success) {
					justep.Shell.showPage(require.toUrl("./ZJP_main.w"),{check:1});
				}
				else{
					this.showprompt("账号或者密码错误");
					loginable=false;
					
				}
			}
			else{
				this.showprompt("账号或者密码不能为空");
				
			}
		}
	};
	Model.prototype.modelModelConstruct = function(event){
		if (jwt.getToken()) {	
			justep.Shell.showPage(require.toUrl("./ZJP_main.w"));
		}
	};
	Model.prototype.button2Click = function(event){
		justep.Shell.showPage(require.toUrl("./ZJP_resetPassword.w"),{action:"resetpassword"});
	};
	return Model;
});