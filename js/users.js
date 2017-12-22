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
					}
					
				},
				error:function(){
					showprompt("请检查网络或者重新登录");
				}
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
					console.log(ero);
					showprompt("网络错误请重新登录");
				}
			});
			return is_live;
			
		},
		realsecondPassword:function(secondPassword){
			var is_real=true;
//			$.ajax({
//				url:"",
//				async:false,
//				dataType:"json",
//				data:{secondPassword:secondPassword},
//				type:"GET",
//				success:function(data){
//					is_real=true;
//				},
//				error:function(){
//					is_real = false;
//				}
//			});
			return is_real;
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
					console.log(ero);
					is_success = false;
				}
			});
			return is_success;
			
		}
	};
});