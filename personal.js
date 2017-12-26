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
		var pw0 = $(this.getElementByXid("oldpassword"));
		var pw1 = $(this.getElementByXid("pswInput1"));
		var pw2 = $(this.getElementByXid("pswInput2"));
		if (!pwState) {
			pw0.attr("type","text");
			pw1.attr("type","text");
			pw2.attr("type","text");
      pwState = true;
    } else {
      pw0.attr("type","password");
      pw1.attr("type","password");
      pw2.attr("type","password");
      pwState = false;
    }
	};

	Model.prototype.col7Click = function(event){
		justep.Shell.showPage(require.toUrl("./wallet.w"));
	};

	Model.prototype.col8Click = function(event){
		justep.Shell.showPage(require.toUrl("./bankBanding.w"));
	};

	Model.prototype.row14Click = function(event){
		justep.Shell.showPage(require.toUrl("./illustrate.w"));
	};

	Model.prototype.row16Click = function(event){
		justep.Shell.showPage(require.toUrl("./varsioninformation.w"));
	};

	Model.prototype.col17Click = function(event){
			var pswInput1 = this.getElementByXid("pswInput1").value;
			var pswInput2 = this.getElementByXid("pswInput2").value;
			var oldpassword = this.getElementByXid("oldpassword").value;
			if(pswInput1 == pswInput2){
				personaljs.changePassword(oldpassword,pswInput1);
				this.getElementByXid("pswInput1").value="";
				this.getElementByXid("pswInput2").value="";
				this.getElementByXid("oldpassword").value="";
			}
	};

	Model.prototype.inviteRowClick = function(event){
		justep.Shell.showPage(require.toUrl("./ZJP_production.w"));
	};

	Model.prototype.row15Click = function(event){
		justep.Shell.showPage(require.toUrl("./mailLogin.w"));
	};

	return Model;
});
