define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var user = require('js/users');
	var Model = function(){
		this.callParent();
	};
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};

	Model.prototype.password1Focus = function(event){
		$(this.getElementByXid("password1")).css("border-color","#5D92E2");
		$(this.getElementByXid("password1")).css("border-width","0px 0px 2px 0px");

	};

	Model.prototype.password1Blur = function(event){
		$(this.getElementByXid("password1")).css("border-color","#FFFFFF");
		$(this.getElementByXid("password1")).css("border-width","0px 0px 1px 0px");
		var password = $.trim($(this.getElementByXid("password2")).val());
		var confirm = $.trim($(this.getElementByXid("password1")).val());
		if (!password) {
			this.showprompt("密码不能为空");
			if (confirm!=password) {
				this.showprompt("两次密码输入不符合");
			}
		}
	};

	Model.prototype.input2Focus = function(event){
		$(this.getElementByXid("input2")).css("border-color","#5D92E2");
		$(this.getElementByXid("input2")).css("border-width","0px 0px 2px 0px");
		
	};

	Model.prototype.input2Blur = function(event){
		$(this.getElementByXid("input2")).css("border-color","#FFFFFF");
		$(this.getElementByXid("input2")).css("border-width","0px 0px 1px 0px");
		var code = $.trim(this.comp("input2").val());
		if (!code) {
			this.showprompt("验证码不能为空");
		}
	};

	Model.prototype.button3Click = function(event){
		history.back(-1);
	};

	Model.prototype.button2Click = function(event){
		if (this.params.email) {
			var is_success = user.forgetpassword(email);
			if (is_success) {
				this.showprompt("发送成功");
			}
			else{
				this.showprompt("发送失败请稍后重试");
			}
		}
		else{
			this.showprompt("请重回上个页面");
		}
	};

	Model.prototype.button1Click = function(event){
		var password = $.trim($(this.getElementByXid("password2")).val());
		var confirm = $.trim($(this.getElementByXid("password1")).val());
		var code = $.trim(this.comp("input2").val());
		if (!this.params.email) {
			this.showprompt("请返回上个页面重新发送");
			return;
		}
		if (!code) {
			this.showprompt("验证码不能为空");
			return;
		}
		if (password) {
			this.showprompt("密码不能为空");
			if (confirm!=password) {
				this.showprompt("两次密码输入不符合");
			}
			else{

				var is_success = user.resetPassword(password,code,this.params.email);
				if (is_success) {
					this.showprompt("修改成功");
					$(this.getElementByXid("password2")).val(" ");
					$(this.getElementByXid("password1")).val(" ");
					this.comp("input2").val(" ");
				}
				else{
					this.showprompt("修改失败,请重新发送邮件");
				}
			}
		}
		else{
			this.showprompt("密码不能为空");
		}
	};


	Model.prototype.modelParamsReceive = function(event){
	debugger;
		if (this.params.email) {
			$(this.getElementByXid("h55")).html(this.params.email);
		}
		else{
			this.showprompt("请会上个页面重新点击按钮");
			history.back(-1);
		}
	};


	Model.prototype.password2Focus = function(event){
		$(this.getElementByXid("password2")).css("border-color","#5D92E2");
		$(this.getElementByXid("password2")).css("border-width","0px 0px 2px 0px");
	};


	Model.prototype.password2Blur = function(event){
		$(this.getElementByXid("password2")).css("border-color","#FFFFFF");
		$(this.getElementByXid("password2")).css("border-width","0px 0px 1px 0px");
		var password = $.trim($(this.getElementByXid("password2")).val());
		if (!password) {
			this.showprompt("密码不能为空");
		}
	};


	return Model;
});