define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var me;
	var login = require("./js/login");
	var loginable = false;//能否点击登录按钮的状态
	var Model = function(){
		this.callParent();
		me = this;
	};

	Model.prototype.input5Focus = function(event){
		$(this.getElementByXid("input5")).css("border-color","#5D92E2");
		$(this.getElementByXid("input5")).css("border-width","0px 0px 2px 0px");
		

	};
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{	
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};
	Model.prototype.input5Blur = function(event){
		$(this.getElementByXid("input5")).css("border-color","#FFFFFF");
		$(this.getElementByXid("input5")).css("border-width","0px 0px 1px 0px");
		//验证手机是否存在--许鑫君
//		var number = $.trim(this.comp("input5").val());
//		if(number){
//			var Prefix = this.comp("input6").val();
//			Prefix = parseInt(Prefix);
//			var is_live = login.phoneNumberIsLive(Prefix+number);
//			if (!is_live) {
//				this.showprompt("手机号不存在");
//				
//				loginable=false;
//			}
//			else{
//				loginable=true;
//			}
//		}
//		else{
//			this.showprompt("手机号不能为空");
//			
//			loginable=false;
//		}
		

	};

	Model.prototype.input6Focus = function(event){
		$(this.getElementByXid("input6")).css("border-color","#5D92E2");
		$(this.getElementByXid("input6")).css("border-width","0px 0px 2px 0px");

	};

	Model.prototype.input6Blur = function(event){
		$(this.getElementByXid("input6")).css("border-color","#FFFFFF");
		$(this.getElementByXid("input6")).css("border-width","0px 0px 1px 0px");
	};

	Model.prototype.password1Focus = function(event){
		$(this.getElementByXid("password1")).css("border-color","#5D92E2");
		$(this.getElementByXid("password1")).css("border-width","0px 0px 2px 0px");
	};

	Model.prototype.password1Blur = function(event){
		$(this.getElementByXid("password1")).css("border-color","#FFFFFF");
		$(this.getElementByXid("password1")).css("border-width","0px 0px 1px 0px");
//		var password = $(this.getElementByXid("password1")).val();
//		if (!$.trim(password)) {
//			this.showprompt("密码不能为空");
//		}
	};

	Model.prototype.button3Click = function(event){
		justep.Shell.showPage("mailLogin");

	};

	Model.prototype.col9Click = function(event){
		justep.Shell.showPage("selectNation");

	};
	
	Model.prototype.getImageUrl = function(url){
		return require.toUrl(url);
	};

	Model.prototype.modelParamsReceive = function(event){
		var nation = this.params.nation;
		var number = this.params.number;
		var picture = this.params.picture; 
		var data = this.comp("data1");
		var options = {
				 defaultValues : [
				        {nation:nation,number:number,picture:picture}
				 ]
		 };
		if(nation && number && picture){
			data.newData(options);
		}
		
//		var json = '{'+'"'+'number'+'"'+':'+'"'+number+'"'+','+'"'+'nation'+'"'+':'+'"'+nation+'"'+'}';
//		if(nation && number){
//			var data = JSON.parse(json);
//			this.comp("data1").loadData(data);
//		}
	};



	Model.prototype.col2Click = function(event){
		justep.Shell.showPage("resetPassword");

	};


//登录操作的实现--许鑫君
	Model.prototype.button1Click = function(event){
		this.showprompt("暂时未开通手机号登录，请用邮箱登录");
		if (loginable) {
			var Prefix = this.comp("input6").val();
			Prefix = parseInt(Prefix);
			var phoneNumber = $.trim(this.comp("input5").val());
			var password = $.trim($(this.getElementByXid("password1")).val());
			if (!password ||!phoneNumber ) {
				this.showprompt("账号或密码不能为空");
				
			}else{
				var is_success=login.phonelogin(Prefix+phoneNumber,password);
				if (is_success) {
					justep.Shell.showPage("ZJP_main",{check:1});
				}
				else{
					this.showprompt("账号或密码错误");
					loginable = false;
				}
			}
			
		}
		
	};



	return Model;
});