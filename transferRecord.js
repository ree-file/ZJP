define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personaljs = require("./js/personal");
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
				var status;
				if (record[i].type == "save") {
					type = "充值";
				}
				else if (record[i].type == "get") {
					type = "提现";
				}
				if (record[i].status == "processing") {
					status = "处理中";
				}
				else if (record[i].status == "accepted") {
					status = "成功";
				}
				else if (record[i].status == "rejected") {
					status = "失败";
				}
				recordData.add({
					"id": record[i].id,
					"type": type,
					"card_number": record[i].card_number,
					"bankname": record[i].message,
					"money": record[i].money,
					"status": status,
					"updated_at": record[i].updated_at,
				});
			}
		}
		else {
		this.showprompt(lang.transferRecord[0]);
		}
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

	return Model;
});
