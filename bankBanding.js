define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var bank = require('./js/bank');

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		var bankBanded = bank.cardBanded();
		var bankBandedData = this.comp("bankBandedData");
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

	Model.prototype.row2Click = function(event){
			justep.Shell.showPage(require.toUrl("./bankAddind.w"));
	};

	Model.prototype.getImageUrl = function(row) {
    if (!row.val('image')){
        return 'images/bankimg/bank.png';
    }
    return require.toUrl(row.val('image'));
	};

	Model.prototype.deletebuttonClick = function(event){
	  var card_id = event.bindingContext.$object.val('id');
		bank.cardDelete(card_id);
		console.log(card_id);
		window.location.reload();
	};

	return Model;
});
