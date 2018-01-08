define(function(require){
	var justep = require("$UI/system/lib/justep");
	var $ = require('jquery');
	var config = require('./config');
	var jwt = require("./jwt");
	function showprompt(text){
		justep.Util.hint(text,{
			"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
		});
		$(".x-hint").find("button[class='close']").hide();
	}
	return{

		resetsecondPassword:function(password,code){
			var is_success = false;
			var status = 0;
			do{
				status = this.resetsecondPasswordajax(password,code);
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
		resetsecondPasswordajax:function(password,code){
			var status =400;
			$.ajax({
				url:config.site+"private/reset-security-code",
				async:false,
				dataType:"json",
				type:"POST",
				data:{security_code:password,code:code},
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
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
		forgetsecondpassword:function(){
			var is_success = false;
			var status = 0;
			do{
				status = this.forgetsecondpasswordajax();
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
		forgetsecondpasswordajax:function(){
			var status =400;
			$.ajax({
				url:config.site+"private/forget-security-code",
				async:false,
				dataType:"json",
				type:"post",
				data:{},
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
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
		resetPassword:function(password,code,email){
			var is_success =false;
			$.ajax({
				url:config.site+"reset-password",
				async:false,
				dataType:"json",
				type:"POST",
				data:{password:password,code:code,email:email},
				success:function(data){
					is_success=true;
				},
				error:function(){
					is_success = false;
				}
			});
			return is_success;
		},
		forgetpassword:function(email){
			var is_success =false;
			$.ajax({
				url:config.site+"forget-password",
				async:false,
				dataType:"json",
				type:"post",
				data:{email:email},
				success:function(data){
					is_success=true;
				},
				error:function(){
					is_success = false;
				}
			});
			return is_success;
		},

		//获取用户信息（各个钱包金额）--许鑫君
		getUserMessage:function(){
			var worthInfo;
			do{
				worthInfo=[];
				var result1 = this.getUserMessageajax();
				if (typeof(result1)!="number") {

						worthInfo=result1;

				}
				else{
					worthInfo=undefined;
				}

			}while(result1==500);

			return worthInfo;
		},
		getUserMessageajax:function(){
			var worthInfo=[];
			var status =400;
			$.ajax({
				url:config.site+"private/user",
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					//对data进行处理得到三部分钱包金额，
					if (data.status=="success") {
						worthInfo['market'] = parseFloat(data.data.coins);
						worthInfo['limit'] = parseFloat(data.data.money_limit);
						worthInfo['active'] =  parseFloat(data.data.money_active);
						worthInfo['all'] = worthInfo['market']+worthInfo['limit']+parseFloat(data.data.money_active);
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
			if (status ==200) {
				return worthInfo;//包含了active，limit，market三部分钱
			}
			else{
				return status;
			}
		},
		checksecondPassword:function(password){
			var is_success = false;
			var status = 0;
			do{
				var aaa = this.checksecondPasswordajax(password);
				if(typeof(aaa)=="boolean"){
					status = 0;

				}
				else{
					status=aaa;
				}

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
		checksecondPasswordajax:function(){
			var status =400;
			var is_live = false;
			$.ajax({
				url:config.site+"private/user",
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					if (data.status=="success") {
						if (data.data.has_security_code) {
							is_live = true;
							status = 200;
						}
						else{
							status =201;
						}
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
			if (status==201) {
				return is_live;
			}
			else{
				return status;
			}

		},
		setSecondPassword:function(password){
			var is_success = false;
			var status = 0;
			do{
				status = this.setSecondPasswordajax(password);
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
		setSecondPasswordajax:function(password){
			var status =400;
			$.ajax({
				url:config.site+"private/store-security-code",
				async:false,
				dataType:"json",
				type:"POST",
				data:{security_code:password},
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
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
		//获得的个人收益比例
		getUserIncomeAnalyse:function(){
			var incomeAnalyse;
			do{
				incomeAnalyse={};
				var result1 = this.getUserIncomeAnalyseajax();
				if (typeof(result1)!="number") {

					incomeAnalyse=result1;

				}
				else{
					incomeAnalyse=undefined;
				}

			}while(result1==500);

			return incomeAnalyse;
		},
		getUserIncomeAnalyseajax:function(){
			var incomeAnalyse={};
			var status =400;
			$.ajax({
				url:config.site+"private/income-analyse",
				async:false,
				dataType:"json",
				type:"GET",
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){
					incomeAnalyse = data.data;
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
			if (status ==200) {
				return incomeAnalyse;
			}
			else{
				return status;
			}
		},
		//获得个人今日收益
		getUserIncome:function(page){
			var income;
			do{
				income=[];
				var result1 = this.getUserIncomeajax(page);
				if (typeof(result1)!="number") {

					income=result1;

				}
				else{
					income=undefined;
				}

			}while(result1==500);

			return income;
		},
		getUserIncomeajax:function(page){
			var income=[];
			var status =400;
			$.ajax({
				url:config.site+"private/income-records",
				async:false,
				dataType:"json",
				type:"GET",
				data:{page:page,tab:'today'},
				beforeSend:function(request){
					request.setRequestHeader("Authorization","Bearer " + jwt.getToken());
				},
				success:function(data){

					income = data.data.data;
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
			if (status ==200) {
				return income;
			}
			else{
				return status;
			}
		},

	};
});
