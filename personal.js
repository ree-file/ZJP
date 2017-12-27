define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personaljs = require('./js/personal');
	var jwt = require('./js/jwt');
	var ifhid = 0;
	var pwState = false;

	var Model = function(){
		this.callParent();
	};

	Model.prototype.row1Click = function(event){
		if(ifhid == 0){
			$(this.getElementByXid("hidRow")).show();
			ifhid = 1;
			var emailSpan = $(this.getElementByXid("emailSpan"));
			var useremail = personaljs.getemail();
			if (useremail == undefined) {
				this.comp("windowDialog1").open();
				this.showprompt("请重新登录");
				return;
			}
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
		justep.Shell.showPage("wallet");
	};

	Model.prototype.col8Click = function(event){
		justep.Shell.showPage("bankBanding");
	};

	Model.prototype.row14Click = function(event){
		justep.Shell.showPage("illustrate");
	};

	Model.prototype.row16Click = function(event){
		justep.Shell.showPage("versioninformation");
	};

	Model.prototype.col17Click = function(event){
			var pswInput1 = this.getElementByXid("pswInput1").value;
			var pswInput2 = this.getElementByXid("pswInput2").value;
			var oldpassword = this.getElementByXid("oldpassword").value;
			if(pswInput1 == pswInput2){
				var is_success = personaljs.changePassword(oldpassword,pswInput1);
				if (is_success == undefined) {
					this.comp("windowDialog1").open();
					this.showprompt("请重新登录");
					return;
				}
				this.getElementByXid("pswInput1").value="";
				this.getElementByXid("pswInput2").value="";
				this.getElementByXid("oldpassword").value="";
			}
	};

	Model.prototype.inviteRowClick = function(event){
		justep.Shell.showPage("ZJP_production",{
			action:"invite"
		});
	};

	Model.prototype.row15Click = function(event){
		jwt.removeToken();
		this.owner.send({data:true});
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
			this.comp("windowDialog1").close();
		}
	};

	return Model;
});
