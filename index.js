define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');

	var Model = function() {
		this.callParent();
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"main" : {
					url : require.toUrl('./main.w')
				},
				"mailLogin" : {
					url : require.toUrl('./mailLogin.w')
				},
				"selectNation" : {
					url : require.toUrl('./selectNation.w')
				},
				"resetPassword" : {
					url : require.toUrl('./resetPassword.w')
				}
				
				
				
			}
		})

	};

	Model.prototype.modelLoad = function(event){
		justep.Shell.showPage("main");
	};

	return Model;
});