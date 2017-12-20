define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	return {
		//升单，复投---许鑫君
		upgrade_production:function(data){
			var return_val ;
			if (data['limit_money']<data['paymoney']) {
				data['active_money']=data['paymoney']-data['limit_money'];
			}
			else{
				data['limit_money']=data['limit_money']-data['paymoney'];
				data['active_money'] =0;
			}
			$.ajax({
				url:"http://127.0.0.1:8081/api/v1/contracts/upgrade",
				async:false,
				data:{contract_id:data["contract_id"],eggs:data['eggs'],pay_limit:data['limit_money'],pay_active:data['active_money']},
				dataType:"json",
				type:'POST',
				success:function(message){
					if (message.code !=undefined) {
						return_val = message;
						return_val.pay_limit=data['limit_money'];
						return_val.pay_active=data['active_money'];
					}
					else{
						return_val = 500;
					}
				},
				error:function(ero){
					config.log(ero);
				}
			});
			return return_val;
		},
		reinvestProduction:function(data){
			var return_val ;
			if (data['limit_money']<data['paymoney']) {
				data['active_money']=data['paymoney']-data['limit_money'];
			}
			else{
				data['limit_money']=data['limit_money']-data['paymoney'];
				data['active_money'] =0;
			}
			$.ajax({
				url:"http://127.0.0.1:8081/api/v1/contracts",
				async:false,
				data:{nest_id:data["nest_id"],eggs:data['eggs'],pay_limit:data['limit_money'],pay_active:data['active_money']},
				dataType:"json",
				type:'POST',
				success:function(message){
					if (message.code !=undefined) {
						return_val = message;
						return_val.pay_limit=data['limit_money'];
						return_val.pay_active=data['active_money'];
					}
					else{
						return_val = 500;
					}
				},
				error:function(ero){
					config.log(ero);
				}
			});
			return return_val;
		}
	}
});