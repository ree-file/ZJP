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
			var is_success =false;
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
					is_success=true;
				},
				error:function(){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.resetPassword(password,code);
					}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
			});
			return is_success;
		},
		forgetsecondpassword:function(){
			var is_success =false;
			$.ajax({
				url:config.site+"private/forget-security-code",
				async:false,
				dataType:"json",
				type:"get",
				data:{},
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					is_success=true;
				},
				error:function(){
					is_success = false;
				}
			});
			return is_success;
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
				type:"get",
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
		//判断某个用户是否存在--许鑫君
		userlive:function(name){
			var is_live =true;
			$.ajax({
				url:"http://127.0.0.1:8081/api/v1/user/live",
				async:false,
				dataType:"json",
				type:"GET",
				data:{email:name},
				success:function(data){
					
				},
				error:function(){
					is_live = false;
				}
			});
			return is_live;
			
		},
		//获取用户信息（各个钱包金额）--许鑫君
		getUserMessage:function(){
			var worthInfo=[];
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
					
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.getUserMessage();
					}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
			});
			return worthInfo;//包含了active，limit，market三部分钱
		},
		checksecondPassword:function(){
			var is_live = true;
			$.ajax({
				url:config.site+"private",
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					if (!data.data.has_security_code) {
						is_live=false;
					}
					
				},
				error:function(ero){

					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.checksecondPassword();
					}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
			});
			return is_live;
			
		},
		setSecondPassword:function(password){
			var is_success = true;
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
					if(data.status != "success")
					{
						var is_success = false;
					}
				},
				error:function(ero){

					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.setSecondPassword();
					}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
			});
			return is_success;
			
		},
		

	};
});