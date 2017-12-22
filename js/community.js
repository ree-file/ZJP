define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("$UI/ZJP/js/config");
	var jwt = require("$UI/ZJP/js/jwt");

	return{
		gaynumber : function(nest_id){//使用界面：community
			var usernest;
			$.ajax({
				url: config.site+"nests/"+nest_id,//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'GET',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					usernest=data.data;
				},
				error:function(jqXHR, textStatus, errorThrown){//请求失败错误信息在ero里
					if (jqXHR.responseJSON && jqXHR.responseJSON.message == 'Token expired.') {
            		if (jwt.authRefresh()) {
            			this.getUser(); // 重新调用自己再次访问
            		} else {
            			// 导向登录页面
            		}
	            }
	        }.bind(this),
			});
			return usernest;
		},


	};
});
