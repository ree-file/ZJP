define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personaljs = require("./js/personal");
	var bank = require("./js/bank");
	var base64 = require("$UI/system/lib/base/base64");
	var config = require('./js/config');
	var common = require('./js/mycommon');
	var lang;
	var couldget;
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
	//可提现金额参数接收并录入
	Model.prototype.modelParamsReceive = function(event){
		couldget = this.params.walletMoney;
		// this.getElementByXid("moneyInput").setAttribute("placeHolder",lang.transferGetmoney[13]+(couldget*0.06).toFixed(2));//以当前钱包金额计算6%输出提醒用户当前可提金额
	};

	Model.prototype.modelLoad = function(event){
		this.comp("title").set({
			title:lang.transferGetmoney[0]
		});
		$(this.getElementByXid("span2")).html(lang.transferGetmoney[1]);
		$(this.getElementByXid("span7")).html(lang.transferGetmoney[2]);
		$(this.getElementByXid("span3")).html(lang.transferGetmoney[3]);
		$(this.getElementByXid("otherbankName")).html(lang.transferGetmoney[4]);
		$(this.getElementByXid("span9")).html(lang.transferGetmoney[5]);
		$(this.getElementByXid("span11")).html(lang.transferGetmoney[6]);
		$(this.getElementByXid("span13")).html(lang.transferGetmoney[7]);
		$(this.getElementByXid("span12")).html(lang.transferGetmoney[8]);
		$(this.getElementByXid("span4")).html(lang.transferGetmoney[9]);
		$(this.getElementByXid("otherbankrow")).hide();

		var bankfromData = this.comp("bankfromData");
		for (var i = 0; i < 18; i++) {
			bankfromData.add({
				"name": lang.bank[i],
			});
		}
		$(this.getElementByXid("content1")).css("display","block");
	};
	//提交按钮
	Model.prototype.setupButtonClick = function(event){
		var to = this.comp('toSelect').val();
		var bankname = this.getElementByXid("otherbankInput").value;
		var cardnumber = this.getElementByXid("cardidInput").value;
		var money = this.getElementByXid("moneyInput").value;
		var security_code = $.trim(this.comp("securityInput").val());
		if (to == lang.transferGetmoney[11]) {
			var is_success3 = personaljs.suppliesget(money,cardnumber,security_code,to);
			if (is_success3 == undefined) {
				this.comp("windowDialog1").open();
				this.showprompt(lang.showprompt[0]);
				return;
			}
			else if (is_success3 == true) {
				this.button2Click(event);
				return;
			}
			else if (is_success3 == false) {
				this.comp("popOver1").hide(999);
				this.close();
			}
		}
		else {
			var is_success4 = personaljs.suppliesget(money,cardnumber,security_code,bankname);
			if (is_success4 == undefined) {
				this.comp("windowDialog1").open();
				this.showprompt(lang.showprompt[0]);
				return;
			}
			else if (is_success4 == true) {
				this.button2Click(event);
				return;
			}
			else if (is_success4 == false) {
				this.comp("popOver1").hide(999);
				this.close();
			}
		}
		// this.comp("popOver1").show(999);
		// $(this.getElementByXid("span5")).text(lang.transferGetmoney[14]);
		// $(this.getElementByXid("span1")).text(lang.transferGetmoney[15]);
		// $(this.getElementByXid("span14")).text(lang.transferGetmoney[16]);
		// $(this.getElementByXid("span16")).text(lang.transferGetmoney[17]);
		// $(this.getElementByXid("span17")).text(lang.transferGetmoney[18]);
		// $(this.getElementByXid("span19")).text(lang.transferGetmoney[19]);
		// var money = this.getElementByXid("moneyInput").value;
		// $(this.getElementByXid("span6")).text("$"+(money*0.7).toFixed(2));
		// $(this.getElementByXid("span8")).text("$"+(money*0.2).toFixed(2));
		// $(this.getElementByXid("span15")).text("$"+(money*0.1).toFixed(2));
	};
	//选择银行名称
	Model.prototype.toSelectChange = function(event){
		var toSelect = this.comp('toSelect').val();
		if (toSelect == lang.transferGetmoney[11] ) {
			$(this.getElementByXid("otherbankrow")).show();
		}
		else {
			$(this.getElementByXid("otherbankrow")).hide();
		}
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
		}
		else if(event.data.reset){
			this.comp("windowDialog1").close();
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword",page:"main"});
		}
	};

	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.closePage();
	};

	Model.prototype.button3Click = function(event){
		var moneyInput = this.getElementByXid("moneyInput").value;
		var changemoney;
		if (justep.Shell.rate) {
			changemoney = justep.Shell.rate.latestValue; //主动变换值 后台获取美元汇率
		}
		else{
			common.getCommon(config);
			changemoney = justep.Shell.rate.latestValue;
		}
		
		$(this.getElementByXid("daospan")).text("￥"+(moneyInput*changemoney).toFixed(2));
	};

	Model.prototype.button5Click = function(event){
		this.comp("popOver1").hide(999);
	};

	Model.prototype.button2Click = function(event){
	};

	return Model;
});
