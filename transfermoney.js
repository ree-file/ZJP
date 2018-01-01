define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var personaljs = require("./js/personal");
	var base64 = require("$UI/system/lib/base/base64");
	var lang;
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
		$(this.getElementByXid("otherbankrow")).hide();
		var bankfromData = this.comp("bankfromData");
		for (var i = 0; i < 18; i++) {
			bankfromData.add({
				"name": lang.bank[i],
			});
		}
	};
	function photoCompress(file,w,objDiv){
            var ready=new FileReader();
                /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
                ready.readAsDataURL(file);
                 debugger;
                ready.onload=function(){
                    var re=this.result;
                    debugger;
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
	Model.prototype.setupButtonClick = function(event){
		var fileObj = $(this.getElementByXid("file2")).prop("files")[0];
		 var formdata = new FormData();
		if(fileObj.size > 1025) { //大于1M，进行压缩上传
                photoCompress(fileObj, {
                    quality: 0.2
                }, function(base64Codes){
                    //console.log("压缩后：" + base.length / 1024 + " " + base);
                  bl = convertBase64UrlToBlob(base64Codes);
                  ;
                  formdata.append("image", bl, "file_"+Date.parse(new Date())+".jpg");
                  debugger
                  var from = me.comp('fromSelect').val();
                  var cardnumber = me.getElementByXid("cardidInput").value;
                  var money = me.getElementByXid("moneyInput").value;
                  var otherbankInput = me.getElementByXid("otherbankInput").value;
                  var security_code = me.comp("securityInput").val();
                  formdata.append("money",money);
                  formdata.append("type","save");
                  formdata.append("card_number",cardnumber);
                  formdata.append("message",from);
                  formdata.append("security_code",security_code);
                  debugger;
                  var is_success5 = personaljs.supplies(formdata);
         });}
//			var from = this.comp('fromSelect').val();
//			var cardnumber = this.getElementByXid("cardidInput").value;
//			var money = this.getElementByXid("moneyInput").value;
//			var otherbankInput = this.getElementByXid("otherbankInput").value;
//			if (from == lang.transfermoney[11]) {
//				var is_success5 = personaljs.supplies(money,"save",cardnumber,otherbankInput,bl);
//				if (is_success5 == undefined) {
//					this.comp("windowDialog1").open();
//					this.showprompt(lang.showprompt[0]);
//					return;
//				}
//				else if (is_success5 == true) {
//					this.setupButtonClick(event);
//					return;
//				}
//			}
//			else {
//				var is_success6 = personaljs.supplies(money,"save",cardnumber,from);
//				if (is_success6 == undefined) {
//					this.comp("windowDialog1").open();
//					this.showprompt(lang.showprompt[0]);
//					return;
//				}
//				else if (is_success6 == true) {
//					this.setupButtonClick(event);
//					return;
//				}
//			}

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



	return Model;
});
