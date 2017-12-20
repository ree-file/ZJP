define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("$UI/ZJP/js/config");

	return{
		cardBanded : function(){
			var Banded;
			$.ajax({
				url: config.site+"/api/v1/user/cards",//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'GET',//php获取类型
				success:function(data){//请求成功返回值存在data里
					Banded = data.data;
				},
				error:function(ero){//请求失败错误信息在ero里
					console.log(ero);
				}
			});
			return Banded;
		},

		cardAdding : function(username1,number1,bankname1){
			$.ajax({
				url:config.site+"/api/v1/cards",//php的api路径
				async:false,
				dataType:"json",
				data:{username:username1,bankname:bankname1,number:number1},//需要传递的数据
				type:'POST',//php获取类型
				success:function(data){//请求成功返回值存在data里
				},
				error:function(ero){//请求失败错误信息在ero里
					console.log(ero);
				}
			});
		}

	};

});
