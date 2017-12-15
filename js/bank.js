define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	return{
		banked : function(username){
			$.ajax({
				url:"http://zjp.app/api/v1/bank/banked",//php的api路径
				async:false,
				dataType:"json",
				data:{username:"yd"},//需要传递的数据
				type:'GET',//php获取类型
				success:function(data){//请求成功返回值存在data里
					return data.data;
				},
				error:function(ero){//请求失败错误信息在ero里
					console.log(ero);
				}
			});
		}
	};
	
});