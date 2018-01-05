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
		var mynest = communityjs.gaynumber(nest_id);
		if (mynest == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt(lang.shouprompt);
			return;
		}
		else if(mynest == true){
			this.modelParamsReceive(event);
			return;
		}
		var childrenlength = Number(mynest.analyse.childrenA_count)+Number(mynest.analyse.childrenB_count)+Number(mynest.analyse.childrenC_count);
		var grandchildrenlength = "0";
		if (mynest.grandchildren) {
			grandchildrenlength = Number(mynest.analyse.grandchildrenA_count)+Number(mynest.analyse.grandchildrenB_count)+Number(mynest.analyse.grandchildrenC_count);
		}
		var contractslength = count(mynest.contracts);
		// 二级ABC社区人数、三级ABC社区人数、总人数=二+三、
		var i = 0;
		for (i; i < contractslength; i++) {
			if (mynest.contracts[i].is_finished == "0") {
	      var receiversspan = $(this.getElementByXid("receiversspan"));
	      var communityspan = $(this.getElementByXid("communityspan"));
				receiversspan.text(mynest.contracts[i].from_receivers);//总直线加速
				communityspan.text(Number(mynest.contracts[i].frostB)+Number(mynest.contracts[i].frostC));//总社区加速
			}
		}
		var allpeople = $(this.getElementByXid("allpeople"));
		allpeople.text(Number(childrenlength)+Number(grandchildrenlength));
		var Anumber1Span = $(this.getElementByXid("Anumber1Span"));
		var Bnumber1Span = $(this.getElementByXid("Bnumber1Span"));
		var Cnumber1Span = $(this.getElementByXid("Cnumber1Span"));
		var Anumber2Span = $(this.getElementByXid("Anumber2Span"));
		var Bnumber2Span = $(this.getElementByXid("Bnumber2Span"));
		var Cnumber2Span = $(this.getElementByXid("Cnumber2Span"));
		Anumber1Span.text(peoplenumber(mynest.children,"A"));
		Bnumber1Span.text(peoplenumber(mynest.children,"B"));
		Cnumber1Span.text(peoplenumber(mynest.children,"C"));
		Anumber2Span.text(peoplenumber(mynest.grandchildren,"A"));
		Bnumber2Span.text(peoplenumber(mynest.grandchildren,"B"));
		Cnumber2Span.text(peoplenumber(mynest.grandchildren,"C"));
	};

	function count(o){
    var t = typeof o;
    if(t == 'string'){
            return o.length;
    }else if(t == 'object'){
            var n = 0;
            for(var i in o){
                    n++;
            }
            return n;
    }
    return false;
  }

	function peoplenumber(q,p){
    var n = 0;
    for(var i in q){
			if (q[i].community == p) {
        n++;
			}
    }
    return n;
  }

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
		$(this.getElementByXid("span17")).html(lang.community[5]);
		$(this.getElementByXid("span48")).html(lang.community[6]);
		$(this.getElementByXid("span36")).html(lang.community[7]);
		$(this.getElementByXid("span37")).html(lang.community[8]);
		$(this.getElementByXid("span43")).html(lang.community[6]);
		$(this.getElementByXid("span50")).html(lang.community[7]);
		$(this.getElementByXid("span44")).html(lang.community[8]);
		$(this.getElementByXid("span3")).html(lang.community[9]);
		$(this.getElementByXid("span32")).html(lang.community[10]);
		$(this.getElementByXid("span41")).html(lang.community[11]);
	};

	return Model;
});
