define(function(){
	var justep = require("$UI/system/lib/justep");
	
	var $ = require("jquery");
//	var config = require('./config');
	return{
		setCommon:function(params){
			for(items in params){
				switch (items) {
				case "userId":
					justep.Shell.userId = justep.Bind.observable();
					justep.Shell.userId.set(params[items]);
					break;
				case "email":
					justep.Shell.email = justep.Bind.observable();
					justep.Shell.email.set(params[items]);
					break;
				case "eggval":
					justep.Shell.eggval = justep.Bind.observable();
					justep.Shell.eggval.set(params[items]);
					break;
				case "rate":
					justep.Shell.rate = justep.Bind.observable();
					justep.Shell.rate.set(params[items]);
					break;
				case "level":
					justep.Shell.level = justep.Bind.observable();
					justep.Shell.level.set(params[items]);
					break;
				case "notice":
					justep.Shell.notice = justep.Bind.observable();
					justep.Shell.notice.set(params[items]);
					break;
				default:
					break;
				}
			}
		},
		getCommon:function(config){
			var common = config.configegg();
			this.setCommon({eggval:common.egg_val,rate:common.rate,level:common.level_worth,notice:common.notice});
		},
		refreshCommon:function(){
			
		}
	}
	
});