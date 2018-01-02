define(function(require){
	var $ = require("jquery");
	var base64 = require("$UI/system/lib/base/base64");
	var justep = require("$UI/system/lib/justep");
	var config = require("./js/config");
	var nest = require("./js/nests");
	var contract = require("./js/contract");
	var nestInfo;
	var eggval;
	var withdrawData=[];
	var historyData=[];
	var lang;
	if(localStorage.getItem("lang")=="en_us")
	{
		lang = require('./js/en_us');
	}
	else{
		lang = require('./js/zh_cn');
	}
	var Model = function(){
		this.callParent();
	};
	function round2(number,fractionDigits){  
	    with(Math){  
	        return round(number*pow(10,fractionDigits))/pow(10,fractionDigits);  
	    }  
	} 
	//图片路径转换
	Model.prototype.getImageUrl = function(url){
		return require.toUrl(url);
		
	};
	Model.prototype.fixtwo=function(float){
		var data = float.toFixed(2);
		return data;
	};

	Model.prototype.content3Active = function(event){
		var button = $(this.getElementByXid("button5"));
		button.addClass("checkbtn-active");
	};
	

	
	Model.prototype.content3Inactive = function(event){
		var button = $(this.getElementByXid("button5"));
		button.removeClass("checkbtn-active");
	};
	

	
	Model.prototype.content4Active = function(event){
		var button = $(this.getElementByXid("button6"));
		button.addClass("checkbtn-active");
	};
	

	
	Model.prototype.content4Inactive = function(event){
		var button = $(this.getElementByXid("button6"));
		button.removeClass("checkbtn-active");
	};
	

	
	Model.prototype.content5Active = function(event){
		var button = $(this.getElementByXid("button7"));
		button.addClass("checkbtn-active");
	};
	

	
	Model.prototype.content5Inactive = function(event){
		var button = $(this.getElementByXid("button7"));
		button.removeClass("checkbtn-active");
	};
	

	
	Model.prototype.content6Active = function(event){
		var button = $(this.getElementByXid("button8"));
		button.addClass("checkbtn-active");
	};
	

	
	Model.prototype.content6Inactive = function(event){
		var button = $(this.getElementByXid("button8"));
		button.removeClass("checkbtn-active");
	};
	
	
	Model.prototype.modelLoad = function(event){
		this.comp("titleBar1").set({
			title:lang.nestMain[0]
		});
		$(this.getElementByXid("h58")).html(lang.nestMain[1]);
		$(this.getElementByXid("h57")).html(lang.nestMain[2]);
		$(this.getElementByXid("h511")).html(lang.nestMain[3]);
		$(this.getElementByXid("h512")).html(lang.nestMain[4]);
		$(this.getElementByXid("h513")).html(lang.nestMain[5]);
		$(this.getElementByXid("span5")).html(lang.nestMain[6]);
		$(this.getElementByXid("span7")).html(lang.nestMain[7]);
		$(this.getElementByXid("span8")).html(lang.nestMain[8]);
		$(this.getElementByXid("span6")).html(lang.nestMain[9]);
		$(this.getElementByXid("span31")).html(lang.nestMain[17]);
		$(this.getElementByXid("span17")).html(lang.nestMain[18]);
		$(this.getElementByXid("span18")).html(lang.nestMain[19]);
		$(this.getElementByXid("span26")).html(lang.nestMain[20]);
		$(this.getElementByXid("span27")).html(lang.nestMain[21]);
		$(this.getElementByXid("h51")).html(lang.nestMain[22]);
		$(this.getElementByXid("h53")).html(lang.nestMain[23]);
		$(this.getElementByXid("span28")).html(lang.nestMain[24]);
		$(this.getElementByXid("p1")).html(lang.nestMain[25]);
	};
	Model.prototype.modelParamsReceive = function(event){
		var nest_id = this.params.nest_id;
		var contract_id = this.params.contract_id;
		nestInfo = nest.singlenestInfo(nest_id);
		if (nestInfo==undefined) {
			this.comp("windowDialog1").open();
			this.showprompt(lang.showprompt[0]);
			return;
		}
		eggval = config.configegg().egg_val;
		this.comp("nest").refreshData();
		this.comp("historyData").refreshData();
		
		this.comp("accountData").refreshData();
		this.comp("withdrawData").refreshData();
	};

	
	
	
	Model.prototype.nestCustomRefresh = function(event){
		if (nestInfo==undefined) {
			return;
		}
		event.source.clear();
		var released =0;
		var withdraw = 0;
		var investment = 0;
		var allmoney = 0;
		historyData =[];
		withdrawData=[];
		var available =0;
		
		for (var i = 0; i < nestInfo.nestinfo.contracts.length; i++) {
			var money =0;
			var cpped=0;
			if (nestInfo.nestinfo.contracts[i].is_finished=="1") {
				money=parseFloat(nestInfo.nestinfo.contracts[i].eggs)*parseFloat(eggval)*3-parseFloat(nestInfo.nestinfo.contracts[i].extracted);
				capped = parseFloat(nestInfo.nestinfo.contracts[i].eggs)*parseFloat(eggval)*3;
				released+=capped;
				available+=money;
				withdraw+=parseFloat(nestInfo.nestinfo.contracts[i].extracted);
			}
			else{
				capped=(parseFloat(nestInfo.nestinfo.contracts[i].from_weeks)+parseFloat(nestInfo.nestinfo.contracts[i].from_receivers)+parseFloat(nestInfo.nestinfo.contracts[i].from_community))*parseFloat(eggval);
				money=(parseFloat(nestInfo.nestinfo.contracts[i].from_weeks)+parseFloat(nestInfo.nestinfo.contracts[i].from_receivers)+parseFloat(nestInfo.nestinfo.contracts[i].from_community))*parseFloat(eggval)-parseFloat(nestInfo.nestinfo.contracts[i].extracted);
				released+=capped;
				available+=money;
				withdraw+=parseFloat(nestInfo.nestinfo.contracts[i].extracted);
			}
			investment+=parseFloat(nestInfo.nestinfo.contracts[i].eggs)*eggval;
			historyData[historyData.length]={
					id:i+1,
					money:(parseFloat(nestInfo.nestinfo.contracts[i].eggs)*eggval).toFixed(2),
					date:nestInfo.nestinfo.contracts[i].created_at,
					message:lang.nestMain[10],
			}
			allmoney+=parseFloat(nestInfo.nestinfo.contracts[i].eggs)*eggval;
			withdrawData[i]={
					id:i+1,
					date:new Date(),
					money:money.toFixed(2),
					contract_id:nestInfo.nestinfo.contracts[i].id,
					message:lang.nestMain[16],
					withdraw:capped
			}
		}
		$(this.getElementByXid("span10")).html("TAC:$"+allmoney);
		
		var nestvalues = [{
			id:nestInfo.nestinfo.id,
			name:nestInfo.nestinfo.name,
			community:nestInfo.nestinfo.community,
			date:nestInfo.nestinfo.created_at,
			released:released.toFixed(2),
			withdraw:withdraw.toFixed(2),
			investment:investment,
			contract_id:nestInfo.nestinfo.contracts[0].id,
			speed:0.01,
			globalValue:6.7,
			currentWorth:parseFloat(nestInfo.nestinfo.contracts[0].eggs*eggval),
			expectReturn:3.00,
			available:available,
			is_finished:nestInfo.nestinfo.contracts[0].is_finished,
			type:nestInfo.nestinfo.contracts[0].eggs,
		}];
		event.source.loadData(nestvalues);
	};

	
	
	
	

	
	
	
	Model.prototype.historyDataCustomRefresh = function(event){
		if (nestInfo==undefined) {
			return;
		
			}
		if (nestInfo.nestrecords.contract_records.length!=0) {
			for (var i = 0; i < nestInfo.nestrecords.contract_records.length; i++) {
				for (var j = 0; j < historyData.length; j++) {
					if (historyData[j].id==nestInfo.nestrecords.contract_records[i].contract_id) {
						historyData[j].message=lang.nestMain[11];
					}
				}
			}
		}
		event.source.loadData(historyData);
		historyData=null;
	};

	
	
	
	Model.prototype.accountDataCustomRefresh = function(event){
		if (nestInfo==undefined) {
			return;
			}
			event.source.clear();
		var date = new Date();
		var currentdate = new Date(date.getFullYear(),date.getMonth(),date.getDate());
		var times = currentdate.getTime();
		var accountData=[];
		var extracted_money=0;
		var get_money = 0;
		
		if (nestInfo.nestrecords.extract_records.length!=0) {
			for (var j = 0; j < nestInfo.nestrecords.extract_records.length; j++) {
				accountData[j]={
					id:j,
					date:nestInfo.nestrecords.extract_records[j].created_at,
					money:parseFloat(nestInfo.nestrecords.extract_records[j].money).toFixed(2),
					message:lang.nestMain[12],
					status:0
				}
					for (var i = 0; i < withdrawData.length; i++) {
						if (nestInfo.nestrecords.extract_records[j].contract_id==withdrawData[i].contract_id) {
					
							if(Date.parse(nestInfo.nestrecords.extract_records[j].created_at)<times){
								withdrawData[i].withdraw=withdrawData[i].withdraw-parseFloat(nestInfo.nestrecords.extract_records[j].money);
							}
						}
					}
					extracted_money=parseFloat(extracted_money)+parseFloat(nestInfo.nestrecords.extract_records[j].money);
				}
			
		}
		if (nestInfo.nestrecords.got_records.length!=0) {
			for (var j = 0; j < nestInfo.nestrecords.got_records.length; j++) {
				var message ="";
				switch(nestInfo.nestrecords.got_records[j].type){
					case "invite_got":
						message=lang.nestMain[13];
						break;
					case "week_got":
						message=lang.nestMain[14];
						break;
					case "community_got":
						message=lang.nestMain[15];
						break;
					default:
					break;
						
				}
				accountData[accountData.length]={
					id:	accountData.length,
					date:nestInfo.nestrecords.got_records[j].created_at,
					money:parseFloat(nestInfo.nestrecords.got_records[j].eggs)*eggval,
					message:message,
					status:2
				}
				get_money=parseFloat(get_money)+(parseFloat(nestInfo.nestrecords.got_records[j].eggs)*parseFloat(eggval));
			}
			
		}
		if (accountData.length!=0) {
			for (var int = 0; int < accountData.length; int++) {
				var date1 = Date.parse(accountData[int].date);
				for (var int2 = int; int2 < accountData.length; int2++) {
					var date2 = Date.parse(accountData[int2].date);
					if (date1<date2) {
						var temp;
						temp=accountData[int];
						accountData[int]=accountData[int2];
						accountData[int2]=temp;
						date1 =date2;
					}
				}
			}
		}
		$(this.getElementByXid("span19")).html("Return:$"+extracted_money);
		$(this.getElementByXid("span20")).html("Expend:$"+get_money);
		event.source.loadData(accountData);
		
	};

	
	
	
	Model.prototype.withdrawDataCustomRefresh = function(event){
		if (nestInfo==undefined) {
			return;
	
		}
		var money=0;
		event.source.clear();
		for (var int = 0; int < withdrawData.length; int++) {
			withdrawData[int].withdraw = (withdrawData[int].withdraw*0.06).toFixed(2);
			money+=parseFloat(withdrawData[int].money);
		}
		$(this.getElementByXid("h54")).html("$"+money);
		$(this.getElementByXid("span21")).html("Invested:$"+money);
		
		event.source.loadData(withdrawData);
		withdrawData=null;
		nestInfo=undefined;
	};

	
	
	
	Model.prototype.li2Click = function(event){
		var row = event.bindingContext.$object;
		this.comp("withdrawData").to(row);
		this.comp("withDrawWindow").show();
	};

	
	
	
	Model.prototype.button10Click = function(event){
		var money = $.trim(this.comp("input1").val());
		var password = $.trim($(this.getElementByXid("password1")).val());
		var reg = new RegExp("^[0-9.]*$");
		if (!money) {
			this.showprompt(lang.showprompt[19]);
		}
		else{
			if (reg.test(money)) {
				var current_worth =parseFloat(this.comp("withdrawData").val("money"));
				if (parseFloat(money)>current_worth) {
					this.showprompt(lang.showprompt[20]);
					return;
				}
				if (password) {
					var is_success=contract.withdrawFromcontract(parseInt(money),this.comp("withdrawData").val("contract_id"),password);
					if (is_success) {
						this.comp("input1").val("");
						this.comp("withDrawWindow").hide();
						$(this.getElementByXid("h56")).html("$"+(parseFloat(this.comp("nest").val("withdraw"))+parseFloat(money)));
						$(this.getElementByXid("h54")).html("$"+(parseFloat($(this.getElementByXid("h54")).html().substring(1))-parseFloat(money)));
						$(this.getElementByXid("span22")).html("$"+(parseFloat($(this.getElementByXid("span22")).html())-parseFloat(money)));
						this.comp("accountData").newData({
							"defaultValues":[{
								money:parseFloat(money),
								date:new Date(),
								status:0,
								message:lang.nestMain[12]
							}]
						});
					}
				}
				else{
					this.showprompt(lang.showprompt[2]);
				}
				
			}
			else{
				this.showprompt(lang.showprompt[21]);
			}
		}
	};

	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{	
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};
	
	
	Model.prototype.input1Blur = function(event){
		var money = $.trim(this.comp("input1").val());
		var reg = new RegExp("^[0-9.]*$");
		if (!money) {
			this.showprompt(lang.showprompt[19]);
			return;
		}
		if (!reg.test(money)) {
			this.showprompt(lang.showprompt[22]);
		}
	};
	
	//升级合约，若合约结束只能复投
	Model.prototype.button2Click = function(event){
		var is_finished = this.comp("nest").val("is_finished");
		if (is_finished==1) {
			this.showprompt(lang.showprompt[23]);
		}
		else if (is_finished==0) {
			var eggs = this.comp("nest").val("type");
			var productionlevel = config.configegg().level_worth;
			var current_rank =0;
			for (var i = 0; i < productionlevel.length; i++) {
				if (parseInt(productionlevel[i])==parseInt(eggs)) {
					current_rank=i;
				}
			}
			justep.Shell.showPage("ZJP_production", {
				action:"upgrade",
				nest_id:this.comp("nest").val("id"),
				current_rank:current_rank,
				current_worth:this.comp("nest").val("currentWorth"),
				page:"nestMain"
			});
		}
	};
	
	//复投小窝
	Model.prototype.button3Click = function(event){
		var is_finished = this.comp("nest").val("is_finished");
		if (is_finished==1) {
			justep.Shell.showPage("ZJP_production", {
				action:"Re-investment",
				nest_id:this.comp("nest").val("id"),
				current_worth:0,
				current_rank:-1,
				page:"nestMain"
			});
		}
		else if(is_finished==0){
			this.showprompt(lang.showprompt[24]);
		}
	};
	
	//创建小窝
	Model.prototype.button4Click = function(event){
		justep.Shell.showPage("market", {
				action:"sell",
				nest_id:this.comp("nest").val("id"),
				name:this.comp("nest").val("name"),
				page:"nestMain"
			});
	};
	
	
	Model.prototype.button9Click = function(event){
		justep.Shell.showPage("ZJP_production", {
				action:"create",
				nest_id:this.comp("nest").val("id"),
				current_worth:0,
				current_rank:-1,
				name:this.comp("nest").val("name"),
			});
	};
	Model.prototype.button1Click = function(event){
		justep.Shell.closePage();
	};
	
	
	Model.prototype.button11Click = function(event){
		justep.Shell.showPage("community", {nest_id:this.comp("nest").val("id")});
	};
	
	
	Model.prototype.windowDialog1Receive = function(event){
		if (event.data.data) {
			var token=localStorage.getItem("jwt_token");
			var ids = token.split(".");
			var id = JSON.parse(base64.decode(ids[1]));
			if (id&&event.data.email) {
				localStorage.setItem("thismyuserId", id.sub);
				localStorage.setItem("email", event.data.email);
			}
			this.comp("windowDialog1").close();
			this.modelParamsReceive(event);
			
		}
	else if(event.data.reset){
			this.comp("windowDialog1").close();
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword",page:"main"});
		}
	};
	
	
	Model.prototype.button12Click = function(event){
		if (this.params.page=="main") {
			justep.Shell.showPage("main");
			this.close();
		}
		else{
			justep.Shell.closePage();
		}
	};
	
	
	Model.prototype.modelActive = function(event){
		this.modelParamsReceive(event);
	};
	
	
	Model.prototype.modelUnLoad = function(event){
	};
	
	
	return Model;
});