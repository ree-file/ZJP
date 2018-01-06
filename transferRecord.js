define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personaljs = require("./js/personal");
	var userid;
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

	Model.prototype.modelLoad = function(event){
		this.comp("title").set({
			title:lang.transferRecord[1]
		});
		$(this.getElementByXid("span1")).text(lang.transferRecord[15]);
		var recordData = this.comp("recordData");
		var record = personaljs.transRecord();
		if (record == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt(lang.showprompt[0]);
			return;
		}
		else if (record == true) {
			this.modelLoad(event);
			return;
		}				//静态数据库录入，数据获取，列设置
		if (record) {
			for (var i = 0; i <= record.length-1; i++) {
				var type;
				var another;
				if (record[i].payer_id == userid) {
					type = lang.transferRecord[8];
					another = record[i].receiver_id;
				}
				else if (record[i].receiver_id == userid) {
					type = lang.transferRecord[9];
					another = record[i].payer_id;
				}
				recordData.add({
					"id": record[i].id,
					"type": type,
					"money": record[i].money,
					"money_active": record[i].money_active,
					"money_limit": record[i].money_limit,
					"coins": record[i].coins,
					"another": record[i].another,
					"updated_at": record[i].updated_at,
				});
			}
		}
		else {
		this.showprompt(lang.transferRecord[0]);
		}

		$(this.getElementByXid("content1")).css("display","block");
	};
		//封装提示框--许鑫君
		Model.prototype.showprompt = function(text){
			justep.Util.hint(text,{
							"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
						});
						$(".x-hint").find("button[class='close']").hide();
		};
		Model.prototype.showtransferRecord = function(x){
			return lang.transferRecord[x];
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

	Model.prototype.modelActive = function(event){
		this.modelLoad(event);
	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.closePage();
	};

	Model.prototype.modelParamsReceive = function(event){
		userid = this.params.user_id;
	};

	return Model;
});
