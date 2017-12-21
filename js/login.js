define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("./config");
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
			var is_success;
			$.ajax({
				url:config.site+"login",
				async:false,
				dataType:"json",
				data:{email:email,password:password},
				type:"POST",
				success:function(){
					is_success=true;
				},
				error:function(){
					is_success=false;
				}
			});
			return is_success;
		}
	};
});