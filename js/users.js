define(function(require){
	var justep = require("$UI/system/lib/justep");
	var $ = require('jquery');
	function showprompt(text){
		justep.Util.hint(text,{	
			"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
		});
		$(".x-hint").find("button[class='close']").hide();
	}
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
					showprompt("网络出错请重新登录");
				}
			});
			return money;
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
			var worthInfo;
			$.ajax({
				url:"",
				async:false,
				dataType:"json",
				type:"GET",
				success:function(data){
					//对data进行处理得到三部分钱包金额，
					worthInfo = data;
				},
				error:function(){
					showprompt("请检查网络或者重新登录");
				}
			});
			return worthInfo;//包含了active，limit，market三部分钱
		},
		checksecondPassword:function(){
			var is_live;
			$.ajax({
				url:"",
				async:false,
				dataType:"json",
				type:"GET",
				success:function(data){
					is_live=true;
				},
				error:function(){
					is_live = false;
				}
			});
			return is_live;
			
		},
		realsecondPassword:function(secondPassword){
			var is_real;
			$.ajax({
				url:"",
				async:false,
				dataType:"json",
				data:{secondPassword:secondPassword},
				type:"GET",
				success:function(data){
					is_real=true;
				},
				error:function(){
					is_real = false;
				}
			});
			return is_real;
		}
	};
});