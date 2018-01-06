define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("./config");
	var jwt = require('./jwt');
	function showprompt(text){
		justep.Util.hint(text,{	
			"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
		});
		$(".x-hint").find("button[class='close']").hide();
	}
	var lang;
	if(localStorage.getItem("lang")=="en_us")
	{
		lang = require('./en_us');
	}
	else{
		lang = require('./zh_cn');
	}
//	var currentDate =  
	return{
		//获取巢的社区权限（子巢可以挂的范围）---许鑫君
		community_premission:function(nest_name){
			var premission;
			do{
				premission=0;
				var result1 = this.community_premissionajax(nest_name);
				if (result1<100) {
					premission=result1;
				}
				else{
					premission=undefined;
				}
				
			}while(result1==500);
			return premission;
		},
		community_premissionajax : function(nest_name){
			var b =0;
			var status =400;
			$.ajax({
				url:config.site+"nests",//php的api路径
				async:false,
				dataType:"json",
				data:{name:nest_name},//需要传递的数据
				type:'GET',//php获取类型
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken())
				},
				success:function(data){//请求成功返回值存在data里
					if (data.data.length!=0) {
						var children = data.data[0].children;
						if (children.length!=0) {
							for (var i = 0; i < children.length; i++) {
								if (children[i].community=="B") {
									b=1;
								}
							}
						}else{
							b=-1;
						}
					}
					else{
						b=404;
					}
					status = 200;
						
				},
				error:function(ero){//请求失败错误信息在ero里
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
			if (status==200) {
				if (b==1) {
					return 3;
				}
				else if (b==0) {
					return 2;
				}else if(b==-1){
					return 1;
				}else{
					return b;
				}
			}
			else{
				return status;
			}
			
			
		},
		//巢的详细信息--许鑫君
//		nestInfo:function(mainInfo){
//			var eggval=config.configegg().egg_val;
//			var nest_Info = {
//					assets:0,
//					contracts:[]
//			};
//			for (var i = 0; i < mainInfo.length; i++) {
//				nest_Info.assets+=Math.floor(mainInfo[i].contracts[mainInfo[i].contracts.length-1].eggs*eggval);
//				nest_Info.contracts[i] = {};
//				nest_Info.contracts[i].id = mainInfo[i].contracts[mainInfo[i].contracts.length-1].id;
//				nest_Info.contracts[i].nest_id =  mainInfo[i].id;
//				nest_Info.contracts[i].income = Math.floor(parseInt(mainInfo[i].contracts[mainInfo[i].contracts.length-1].from_receivers)+parseInt(mainInfo[i].contracts[mainInfo[i].contracts.length-1].from_community)+parseInt(mainInfo[i].contracts[mainInfo[i].contracts.length-1].from_weeks));
//				nest_Info.contracts[i].time = mainInfo[i].created_at;
//				nest_Info.contracts[i].worth = Math.floor(mainInfo[i].contracts[mainInfo[i].contracts.length-1].eggs)*parseFloat(eggval);
//				nest_Info.contracts[i].rate="300%";
//				nest_Info.contracts[i].freese = (Math.floor(mainInfo[i].contracts[mainInfo[i].contracts.length-1].eggs)*3-nest_Info.contracts[i].income)<=0?0:nest_Info.contracts[i].worth*3-nest_Info.contracts[i].income;
//				nest_Info.contracts[i].name = mainInfo[i].name;
//				nest_Info.contracts[i].finished = mainInfo[i].contracts[mainInfo[i].contracts.length-1].is_finished;
//				nest_Info.contracts[i].excess = (Math.floor(mainInfo[i].contracts[mainInfo[i].contracts.length-1].eggs)*3-nest_Info.contracts[i].income)>=0?0:nest_Info.contracts[i].worth*3-nest_Info.contracts[i].income;
//				nest_Info.contracts[i].title=lang.nestjs[0];
//				nest_Info.contracts[i].info=lang.nestjs[1];
//				nest_Info.contracts[i].langrate=lang.nestjs[2];
//				nest_Info.contracts[i].langinvestment=lang.nestjs[3];
//				nest_Info.contracts[i].langfreed=lang.nestjs[4];
//				nest_Info.contracts[i].langfreeze=lang.nestjs[5];
//			}
//			return nest_Info;
//		},
//		nestInfoajax:function(){
//			var nest_Info={};
//				nest_Info.contracts=[];
//				nest_Info.assets=0;
//				var status =404;
//				eggval=config.configegg().egg_val;
//			$.ajax({
//				url:config.site+"private/nests",
//				async:false,
//				dataType:"json",
//				type:"GET",
//				beforeSend:function(request){
//					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
//				},
//				success:function(data){
//					for (var i = 0; i < data.data.length; i++) {
//						nest_Info.assets+=Math.floor(data.data[i].contracts[data.data[i].contracts.length-1].eggs*eggval);
//						nest_Info.contracts[i] = {};
//						nest_Info.contracts[i].id = data.data[i].contracts[data.data[i].contracts.length-1].id;
//						nest_Info.contracts[i].nest_id =  data.data[i].id;
//						nest_Info.contracts[i].income = Math.floor(parseInt(data.data[i].contracts[data.data[i].contracts.length-1].from_receivers)+parseInt(data.data[i].contracts[data.data[i].contracts.length-1].from_community)+parseInt(data.data[i].contracts[data.data[i].contracts.length-1].from_weeks));
//						nest_Info.contracts[i].time = data.data[i].created_at;
//						nest_Info.contracts[i].worth = Math.floor(data.data[i].contracts[data.data[i].contracts.length-1].eggs);
//						nest_Info.contracts[i].rate="300%";
//						nest_Info.contracts[i].freese = (nest_Info.contracts[i].worth*3-nest_Info.contracts[i].income)<=0?0:nest_Info.contracts[i].worth*3-nest_Info.contracts[i].income;
//						nest_Info.contracts[i].name = data.data[i].name;
//						nest_Info.contracts[i].finished = data.data[i].contracts[data.data[i].contracts.length-1].is_finished;
//						nest_Info.contracts[i].excess = (nest_Info.contracts[i].worth*3-nest_Info.contracts[i].income)>=0?0:nest_Info.contracts[i].worth*3-nest_Info.contracts[i].income;
//					}
//					//对data做处理
//					status =200;
//				},
//				error:function(ero){
//					responseText = JSON.parse(ero.responseText);
//					if (responseText.message=="Token expired.") {
//						
//						if(jwt.authRefresh()){
//							status =500;
//						}
//						else
//						{
//							status =404;
//						}
//						
//					}
//					else if(responseText.message=="No token provided."){
//						status =404;
//					}
//				}
//			});
//			if (status==200) {
//				return nest_Info;
//			}
//			else{
//				return status;
//			}
//			//nest_Info模型=nest_Info['Investment'],nest_Info['today'],nest_Info['incomedata']=[{time:time,income:income,name:name,type:type(收益来源)}],nest_Info['nestdata']=[{id:nest_id,name:name,income:income(总的收益),freese:freese,time:time(创建日期),type:contractType*config.rate}]
//		},
		//巢的简略信息--许鑫君
		nestsimpleinfo:function(){
			var nestInfo;
			do{
				nestInfo={};
				var result1 = this.nestsimpleinfoajax();
				if (typeof(result1)!="number") {
						nestInfo=result1;
				}
				else{
					nestInfo=undefined;
				}
				
			}while(result1==500);
			return nestInfo;
		},
		nestsimpleinfoajax:function(){
			var nestdata={};
			var status =400;
			$.ajax({
				url:config.site+"private/nests",
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){
					nestdata = data.data;
					status =200;
					//对data做处理
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						if(jwt.authRefresh()){
							status =500;
						}
						else
						{
							status = 404
						}
						
					}
					else if(responseText.message=="No token provided."){
						status = 404
					}
				}
			});
			if (status==200) {
				return nestdata;
			}
			else{
				return status;
			}
		},
		createnest:function(params){
			var is_success = false;
			var status = 0;
			do{
				status = this.createnestajax(params);
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
		createnestajax:function(params){
			var status =400;
			$.ajax({
				url:config.site+"nests",
				async:false,
				dataType:"json",
				type:"post",
				data:params,
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){
					if (data.status=="success") {
						showprompt(lang.showprompt[39]);
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
					else if(responseText.message=="This action is unauthorized.")
					{
						showprompt(lang.showprompt[58]);
					}
					else if(responseText.message=="Wrong security code.")
					{
						showprompt(lang.showprompt[59]);
					}
					else if("Parent not found."){
						showprompt(lang.showprompt[69]);
					}
				}
			});
			return status;
		},
		upgradenest:function(params){
			var is_success = false;
			var status = 0;
			do{
				status = this.upgradenestajax(params);
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
		upgradenestajax:function(params){
			var status = 400;
			$.ajax({
				url:config.site+"nests/"+params.nest_id+"/upgrade",
				async:false,
				dataType:"json",
				type:"post",
				data:params,
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){
					if (data.status=="success") {
						showprompt(lang.showprompt[39]);
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
					else if(responseText.message=="This action is unauthorized.")
					{
						showprompt(lang.showprompt[58]);
					}
					else if(responseText.message=="Wrong security code.")
					{
						showprompt(lang.showprompt[59]);
					}
				}
			});
			return status;
		},
		reinvestment:function(params){
			var is_success = false;
			var status = 0;
			do{
				status = this.reinvestmentajax(params);
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
		reinvestmentajax:function(params){
			var status = 400;
			$.ajax({
				url:config.site+"nests/"+params.nest_id+"/reinvest",
				async:false,
				dataType:"json",
				type:"post",
				data:params,
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){
					if (data.status=="success") {
						showprompt(lang.showprompt[39]);
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
					else if(responseText.message=="This action is unauthorized.")
					{
						showprompt(lang.showprompt[58]);
					}
					else if(responseText.message=="Wrong security code.")
					{
						showprompt(lang.showprompt[59]);
					}
				}
			});
			return status;
		},
		invitenest:function(params){
			var is_success = false;
			var status = 0;
			do{
				status = this.invitenestajax(params);
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
		invitenestajax:function(params){
			var status = 400;
			$.ajax({
				url:config.site+"users",
				async:false,
				dataType:"json",
				type:"post",
				data:params,
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){
					if (data.status=="success") {
						status = 200;
						showprompt(lang.showprompt[39]);
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
					else if(responseText.message=="This action is unauthorized.")
					{
						showprompt(lang.showprompt[58]);
					}
					else if(responseText.message=="Wrong security code.")
					{
						showprompt(lang.showprompt[59]);
					}
					else if("Parent not found."){
						shoprompt(lang.showprompt[69]);
					}
				}
			});
			return status;
		},
	income:function(nest_id){
		var nestincome=[];
		do{
			nestInfo={};
			var result1 = this.incomeajax(nest_id);
			if (typeof(result1)!="number") {
				nestincome=result1;
			}
			else{
				nestincome=undefined;
			}
			
		}while(result1==500);
		return nestincome;
	},
	incomeajax:function(nest_id){
		var nestdata=[];
		var status =400;
		$.ajax({
			url:config.site+"nests/"+nest_id+"/income-records",
			async:false,
			dataType:"json",
			type:"GET",
			beforeSend:function(request){
				request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
			},
			success:function(data){
				nestdata = data.data;
				status =200;
			//对data做处理
		},
		error:function(ero){
			responseText = JSON.parse(ero.responseText);
			if (responseText.message=="Token expired.") {
				
				if(jwt.authRefresh()){
					status =500;
				}
				else
				{
					status = 404
				}
				
			}
			else if(responseText.message=="No token provided."){
				status = 404
			}
		}
	});
		if (status==200) {
			return nestdata;
		}
		else{
			return status;
		}
},
//		incomeInfo:function(mainInfo){
//			var eggval = config.configegg().egg_val;
//			var MyincomeInfo = [];
//			var date = new Date();
//			var todayincome =0.00;
//			var currentdate = new Date(date.getFullYear(),date.getMonth(),date.getDate());
//			var times = currentdate.getTime();
//			for (var int = 0; int < mainInfo.length; int++) {
//				if (mainInfo[int]!=undefined&&mainInfo[int].length!=0) {
//					for (var int1 = 0; int1 < mainInfo[int].records.length; int1++) {
//						var date = Date.parse(mainInfo[int].records[int1].created_at);
//						if (date>times) {
//							if (mainInfo[int].records[int1].type=="invite_got"||mainInfo[int].records[int1].type=="community_got") {
//								MyincomeInfo[MyincomeInfo.length]={
//										contract_id:mainInfo[int].records[int1].contract_id,
//										type:mainInfo[int].records[int1].type=="invite_got"?lang.nestjs[7]:lang.nestjs[8],
//										income:parseFloat(parseFloat(mainInfo[int].records[int1].eggs)*parseFloat(eggval)).toFixed(2),
//										date:mainInfo[int].records[int1].created_at,
//										name:mainInfo[int].name
//								};
//								todayincome+=parseFloat(mainInfo[int].records[int1].eggs)*parseFloat(eggval);
//							}
//						}
//						
//					}
//					MyincomeInfo[MyincomeInfo.length]={
//							contract_id:mainInfo[int].contracts[mainInfo[int].contracts.length-1].id,
//							type:lang.nestjs[6],
//							income:parseFloat(mainInfo[int].contracts[mainInfo[int].contracts.length-1].eggs)*parseFloat(eggval)*0.01.toFixed(2),
//							date:new Date(),
//							name:mainInfo[int].name
//					};
//					todayincome+=parseFloat(mainInfo[int].contracts[mainInfo[int].contracts.length-1].eggs)*parseFloat(eggval)*0.01.toFixed(2);
//				}
//			}
//			var data={
//					MyincomeInfo:MyincomeInfo,
//					todayincome:todayincome
//			}
//			return  data;
//		},
		singlenestInfo:function(nest_id){
			var nestInfo;
			do{
				nestInfo={};
				var result1 = this.nestrecordsajax(nest_id);
				var result2 = this.nestinfoajax(nest_id);
				if (typeof(result1)!="number") {
					if (nestInfo!=undefined) {
						nestInfo.nestrecords=result1;
					}
				}
				else{
					nestInfo=undefined;
				}
				if (typeof(result2)!="number") {
					if (nestInfo!=undefined) {
						nestInfo.nestinfo=result2;
					}
				}
				else{
					nestInfo=undefined;
				}
			}while(result1==500||result2==500)
			return nestInfo;
		},
		nestrecordsajax:function(nest_id){
			var status = 400;
			var nestrecords;
			$.ajax({
				url:config.site+"nests/"+nest_id+"/records",
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					nestrecords = data.data;
					status =200;
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
			if (status = 200) {
				return nestrecords;
			}
			else {
				return status;
			}
		},
		nestinfoajax:function(nest_id){
			var status =400;
			var nestinfo;
			$.ajax({
				url:config.site+"nests/"+nest_id,
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					nestinfo = data.data;
					status = 200;
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
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
			if (status==200) {
				return nestinfo;
			}
			else{
				return status;
			}
			
		},
		mainInfo:function(){
			var mainInfo;
			do{
				mainInfo=[];
				var result1 = this.mainInfoajax();
				if (typeof(result1)!="number") {
					mainInfo=result1;
				}
				else{
					mainInfo=undefined;
				}
				
			}while(result1==500);
			
			return mainInfo;
		},
		mainInfoajax:function(){
			var status = 400;
			var mainInfo=[];
			$.ajax({
				url:config.site+"private/nests",
				async:false,
				dataType:"json",
				type:"get",
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					mainInfo=data.data;
					status = 200;
				},
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					
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
			if (status==200) {
				return mainInfo;
			}
			else{
				return status;
			}
		}
	};
	
});