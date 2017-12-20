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
            "id": i+1,
            "username": bankBanded[i].username,
            "number": bankBanded[i].number,
            "bankname": bankBanded[i].bankname,
						"image" : "images/bankimg/"+bankBanded[i].bankname+".png"
          });
        }
	};

	Model.prototype.row2Click = function(event){
		justep.Shell.showPage("bandAdding");
	};

	Model.prototype.getImageUrl = function(row) {
    if (!row.val('image')){
        return 'images/bankimg/bank.png';
    }
    return require.toUrl(row.val('image'));
	};

	return Model;
});
