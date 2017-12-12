define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	return{
		//获取巢的社区权限（子巢可以挂的范围）---许鑫君
		community_premission : function(nest_name){
			$.ajax({
				url:"",//php的api路径
				async:false,
				dataType:"json",
				data:{name:nest_name},//需要传递的数据
				type:GET,//php获取类型
				success:function(data){//请求成功返回值存在data里
					
				},
				error:function(ero){//请求失败错误信息在ero里
					
				}
			});
		}
	};
	
});