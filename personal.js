define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ifhid = 0;

	var Model = function(){
		this.callParent();
	};

	Model.prototype.row1Click = function(event){
		if(ifhid == 0){
			$(this.getElementByXid("hidRow")).show();
			ifhid = 1;
		}
		else {
			$(this.getElementByXid("hidRow")).hide();
			ifhid = 0;
		}
	};

	Model.prototype.modelActive = function(event){
	};

	Model.prototype.modelLoad = function(event){
		$(this.getElementByXid("hidRow")).hide();
		$(this.getElementByXid("bandNameInput")).hide();//姓名输入框绑定
		$(this.getElementByXid("bandNameBtn")).hide();//姓名输入框绑定
	};

	return Model;
});
