define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var config = require("./js/config");
	var nest = require("./js/nests");
	var contract = require("./js/contract");
	var nestInfo;
	var eggval;
	var withdrawData=[];
	var historyData=[];
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
	
	};
	Model.prototype.modelParamsReceive = function(event){
		var nest_id = this.params.nest_id;
		var contract_id = this.params.contract_id;
		nestInfo = nest.singlenestInfo(nest_id);
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
		var released =0;
		var withdraw = 0;
		var investment = 0;
		historyData =[];
		withdrawData=[];
		var available =0;
		for (var i = 0; i < nestInfo.nestinfo.contracts.length; i++) {
			var money =0;
			var cpped=0;
			if (nestInfo.nestinfo.contracts[i].is_finished=="1") {
				money=parseFloat(nestInfo.nestinfo.contracts[i].eggs)-parseFloat(nestInfo.nestinfo.contracts[i].extracted);
				capped = parseFloat(nestInfo.nestinfo.contracts[i].eggs)*parseFloat(eggval);
				released+=capped*3;
				available+=money*parseFloat(eggval);
				withdraw+=parseFloat(nestInfo.nestinfo.contracts[i].extracted)*parseFloat(eggval);
			}
			else{
				capped=(parseFloat(nestInfo.nestinfo.contracts[i].from_weeks)+parseFloat(nestInfo.nestinfo.contracts[i].from_receivers)+parseFloat(nestInfo.nestinfo.contracts[i].from_community))*parseFloat(eggval);
				money=parseFloat(nestInfo.nestinfo.contracts[i].from_weeks)+parseFloat(nestInfo.nestinfo.contracts[i].from_receivers)+parseFloat(nestInfo.nestinfo.contracts[i].from_community)-parseFloat(nestInfo.nestinfo.contracts[i].extracted);
				released+=capped*3;
				available+=money*parseFloat(eggval);
				withdraw+=parseFloat(nestInfo.nestinfo.contracts[i].extracted)*parseFloat(eggval);
			}
			investment+=parseFloat(nestInfo.nestinfo.contracts[i].eggs)*eggval;
			historyData[historyData.length]={
					id:i+1,
					money:(parseFloat(nestInfo.nestinfo.contracts[i].eggs)*eggval).toFixed(2),
					date:nestInfo.nestinfo.contracts[i].created_at,
					message:"创建",
			}
			withdrawData[i]={
					id:i+1,
					date:new Date(),
					money:money*parseFloat(eggval)*3,
					contract_id:nestInfo.nestinfo.contracts[i].id,
					message:"点击提现",
					withdraw:capped*3
			}
		}
		
		
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
						historyData[j].message="复投";
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
		var date = new Date();
		var currentdate = new Date(date.getFullYear(),date.getMonth(),date.getDate());
		var times = currentdate.getTime();
		var accountData=[];
		if (nestInfo.nestrecords.extract_records.length!=0) {
			for (var j = 0; j < nestInfo.nestrecords.extract_records.length; j++) {
				accountData[j]={
					id:j,
					date:nestInfo.nestrecords.extract_records[j].created_at,
					money:nestInfo.nestrecords.extract_records[j].eggs*eggval,
					message:"提现",
					status:0
				}
					for (var i = 0; i < withdrawData.length; i++) {
						if (nestInfo.nestrecords.extract_records[j].contract_id==withdrawData[i].contract_id) {
					
							if(Date.parse(nestInfo.nestrecords.extract_records[j].created_at)<times){
								withdrawData[i].withdraw=withdrawData[i].withdraw-parseFloat(nestInfo.nestrecords.extract_records[j].eggs)*eggval;
							}
						}
					}
				}
			
		}
		if (nestInfo.nestrecords.got_records.length!=0) {
			for (var j = 0; j < nestInfo.nestrecords.got_records.length; j++) {
				var message ="";
				switch(nestInfo.nestrecords.got_records[j].type){
					case "invite_got":
						message="邀请加速";
						break;
					case "week_got":
						message="日常收益";
						break;
					case "community_got":
						message="社区加速";
						break;
					default:
					break;
						
				}
				accountData[accountData.length]={
					id:	accountData.length,
					date:nestInfo.nestrecords.got_records[j].created_at,
					money:nestInfo.nestrecords.got_records[j].eggs*eggval,
					message:message,
					status:2
				}
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
		event.source.loadData(accountData);
		
	};

	
	
	
	Model.prototype.withdrawDataCustomRefresh = function(event){
		if (nestInfo==undefined) {
			return;
		}
		for (var int = 0; int < withdrawData.length; int++) {
			withdrawData[int].withdraw = (withdrawData[int].withdraw*0.06).toFixed(2);
		}
		event.source.loadData(withdrawData);
		withdrawData=null;
		nestInfo=null;
	};

	
	
	
	Model.prototype.li2Click = function(event){
		var row = event.bindingContext.$object;
		this.comp("withdrawData").to(row);
		this.comp("withDrawWindow").show();
	};

	
	
	
	Model.prototype.button10Click = function(event){
		var eggs = $.trim(this.comp("input1").val());
		var password = $.trim($(this.getElementByXid("password1")).val());
		var reg = new RegExp("^[0-9]*$");
		if (!eggs) {
			this.showprompt("金额不能为空");
		}
		else{
			if (reg.test(eggs)) {
				var current_worth =parseFloat(this.comp("withdrawData").val("money"));
				if (parseFloat(parseInt(eggs)*eggval)>current_worth) {
					this.showprompt("超出当前所拥有金额");
					return;
				}
				if (password) {
					var is_success=contract.withdrawFromcontract(parseInt(eggs),this.comp("withdrawData").val("contract_id"),password);
					if (is_success) {
						this.comp("input1").val("");
						this.comp("withDrawWindow").hide();
						$(this.getElementByXid("h56")).html("$"+(parseFloat(this.comp("nest").val("withdraw"))+parseFloat(parseInt(eggs)*eggval)));
						$(this.getElementByXid("span22")).html("$"+(parseFloat($(this.getElementByXid("span22")).html())-parseFloat(parseInt(eggs)*eggval)));
						this.comp("accountData").newData({
							"defaultValues":[{
								money:parseFloat(parseInt(eggs)*eggval),
								date:new Date(),
								status:0,
								message:"提现"
							}]
						});
					}
				}
				else{
					this.showprompt("密码不能为空");
				}
				
			}
			else{
				this.showprompt("请输入整数");
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
		var reg = new RegExp("^[0-9]*$");
		if (!money) {
			$(this.getElementByXid("span30")).html(0);
			return;
		}
		if (reg.test(money)) {
			$(this.getElementByXid("span30")).html((parseInt(money)*eggval).toFixed(2));
		}
		else{
			this.showprompt("只能输入整数");
		}
	};
	
	//升级合约，若合约结束只能复投
	Model.prototype.button2Click = function(event){
		var is_finished = this.comp("nest").val("is_finished");
		if (is_finished==1) {
			this.showprompt("产品已经结束，请重新复投");
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
			justep.Shell.showPage(require.toUrl("./ZJP_production.w"), {
				action:"upgrade",
				nest_id:this.comp("nest").val("id"),
				current_rank:current_rank,
				current_worth:this.comp("nest").val("currentWorth"),
			});
		}
	};
	
	//复投小窝
	Model.prototype.button3Click = function(event){
		var is_finished = this.comp("nest").val("is_finished");
		if (is_finished==1) {
			justep.Shell.showPage(require.toUrl("./ZJP_production.w"), {
				action:"Re-investment",
				nest_id:this.comp("nest").val("id"),
				current_worth:0,
				current_rank:-1
			});
		}
		else if(is_finished==0){
			this.showprompt("产品尚未完成，不能复投");
		}
	};
	
	//创建小窝
	Model.prototype.button4Click = function(event){
		justep.Shell.showPage(require.toUrl("./market.w"), {
				action:"sell",
				nest_id:this.comp("nest").val("id"),
				name:this.comp("nest").val("name"),
			});
	};
	
	
	Model.prototype.button9Click = function(event){
		justep.Shell.showPage(require.toUrl("./ZJP_production.w"), {
				action:"create",
				nest_id:this.comp("nest").val("id"),
				current_worth:0,
				current_rank:-1,
				name:this.comp("nest").val("name"),
			});
	};
	Model.prototype.button1Click = function(event){
		history.back(-1);
	};
	
	
	Model.prototype.button11Click = function(event){
		justep.Shell.showPage(require.toUrl("community.w"), {nest_id:this.comp("nest").val("id")});
	};
	
	
	return Model;
});