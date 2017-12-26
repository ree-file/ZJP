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
					url : require.toUrl('./mailLogin.w')
				},
				"mailphone" : {
					url : require.toUrl('./main.w')
				},
				"selectNation" : {
					url : require.toUrl('./selectNation.w')
				},
				"ZJP_resetPassword" : {
					url : require.toUrl('./ZJP_resetPassword.w')
				},
				"bankAddind" : {
					url : require.toUrl('./bankAddind.w')
				},
				"bankBanding" : {
					url : require.toUrl('./bankBanding.w')
				},
				"CAPTCHA" : {
					url : require.toUrl('./CAPTCHA.w')
				},
				"community" : {
					url : require.toUrl('./community.w')
				},
				"illustrate" : {
					url : require.toUrl('./illustrate.w')
				},
				"market" : {
					url : require.toUrl('./market.w')
				},
				"nestMain" : {
					url : require.toUrl('./nestMain.w')
				},
				"particulars" : {
					url : require.toUrl('./particulars.w')
				},
				"personal" : {
					url : require.toUrl('./personal.w')
				},
				"transfermoney" : {
					url : require.toUrl('./transfermoney.w')
				},
				"versioninformation" : {
					url : require.toUrl('./transfermoney.w')
				},
				"wallet" : {
					url : require.toUrl('./wallet.w')
				},
				"ZJP_main" : {
					url : require.toUrl('./ZJP_main.w')
				},
				"ZJP_production" : {
					url : require.toUrl('./ZJP_production.w')
				},
			}
		})

	};

	Model.prototype.modelLoad = function(event){
		justep.Shell.showPage("main");
	};

	return Model;
});