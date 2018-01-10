define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("./config");
	var jwt = require("./jwt");
	function showprompt(text){
		justep.Util.hint(text,{
			"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
		});
		$(".x-hint").find("button[class='close']").hide();
	}
	return {
		phoneNumberIsLive:function(number){
			var is_live;
			$.ajax({
				url:"",
				async:false,
				dataType:"json",
				data:{phonenumber:number},
				type:"GET",
				success:function(){
					is_live=true;
				},
				error:function(){
					is_live=false;
				}
			});
			return is_live;
		},
		phonelogin:function(phonenumber,password){
			var is_success;
			$.ajax({
				url:"",
				async:false,
				dataType:"json",
				data:{phonenumber:phonenumber,password:password},
				type:"GET",
				success:function(){
					is_success=true;
				},
				error:function(){
					is_success=false;
				}
			});
			return is_success;
		},
		emailIsLive:function(email){
			var is_live;
			$.ajax({
				url:"",
				async:false,
				dataType:"json",
				data:{email:email},
				type:"GET",
				success:function(){
					is_live=true;
				},
				error:function(){
					is_live=false;
				}
			});
			return is_live;
		},
		emaillogin:function(email,password){
			var is_success=false;
			$.ajax({
				url:config.site+"login",
				async:false,
				dataType:"json",
				data:{email:email,password:password},
				type:"POST",
				success:function(data){
					is_success=true;
					localStorage.setItem("thismyuserId", data.data.id);
					jwt.setToken(data.data.jwt_token);
				},
				error:function(ero){
					is_success=undefined;
					responseText = JSON.parse(ero.responseText);
					
					 if(responseText.message=="Freezed."){
						showprompt("账号已冻结（Freezed）");
					}
					 else if(responseText.message=="Unauthroized"){
						 showprompt("账号或者密码错误");
					 }
					 
					
				}
				
			});
			return is_success;
		}
	};
});