define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("$UI/ZJP/js/config");

	return{
		getorders : function(){
			var allorders;
			$.ajax({
				url: config.site+"orders",//php的api路径
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
		//获得交易记录--许鑫君
		getTransactionRecord:function(){
			$.ajax({
				url:"",
				async:false,
				dataType:"json",
				type:"GET",
				success:function(){

				},
				error:function(){

				}
			});
		},
		//验证卖出的产品id是否存在--许鑫君
		checkProductionId:function(productionCode){
			var is_live;
			$.ajax({
				url:"",
				async:false,
				dataType:"json",
				type:"GET",
				success:function(data){
					is_live=true;
				},
				error:function(){
					is_live=false;
				}
			});
			return is_live;
		},
		//出售商品--许鑫君
		sellProduction:function(productionCode){
			var is_success;
			$.ajax({
				url:"",
				async:false,
				dataType:"json",
				type:"GET",
				success:function(data){
					is_success=true;
				},
				error:function(){
					is_success=false;
				}
			});
			return is_success;
		},
		//下架--许鑫君
		notSold:function(id){
			var is_success;
			$.ajax({
				url:"",
				async:false,
				dataType:"json",
				type:"GET",
				success:function(data){
					is_success=true;
				},
				error:function(){
					is_success=false;
				}
			});
			return is_success;
		},
	};

});
