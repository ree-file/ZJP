define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("./config");
	var jwt = require('./jwt');
	function showprompt(text){
		justep.Util.hint(text,{	
			"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
		});
		$(".x-hint").find("button[class='close']").hide();
	}
	return{
		withdrawFromcontract:function(money,id,password){
			var is_success;
			$.ajax({
				url:config.site+"contracts/"+id+"/extract",
				async:false,
				dataType:"json",
				type:"patch",
				data:{extract:money,security_code:password},
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){
					is_success=true;
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.sellProduction(productionId,price);
					}
					else if(responseText.message=="Extract today to reach the maximum.")
					{
						showprompt("超出当前记录当天所提上线");
					}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage("mian");
					}
				}.bind(this)
			});
			return is_success;
		}
		
	}
});