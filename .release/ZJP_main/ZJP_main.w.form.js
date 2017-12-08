define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ZJP/ZJP_main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cA7zmM3';
	this._flag_='10a1b5b95695d83c53b84cad6e91ed09';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"earning_name":{"define":"earning_name","label":"收益名称","name":"earning_name","relation":"earning_name","type":"String"},"earning_num":{"define":"earning_num","label":"收益数量","name":"earning_num","relation":"earning_num","rules":{"number":true},"type":"Decimal"},"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"proportion":{"define":"proportion","label":"所占比例","name":"proportion","relation":"proportion","rules":{"number":true},"type":"Decimal"}},"directDelete":false,"events":{"onCustomRefresh":"AccountDataCustomRefresh"},"idColumn":"id","isMain":false,"limit":20,"xid":"AccountData"});
}}); 
return __result;});