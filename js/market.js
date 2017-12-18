define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("$UI/ZJP/js/config");

	return{
		getorders : function(){
			var allorders;
			$.ajax({
				url: config.site+"/api/v1/orders",//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'GET',//php获取类型
				success:function(data){//请求成功返回值存在data里
					console.log(data.data);
				},
				error:function(ero){//请求失败错误信息在ero里
					console.log(ero);
				}
			});
		},
	};

});
