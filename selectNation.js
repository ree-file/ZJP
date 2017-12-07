define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var me;
	
	var Model = function(){
		this.callParent();
		me = this;
	};
	//图片路径转换
	Model.prototype.getImageUrl = function(url){
		return require.toUrl(url);
	};

	Model.prototype.row1Click = function(event){
		var data = this.comp("data1");
		var row = event.bindingContext.$object;
		var nation = data.getValue("nation", row);
		var number = data.getValue("number", row);
		var params = {
				"nation":nation,
				"number":number
		};
		justep.Shell.showPage("main", params);
	};






	Model.prototype.button1Click = function(event){
		history.back();
	};






	return Model;
});