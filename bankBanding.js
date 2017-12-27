define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var bank = require('./js/bank');

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		var bankBandedData = this.comp("bankBandedData");
		var bankBanded = bank.cardBanded();
		if (bankBanded != undefined) {
			for (var i = 0; i <= bankBanded.length-1; i++) {
				bankBandedData.add({
					"id": bankBanded[i].id,
					"username": bankBanded[i].username,
					"number": bankBanded[i].number,
					"bankname": bankBanded[i].bankname,
					"image" : "images/bankimg/"+bankBanded[i].bankname+".png"
				});
			}
		}
		else {
			this.comp("windowDialog1").open();
			this.showprompt("请重新登录");
			return;
		}
	};

	Model.prototype.row2Click = function(event){
			justep.Shell.showPage("bankAddind");
	};

	Model.prototype.getImageUrl = function(row) {
    if (!row.val('image')){
        return 'images/bankimg/bank.png';
    }
    return require.toUrl(row.val('image'));
	};

	Model.prototype.deletebuttonClick = function(event){
	  var card_id = event.bindingContext.$object.val('id');
		var is_success = bank.cardDelete(card_id);
		if (is_success == undefined) {
			this.comp("windowDialog1").open();
			this.showprompt("请重新登录");
			return;
		}
		window.location.reload();
	};

	Model.prototype.backBtnClick = function(event){
		justep.Shell.closePage();
	};

	Model.prototype.windowDialog1Receive = function(event){
		if (event.data.data) {
			this.comp("windowDialog1").close();
		}
	};

	return Model;
});
