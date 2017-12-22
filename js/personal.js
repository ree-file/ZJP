define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("$UI/ZJP/js/config");
	var jwt = require("$UI/ZJP/js/jwt");

	function showprompt(text){
		justep.Util.hint(text,{
			"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
		});
		$(".x-hint").find("button[class='close']").hide();
	}

	return{
		getemail : function(){
			var useremail;
			$.ajax({
				url: config.site+"private",//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'GET',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					// console.log(data.data.email);
					useremail = data.data.email;
				},
				error:function(jqXHR, textStatus, errorThrown){//请求失败错误信息在ero里
					if (jqXHR.responseJSON && jqXHR.responseJSON.message == 'Token expired.') {
            		if (jwt.authRefresh()) {
            			this.getUser(); // 重新调用自己再次访问
            		} else {
            			// 导向登录页面
            		}
	            }
	        }.bind(this),
			});
			return useremail;
		},

		changePassword : function(password,new_password){
			$.ajax({
				url: config.site+"private/change-password",//php的api路径
				async:false,
				dataType:"json",
				data:{password:password,new_password:new_password},//需要传递的数据
				type:'post',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					showprompt('修改成功');
				},
				error:function(jqXHR, textStatus, errorThrown){//请求失败错误信息在ero里
					showprompt('修改失败');
					if (jqXHR.responseJSON && jqXHR.responseJSON.message == 'Token expired.') {
            		if (jwt.authRefresh()) {
            			this.getUser(); // 重新调用自己再次访问
            		} else {
            			// 导向登录页面
            		}
	            }
	        }.bind(this),
			});
		},

		money : function(){
			var moneyall;
			$.ajax({
				url: config.site+"private",//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'GET',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					moneyall = data.data;
				},
				error:function(jqXHR, textStatus, errorThrown){//请求失败错误信息在ero里
					if (jqXHR.responseJSON && jqXHR.responseJSON.message == 'Token expired.') {
            		if (jwt.authRefresh()) {
            			this.getUser(); // 重新调用自己再次访问
            		} else {
            			// 导向登录页面
            		}
	            }
					// if (jqXHR.responseJSON.message == ) {
					//
					// }
	        }.bind(this)
			});
			return moneyall;
		},

		transferMoney : function(pay,type,security_code){
			$.ajax({
				url: config.site+"private/transfer-money",//php的api路径
				async:false,
				dataType:"json",
				data:{pay:pay,type:type,security_code:security_code},//需要传递的数据
				type:'post',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					showprompt('转账成功');
				},
				error:function(jqXHR, textStatus, errorThrown){//请求失败错误信息在ero里
					showprompt('转账失败');
					if (jqXHR.responseJSON && jqXHR.responseJSON.message == 'Token expired.') {
            		if (jwt.authRefresh()) {
            			this.getUser(); // 重新调用自己再次访问
            		} else {
            			// 导向登录页面
            		}
	            }
	        }.bind(this),
			});
		},

		supplies : function(money,type,card_number,message){
			$.ajax({
				url: config.site+"supplies",//php的api路径
				async:false,
				dataType:"json",
				data:{money:money,type:type,card_number:card_number,message:message},//需要传递的数据
				type:'post',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					showprompt('提交成功');
				},
				error:function(jqXHR, textStatus, errorThrown){//请求失败错误信息在ero里
					showprompt('提交失败');
					if (jqXHR.responseJSON && jqXHR.responseJSON.message == 'Token expired.') {
            		if (jwt.authRefresh()) {
            			this.getUser(); // 重新调用自己再次访问
            		} else {
            			// 导向登录页面
            		}
	            }
	        }.bind(this),
			});
		},

	};

});
