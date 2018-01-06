define(function(require){
	var $ = require("jquery");
	var base64 = require("$UI/system/lib/base/base64");
	var justep = require("$UI/system/lib/justep");
	var getorders = require('./js/market');
	var nest = require('./js/nests');
	var sell_nestId;//用于判断产品是否存在
	var complex_page=1;
	var filter_page=1;
	var datastatus=0;
	var starty=0;
	var endy =0;
	var is_append=0;
	var is_loading=0;
	var is_refresh = 0;
	var me;
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
		me =this;
	};
//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};
	Model.prototype.modelLoad = function(event){
		$(this.getElementByXid("hidRow")).hide();
		this.comp("titile").set({
			title:lang.market[0]
		});
		this.comp("marketbutton").set({
			label:lang.market[1]
		});
		this.comp("recordbutton").set({
			label:lang.market[2]
		});
		this.comp("sellbutton").set({
			label:lang.market[3]
		});
		this.comp("sortingBtn").set({
			label:lang.market[4]
		});

		$(this.getElementByXid("span47")).html(lang.market[10]);
		$(this.getElementByXid("span48")).html(lang.market[11]);
		$(this.getElementByXid("span21")).html(lang.market[12]);
		$(this.getElementByXid("span22")).html(lang.market[13]);
		$(this.getElementByXid("span30")).html(lang.market[14]);
		$(this.getElementByXid("span32")).html(lang.market[15]);
		$(this.getElementByXid("span26")).html(lang.market[16]);
		$(this.getElementByXid("span9")).html(lang.market[17]);
		$(this.getElementByXid("span18")).html(lang.market[18]);
		$(this.getElementByXid("span55")).html(lang.market[20]);
		this.comp("button2").set({
			label:lang.market[19]
		});
		$(this.getElementByXid("span28")).html(lang.market[20]);
		this.comp("resetBtn").set({
			label:lang.market[21]
		});
		this.comp("betweenbutton").set({
			label:lang.market[22]
		});
		$(this.getElementByXid("span7")).html(lang.market[26]);
		$(this.getElementByXid("span11")).html(lang.market[27]);
		$(this.getElementByXid("span14")).html(lang.market[28]);
		$(this.getElementByXid("span12")).html(lang.market[29]);
		$(this.getElementByXid("span16")).html(lang.market[30]);
		$(this.getElementByXid("span10")).html(lang.market[31]);
		this.comp("paybutton").set({
			label:lang.market[32]
		});
		$(this.getElementByXid("span37")).html(lang.market[33]);
		this.comp("button3").set({
			label:lang.market[34]
		});
		this.comp("button6").set({
			label:lang.market[35]
		});
		$(this.getElementByXid("h52")).html(lang.market[36]);
		this.comp("button7").set({
			label:lang.market[37]
		});
		this.comp("button9").set({
			label:lang.market[38]
		});
	$(this.getElementByXid("contents1")).css("display","block");
	};

	//list里面的固定span值
	Model.prototype.showspantext = function(x){
		return lang.market[x];
	};

	//"X"按钮
	Model.prototype.button4Click = function(event){
		$(this.getElementByXid("popOver1")).hide();
	};
	//确认支付按钮
	Model.prototype.paybuttonClick = function(event){
		var market = this.comp("marketdata");
		var orderId = market.val("id");
		var password = $.trim($(this.getElementByXid("passwordInput")).val());
		if (password) {
			var is_success = getorders.buy(orderId,password);
			if (is_success) {
				this.showprompt(lang.showprompt[5]);

				this.comp("transactionrecord").newData({
					"defaultValues":[{
						productioncode:market.val("name"),
						transactionmoney:market.val("worth"),
						date:new Date(),
						status:"Bought"
					}]
				});
				market.remove();

				$(this.getElementByXid("passwordInput")).val("");
				this.comp("popOver1").hide();
			}
			else if (is_success==undefined) {
					this.comp("popOver1").hide();
					this.comp("windowDialog1").open();
					this.showprompt(lang.showprompt[0]);
					return;
				}
			else{
				this.showprompt(lang.showprompt[6]);
			}
		}
		else{
			this.showprompt(lang.showprompt[7]);
		}
	};
	//排序按钮
	Model.prototype.sortingBtnClick = function(event){
		if($(this.comp("sortingPopOver").$domNode).css("display")=="block"){
			this.comp("sortingPopOver").hide(999);
		} else {
			this.comp("sortingPopOver").show(999);
		}
	};
	//筛选价值的确认按钮
	Model.prototype.betweenbuttonClick = function(event){
		var min = $.trim(this.getElementByXid("minInput").value);
		var max = $.trim(this.getElementByXid("maxInput").value);
		if (min&&max) {
			if (max!=0) {
				datastatus = 1;
			}
			else if (max==0&&min==0) {
				datastatus = 0;
			}
			this.comp("filterdata").setValue("min",min);
			this.comp("filterdata").setValue("max",max);
			this.comp("marketdata").refreshData();
		}
		else{
			this.showprompt(lang.showprompt[8]);
		}
	};
	Model.prototype.orderby =function(objData,relation,type){
            var lRow = objData.getLastRow();
            var len = objData.count();
            var row1,row2;
            for (var i = 0;i<len;i++) {
                    objData.first(); //获取第一行位置，一次比较均是从第一行开始
                    do {
                        row1 = objData.getCurrentRow();
                        objData.next();
                        row2 = objData.getCurrentRow();

                        switch(type){
                            case 0:
                                    if (row1.val(relation) > row2.val(relation)) {
                                        objData.exchangeRow(row1,row2);
                                }
                                    break;
                            case 1:
                                    if (row1.val(relation) < row2.val(relation)) {
                                        objData.exchangeRow(row1,row2);
                                }
                            }
                    } while (lRow != row2);

                    //获取比较的最后的位置，循环一次，往前推一个
                    objData.last();
                    for (var j = 0; j < i; j++) {
                            objData.pre();
                    }
                    lRow= objData.getCurrentRow();

            }// end for

	}
	//排序下的按钮
	// 1、排序点击事件
	// 2、修改当前排序
	// 3、关闭排序窗口
	Model.prototype.sortingListClick = function(event){
		var data=this.comp("conditionData");
		data.setValue("fState","0",data.find(["fState"],["1"],true,true,true)[0]);
		var row = data.getCurrentRow();
		data.setValue("fState","1",row);
		this.comp("sortingBtn").set("label",data.getValue("fName",row));
		var rank = data.getValue("fName",row);
		if (rank==lang.market[25]) {
			this.orderby(this.comp("marketdata"),"worth",1);
			this.comp("list1").refresh(false);
		}
		else if(rank==lang.market[24])	{
			this.orderby(this.comp("marketdata"),"worth",0);
		}
		else{
			this.orderby(this.comp("marketdata"),"orderid",1);
		}
		this.comp("sortingPopOver").hide();
	};
	//重置按钮
	Model.prototype.resetBtnClick = function(event){
		$(this.getElementByXid("minInput")).val(0);
		$(this.getElementByXid("maxInput")).val(0);
		datastatus =0;
	};

	Model.prototype.input3Keyup = function(event){
		console.log(this.getElementByXid("input3").value);
	};
	//判断产品是否属于当前用户
	Model.prototype.belongtouser=function(simpleinfo,name){
		for (var int = 0; int < simpleinfo.length; int++) {
			if (simpleinfo[int].name==name) {
				sell_nestId = simpleinfo[int].id;
				return true;
			}
		}
		return false;
	}
//交易记录加载/刷新--许鑫君
	Model.prototype.transactionrecordCustomRefresh = function(event){
		if (this.params.name) {
			this.comp("input1").set({
				placeHolder:this.params.name
			});
		}
		event.source.clear();
		var record = getorders.getTransactionRecord();
		 if (record==undefined) {
			this.comp("windowDialog1").open();
			this.showprompt(lang.showprompt[0]);
			return;
		}
		if (record.length==0) {
			this.showprompt(lang.showprompt[9]);
		}else{
			event.source.loadData(record);
		}
	};
//校验产品id是否属于当前用户--许鑫君
	Model.prototype.input1Blur = function(event){
		var name = $.trim(this.comp("input1").val());
		if (name) {
			var simpleinfo=nest.nestsimpleinfo();
			if (simpleinfo==undefined) {
				this.showprompt(lang.showprompt[0]);
				this.comp("windowDialog1").open();
				return;
			}
			if (!this.belongtouser(simpleinfo, name)) {
				this.showprompt(lang.showprompt[10]);
			}
		}
		else{
			this.showprompt(lang.showprompt[11]);
		}


	};
//将孵化器挂在交易榜上--许鑫君
	Model.prototype.button2Click = function(event){

		if (!sell_nestId) {
			this.showprompt(lang.showprompt[12]);
		}
		else{
			this.comp("secondPassword").show();
		}

	};
//若点击销售中的产品提示是否下架--许鑫君
	Model.prototype.li3Click = function(event){
		var row = event.bindingContext.$object;
		if(row.val('status')=="Selling"){
			this.comp("chooseSoleStatus").show();
		}

	};
//点击后把销售中的商品下架--许鑫君
	Model.prototype.button3Click = function(event){
		var id=this.comp("transactionrecord").val("id");
		var is_success = getorders.notSold(id);
		if (is_success) {
			this.showprompt("下架成功");
			this.comp("chooseSoleStatus").hide();
			$(this.getElementByXid("password1")).val("");
			this.comp("price").setValue("price", 0);
			this.comp("input1").val("");
			this.comp("list2").refresh(true);
			if (datastatus==0) {
				complex_page=1;
				this.comp("marketdata").refreshData();
			}
		}
		else if (is_success==undefined) {
			this.comp("chooseSoleStatus").hide();
			this.comp("windowDialog1").open();
			this.showprompt(lang.showprompt[0]);

		}
		else{
			this.comp("chooseSoleStatus").hide();
			this.showprompt(lang.showprompt[13]);

		}
	};
//点击后hide提示窗口--许鑫君
	Model.prototype.button6Click = function(event){
		this.comp("chooseSoleStatus").hide();
	};

	Model.prototype.button9Click = function(event){
		justep.Shell.showPage("ZJP_resetPassword", {action:"resetsecondPassword"});

	};
	Model.prototype.sell=function(price){

			var secondPassword = $.trim($(this.getElementByXid("password1")).val());
			if (secondPassword) {
				var is_success = getorders.sellProduction(sell_nestId,price,secondPassword);
				if (is_success) {
					this.showprompt(lang.showprompt[14]);
					this.comp("secondPassword").hide();
					this.comp("transactionrecord").refreshData();
					$(this.getElementByXid("password1")).val("");
					this.comp("price").setValue("price", 0);
					this.comp("input1").val("");
					if(datastatus==0){
						complex_page=1;
						this.comp("marketdata").refreshData();
					}
					}
					else if(is_success ==undefined){
						this.comp("secondPassword").hide();
						this.showprompt(lang.showprompt[0]);
						this.comp("windowDialog1").open();
						return;
					}
					else{
					this.showprompt(lang.showprompt[15]);
					}
			}else{
				this.showprompt(lang.showprompt[2]);
			}


	};
	Model.prototype.button7Click = function(event){
		var price = this.comp("price").val("price");
		if(price==0){
			if (confirm(lang.showprompt[16])) {
			this.sell(price);
			}
		}
		else{
			this.sell(price);
		}
	};
	Model.prototype.loading=function(records){
		if (records.length==0) {
				is_append =1;
			}
			if (is_append==0) {
				this.comp("marketdata").newData({
					"defaultValues":records
				});
			}
			else{
				this.showprompt(lang.showprompt[17]);
			}
			setTimeout(function(){
				$(me.getElementByXid("span42")).removeClass("icon-ios7-reloading");
				$(me.getElementByXid("span42")).addClass("icon-ios7-reload");
				$(me.getElementByXid("span47")).html("加载完成");
				is_loading=0;
			}, 1000);


	};
	Model.prototype.refresh=function(){
		$(this.getElementByXid("span49")).removeClass("icon-ios7-reloading");
			$(this.getElementByXid("span49")).addClass("icon-ios7-reload");
			$(this.getElementByXid("span48")).html(lang.market[10]);
			$(this.getElementByXid("div13")).animate({height:0},"slow",function(){
				$(me.getElementByXid("div13")).removeClass("show");
				is_refresh=0;
			});

	};
	Model.prototype.addlang=function(data){
		for (var int = 0; int < data.length; int++) {
			data[int].lang =lang.market[9];
		}
		return data;
	};
	Model.prototype.marketdataCustomRefresh = function(event){
		if(complex_page==1&&datastatus==0){
			event.source.clear();
			var records = getorders.getorders(complex_page);
			if (records==undefined) {
				this.showprompt(lang.showprompt[0]);
				this.comp("windowDialog1").open();
				return;
			}
			records=this.addlang(records);
			event.source.loadData(records);
			this.refresh();
		}
		else if(datastatus==0&&complex_page!=1){
			var records = getorders.getorders(complex_page);
			if (records==undefined) {
				this.showprompt(lang.showprompt[0]);
				this.comp("windowDialog1").open();
				return;
			}
			records=this.addlang(records);
			this.loading(records);

		}
		if (filter_page==1&&datastatus==1) {
			event.source.clear();
			var records = getorders.filterOrders(filter_page,this.comp("filterdata").val("min"),this.comp("filterdata").val("max"));
			if (records==undefined) {
				this.showprompt(lang.showprompt[0]);
				this.comp("windowDialog1").open();
				return;
			}
			records=this.addlang(records);
			event.source.loadData(records);
			this.refresh();
		}
		else if(datastatus==1&&filter_page!=1){
			var records = getorders.filterOrders(filter_page,this.comp("filterdata").val("min"),this.comp("filterdata").val("max"));
			if (records==undefined) {
				this.showprompt(lang.showprompt[0]);
				this.comp("windowDialog1").open();
				return;
			}
			records=this.addlang(records);
			this.loading(records);

		}

	};

	Model.prototype.modelModelConstructDone = function(event){

	};

	Model.prototype.minInputBlur = function(event){
		var min = $.trim(this.comp("minInput").val());
		var max = $.trim(this.comp("maxInput").val());
		if (max) {
			if (parseFloat(min)>parseFloat(max)) {
				this.showprompt(lang.showprompt[18]);
			}
		}
	};

	Model.prototype.maxInputBlur = function(event){
		var min = $.trim(this.comp("minInput").val());
		var max = $.trim(this.comp("maxInput").val());
		if (min) {
			if (parseFloat(min)>parseFloat(max)) {
				this.showprompt(lang.showprompt[18]);
			}
		}
	};
//购买按钮
	Model.prototype.button1Click = function(event){
		$(this.getElementByXid("popOver1")).show();
		var row = event.bindingContext.$object;
		this.comp("marketdata").to(row);
		$(this.getElementByXid("moneynumberSpan")).html(this.comp("marketdata").val("worth"));
	};

	Model.prototype.li1Click = function(event){

	};

	Model.prototype.col1Click = function(event){
		var row = event.bindingContext.$object;
		var order_id = row.val("id");
		var nest_id = row.val("nest_id");
		var seller_id = row.val("seller_id");
		var email = row.val("useremail");
		var worth = row.val("worth");
		justep.Shell.showPage("particulars",{order_id:order_id,nest_id:nest_id,seller_id:seller_id,email:email,worth:worth});
	};

//	Model.prototype.col2Click = function(event){
//		var row = event.bindingContext.$object;
//		var type = row.val("type");
//		var remaining = row.val("remainingeggs");
//		var id = row.val("id");
//		var grandchildren = row.val("grandChildrenNum");
//		justep.Shell.showPage(require.toUrl("./particulars.w"),{type:type,remaing:remaining,id:id,grandchildren:grandchildren});
//	};

	Model.prototype.marketcontentTouchstart = function(event){
		starty = event.originalEvent.changedTouches[0].pageY;
	};

	Model.prototype.marketcontentTouchend = function(event){
		endy = event.originalEvent.changedTouches[0].pageY;
		 var scrollTop = document.documentElement.scrollTop;
		 var height = document.documentElement.scrollHeight;
		 var screen = document.documentElement.clientHeight;
		 if (height<=screen+scrollTop&&is_loading==0&&starty-endy>100&&this.comp("marketdata").count()%10==0) {
			if (starty-endy>100) {
				$(this.getElementByXid("span42")).removeClass("icon-ios7-reload");
				$(this.getElementByXid("span42")).addClass("icon-ios7-reloading");
				$(this.getElementByXid("span47")).html(lang.market[11]);
				is_loading=1;
				if (datastatus==0) {
					complex_page+=1;
					this.comp("marketdata").refreshData();
				}
				else if(datastatus==1)
				{
					filter_page+=1;
					this.comp("marketdata").refreshData();
				}
			}
		}
		else if(scrollTop<=0&&is_refresh==0&&starty-endy<-100){
			if (starty-endy<-100) {
				$(this.getElementByXid("div13")).addClass("show");
				$(this.getElementByXid("div13")).attr({
					height:0
				});
				$(this.getElementByXid("span49")).removeClass("icon-ios7-reload");
				$(this.getElementByXid("span49")).addClass("icon-ios7-reloading");
				$(this.getElementByXid("span48")).html(lang.market[39]);
				is_refresh=1;
				$(this.getElementByXid("div13")).animate({height:22}, "slow",function(){});
				setTimeout(function(){
					if (datastatus==0) {
					complex_page=1;
					me.comp("marketdata").refreshData();
					}
					else if(datastatus==1)
					{
						filter_page=1;
						this.comp("marketdata").refreshData();
					}
				}, 1000);

			}
		}
		starty=0;endy=0;

	};

	Model.prototype.backBtnClick = function(event){
			complex_page=1;
			filter_page=1;
			datastatus=0;
			starty=0;
			endy =0;
			is_append=0;
			is_loading=0;
			is_refresh = 0;
		if (this.params.page=="main") {
			justep.Shell.showPage("main");

		}
		else{
			justep.Shell.closePage();
		}
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
			 complex_page=1;
			 filter_page=1;
			 datastatus=0;
			 starty=0;
			 endy =0;
			 is_append=0;
			 is_loading=0;
			 is_refresh = 0;
			 this.comp("transactionrecord").refreshData();
			 this.comp("marketdata").refreshData();
			 this.comp("windowDialog1").close();
		}
		else if(event.data.reset){
			this.comp("windowDialog1").close();
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword",page:"main"});
		}
	};

	Model.prototype.span24Load = function(event){
		event.souce.html("123");
		console.log(123);
	};

	Model.prototype.sortingBtnLoad = function(event){
		console.log(123);
	};

	Model.prototype.conditionDataCustomRefresh = function(event){
		event.source.clear();
		for (var int = 0; int < 3; int++) {
			var params =[{
				id:int,
				fName:lang.market[23+int],
				fState:int==0?1:0
			}];
			event.source.newData({"defaultValues":params});
		}
	};


	Model.prototype.row27Click = function(event){
			$(this.getElementByXid("hidRow")).toggle(99);

	};


	Model.prototype.modelActive = function(event){
		this.comp("transactionrecord").refreshData();
		this.comp("marketdata").refreshData();
	};


	Model.prototype.modelInactive = function(event){
		this.close();
	};


	return Model;
});
