define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personaljs = require('./js/personal');
	var jwt = require('./js/jwt');
	// var countUp = require('./js/countUp/countUp')
	var ifhid = 0;
	var pwState = false;
	var base64 = require("$UI/system/lib/base/base64");
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
	};

	Model.prototype.row1Click = function(event){
		if(ifhid == 0){
			$(this.getElementByXid("hidRow")).show();
			ifhid = 1;
			var emailSpan = $(this.getElementByXid("emailSpan"));
			var useremail = personaljs.getemail();
			if (useremail == undefined) {
				this.comp("windowDialog1").open();
				this.showprompt(lang.showprompt[0]);
				return;
			}
			else if (useremail == true) {
				this.row1Click(event);
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

	function timedCount(num,total){
      num++;
      $(".totalspancenter").text(num);
      // 设置条件使停止计时
      if (num<total) {
          var t = setTimeout(function(){timedCount(num,total)},10);
      }
  }

	Model.prototype.modelLoad = function(event){
		// var demo = new countUp.CountUp("totalSpan", 0, 94.62, 2, 2.5);
		// demo.start();
    // 调用计时函数
	
		$(this.getElementByXid("hidRow")).hide();
		$(this.getElementByXid("span2")).html(lang.personal[0]);
		$(this.getElementByXid("span1")).html(lang.personal[1]);
		$(this.getElementByXid("span6")).html(lang.personal[2]);
		$(this.getElementByXid("span8")).html(lang.personal[3]);
		$(this.getElementByXid("span14")).html(lang.personal[4]);
		$(this.getElementByXid("span15")).html(lang.personal[5]);
		$(this.getElementByXid("span7")).html(lang.personal[6]);
		$(this.getElementByXid("span3")).html(lang.personal[7]);
		$(this.getElementByXid("span10")).html(lang.personal[8]);
		$(this.getElementByXid("span9")).html(lang.personal[9]);
		$(this.getElementByXid("span13")).html(lang.personal[10]);
		$(this.getElementByXid("span17")).html(lang.personal[11]);
		$(this.getElementByXid("span19")).html(lang.personal[12]);
		$(this.getElementByXid("span22")).html(lang.personal[13]);
		$(this.getElementByXid("span21")).html(lang.personal[14]);
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
					this.showprompt(lang.showprompt);
					return;
				}
				else if (is_success == true) {
					this.col17Click(event);
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
	};

	Model.prototype.modelParamsReceive = function(event){
		if (this.params.personal) {
				var totalSpan = $(this.getElementByXid("totalSpan"));
				var num = 0;
				var x = this.params.personal;  //传值赋值
				var t = setTimeout(timedCount(num,x));
		}
		else{
			$(this.getElementsByXid("totalSpan")).html(0);
		}
	};

	return Model;
});
