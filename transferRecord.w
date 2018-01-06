<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onActive="modelActive" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="recordData" confirmRefresh="false" idColumn="id"><column label="编号" name="id" type="Integer" xid="xid1"></column>
  <column label="" name="type" type="String" xid="xid2"></column>
  <column name="money" type="String" xid="xid5"></column>
  <column name="money_active" type="String" xid="xid3"></column>
  <column name="money_limit" type="String" xid="xid4"></column>
  <column name="coins" type="String" xid="xid6"></column>
  <column name="another" type="String" xid="xid8"></column>
  <column name="updated_at" type="String" xid="xid7"></column>
  <column name="another" type="String" xid="xid7"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="background-color:#1C1F26;"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" style="background-color:#252932;" xid="title">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title"></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="height:100%;width:100%;position:relative;padding-left:2%;padding-right:2%;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="background-color:#1C1F26;margin-bottom:8px;position:relative;padding:0px 0px 0px 0px;">
   <div class="x-col" xid="col2" style="padding-left:12px;">
    <span xid="span1"></span></div> </div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="recordData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row bigrow" xid="row1" style="background-color:#252932;margin-top:15px;">
   <div class="x-col" xid="col1">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-20" xid="col10"><span xid="span4" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(2)"><![CDATA[]]></span></div>
   <div class="x-col" xid="col16"><span xid="span3" style="color:#FFFFFF;font-size:medium;" bind-text='val("id")'><![CDATA[]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-20" xid="col20">
    <span xid="span7" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(4)"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col19">
    <span xid="span8" style="color:#FFFFFF;font-size:small;" bind-text='val("card_number")'><![CDATA[]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col x-col-20" xid="col22">
    <span xid="span9" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(5)"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col21">
    <span xid="span10" style="color:#FFFFFF;font-size:medium;" bind-text='val("money")'><![CDATA[]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col x-col-20" xid="col24">
    <span xid="span11" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(6)"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col23">
    <span xid="span12" style="color:#FFFFFF;font-size:x-small;" bind-text='val("updated_at")'><![CDATA[]]></span></div> </div></div>
   <div class="x-col x-col-25" xid="col3" style="padding-top:30px;padding-right:0px;padding-left:0px;margin-right:0px;margin-left:0px;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" xid="button2">
   <i xid="i2"></i>
   <span xid="span2" bind-text='val("type")'></span></a></div>
   </div>
  </div></div></li></ul> </div>
  <div xid="div10" style="height:100px;"></div>
  </div>
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive"></span></div>