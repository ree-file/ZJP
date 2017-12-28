define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var bank = require('./js/bank');
	var base64 = require("$UI/system/lib/base/base64");
	var Model = function(){
		this.callParent();
	};
	//登入页面，所有银行卡读取
	Model.prototype.modelLoad = function(event){
		var bankBandedData = this.comp("bankBandedData");
		var bankBanded = bank.cardBanded();
		if (bankBanded == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt("请重新登录");
			return;
		}
		else if(bankBanded == true){
			this.modelLoad(event);
			return;
		}
		for (var i = 0; i <= bankBanded.length-1; i++) {
			bankBandedData.add({
				"id": bankBanded[i].id,
				"username": bankBanded[i].username,
				"number": bankBanded[i].number,
				"bankname": bankBanded[i].bankname,
				"image" : "images/bankimg/"+bankBanded[i].bankname+".png"
			});
		}
	};
	//添加银行卡按钮行
	Model.prototype.row2Click = function(event){
			justep.Shell.showPage("bankAddind");
	};
	//判断银行对应图片
	Model.prototype.getImageUrl = function(row) {
    if (!row.val('image')){
        return 'images/bankimg/bank.png';
    }
    return require.toUrl(row.val('image'));
	};
	//删除按钮+刷新页面
	Model.prototype.deletebuttonClick = function(event){
	  var card_id = event.bindingContext.$object.val('id');
		var is_success = bank.cardDelete(card_id);
		if (is_success == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt("请重新登录");
			return;
		}
		else if(is_success == true){
			this.deletebuttonClick(event);
			return;
		}
		this.modelActive(event);
	};
	//返回按钮
	Model.prototype.backBtnClick = function(event){
		justep.Shell.closePage();
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
			this.modelActive(event);
		}
		else if(event.data.reset){
			this.comp("windowDialog1").close();
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword"});
		}
	};
	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
				"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
			});
			$(".x-hint").find("button[class='close']").hide();
	};
	//返回时的页面刷新
	Model.prototype.modelActive = function(event){
		var bankBandedData = this.comp("bankBandedData");
		bankBandedData.clear();
		this.modelLoad(event);
	};

	return Model;
});
