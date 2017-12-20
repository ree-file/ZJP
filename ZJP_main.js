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
//		var rightRotate = parseFloat(worthInfo['market'])/(parseFloat(worthInfo['all']))*180;
//		var leftRotate = parseFloat(worthInfo['limit'])/(parseFloat(worthInfo['all']))*180;
		var rightRotate = 60;
		var leftRotate = 60;
		var right = $(this.getElementByXid("right")).css("transform","rotate("+rightRotate+"deg)");
		var left = $(this.getElementByXid("left")).css("transform","rotate(-"+leftRotate+"deg)");
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
			}
		}
	};

	return Model;
});