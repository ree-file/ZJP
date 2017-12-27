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
		var picture = data.getValue("picture", row)
		var params = {
				"nation":nation,
				"number":number,
				"picture":picture
		};
		justep.Shell.showPage("main", params);
	};






	Model.prototype.button1Click = function(event){
		justep.Shell.closePage();
	};




	Model.prototype.input1Change = function(event){
		var keyInput = this.comp("input1").val();
		var data = this.comp("data1");
		var filter = "$row.val('englishName')!= null && $row.val('chineseName')!= null && $row.val('englishName').indexOf('"+keyInput+"')!= -1||$row.val('chineseName').indexOf('"+keyInput+"')!= -1";
		var list = this.comp('list1');
		list.set('filter',filter);
		list.refresh();


	};



	return Model;
});