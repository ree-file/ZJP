define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var me;
	
	var Model = function(){
		this.callParent();
		me = this;
	};

	Model.prototype.input5Focus = function(event){
		$(this.getElementByXid("input5")).css("border-color","#5D92E2");
		$(this.getElementByXid("input5")).css("border-width","0px 0px 2px 0px");
		

	};

	Model.prototype.input5Blur = function(event){
		$(this.getElementByXid("input5")).css("border-color","#FFFFFF");
		$(this.getElementByXid("input5")).css("border-width","0px 0px 1px 0px");

	};

	Model.prototype.input6Focus = function(event){
		$(this.getElementByXid("input6")).css("border-color","#5D92E2");
		$(this.getElementByXid("input6")).css("border-width","0px 0px 2px 0px");

	};

	Model.prototype.input6Blur = function(event){
		$(this.getElementByXid("input6")).css("border-color","#FFFFFF");
		$(this.getElementByXid("input6")).css("border-width","0px 0px 1px 0px");
	};

	Model.prototype.password1Focus = function(event){
		$(this.getElementByXid("password1")).css("border-color","#5D92E2");
		$(this.getElementByXid("password1")).css("border-width","0px 0px 2px 0px");
	};

	Model.prototype.password1Blur = function(event){
		$(this.getElementByXid("password1")).css("border-color","#FFFFFF");
		$(this.getElementByXid("password1")).css("border-width","0px 0px 1px 0px");
	};

	Model.prototype.button3Click = function(event){
		justep.Shell.showPage("mailLogin");

	};

	Model.prototype.col9Click = function(event){
		justep.Shell.showPage("selectNation");

	};
	
	Model.prototype.getImageUrl = function(url){
		return require.toUrl(url);
	};

	Model.prototype.modelParamsReceive = function(event){
		var nation = this.params.nation;
		var number = this.params.number;
		var picture = this.params.picture; 
		var data = this.comp("data1");
		var options = {
				 defaultValues : [
				        {nation:nation,number:number,picture:picture}
				 ]
		 };
		if(nation && number && picture){
			data.newData(options);
		}
		
//		var json = '{'+'"'+'number'+'"'+':'+'"'+number+'"'+','+'"'+'nation'+'"'+':'+'"'+nation+'"'+'}';
//		if(nation && number){
//			var data = JSON.parse(json);
//			this.comp("data1").loadData(data);
//		}
	};



	Model.prototype.col2Click = function(event){
		justep.Shell.showPage("resetPassword");

	};



	return Model;
});