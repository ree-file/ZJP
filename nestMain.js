define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
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
	//获取小窝的基本信息
		var nestdata = this.comp("nest");
		var nestrow = nestdata.getFirstRow();
		var globalValue = nestdata.getValue("globalValue", nestrow);
		var RMBreleased = round2(nestdata.getValue("released", nestrow) * globalValue,1);
		var RMBspeed= round2(nestdata.getValue("speed", nestrow) * globalValue,1);
		var RMBnestPrincipal= round2(nestdata.getValue("nestPrincipal", nestrow) * globalValue,1);
		var RMBprospectiveEarnings= round2(nestdata.getValue("prospectiveEarnings", nestrow) * globalValue,1);
		var RMBhighestPrice= round2(nestdata.getValue("RMBhighestPrice", nestrow) * globalValue,1);
		nestdata.setValue("RMBreleased", RMBreleased, nestrow);
		nestdata.setValue("RMBspeed", RMBspeed, nestrow);
		nestdata.setValue("RMBnestPrincipal", RMBnestPrincipal, nestrow);
		nestdata.setValue("RMBprospectiveEarnings", RMBprospectiveEarnings, nestrow);
		nestdata.setValue("RMBhighestPrice", RMBspeed, nestrow);
		
	//获取,初始化 accelerate content的信息
		var accdata = this.comp("accelerate");
		var calculateData = this.comp("calculate");
		var frow = calculateData.getFirstRow();
		var type;
		var number;
		var TCA = 0;
		var TDA = 0;
		var TA = 0;
		accdata.each(function(param){
			if(param.row.val("type") == "社区加速"){
				TCA = TCA + param.row.val("number") ;
			}
			else{
				TDA = TDA + param.row.val("number") ;
			}

		});
		TA = TCA + TDA;
		calculateData.setValue("TotalCommunity", TCA, frow);
		calculateData.setValue("TotalDirect", TDA, frow);
		calculateData.setValue("TotalAccelerate", TA, frow);
		
	//获取,初始化 money content的信息
		var moneydata = this.comp("money");
		var Return = 0;
		var Expend = 0;
		moneydata.each(function(param){
			if(param.row.val("type") == "提现"){
				Return = Return + param.row.val("num") ;
			}
			else{
				Expend = Expend + param.row.val("num") ;
			}
		});
		calculateData.setValue("TotalReturn",Return, frow);
		calculateData.setValue("TotalExpend",Expend, frow);

	//获取,初始化investment content的信息
		var investmentdata = this.comp("investment");
		var Invested = 0;
		investmentdata.each(function(param){
			Invested = Invested +  param.row.val("num");
		});
		calculateData.setValue("Invested",Invested, frow);
	};

	
	
	
	return Model;
});