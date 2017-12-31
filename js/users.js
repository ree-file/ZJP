define(function(require){
	var justep = require("$UI/system/lib/justep");
	var $ = require('jquery');

	var config = require('./config');
	var jwt = require("./jwt");
	function showprompt(text){
		justep.Util.hint(text,{
			"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
		});
		$(".x-hint").find("button[class='close']").hide();
	}
	return{
		
		resetsecondPassword:function(password,code){
			var is_success = false;
			var status = 0;
			do{
				status = this.resetsecondPasswordajax(password,code);
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
		resetsecondPasswordajax:function(password,code){
			var status =404;
			$.ajax({
				url:config.site+"private/reset-security-code",
				async:false,
				dataType:"json",
				type:"POST",
				data:{security_code:password,code:code},
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					if (data.status=="success") {
						status = 200;
					}
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
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
				}
			});
			return status;
		},
		forgetsecondpassword:function(){
			var is_success = false;
			var status = 0;
			do{
				status = this.forgetsecondpasswordajax();
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
		forgetsecondpasswordajax:function(){
			var status =404;
			$.ajax({
				url:config.site+"private/forget-security-code",
				async:false,
				dataType:"json",
				type:"post",
				data:{},
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					if (data.status=="success") {
						status = 200;
					}
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
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
				}
			});
			return status;
		},
		resetPassword:function(password,code,email){
			var is_success =false;
			$.ajax({
				url:config.site+"reset-password",
				async:false,
				dataType:"json",
				type:"POST",
				data:{password:password,code:code,email:email},
				success:function(data){
					is_success=true;
				},
				error:function(){
					is_success = false;
				}
			});
			return is_success;
		},
		forgetpassword:function(email){
			var is_success =false;
			$.ajax({
				url:config.site+"forget-password",
				async:false,
				dataType:"json",
				type:"post",
				data:{email:email},
				success:function(data){
					is_success=true;
				},
				error:function(){
					is_success = false;
				}
			});
			return is_success;
		},
		
		//获取用户信息（各个钱包金额）--许鑫君
		getUserMessage:function(){
			var worthInfo;
			do{
				worthInfo=[];
				var result1 = this.getUserMessageajax();
				if (typeof(result1)!="number") {
					
						worthInfo=result1;
					
				}
				else{
					worthInfo=undefined;
				}

			}while(result1==500);
				
			return worthInfo;
		},
		getUserMessageajax:function(){
			var worthInfo=[];
			var status =404;
			$.ajax({
				url:config.site+"private",
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					//对data进行处理得到三部分钱包金额，
					if (data.status=="success") {
						worthInfo['market'] = parseFloat(data.data.money_market);
						worthInfo['limit'] = parseFloat(data.data.money_limit);
						worthInfo['active'] =  parseFloat(data.data.money_active);
						worthInfo['all'] = worthInfo['market']+worthInfo['limit']+parseFloat(data.data.money_active);
						localStorage.setItem("thismyuserId", data.data.id);
					}
					status =200;
				},
				error:function(ero){
					
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {

						if(jwt.authRefresh()){
							status =500;
						}
						else
						{
							status =404;
						}

					}
					else if(responseText.message=="No token provided."){
						status =404;
					}
					
				}
			});
			if (status ==200) {
				return worthInfo;//包含了active，limit，market三部分钱
			}
			else{
				return status;
			}
		},
		checksecondPassword:function(password){
			var is_success = false;
			var status = 0;
			do{
				status = this.checksecondPasswordajax(password);
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
		checksecondPasswordajax:function(){
			var status =404;
			$.ajax({
				url:config.site+"private",
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
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
				}
			});
			return status;

		},
		setSecondPassword:function(password){
			var is_success = false;
			var status = 0;
			do{
				status = this.setSecondPasswordajax(password);
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
		setSecondPasswordajax:function(password){
			var status =404;
			$.ajax({
				url:config.site+"private/store-security-code",
				async:false,
				dataType:"json",
				type:"POST",
				data:{security_code:password},
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
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
				}
			});
			return status;
		},


	};
});
