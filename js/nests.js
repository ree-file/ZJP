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
	var record=[];
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
				debugger;
			}while(result1==500);
			return premission;
		},
		community_premissionajax : function(nest_name){
			var b =0;
			var status =404;
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
		nestInfo:function(){
			var nestInfo;
			do{
				nestInfo={};
				var result1 = this.nestInfoajax();
				if (typeof(result1)!="number") {
						nestInfo=result1;
				}
				else{
					nestInfo=undefined;
				}
				
			}while(result1==500)
			return nestInfo;
		},
		nestInfoajax:function(){
			var nest_Info={};
				nest_Info.contracts=[];
				nest_Info.assets=0;
				var status =404;
				eggval=config.configegg().egg_val;
			$.ajax({
				url:config.site+"private/nests",
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization", "Bearer " + jwt.getToken());
				},
				success:function(data){
					for (var i = 0; i < data.data.length; i++) {
						nest_Info.assets+=Math.floor(data.data[i].contracts[data.data[i].contracts.length-1].eggs*eggval);
						nest_Info.contracts[i] = {};
						nest_Info.contracts[i].id = data.data[i].contracts[data.data[i].contracts.length-1].id;
						nest_Info.contracts[i].nest_id =  data.data[i].id;
						nest_Info.contracts[i].income = Math.floor(parseInt(data.data[i].contracts[data.data[i].contracts.length-1].from_receivers)+parseInt(data.data[i].contracts[data.data[i].contracts.length-1].from_community)+parseInt(data.data[i].contracts[data.data[i].contracts.length-1].from_weeks))*parseFloat(eggval);
						nest_Info.contracts[i].time = data.data[i].created_at;
						nest_Info.contracts[i].worth = Math.floor(data.data[i].contracts[data.data[i].contracts.length-1].eggs*eggval);
						nest_Info.contracts[i].rate="300%";
						nest_Info.contracts[i].freese = (nest_Info.contracts[i].worth*3-nest_Info.contracts[i].income)<=0?0:nest_Info.contracts[i].worth*3-nest_Info.contracts[i].income;
						nest_Info.contracts[i].name = data.data[i].name;
						nest_Info.contracts[i].finished = data.data[i].contracts[data.data[i].contracts.length-1].is_finished;
						nest_Info.contracts[i].excess = (nest_Info.contracts[i].worth*3-nest_Info.contracts[i].income)>=0?0:nest_Info.contracts[i].worth*3-nest_Info.contracts[i].income;
					}
					//对data做处理
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
			if (status==200) {
				return nest_Info;
			}
			else{
				return status;
			}
			//nest_Info模型=nest_Info['Investment'],nest_Info['today'],nest_Info['incomedata']=[{time:time,income:income,name:name,type:type(收益来源)}],nest_Info['nestdata']=[{id:nest_id,name:name,income:income(总的收益),freese:freese,time:time(创建日期),type:contractType*config.rate}]
		},
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
				
			}while(result1==500)
			return nestInfo;
		},
		nestsimpleinfoajax:function(){
			var nestdata={};
			var status =404;
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
			var status =404
			$.ajax({
				url:config.site+"nests",
				async:false,
				dataType:"json",
				type:"POST",
				data:params,
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
			var status = 404;
			$.ajax({
				url:config.site+"nests/"+params.nest_id+"/upgrade",
				async:false,
				dataType:"json",
				type:"patch",
				data:params,
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
			var status = 404;
			$.ajax({
				url:config.site+"nests/"+params.nest_id+"/reinvest",
				async:false,
				dataType:"json",
				type:"patch",
				data:params,
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
			var status = 404;
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
	
		incomeInfo:function(ids,times,today){
			if (times==0) {
				var norecords=[];
				return norecords;
			}
			times--;
			
			$.ajax({
				url:config.site+"nests/"+ids[times]+"/records",
				async:false,
				cache:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					if (data.data.got_records.length!=0) {
						record[times]=[];
						for (var i = 0; i < data.data.got_records.length; i++) {
							var addDate = data.data.got_records[i].created_at.substring(0,10);
							var datearr = addDate.split("-");
							var date = new Date(parseInt(datearr[0]),parseInt(datearr[1])-1,parseInt(datearr[2]));
							var timestamps = date.getTime();
							if (timestamps==today) {
								record[times][record[times].length]=data.data.got_records[i];
							}
						}
						
					}
					this.incomeInfo(ids,times,today);
				}.bind(this),
				error:function(ero){
					var responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.incomeInfo(ids,times,today);
					}
					else{
						showprompt("检查网络或者重新登录");
					}
				}.bind(this)
				
			});
			return record;
		},
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
			var status = 404;
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
			
		}
	};
	
});