define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var communityjs = require("./js/community");
	var base64 = require("$UI/system/lib/base/base64");
	var lang;
	if(localStorage.getItem("lang")=="en_us")
	{
		lang = require('./js/en_us');
	}
	else{
		lang = require('./js/zh_cn');
	}
	var Model = function() {
		this.callParent();
	};

	Model.prototype.content2Active = function(event){
		var SecondBtn = $(this.getElementByXid("SecondBtn"));
		$(SecondBtn).css({
			"color": "#757575",
			"background-color":"#5D92E2"
		});
	};

	Model.prototype.content3Active = function(event){
		var ThirdBtn = $(this.getElementByXid("ThirdBtn"));
		$(ThirdBtn).css({
			"color": "#757575",
			"background-color":"#5D92E2"
		});
	};

	Model.prototype.content2Inactive = function(event){
		var SecondBtn = $(this.getElementByXid("SecondBtn"));
		$(SecondBtn).css({
			"color": "#FFFFFF",
			"background-color":"#282D40"
		});
	};

	Model.prototype.content3Inactive = function(event){
		var ThirdBtn = $(this.getElementByXid("ThirdBtn"));
		$(ThirdBtn).css({
			"color": "#FFFFFF",
			"background-color":"#282D40"
		});
	};

	Model.prototype.modelParamsReceive = function(event){
		var nest_id = this.params.nest_id;
		var mynest = communityjs.nests(nest_id);
		if (mynest == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt(lang.shouprompt);
			return;
		}
		else if(mynest == true){
			this.modelParamsReceive(event);
			return;
		}
		var Anumber1Span = $(this.getElementByXid("Anumber1Span"));
		var Bnumber1Span = $(this.getElementByXid("Bnumber1Span"));
		var Cnumber1Span = $(this.getElementByXid("Cnumber1Span"));
		var allpeople = $(this.getElementByXid("allpeople"));
		Anumber1Span.text(mynest.analyse.depth1_count);
		Bnumber1Span.text(mynest.analyse.depth2_count);
		Cnumber1Span.text(mynest.analyse.depth3_count);
		allpeople.text(mynest.analyse.descendants_count);
	};

	// function count(o){
  //   var t = typeof o;
  //   if(t == 'string'){
  //           return o.length;
  //   }else if(t == 'object'){
  //           var n = 0;
  //           for(var i in o){
  //                   n++;
  //           }
  //           return n;
  //   }
  //   return false;
  // }
	//
	// function peoplenumber(q,p){
  //   var n = 0;
  //   for(var i in q){
	// 		if (q[i].community == p) {
  //       n++;
	// 		}
  //   }
  //   return n;
  // }

	Model.prototype.button6Click = function(event){
		justep.Shell.closePage();
	};

	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
			"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
		});
		$(".x-hint").find("button[class='close']").hide();
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
		}
		else if(event.data.reset){
			this.comp("windowDialog1").close();
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword",page:"main"});
		}
		this.modelParamsReceive(event);
	};

	Model.prototype.modelLoad = function(event){
		this.comp("title").set({
			title:lang.community[0],
		});
		this.comp("SecondBtn").set({
			label:lang.community[1],
		});
		this.comp("ThirdBtn").set({
			label:lang.community[2],
		});
		$(this.getElementByXid("span16")).html(lang.community[3]);
		$(this.getElementByXid("span18")).html(lang.community[4]);
		$(this.getElementByXid("span48")).html(lang.community[6]);
		$(this.getElementByXid("span36")).html(lang.community[7]);
		$(this.getElementByXid("span37")).html(lang.community[8]);
		$(this.getElementByXid("span3")).html(lang.community[9]);
		$(this.getElementByXid("span32")).html(lang.community[10]);
		$(this.getElementByXid("content")).css("display","block");
	};

	return Model;
});
