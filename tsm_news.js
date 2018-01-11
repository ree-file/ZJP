define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var common = require("./js/mycommon");
	var config = require("./js/config");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		if (!justep.Shell.notice) {
			common.getCommon(config);
		}
		$("p").text(justep.Shell.notice.latestValue);
	};

	return Model;
});