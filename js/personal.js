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
			var user;
			$.ajax({
				url: config.site+"private/user",//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'GET',//php获取类型
		        headers: {
		            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
		        },
				success:function(data){//请求成功返回值存在data里
					user = data.data;
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						if(jwt.authRefresh()){
							user =true;
						}
						else
						{
							user=undefined;
						}
					}
					else if(responseText.message=="No token provided."){
						user=undefined;
					}
					else{
						user=undefined;
					}
	        }.bind(this),
			});
			return user;
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
				url: config.site+"private/user",//php的api路径
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

		transferMoney : function(money,user_id,security_code){
			var is_success =0;
			$.ajax({
				url: config.site+"transfer",//php的api路径
				async:false,
				dataType:"json",
				data:{money:money,user_id:user_id,security_code:security_code},//需要传递的数据
				type:'post',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					showprompt(lang.personaljs[1]);
					is_success = 2;
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {

						if(jwt.authRefresh()){
							is_success = 1;
						}
						else
						{
							is_success = -1;
						}
					}
					else if(responseText.message=="No token provided."){
						is_success = -1;
					}
					else if(responseText.message=="Wrong security code.")
					{
						showprompt(lang.showprompt[59]);
					}
					else{
						showprompt(lang.personaljs[2]);
					}
	        }.bind(this),
			});
			return is_success;
		},
		//提现
		suppliesget : function(money,card_number,security_code,message){
			var is_success =false;
			$.ajax({
				url: config.site+"withdraw",//php的api路径
				async:false,
				dataType:"json",
				data:{money:money,card_number:card_number,security_code:security_code,message:message},//需要传递的数据
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
					else if(responseText.message=="Wrong security code.")
					{
						showprompt(lang.showprompt[59]);
					}
					else{
						showprompt(lang.showprompt[67]);
					}
	        }.bind(this),
			});
			return is_success;
		},
		//充值
		supplies : function(formdata){
			var is_success =false;
			$.ajax({
				url: config.site+"recharge",//php的api路径
				async:false,
				dataType:"json",
				data:formdata,//需要传递的数据
				type:'post',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
        processData: false,  // 告诉jQuery不要去处理发送的数据
        contentType: false,
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
					else if(responseText.message=="Wrong security code.")
					{
						showprompt(lang.showprompt[59]);
					}
					else if(responseText.message=="The card number field is required.")
					{
						showprompt(lang.showprompt[66]);
					}
					else{
						// is_success=undefined;
					}
	        }.bind(this),
			});
			return is_success;
		},

		transRecord : function(){
			var record =false;
			$.ajax({
				url: config.site+"private/transfer-records",//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'get',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					record = data.data;
					console.log(record);
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
					else if(responseText.message=="Wrong security code.")
					{
						showprompt(lang.showprompt[59]);
					}
					else{
						showprompt(lang.personaljs[5]);
					}
	        }.bind(this),
			});
			return record;
		},

	};
});
