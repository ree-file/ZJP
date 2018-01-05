define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personaljs = require("./js/personal");
	var base64 = require("$UI/system/lib/base/base64");
	var bank = require("./js/bank");
	var lang;
	var USDrate;
	if(localStorage.getItem("lang")=="en_us")
	{
		lang = require('./js/en_us');
	}
	else{
		lang = require('./js/zh_cn');
	}
	var me;
	var Model = function(){
		this.callParent();
		me = this;
	};

	Model.prototype.modelLoad = function(event){
		this.comp("title").set({
			title:lang.transfermoney[0]
		});
		$(this.getElementByXid("span2")).html(lang.transfermoney[1]);
		$(this.getElementByXid("span7")).html(lang.transfermoney[2]);
		$(this.getElementByXid("span3")).html(lang.transfermoney[3]);
		$(this.getElementByXid("otherbankName")).html(lang.transfermoney[4]);
		$(this.getElementByXid("span9")).html(lang.transfermoney[5]);
		$(this.getElementByXid("span11")).html(lang.transfermoney[6]);
		$(this.getElementByXid("span13")).html(lang.transfermoney[7]);
		$(this.getElementByXid("span12")).html(lang.transfermoney[8]);
		$(this.getElementByXid("span4")).html(lang.transfermoney[9]);
		$(this.getElementByXid("span1")).html(lang.transfermoney[12]);
		$(this.getElementByXid("otherbankrow")).hide();
		$(this.getElementByXid("span5")).html(lang.transfermoney[13]);
		$(this.getElementByXid("span6")).html(lang.transfermoney[15]);
		$(this.getElementByXid("span8")).html(lang.transfermoney[16]);
		var bankfromData = this.comp("bankfromData");
		for (var i = 0; i < 18; i++) {
			bankfromData.add({
				"name": lang.bank[i],
			});
		}
		$(this.getElementByXid("content1")).css("display","block");
		USDrate = bank.getCNYrate();
		if (USDrate==undefined) {
			this.showprompt(lang.showprompt[63]);
		}
	};

	function photoCompress(file,w,objDiv){
    		var ready=new FileReader();
        /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
        ready.readAsDataURL(file);
        ready.onload=function(){
            var re=this.result;
            canvasDataURL(re,w,objDiv);
        }
  }

  function canvasDataURL(path, obj, callback){
       var img = new Image();
       img.src = path;
       img.onload = function(){
        var that = this;
        // 默认按比例压缩
        var w = that.width,
         h = that.height,
         scale = w / h;
         w = obj.width || w;
         h = obj.height || (w / scale);
        var quality = 0.7;  // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量
        if(obj.quality && obj.quality <= 1 && obj.quality > 0){
         quality = obj.quality;
        }
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL('image/jpeg', quality);
        // 回调函数返回base64的值
        callback(base64);
      }
  }

  function convertBase64UrlToBlob(urlData){
      var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type:mime});
  }

  Model.prototype.uploadmessage=function(formdata){
    var from = this.comp('fromSelect').val();
		var cardnumber = this.getElementByXid("cardidInput").value;
		var otherbankname = this.getElementByXid("otherbankInput").value;
		var money = this.getElementByXid("moneyInput").value;
		var security_code = $.trim(this.comp("securityInput").val());
		if (from == lang.transfermoney[11]) {
			formdata.append("money",money);
			formdata.append("card_number",cardnumber);
			formdata.append("security_code",security_code);
			formdata.append("message",otherbankname);
			var is_success5 = personaljs.supplies(formdata);
			if (is_success5 == undefined) {
				this.comp("windowDialog1").open();
				this.showprompt(lang.showprompt[0]);
				return;
			}
			else if (is_success5 == true) {
				this.setupButtonClick(event);
				return;
			}
		}
		else {
			formdata.append("money",money);
			formdata.append("card_number",cardnumber);
			formdata.append("security_code",security_code);
			formdata.append("message",from);
			var is_success6 = personaljs.supplies(formdata);
			if (is_success6 == undefined) {
				this.comp("windowDialog1").open();
				this.showprompt(lang.showprompt[0]);
				return;
			}
			else if (is_success6 == true) {
				this.setupButtonClick(event);
				return;
			}
		}
  };

	Model.prototype.setupButtonClick = function(event){
		var fileObj = $(this.getElementByXid("file2")).prop("files")[0];
		 var formdata = new FormData();
		if(fileObj.size/1024 > 1025) { //大于1M，进行压缩上传
                photoCompress(fileObj, {
                    quality: 0.2
                }, function(base64Codes){
//                    console.log("压缩后：" + base.length / 1024 + " " + base);
                 var bl = convertBase64UrlToBlob(base64Codes);
                 formdata.append("image", bl,"file_"+Date.parse(new Date())+".jpg");
                 me.uploadmessage(formdata);
         });
         }
         else{
        	 formdata.append("image", fileObj);
        	 me.uploadmessage(formdata);
         }

	};

	//↓银行选择与其他银行的选取
	Model.prototype.fromSelectChange = function(event){
		var fromSelect = this.comp('fromSelect').val();
		if (fromSelect == lang.transfermoney[11] ) {
			$(this.getElementByXid("otherbankrow")).show();
		}
		else {
			$(this.getElementByXid("otherbankrow")).hide();
		}
	};

	//封装提示框--许鑫君
	Model.prototype.showprompt = function(text){
		justep.Util.hint(text,{
						"style":"color:white;font-size:15px;background:rgba(28,31,38,1);text-align:center;padding:9px 0px;top:4px;"
					});
					$(".x-hint").find("button[class='close']").hide();
	};

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
		}
		else if(event.data.reset){
			this.comp("windowDialog1").close();
			justep.Shell.showPage("ZJP_resetPassword",{action:"resetpassword",page:"main"});
		}
	};

	Model.prototype.file2Change = function(event){
		var fileObj = $(this.getElementByXid("file2")).prop("files")[0];
		if (fileObj) {
			$(this.getElementByXid("span5")).html(lang.transfermoney[14]);
		}
		else{
			$(this.getElementByXid("span5")).html(lang.transfermoney[13]);
		}
	};

	Model.prototype.button3Click = function(event){
		var moneyInput = this.getElementByXid("moneyInput").value;
		var changemoney = 7;
		$(this.getElementByXid("daospan")).text("￥"+(moneyInput*changemoney).toFixed(2));
	};

	Model.prototype.input1Blur = function(event){
		if ($.trim(this.comp("input1").val())) {
			this.comp("moneyInput").val((parseFloat(this.comp("input1").val())/USDrate).toFixed(2));
		}

	};

	Model.prototype.moneyInputBlur = function(event){
	if ($.trim(this.comp("moneyInput").val())) {
		this.comp("input1").val((parseFloat(this.comp("moneyInput").val())*USDrate).toFixed(2));
	}
	};

	return Model;
});
