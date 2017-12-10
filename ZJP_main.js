define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};

	

	Model.prototype.AccountDataCustomRefresh = function(event){
		var data =[{
			id:1,
			earning_name:"日常孵化",
			earning_num:324,
			proportion:33.3
		},
		{
			id:2,
			earning_name:"一号社区加速",
			earning_num:324,
			proportion:33.3
		},
		{
			id:3,
			earning_name:"市场收益",
			earning_num:324,
			proportion:33.3
		}
		
		];
		event.source.newData({"defaultValues":data})
		console.log(event.source.count());
	};

	Model.prototype.modelModelConstructDone = function(event){
		var Accountdata = this.comp("AccountData");
		var lis = this.getElementsByXid("li1");
		Accountdata.each(function(obj){
			
		});
	};

	Model.prototype.modelModelConstruct = function(event){

	};

	Model.prototype.modelLoad = function(event){
		var Accountdata = this.comp("AccountData");
		var lis = this.getElementsByXid("li1");
			lis[0].children[0].style.borderColor="#F0F0F0 #2BD0A3";
			lis[1].children[0].style.borderColor="#F0F0F0 #EA2229";
			lis[2].children[0].style.borderColor="#F0F0F0 #EFA433";
			var right = $(this.getElementByXid("right")).css("transform","rotate(60deg)");
			var left = $(this.getElementByXid("left")).css("transform","rotate(-60deg)");
	};

	return Model;
});