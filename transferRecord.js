define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personaljs = require("./js/personal");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		var recordData = this.comp("recordData");
		var record = personaljs.transRecord();
		if (record == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt("请重新登录");
			return;
		}
		else if (record == true) {
			this.modelLoad(event);
			return;
		}				//静态数据库录入，数据获取，列设置
		for (var i = 0; i <= record.length-1; i++) {
			recordData.add({
				"id": record[i].id,
				"username": record[i].username,
				"number": record[i].number,
				"bankname": record[i].bankname,
				"image" : "images/bankimg/"+record[i].bankname+".png"
			});
		}

	};

	return Model;
});
