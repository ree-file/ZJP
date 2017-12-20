define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	function showprompt(text){
		justep.Util.hint(text,{	
			"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
		});
		$(".x-hint").find("button[class='close']").hide();
	}
	return{
		//获取巢的社区权限（子巢可以挂的范围）---许鑫君
		community_premission : function(nest_name){
			var b =0;
			$.ajax({
				url:"http://127.0.0.1:8081/api/v1/nest/community/premission",//php的api路径
				async:false,
				dataType:"json",
				data:{nest_name:nest_name},//需要传递的数据
				type:'GET',//php获取类型
				success:function(data){//请求成功返回值存在data里
					
						var children = data.data[0].children;
						debugger;
						if (children.length!=0) {
							
							for (var i = 0; i < children.length; i++) {
								if (children[i].community=="B") {
									b=1;
								}
								
							}
						}else{
							b=-1;
						}
					
					
					
				},
				error:function(ero){//请求失败错误信息在ero里
					b=404;
				}
			});
			debugger;
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
		//巢是否存在--许鑫君
		is_live:function(name){
			var is_has = true;
			$.ajax({
				url:"http://127.0.0.1:8081/api/v1/nest/live",
				async:false,
				dataType:"json",
				data:{nest_name:name},
				type:"GET",
				success:function(data){
					
				},
				error:function(ero){
					is_has = false;
				}
			});
			return is_has;
		},
		nestInfo:function(){
			var nest_Info;
			$.ajax({
				url:"",
				async:false,
				dataType:"json",
				type:"POST",
				success:function(data){
					//对data做处理
				},
				error:function(ero){
					showprompt("检查网络或者重新登录");
				}
			});
			return nest_Info;
			//nest_Info模型=nest_Info['Investment'],nest_Info['today'],nest_Info['incomedata']=[{time:time,income:income,name:name,type:type(收益来源)}],nest_Info['nestdata']=[{id:nest_id,name:name,income:income(总的收益),freese:freese,time:time(创建日期),type:contractType*config.rate}]
		}
	};
	
});