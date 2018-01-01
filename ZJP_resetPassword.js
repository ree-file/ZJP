define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var user = require("./js/users");
	var base64 = require("$UI/system/lib/base/base64");
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
	};

	Model.prototype.button1Click = function(event){
		var email = $.trim(this.comp("input1").val());
		if (email&&this.params.action=="resetpassword") {
			var is_success = user.forgetpassword(email);
			if (is_success) {
				this.showprompt(lang.showprompt[54]);
			}
			else{
				this.showprompt(lang.showprompt[53]);
			}
		}
		else{
			this.showprompt(lang.showprompt[1]);
		}
		if (this.params.action=="resetsecondPassword") {
			var is_success = user.forgetsecondpassword();
			if (is_success) {
				this.showprompt(lang.showprompt[52]);
			}
			else if(is_success==undefined){
				this.comp("windowDialog1").open();
			}
			else{
				this.showprompt(lang.showprompt[51]);
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
				this.showprompt(lang.showprompt[27]);
				return;
			}
		}
		else{
			this.showprompt(lang.showprompt[2]);
			return;
		}
		if (email&&code&&this.params.action=="resetpassword") {
			var is_success = user.resetPassword(password,code,email);
			if (is_success) {
				this.showprompt(lang.showprompt[50]);
			}
			else if(is_success==undefined){
				this.comp("windowDialog1").open();
			}
			else{
				this.showprompt(lang.showprompt[48]);
			}
			return;
		}
		else{
			this.showprompt(lang.showprompt[49]);
		}
		if (code&&this.params.action=="resetsecondPassword") {
			var is_success = user.resetsecondPassword(password,code);
			if (is_success) {
				this.showprompt(lang.showprompt[50]);
			}
			else if(is_success==undefined){
				this.comp("windowDialog1").open();
			}
			else{
				this.showprompt(lang.showprompt[48]);
			}
		}
		else{
			this.showprompt(lang.showprompt[47]);
		}
	};
	Model.prototype.modelParamsReceive = function(event){
		if (this.params.action=="resetsecondPassword") {
			$(this.getElementByXid("row1")).hide();
			$(this.getElementByXid("p1")).text(lang.ZJP_resetPassword[8]);
		}
		else{
			$(this.getElementByXid("p1")).text(lang.ZJP_resetPassword[7]);
		}
	};	
	Model.prototype.backBtnClick = function(event){
		if (this.params.page) {
			justep.Shell.showPage(this.params.page);
		}
		else{
			justep.Shell.closePage();
		}
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

	Model.prototype.modelLoad = function(event){
		this.comp("title").set({
			title:lang.ZJP_resetPassword[0]
		});
		$(this.getElementByXid("span1")).html(lang.ZJP_resetPassword[1]);
		$(this.getElementByXid("span2")).html(lang.ZJP_resetPassword[2]);
		$(this.getElementByXid("span3")).html(lang.ZJP_resetPassword[3]);
		$(this.getElementByXid("span4")).html(lang.ZJP_resetPassword[4]);
		$(this.getElementByXid("span5")).html(lang.ZJP_resetPassword[5]);
		$(this.getElementByXid("span6")).html(lang.ZJP_resetPassword[6]);
		$(this.getElementByXid("content1")).css("display","block");
	};	
	Model.prototype.modelUnLoad = function(event){

	};	
	return Model;
});