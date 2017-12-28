define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var user = require("./js/users");
	var base64 = require("$UI/system/lib/base/base64");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
		var email = $.trim(this.comp("input1").val());
		if (email&&this.params.action=="resetpassword") {
			var is_success = user.forgetpassword(email);
			if (is_success) {
				this.showprompt("邮件已经发送");
			}
			else{
				this.showprompt("邮件发送失败，请查看邮箱是否正确");
			}
		}
		else{
			this.showprompt("邮箱不能为空");
		}
		if (this.params.action=="resetsecondPassword") {
			var is_success = user.forgetsecondpassword();
			if (is_success) {
				this.showprompt("发送成功");
			}
			else if(is_success==undefined){
				this.comp("windowDialog1").open();
			}
			else{
				this.showprompt("发送失败");
			}
		}
	};
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{	
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};
	Model.prototype.button2Click = function(event){
		var password = $.trim($(this.getElementByXid("password1")).val());
		var confirm = $.trim($(this.getElementByXid("password2")).val());
		var code = $.trim(this.comp("input2").val());
		var email = $.trim(this.comp("input1").val());
		if (password && confirm) {
			if (password != confirm) {
				this.showprompt("前后两次密码不一样");
				return;
			}
		}
		else{
			this.showprompt("密码不能为空");
			return;
		}
		if (email&&code&&this.params.action=="resetpassword") {
			var is_success = user.resetPassword(password,code,email);
			if (is_success) {
				this.showprompt("重置成功");
			}
			else if(is_success==undefined){
				this.comp("windowDialog1").open();
			}
			else{
				this.showprompt("重置失败");
			}
			return;
		}
		else{
			this.showprompt("邮箱和验证码不能为空");
		}
		if (code&&this.params.action=="resetsecondPassword") {
			var is_success = user.resetsecondPassword(password,code);
			if (is_success) {
				this.showprompt("重置成功");
			}
			else if(is_success==undefined){
				this.comp("windowDialog1").open();
			}
			else{
				this.showprompt("重置失败");
			}
		}
		else{
			this.showprompt("验证码不能为空");
		}
	};
	Model.prototype.modelParamsReceive = function(event){
		this.comp("windowDialog1").close();
		if (this.params.action=="resetsecondPassword") {
			$(this.getElementByXid("row1")).hide();
			$(this.getElementByXid("p1")).text("重置流程；点击发送邮件获得验证码，并把其他选项补齐，点击重置按钮");
		}
	};	
	Model.prototype.backBtnClick = function(event){
		justep.Shell.closePage();
	};	
	Model.prototype.windowDialog1Receive = function(event){
		if(event.data.data){
			var token=localStorage.getItem("jwt_token");
			var ids = token.split(".");
			var id = JSON.parse(base64.decode(ids[1]));
			if (id&&event.data.email) {
				localStorage.setItem("thismyuserId", id.sub);
				localStorage.setItem("email", event.data.email);
			}
			this.comp("windowDialog1").close();
		}

	};	
	return Model;
});