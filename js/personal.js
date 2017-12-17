define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	return{
		personal : function(user_id){
			$.ajax({
				url:"http://zjp.app/api/v1/personal/personalInformation",//php的api路径
				async:false,
				dataType:"json",
				data:{user_id:user_id},//需要传递的数据
				type:'GET',//php获取类型
				success:function(data){//请求成功返回值存在data里
					console.log(data.data);
					return data.data;
				},
				error:function(ero){//请求失败错误信息在ero里
					console.log(ero);
				}
			});
		},
		
		money : function(user_id){
			$.ajax({
				url:"http://zjp.app/api/v1/personal/personalMoney",//php的api路径
				async:false,
				dataType:"json",
				data:{user_id:user_id},//需要传递的数据
				type:'GET',//php获取类型
				success:function(data){//请求成功返回值存在data里
					console.log(data.data);
					return data.data;
				},
				error:function(ero){//请求失败错误信息在ero里
					console.log(ero);
				}
			});
		}
		
	};
	
});