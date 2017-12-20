define(function(require){
	var $ =require('jquery');
	return{
		site: "http://stabunkow.site",
		eggval : function () {
			$.ajax({
				url:"http://127.0.0.1:8081/api/v1/config/eggval",
				async:false,
				dataType:"json",
				type:"GET",
				success:function(data){
					console.log(data);
				},
				error:function(ero){
					console.log(ero);
				}
			});
		},
		configegg : function(){
			var config_egg = [];
			$.ajax({
				url:"http://127.0.0.1:8081/api/v1/config/egg",
				async:false,
				dataType:"json",
				type:"GET",
				success:function(data){
			
					config_egg = data;
				},
				error:function(ero){
					console.log(ero);
				}
			});
			return config_egg;
		}
	}
	
});

