define(function(require){
	var justep = require("$UI/system/lib/justep");
	var $ =require('jquery');

	return{
		site: "http://www.bottsm.com/api/v1/",
		configegg : function(){
			var config_egg = {};
			config_egg.level_worth=[];
			$.ajax({
				url:this.site+"common",
				async:false,
				dataType:"json",
				type:"GET",
				success:function(data){
					for(var attr in data.data){
						if (attr == "EGG_VAL") {
							config_egg.egg_val = data.data[attr];
						}
						if(attr.indexOf("CONTRACT_LEVEL_")!=-1){
							config_egg.level_worth[config_egg.level_worth.length]=data.data[attr];
						}
						if (attr == "USD_TO_CNY") {
							config_egg.rate = data.data[attr];
						}
					}
				},
				error:function(ero){
					console.log(ero);
				}
			});
			return config_egg;
		}

	};
	
});


