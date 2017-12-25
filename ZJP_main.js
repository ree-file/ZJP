define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var user = require("./js/users");
	var nest = require("./js/nests");
	var config = require("./js/config");
	var ids=[];
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
		this.comp("NestsAccount").refreshData();
		//把nestInfo填充到各个data数据和今日收益，和总投资里
	};

	Model.prototype.modelLoad = function(event){
		//计算三部分资金所占比重
		var worthInfo =	user.getUserMessage();
		var rightRotate = 180-parseFloat(worthInfo['market'])/(parseFloat(worthInfo['all']))*360;
		var leftRotate = 180-parseFloat(worthInfo['limit'])/(parseFloat(worthInfo['all']))*360;
		if (rightRotate<0) {
			$(this.getElementByXid("span24")).html("市场");
			$(this.getElementByXid("span26")).html("活动");
		}
		else if(leftRotate<0){
			$(this.getElementByXid("span24")).html("投资");
			$(this.getElementByXid("span25")).html("活动");
		}
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

	Model.prototype.incomeAccountCustomRefresh = function(event){
		var date = new Date();
		var todayincome =0.00;
		var currentdate = new Date(date.getFullYear(),date.getMonth(),date.getDate());
		var times = currentdate.getTime();
		var eggval = config.configegg().egg_val
		var records = nest.incomeInfo(ids,ids.length,times);
		var MyincomeInfo = [];
		debugger;
		for (var i = 0; i < records.length; i++) {
			if (records[i]!=undefined&&records[i].length!=0) {
				for (var j = 0; j < records[i].length; j++){
					MyincomeInfo[MyincomeInfo.length]={
							contract_id:records[i][j].contract_id,
							type:records[i][j].type=="invite_got"?"邀请获得":records[i][j].type=="community_got"?"家族获得":"日常获得",
							income:parseFloat(parseFloat(records[i][j].eggs)*parseFloat(eggval)).toFixed(2),
							date:records[i][j].created_at
					};
					todayincome+=parseFloat(records[i][j].eggs)*parseFloat(eggval);
				}
			}
		}
		for (var i = 0; i < MyincomeInfo.length; i++) {
			this.comp("NestsAccount").each(function(obj){
				if (MyincomeInfo[i].contract_id==obj.row.val("id")) {
					MyincomeInfo[i].name = obj.row.val("name");
				}
			});
		}
		event.source.loadData(MyincomeInfo);
		ids=null;
		$(this.getElementByXid("span4")).html("$"+todayincome);
	};

	Model.prototype.NestsAccountCustomRefresh = function(event){
		var nestInfo = nest.nestInfo();
		$(this.getElementByXid("span8")).html("$"+nestInfo.assets);
		event.source.loadData(nestInfo.contracts);
		if (nestInfo.contracts.length!=0) {
			for (var i = 0; i < nestInfo.contracts.length; i++) {
				ids[i]=nestInfo.contracts[i].nest_id;
			}
		}
		

		this.comp("incomeAccount").refreshData();
	};

	Model.prototype.button8Click = function(event){
		var row = event.bindingContext.$object;
		var params = {
				nest_id:row.val("nest_id"),
				contract_id:row.val("id"),
		};
		justep.Shell.showPage(require.toUrl("./nestMain.w"), params);
	};

	Model.prototype.button4Click = function(event){
		justep.Shell.showPage(require.toUrl("./market.w"));
	};

	return Model;
});