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
	var lang;
	if(localStorage.getItem("lang")=="en_us")
	{
		lang = require('./en_us');
	}
	else{
		lang = require('./zh_cn');
	}
	return{
		withdrawFromcontract:function(money,id,password){
			var is_success = false;
			var status = 0;
			do{
				status = this.withdrawFromcontractajax(money,id,password);
				switch (status) {
				case 200:
					is_success = true;
					break;
				case 404:
					is_success = undefined;
					break;
				default:
					break;
				}
			}while(status ==500);
			return is_success;
		},
		withdrawFromcontractajax:function(money,id,password){
			var status=400;
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
					if (data.status=="success") {
						status = 200;
					}
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						if(jwt.authRefresh()){
							status = 500;
						}
						else
						{
							status = 404;
						}
						
					}
					else if(responseText.message=="No token provided."){
						status = 404;
					}
					else if(responseText.message=="This action is unauthorized.")
					{
						showprompt(lang.showprompt[59]);
					}
					else if(responseText.message=="Wrong security code.")
					{
						showprompt(lang.showprompt[60]);
					}
				}
			});
			return status;
		}
		
	}
});