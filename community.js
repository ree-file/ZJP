define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var communityjs = require("./js/community");

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
		console.log(nest_id);
		var mynest = communityjs.gaynumber(nest_id);
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

	return Model;
});
