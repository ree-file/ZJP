define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	return {
		//升单，复投---许鑫君
		upgrade_production:function(name,rank,paymoney,action){
			$.ajax({
				url:"",
				async:false,
				data:{name:name,rank:rank,paymoney:paymoeny,action:action},
				dataType:"json",
				type:POST,
				success:function(data){
					
				},
				error:function(ero){
					
				}
			});
		}
	}
});