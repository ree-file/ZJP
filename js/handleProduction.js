define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	return {
		//升单，复投---许鑫君
		upgrade_production:function(contract_id,rank,paymoney,action){
			$.ajax({
				url:"http://127.0.0.1:8081/api/v1/contracts/upgrade",
				async:false,
				data:{contract_id:contract_id,contract_rank:rank,paymoney:paymoney,action:action},
				dataType:"json",
				type:'POST',
				success:function(data){
					
				},
				error:function(ero){
					
				}
			});
		}
	}
});