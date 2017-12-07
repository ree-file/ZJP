define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ZJP/selectNation'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cVBz6Vn';
	this._flag_='0aab6ded7a6dc76a5babe86140d8d8b3';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"nation":{"define":"nation","name":"nation","relation":"nation","type":"String"},"number":{"define":"number","name":"number","relation":"number","type":"String"},"picture":{"define":"picture","name":"picture","relation":"picture","type":"String"}},"directDelete":false,"events":{},"idColumn":"number","initData":"[{\"number\":\"+86\",\"nation\":\"中国\",\"picture\":\"$UI/ZJP/res/img/china.gif\"},{\"number\":\"+44\",\"nation\":\"英国\",\"picture\":\"$UI/ZJP/res/img/TheUnitedKingdom.jpg\"}]","isMain":false,"limit":20,"xid":"data1"});
}}); 
return __result;});