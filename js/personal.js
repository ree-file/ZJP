define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("$UI/ZJP/js/config");
	var jwt = require("$UI/ZJP/js/jwt");
	var lang;
	if(localStorage.getItem("lang")=="en_us")
	{
		lang = require('./en_us');
	}
	else{
		lang = require('./zh_cn');
	}

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
					useremail = data.data.email;
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						if(jwt.authRefresh()){
							useremail =true;
						}
						else
						{
							useremail=undefined;
						}
					}
					else if(responseText.message=="No token provided."){
						useremail=undefined;
					}
					else{
						useremail=undefined;
					}
	        }.bind(this),
			});
			return useremail;
		},

		changePassword : function(password,new_password){
			var is_success =false;
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
					showprompt(lang.personaljs[0]);
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {

						if(jwt.authRefresh()){
							is_success =true;
						}
						else
						{
							is_success=undefined;
						}

					}
					else if(responseText.message=="No token provided."){
						is_success=undefined;
					}
					else{
						is_success=undefined;
					}
	        }.bind(this),
			});
			return is_success;
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
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {

						if(jwt.authRefresh()){
							moneyall = true;
						}
						else
						{
							moneyall=undefined;
						}

					}
					else if(responseText.message=="No token provided."){
						moneyall=undefined;
					}
					else{
						moneyall=undefined;
					}
	        }.bind(this)
			});
			return moneyall;
		},

		transferMoney : function(pay,type,security_code){
			var is_success =false;
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
					showprompt(lang.personaljs[1]);
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {

						if(jwt.authRefresh()){
							is_success =true;
						}
						else
						{
							is_success=undefined;
						}

					}
					else if(responseText.message=="No token provided."){
						is_success=undefined;
					}
					else{
						showprompt(lang.personaljs[2]);
					}
	        }.bind(this),
			});
			return is_success;
		},

		supplies : function(money,type,card_number,message){
			var is_success =false;
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
					showprompt(lang.personaljs[3]);
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {

						if(jwt.authRefresh()){
							is_success =true;
						}
						else
						{
							is_success=undefined;
						}

					}
					else if(responseText.message=="No token provided."){
						is_success=undefined;
					}
					else{
						is_success=undefined;
					}
	        }.bind(this),
			});
			return is_success;
		},

		transRecord : function(money,type,card_number,message){
			var record =false;
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
					record = data.data;
					console.log(record);
					showprompt(lang.personaljs[4]);
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {

						if(jwt.authRefresh()){
							record =true;
						}
						else
						{
							record=undefined;
						}

					}
					else if(responseText.message=="No token provided."){
						record=undefined;
					}
					else{
						record=undefined;
					}
	        }.bind(this),
			});
			return record;
		},

	};
});
