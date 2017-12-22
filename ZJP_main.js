define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var user = require("./js/users");
	var nest = require("./js/nests");
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
		//获得用户所有巢的信息
		var nestInfo = nest.nestInfo();
		//把nestInfo填充到各个data数据和今日收益，和总投资里
	};

	Model.prototype.modelLoad = function(event){
		//计算三部分资金所占比重
		var worthInfo =	user.getUserMessage();
		var rightRotate = 180-parseFloat(worthInfo['market'])/(parseFloat(worthInfo['all']))*180;
		var leftRotate = 180-parseFloat(worthInfo['limit'])/(parseFloat(worthInfo['all']))*180;
		$(this.getElementByXid("right")).css("transform","rotate("+rightRotate+"deg)");
		$(this.getElementByXid("left")).css("transform","rotate(-"+leftRotate+"deg)");
		$(this.getElementByXid("span7")).html("$"+worthInfo['all'])
	};
//若用户输入账号密码登录则要检查一下用户是否有二级密码--许鑫君
	Model.prototype.modelParamsReceive = function(event){
		var check = this.params.check;
		
		if (check==1) {
			//检查用户是否有二级密码--许鑫君
			var is_live = user.checksecondPassword();
			if (!is_live) {
				//跳到设置二级密码页面
				this.showprompt("你还没有二级密码请设置");
				this.comp("setSecondPassword").show();
			}
		}
	};

	Model.prototype.password1Blur = function(event){
		var secondpassword = $.trim($(this.getElementByXid("password1")).val());
		if (!secondpassword) {
			this.showprompt("密码不能为空");
		}
	};

	Model.prototype.password2Blur = function(event){
		var confirmpassword = $.trim($(this.getElementByXid("password2")).val());
		var secondpassword = $.trim($(this.getElementByXid("password1")).val());
		if (confirmpassword!=secondpassword) {
			this.showprompt("密码不匹配");
		}
	};

	Model.prototype.button7Click = function(event){
		var confirmpassword = $.trim($(this.getElementByXid("password2")).val());
		var secondpassword = $.trim($(this.getElementByXid("password1")).val());
		if (confirmpassword&&secondpassword&&(confirmpassword==secondpassword)) {
			var is_success=user.setSecondPassword(secondpassword);
			if (is_success) {
				this.showprompt("设置成功");
				this.comp("setSecondPassword").hide();
			}
			else{
				this.showprompt("设置失败，请重新登录");
			}
		}
		else{
			this.showprompt("密码不匹配");
		}
	};

	return Model;
});