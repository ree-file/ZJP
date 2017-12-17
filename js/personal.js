define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("$UI/ZJP/js/config");

	return{
		changepassword : function(password){
			$.ajax({
				url: config.site+"/api/v1/password",//php的api路径
				async:false,
				dataType:"json",
				data:{password:password},//需要传递的数据
				type:'post',//php获取类型
				success:function(data){//请求成功返回值存在data里
				},
				error:function(ero){//请求失败错误信息在ero里
					console.log(ero);
				}
			});
		},
	};

});
