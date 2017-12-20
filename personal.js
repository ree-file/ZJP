define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personaljs = require('./js/personal');
	var ifhid = 0;
	var pwState = false;

	var Model = function(){
		this.callParent();
	};

	Model.prototype.row1Click = function(event){
		if(ifhid == 0){
			$(this.getElementByXid("hidRow")).show();
			ifhid = 1;
			var useremail = personaljs.getemail();
      var emailSpan = $(this.getElementByXid("emailSpan"));
			emailSpan.text(useremail);
		}
		else {
			$(this.getElementByXid("hidRow")).hide();
			ifhid = 0;
		}
	};

	Model.prototype.modelActive = function(event){
	};

	Model.prototype.modelLoad = function(event){
		$(this.getElementByXid("hidRow")).hide();
	};

	Model.prototype.showhidBtnClick = function(event){
		var pw1 = $(this.getElementByXid("pswInput1"));
		var pw2 = $(this.getElementByXid("pswInput2"));
		if (!pwState) {
			pw1.attr("type","text");
			pw2.attr("type","text");
      pwState = true;
    } else {
      pw1.attr("type","password");
      pw2.attr("type","password");
      pwState = false;
    }
	};

	Model.prototype.col7Click = function(event){
		justep.Shell.showPage("wallet");
	};

	Model.prototype.col8Click = function(event){
		justep.Shell.showPage("bankBanding");
	};

	Model.prototype.row14Click = function(event){
		justep.Shell.showPage("illustrate");
	};

	Model.prototype.row16Click = function(event){
		justep.Shell.showPage("varsioninformation");
	};

	Model.prototype.col17Click = function(event){
			var pswInput1 = this.getElementByXid("pswInput1").value;
			var pswInput2 = this.getElementByXid("pswInput2").value;
			if(pswInput1 == pswInput2){
				personaljs.changepassword(pswInput1);
				this.getElementByXid("pswInput1").value="";
				this.getElementByXid("pswInput2").value="";
			}
	};

	return Model;
});
