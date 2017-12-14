define(function(require){
	
	var $ = require('jquery');
	return{
		//获得我的active钱包和limit钱包
		getMymoney : function(){
			var money = [];
			$.ajax({
				url:"http://127.0.0.1:8081/api/v1/user/money",
				async:false,
				dataType:"json",
				type:"GET",
				success:function(data){
					if (data.length!=0) {
						money['active']=data[0].money_active;
						money['limit'] = data[0].money_limit;
					}
				},
				error:function(){
					
				}
			});
			return money;
		}
	}
});