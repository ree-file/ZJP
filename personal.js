define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ifhid = 0;
	var pwState = false;

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

	Model.prototype.button6Click = function(event){
	};

	Model.prototype.showhidBtnClick = function(event){
		var pw1 = $(this.getElementByXid("pswInput1"));
		var pw2 = $(this.getElementByXid("pswInput2"));
		if (!pwState) {
			pw1.attr("type","text");
			pw2.attr("type","text");
      pwState = true;
    } else {
      pw1.attr("type","password");
      pw2.attr("type","password");
      pwState = false;
    }
	};

	return Model;
});
