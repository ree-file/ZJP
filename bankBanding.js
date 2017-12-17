define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var bank = require('./js/bank');

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		var bankBanded = bank.cardBanded();
		console.log(bankBanded);
		var bankBandedData = this.comp("bankBandedData");
        for (var i = 0; i <= bankBanded.length-1; i++) {
					bankBandedData.add({
            "id": i+1,
            "username": bankBanded[i].username,
            "number": bankBanded[i].number,
            "bankname": bankBanded[i].bankname
          });
        }
	};

	Model.prototype.row2Click = function(event){
		justep.Shell.showPage("bandAdding");
	};

	return Model;
});
