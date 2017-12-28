define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("$UI/ZJP/js/config");
	var jwt = require("./jwt");
	function showprompt(text){
		justep.Util.hint(text,{
			"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
		});
		$(".x-hint").find("button[class='close']").hide();
	}
	return{
		buy:function(id,password){
			var is_success = false;
			var status = 0;
			do{
				status = this.buyajax(id,password);
				switch (status) {
				case 200:
					is_success = true;
					break;
				case 404:
					is_success = undefined;
					break;
				default:
					break;
				}
			}while(status ==500);
			return is_success;
		},
		buyajax:function(id,password){
			var status =404;
			$.ajax({
				url: config.site+"orders/"+id+"/buy",//php的api路径
				async:false,
				dataType:"json",
				data:{security_code:password},//需要传递的数据
				type:'patch',//php获取类型
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){
					if (data.status=="success") {
						status = 200;
					}
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						if(jwt.authRefresh()){
							status = 500;
						}
						else
						{
							status = 404;
						}
						
					}
					else if(responseText.message=="No token provided."){
						status = 404;
					}
				}
			});
			return status;
		},
		getorders:function(page){
			var allorders;
			do{
				allorders=[];
				var result1 = this.getordersajax(page);
				if (typeof(result1)!="number") {
					allorders=result1;
				}
				else{
					allorders=undefined;
				}
				
			}while(result1==500)
			return allorders;
		},
		getordersajax : function(page){
			var allorders=[];
			var eggval = parseFloat(config.configegg().egg_val);
			var status =404;
			$.ajax({
				url: config.site+"orders",//php的api路径
				async:false,
				dataType:"json",
				data:{page:page},//需要传递的数据
				type:'GET',//php获取类型
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){//请求成功返回值存在data里
					var ordersData = data.data.data;
					for (var i = 0; i < ordersData.length; i++) {
						if (ordersData[i].status!="selling") {
							continue;
						}
						var contract_remaining=0;
						var contract = ordersData[i].nest.contracts[ordersData[i].nest.contracts.length-1];
						contract_remaining = parseInt(contract.eggs)-parseInt(contract.extracted);
						var num =0;
						for (var j = 0; j < ordersData[i].nest.children.length; j++) {
							num+=ordersData[i].nest.children[j].children.length;
						}
						allorders[i]={};
						allorders[i].orderid = i;
						allorders[i].id=ordersData[i].id;
						allorders[i].name=ordersData[i].nest.name,
						allorders[i].nest_id = ordersData[i].nest_id,
						allorders[i].childrenNum = ordersData[i].nest.children.length;
						allorders[i].grandChildrenNum = num;
						allorders[i].worth = ordersData[i].price;
						allorders[i].contract_worth=parseFloat(ordersData[i].nest.contracts[ordersData[i].nest.contracts.length-1].eggs)*3*eggval;
						allorders[i].contract_remaining = parseFloat(contract_remaining)*eggval*3;
						allorders[i].type=parseInt(contract.eggs);
						allorders[i].remainingeggs = parseInt(contract_remaining);
						allorders[i].freeseeggs = parseInt(contract.eggs)-parseInt(contract.from_weeks)-parseInt(contract.from_receivers)-parseInt(contract.from_community);
					}
					status =200;
				},
				error:function(ero){//请求失败错误信息在ero里
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						if(jwt.authRefresh()){
							status =500;
						}
						else
						{
							status =404;
						}
						
					}
					else if(responseText.message=="No token provided."){
						status =404
					}
				}
			});
			if (status ==200) {
				return allorders;
			}
			else{
				return status;
			}
		},
		filterOrders:function(page,min,max){
			var allorders;
			do{
				allorders=[];
				var result1 = this.filterOrdersajax(page,min,max);
				if (typeof(result1)!="number") {
					allorders=result1;
				}
				else{
					allorders=undefined;
				}
				
			}while(result1==500)
			return allorders;
		},
		filterOrdersajax:function(page,min,max){
			var allorders=[];
			var eggval = parseFloat(config.configegg().egg_val);
			var status=404;
			$.ajax({
				url: config.site+"orders",//php的api路径
				async:false,
				dataType:"json",
				data:{page:page,min:min,max:max},//需要传递的数据
				type:'GET',//php获取类型
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){//请求成功返回值存在data里
					var ordersData = data.data.data;
					for (var i = 0; i < ordersData.length; i++) {
						if (ordersData[i].status!="selling") {
							continue;
						}
						var contract_remaining=0;
						var contract = ordersData[i].nest.contracts[ordersData[i].nest.contracts.length-1];
						contract_remaining = parseInt(contract.eggs)-parseInt(contract.extracted);
						var num =0;
						for (var j = 0; j < ordersData[i].nest.children.length; j++) {
							num+=ordersData[i].nest.children[j].children.length;
						}
						allorders[i]={};
						allorders[i].id=ordersData[i].id;
						allorders[i].name=ordersData[i].nest.name,
						allorders[i].nest_id = ordersData[i].nest_id,
						allorders[i].childrenNum = ordersData[i].nest.children.length;
						allorders[i].grandChildrenNum = num;
						allorders[i].worth = ordersData[i].price;
						allorders[i].contract_worth=parseFloat(ordersData[i].nest.contracts[ordersData[i].nest.contracts.length-1].eggs)*3*eggval;
						allorders[i].contract_remaining = parseFloat(contract_remaining)*eggval*3;
						allorders[i].type=parseInt(contract.eggs);
						allorders[i].remainingeggs = parseInt(contract_remaining);
						allorders[i].freeseeggs = parseInt(contract.eggs)-parseInt(contract.from_weeks)-parseInt(contract.from_receivers)-parseInt(contract.from_community);
					}
					status =200;
				},
				error:function(ero){//请求失败错误信息在ero里
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						if(jwt.authRefresh()){
							status =500;
						}
						else
						{
							status =404;
						}
						
					}
					else if(responseText.message=="No token provided."){
						status =404;
					}
				}
			});
			if (status =200) {
				return allorders;
			}
			else{
				return status;
			}
		},
		getTransactionRecord:function(){
			var record;
			do{
				record=[];
				var result1 = this.getTransactionRecordajax();
				if (typeof(result1)!="number") {
					record=result1;
				}
				else{
					record=undefined;
				}
				
			}while(result1==500)
			return record;
		},
		//获得交易记录--许鑫君
		getTransactionRecordajax:function(){
			var record=[];
			var status = 404;
			$.ajax({
				url:config.site+"private/orders",
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){
					for (var i = 0; i < data.data.length; i++) {
						var status = "";
						if (data.data[i].status=="abandoned") {
							continue;
						}
						if(data.data[i].buyer_id==null){
							status ="Selling"
						}
						else if(data.data[i].buyer_id==localStorage.getItem("thismyuserId")){
							status = "Bought";
						}
						else{
							status = "Sell";
						}
						record[record.length]={
								id:data.data[i].id,
								status:status,
								productioncode:data.data[i].nest.name,
								transactionmoney:data.data[i].price,
								date:data.data[i].created_at
						};
					}
					status =200;
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						if(jwt.authRefresh()){
							status =500;
						}
						else
						{
							status =404;
						}
						
					}
					else if(responseText.message=="No token provided."){
						status =404;
					}
				}

			});
			if (status =200) {
				return record;
			}
			else{
				return status;
			}
		},
		//出售商品--许鑫君
		sellProduction:function(productionId,price,password){
			var is_success = false;
			var status = 0;
			do{
				status = this.sellProductionajax(productionId,price,password);
				switch (status) {
				case 200:
					is_success = true;
					break;
				case 404:
					is_success = undefined;
					break;
				default:
					break;
				}
			}while(status ==500);
			return is_success;
		},
		sellProductionajax:function(productionId,price,password){
			var status = 404;
			$.ajax({
				url:config.site+"orders",
				async:false,
				dataType:"json",
				type:"post",
				data:{nest_id:productionId,price:price,security_code:password},
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){
					if (data.status=="success") {
						status = 200;
					}
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						if(jwt.authRefresh()){
							status = 500;
						}
						else
						{
							status = 404;
						}
						
					}
					else if(responseText.message=="No token provided."){
						status = 404;
					}
				}
			});
			return status;
		},
		//下架--许鑫君
		notSold:function(id){
			var is_success = false;
			var status = 0;
			do{
				status = this.notSoldajax(id);
				switch (status) {
				case 200:
					is_success = true;
					break;
				case 404:
					is_success = undefined;
					break;
				default:
					break;
				}
			}while(status ==500);
			return is_success;
		},
		notSoldajax:function(id){
			var status =404;
			$.ajax({
				url:config.site+"orders/"+id+"/abandon",
				async:false,
				dataType:"json",
				type:"patch",
				data:{},
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){
					if (data.status=="success") {
						status = 200;
					}
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						if(jwt.authRefresh()){
							status = 500;
						}
						else
						{
							status = 404;
						}
						
					}
					else if(responseText.message=="No token provided."){
						status = 404;
					}
				}
			});
			return status;
		},
	};

});
