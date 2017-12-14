define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	return{
		//获取巢的社区权限（子巢可以挂的范围）---许鑫君
		community_premission : function(nest_name){
			var b =0;
			$.ajax({
				url:"http://127.0.0.1:8081/api/v1/community/premission",//php的api路径
				async:false,
				dataType:"json",
				data:{name:nest_name},//需要传递的数据
				type:'GET',//php获取类型
				success:function(data){//请求成功返回值存在data里
					if (data.length==0) {
						b=404;
						
					}else{
						var children = data[0].children;
						
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
					
					
				},
				error:function(ero){//请求失败错误信息在ero里
					return 0;
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
			
		}
	};
	
});