define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var communityjs = require("./js/community");
	var base64 = require("$UI/system/lib/base/base64");
	var Model = function() {
		this.callParent();
	};

	Model.prototype.content1Active = function(event){
		var allBtn = $(this.getElementByXid("allBtn"));
		$(allBtn).css({
			"color": "#757575",
			"background-color":"#5D92E2"
		});
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

	Model.prototype.content1Inactive = function(event){
		var allBtn = $(this.getElementByXid("allBtn"));
		$(allBtn).css({
			"color": "#FFFFFF",
			"background-color":"#282D40"
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
			this.showprompt("请重新登录");
			return;
		}
		else if(mynest == true){
			this.modelParamsReceive(event);
			return;
		}
		var childrenlength = mynest.children.length;
		var grandchildrenlength = "0";
		if (mynest.grandchildren) {
			grandchildrenlength = mynest.grandchildren.length;
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
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword"});
		}
		this.modelParamsReceive(event);
	};

	return Model;
});
