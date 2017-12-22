define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("$UI/ZJP/js/config");
	var jwt = require("$UI/ZJP/js/jwt");

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
					console.log(Banded);
				},
				error:function(ero){//请求失败错误信息在ero里
					console.log(ero);
				}
			});
			return Banded;
		},

		cardDelete : function(card_id){//使用界面：bankBanding
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
				},
				error:function(ero){//请求失败错误信息在ero里
					console.log(ero);
				}
			});
		},

		cardAdding : function(username1,number1,bankname1){
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
				},
				error:function(ero){//请求失败错误信息在ero里
					console.log(ero);
				}
			});
		}

	};

});
