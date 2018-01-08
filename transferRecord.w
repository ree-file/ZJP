<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onActive="modelActive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="withdrawalData" confirmRefresh="false" idColumn="id"><column name="id" type="String" xid="xid15"></column>
  <column name="money" type="String" xid="xid16"></column>
  <column name="card_number" type="String" xid="xid17"></column>
  <column name="status" type="String" xid="xid18"></column>
  <column name="updated_at" type="String" xid="xid19"></column></div><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="rechargeData" idColumn="id" confirmRefresh="false"><column name="id" type="String" xid="xid10"></column>
  <column name="money" type="String" xid="xid11"></column>
  <column name="card_number" type="String" xid="xid12"></column>
  <column name="status" type="String" xid="xid13"></column>
  <column name="updated_at" type="String" xid="xid14"></column></div><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="recordData" confirmRefresh="false" idColumn="id"><column label="编号" name="id" type="Integer" xid="xid1"></column>
  <column label="" name="type" type="String" xid="xid2"></column>
  <column name="money" type="String" xid="xid5"></column>
  <column name="money_active" type="String" xid="xid3"></column>
  <column name="money_limit" type="String" xid="xid4"></column>
  <column name="coins" type="String" xid="xid6"></column>
  <column name="another" type="String" xid="xid8"></column>
  <column name="another" type="String" xid="xid7"></column>
  <column name="updated_at" type="String" xid="xid9"></column></div></div>  
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
    <div class="x-panel-content" xid="content1" style="display:none;height:100%;width:100%;position:relative;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="background-color:#1C1F26;margin-bottom:8px;position:relative;width:100%;height:40px;padding-right:0px;padding-left:0px;">
   <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group" tabbed="true" xid="buttonGroup1" style="width:100%;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="rechargeButton" target="content3" style="width:33%;">
    <i xid="i1"></i>
    <span xid="span1"></span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="withdrawalButton" target="content4" style="width:34%;">
    <i xid="i3"></i>
    <span xid="span9"></span></a> 
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="transferButton" target="content2" style="width:33%;">
   <i xid="i4"></i>
   <span xid="span10"></span></a></div></div><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1" style="top:40px;width:100%;">
   <div class="x-contents-content" xid="content3" onActive="content3Active" onInactive="content3Inactive"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="rechargeData">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row bigrow" xid="row7" style="background-color:#252932;margin-top:15px;">
   <div class="x-col" xid="col21">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
     <div class="x-col x-col-25" xid="col22">
      <span xid="span15" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(2)"></span></div> 
     <div class="x-col" xid="col2">
      <span xid="span12" style="color:#FFFFFF;font-size:medium;" bind-text='val("id")'></span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
     <div class="x-col x-col-25" xid="col13">
      <span xid="span18" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(3)"></span></div> 
     <div class="x-col" xid="col9">
      <span xid="span19" style="color:#FFFFFF;font-size:small;" bind-text='val("money")'></span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
     <div class="x-col x-col-25" xid="col17">
      <span xid="span16" style="color:#C0C0C0;font-size:small;" bind-text="$model.showtransferRecord(17)"></span></div> 
     <div class="x-col" xid="col12">
      <span xid="span17" style="color:#FFFFFF;font-size:small;" bind-text='val("card_number")'></span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
     <div class="x-col x-col-25" xid="col14">
      <span xid="span20" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(7)"></span></div> 
     <div class="x-col" xid="col11">
      <span xid="span21" style="color:#FFFFFF;font-size:x-small;" bind-text='val("updated_at")'></span></div> </div> </div> 
   <div class="x-col x-col-25" xid="col18" style="padding-top:38px;padding-right:0px;padding-left:0px;margin-right:0px;margin-left:0px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
     <div class="x-col" xid="col15">
      <a component="$UI/system/components/justep/button/button" class="btn btn-warning btn-block" xid="button1">
       <i xid="i5"></i>
       <span xid="span11" bind-text='val("status")'></span></a> </div> </div> </div> </div></li></ul> </div>
  <div xid="div1" style="height:100px;"></div></div><div class="x-contents-content" xid="content4" onActive="content4Active" onInactive="content4Inactive"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" data="withdrawalData">
   <ul class="x-list-template" xid="listTemplateUl3">
    <li xid="li3">
     <div component="$UI/system/components/justep/row/row" class="x-row bigrow" xid="row18" style="background-color:#252932;margin-top:15px;">
      <div class="x-col" xid="col31">
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row17">
        <div class="x-col x-col-25" xid="col33">
         <span xid="span28" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(2)"></span></div> 
        <div class="x-col" xid="col32">
         <span xid="span29" style="color:#FFFFFF;font-size:medium;" bind-text='val("id")'></span></div> </div> 
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row19">
        <div class="x-col x-col-25" xid="col27">
         <span xid="span24" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(3)"></span></div> 
        <div class="x-col" xid="col30">
         <span xid="span26" style="color:#FFFFFF;font-size:small;" bind-text='val("money")'></span></div> </div> 
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row15">
        <div class="x-col x-col-25" xid="col24">
         <span xid="span27" style="color:#C0C0C0;font-size:small;" bind-text="$model.showtransferRecord(17)"></span></div> 
        <div class="x-col" xid="col28">
         <span xid="span25" style="color:#FFFFFF;font-size:small;" bind-text='val("card_number")'></span></div> </div> 
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row16">
        <div class="x-col x-col-25" xid="col26">
         <span xid="span23" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(7)"></span></div> 
        <div class="x-col" xid="col29">
         <span xid="span22" style="color:#FFFFFF;font-size:x-small;" bind-text='val("updated_at")'></span></div> </div> </div> 
      <div class="x-col x-col-25" xid="col23" style="padding-top:38px;padding-right:0px;padding-left:0px;margin-right:0px;margin-left:0px;">
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14">
        <div class="x-col" xid="col25">
         <a component="$UI/system/components/justep/button/button" class="btn btn-warning btn-block" xid="button3">
          <i xid="i6"></i>
          <span xid="span30" bind-text='val("status")'></span></a> </div> </div> </div> </div> </li> </ul> </div>
  <div xid="div2" style="height:100px;"></div></div><div class="x-contents-content" xid="content2" onActive="content2Active" onInactive="content2Inactive"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="recordData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row bigrow" xid="row1" style="background-color:#252932;margin-top:15px;">
   <div class="x-col" xid="col1">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-25" xid="col10"><span xid="span4" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(2)"><![CDATA[]]></span></div>
   <div class="x-col" xid="col16"><span xid="span3" style="color:#FFFFFF;font-size:medium;" bind-text='val("id")'><![CDATA[]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-25" xid="col20">
    <span xid="span7" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(3)"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col19">
    <span xid="span8" style="color:#FFFFFF;font-size:small;" bind-text='val("money")'><![CDATA[]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-25" xid="col5">
    <span xid="span5" style="color:#C0C0C0;font-size:small;" bind-text="$model.showtransferRecord(10)"></span></div> 
   <div class="x-col" xid="col6">
    <span xid="span6" style="color:#FFFFFF;font-size:small;" bind-text='val("another")'></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col x-col-25" xid="col7">
    <span xid="span14" style="color:#C0C0C0;" bind-text="$model.showtransferRecord(7)"></span></div> 
   <div class="x-col" xid="col8">
    <span xid="span13" style="color:#FFFFFF;font-size:x-small;" bind-text='val("updated_at")'></span></div> </div>
  </div>
   <div class="x-col x-col-25" xid="col3" style="padding-top:38px;padding-right:0px;padding-left:0px;margin-right:0px;margin-left:0px;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"><a component="$UI/system/components/justep/button/button" class="btn btn-warning btn-block" xid="button2">
   <i xid="i2"></i>
   <span xid="span2" bind-text='val("type")'></span></a></div>
   </div>
  </div></div></li></ul> </div><div xid="div10" style="height:100px;"></div>
  </div>
  
  </div>
  
  </div>
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive"></span></div>