define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};
	
	function change(){
		this.value=this.value.replace(/\D/g,'').replace(/....(?!$)/g,'$& ');//四个字符替代谓四个字符一个空格
	}
	
	Model.prototype.modelActive = function(event){
		var t=this.getElementById("cardidInput");
		t.onkeydown=change;
		t.onkeyup=change;
		t.onkeypress=change;
	};
	
	Model.prototype.cardidInputChange = function(event){
		var t=$(this.getElementByXid("cardidInput"));
		t.onkeydown=change;
		t.onkeyup=change;
		t.onkeypress=change;
	};
	
	Model.prototype.cardidInputBlur = function(event){
		var t=$(this.getElementByXid("cardidInput"));
		t.onkeydown=change;
		t.onkeyup=change;
		t.onkeypress=change;
	};
	
	return Model;
});