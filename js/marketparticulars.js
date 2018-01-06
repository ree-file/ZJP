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

	return{               //订单详情页面
		nests : function(nest_id){
			var nestparticulars;
			$.ajax({
				url:config.site+"nests/"+nest_id,//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'get',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					nestparticulars = data.data;
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						if(jwt.authRefresh()){
							nestparticulars =true;
						}
						else
						{
							nestparticulars=undefined;
						}
					}
					else if(responseText.message=="No token provided."){
						nestparticulars=undefined;
					}
					else{
						nestparticulars=undefined;
					}
	        }.bind(this),
			});
			return nestparticulars;
		},

		contracts : function(nest_id){
			var contractsparticulars;
			$.ajax({
				url:config.site+"nests/"+nest_id+"/contracts",//php的api路径
				async:false,
				dataType:"json",
				data:{},//需要传递的数据
				type:'get',//php获取类型
        headers: {
            "Authorization" : "Bearer " + jwt.getToken() // 带入验证头部
        },
				success:function(data){//请求成功返回值存在data里
					contractsparticulars = data.data;
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						if(jwt.authRefresh()){
							contractsparticulars =true;
						}
						else
						{
							contractsparticulars=undefined;
						}
					}
					else if(responseText.message=="No token provided."){
						contractsparticulars=undefined;
					}
					else{
						contractsparticulars=undefined;
					}
	        }.bind(this),
			});
			return contractsparticulars;
		},

	};

});
