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
					console.log(Banded);
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
					showprompt('删除成功');
				},
				error:function(jqXHR, textStatus, errorThrown){//请求失败错误信息在ero里
					showprompt('删除失败');
					if (jqXHR.responseJSON && jqXHR.responseJSON.message == 'Token expired.') {
            		if (jwt.authRefresh()) {
            			this.getUser(); // 重新调用自己再次访问
            		} else {
            			// 导向登录页面
            		}
	            }
	        }.bind(this),
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
					showprompt('审核会在1~2个工作日得到答复');
				},
				error:function(jqXHR, textStatus, errorThrown){//请求失败错误信息在ero里
					showprompt('添加失败');
					if (jqXHR.responseJSON && jqXHR.responseJSON.message == 'Token expired.') {
            		if (jwt.authRefresh()) {
            			this.getUser(); // 重新调用自己再次访问
            		} else {
            			// 导向登录页面
            		}
	            }
	        }.bind(this),
			});
		}

	};

});
