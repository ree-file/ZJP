define(function(require){
	var justep = require("$UI/system/lib/justep");
	var $ = require('jquery');
	return{
		//获得我的active钱包和limit钱包
		getMymoney : function(){
			var money = [];

			$.ajax({
				url:"http://127.0.0.1:8081/api/v1/user",
				async:false,
				dataType:"json",
				type:"GET",
				success:function(data){
				
					
						money['active']=data.data.money_active;
						money['limit'] = data.data.money_limit;
					
				},
				error:function(){
					justep.Util.hint("网络出错，请重新登录")	;
				}
			});
			return money;
		},
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
			
		}
	}
});