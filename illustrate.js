define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
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

	Model.prototype.backBtnClick = function(event){
		justep.Shell.closePage();
	};

	Model.prototype.modelLoad = function(event){
		this.comp("titile").set({
			title:lang.illustrate[0]
		});
		$(this.getElementByXid("span1")).html(lang.illustrate[1]);
		$(this.getElementByXid("span3")).html(lang.illustrate[2]);
	};

	return Model;
});