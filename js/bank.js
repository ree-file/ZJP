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
							Banded = true;
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
					showprompt(lang.showprompt[55]);
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						if(jwt.authRefresh()){
							is_success = true;
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
					showprompt(lang.showprompt[56]);
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {

						if(jwt.authRefresh()){
							is_success = true;
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
						showprompt(lang.showprompt[57]);
					}
	        }.bind(this),
			});
			return is_success;
		},
		getCNYrate:function(){
			var CNY;
			$.ajax({
				url:"https://api.fixer.io/latest?base=USD",
				async:false,
				timeout:1000,
				dataType:"json",
				type:"get",
				data:{},
				success:function(data){
					CNY=data.rates.CNY;
				},
				error:function(ero){
					
				},
				complete:function(XMLHttpRequest,status)
				{ //请求完成后最终执行参数
					if(status=='timeout')
					{//超时,status还有success,error等值的情况
						CNY=6.5;
					}
				}

			});
			return CNY;
		}

	};

});
