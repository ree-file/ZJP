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
		community_premission : function(nest_name){
			var b =0;
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
						
				},
				error:function(ero){//请求失败错误信息在ero里
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						community_premission(nest_name);
					}
					else{
						showprompt("检查网络或者重新登录");
						b=404;
					}
				}
			});
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
			
		},
		//巢的详细信息--许鑫君
		nestInfo:function(){
			var nest_Info={};
				nest_Info.contracts=[];
				nest_Info.assets=0;
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
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.nestInfo();
					}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
			});
			return nest_Info;
			//nest_Info模型=nest_Info['Investment'],nest_Info['today'],nest_Info['incomedata']=[{time:time,income:income,name:name,type:type(收益来源)}],nest_Info['nestdata']=[{id:nest_id,name:name,income:income(总的收益),freese:freese,time:time(创建日期),type:contractType*config.rate}]
		},
		//巢的简略信息--许鑫君
		nestsimpleinfo:function(){
			var nestdata;
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
					//对data做处理
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.nestsimpleinfo();
					}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
			});

			return nestdata;
		},
		createnest:function(params){
			var is_success=false;
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
						is_success = true;
					}
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.createnest();
					}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
			});
			return is_success;
		},
		upgradenest:function(params){
			var is_success =false;
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
						is_success = true;
					}
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.upgradenest();
					}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
			});
			return is_success;
		},
		reinvestment:function(params){
			var is_success= false;
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
						is_success = true;
					}
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.reinvestment();
					}
					else if(responseText.message=="The lastest contract is not finished.")
						{
							is_success = false;
						}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
			});
			return is_success;
		},
		invitenest:function(params){
			var is_success= false;
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
						is_success = true;
					}
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.invitenest();
					}
					else if(responseText.message=="The lastest contract is not finished.")
						{
							is_success = false;
						}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
			});
			return is_success;
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
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.incomeInfo(ids,times,today);
					}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
				
			});
			return record;
		},
		singlenestInfo:function(nest_id){
			var nestInfo = {};
			$.ajax({
				url:config.site+"nests/"+nest_id+"/records",
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					nestInfo.nestrecords = data.data;
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.singlenestInfo(nest_id);
					}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
			});
			$.ajax({
				url:config.site+"nests/"+nest_id,
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					nestInfo.nestinfo = data.data;
				},
				error:function(ero){
					responseText = JSON.parse(ero.responseText);
					if (responseText.message=="Token expired.") {
						
						jwt.authRefresh();
						this.singlenestInfo(nest_id);
					}
					else{
						showprompt("检查网络或者重新登录");
						justep.Shell.showPage(require.toUrl("./index.w"));	
					}
				}.bind(this)
			});
			return nestInfo;
		}
	};
	
});