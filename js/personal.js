define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("$UI/ZJP/js/config");

	return{
		getemail : function(){
			var useremail;
			$.ajax({
				url: config.site+"/api/v1/user",//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'GET',//php获取类型
				success:function(data){//请求成功返回值存在data里
					// console.log(data.data.email);
					useremail = data.data.email;
				},
				error:function(ero){//请求失败错误信息在ero里
					console.log(ero);
				}
			});
			return useremail;
		},

		money : function(){
			var moneyall;
			$.ajax({
				url: config.site+"/api/v1/user",//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'GET',//php获取类型
				success:function(data){//请求成功返回值存在data里
					moneyall = data.data;
				},
				error:function(ero){//请求失败错误信息在ero里
					console.log(ero);
				}
			});
			return moneyall;
		},

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
