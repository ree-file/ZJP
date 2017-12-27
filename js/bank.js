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
		cardBanded : function(){//使用界面：bankBanding
			var Banded;
			$.ajax({
				url: config.site+"private/cards",//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'GET',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					Banded = data.data;
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {

						if(jwt.authRefresh()){
							this.resetsecondPassword(password,code);
						}
						else
						{
							Banded=undefined;
						}

					}
					else if(responseText.message=="No token provided."){
						Banded=undefined;
					}
					else{
						Banded=undefined;
					}
	        }.bind(this),
			});
			return Banded;
		},

		cardDelete : function(card_id){//使用界面：bankBanding
			var is_success =false;
			$.ajax({
				url: config.site+"cards/"+card_id,//php的api路径
				async:false,
				dataType:"json",
				data:{
					"_method": "DELETE"
				},//需要传递的数据
				type:'delete',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					is_success =true;
					showprompt('删除成功');
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {

						if(jwt.authRefresh()){
							this.resetsecondPassword(password,code);
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

		cardAdding : function(username1,number1,bankname1){
			var is_success =false;
			$.ajax({
				url:config.site+"cards",//php的api路径
				async:false,
				dataType:"json",
				data:{username:username1,bankname:bankname1,number:number1},//需要传递的数据
				type:'POST',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					is_success =true;
					showprompt('添加成功');
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {

						if(jwt.authRefresh()){
							this.resetsecondPassword(password,code);
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
		}

	};

});
