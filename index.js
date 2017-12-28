define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	var me;
	var base64 = require("$UI/system/lib/base/base64");
	var Model = function() {
		me=this;
		this.callParent();
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"main" : {
					url : require.toUrl('./ZJP_main.w')
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
				"eamillogin" : {
					url : require.toUrl('./mailLogin.w')
				},
				"ZJP_production" : {
					url : require.toUrl('./ZJP_production.w')
				},
			}
		})

	};
	Model.prototype.modelLoad = function(event){
		if (!localStorage.getItem("jwt_token")) {
			this.comp("windowDialog1").open();
		}
		
	};

	Model.prototype.windowDialog1Receive = function(event){
		if (event.data.data) {
			var token=localStorage.getItem("jwt_token");
			var ids = token.split(".");
			var id = JSON.parse(base64.decode(ids[1]));
			if (id&&event.data.email) {
				localStorage.setItem("thismyuserId", id.sub);
				localStorage.setItem("email", event.data.email);
			}
			this.comp("mainContainer").refresh();
			setTimeout(function(){
				me.comp("windowDialog1").close();
			}, 200);
			
			
		}
	};

	Model.prototype.windowDialog1Close = function(event){
//		 	event.source.
	};

	return Model;
});