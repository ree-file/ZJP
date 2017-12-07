<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:360px;left:359px;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="number"><column name="number" type="String" xid="xid1"></column>
  <column name="nation" type="String" xid="xid2"></column>
  <column name="picture" type="String" xid="xid3"></column>
  <data xid="default1">[{&quot;number&quot;:&quot;+86&quot;,&quot;nation&quot;:&quot;中国&quot;,&quot;picture&quot;:&quot;$UI/ZJP/res/img/china.gif&quot;}]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" style="background-color:#252932;color:#868687;">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="linear linear-chevronleft">
   <i xid="i1" class="linear linear-chevronleft"></i>
   <span xid="span1"></span></a></div>
   <div class="x-titlebar-title " xid="title1"><![CDATA[选择国家]]></div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>
   <div class="x-panel-content" xid="content1" style="background-color:#1C1F26;"><div component="$UI/system/components/justep/list/list" class="x-list " xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="padding:5px 15px 5px 15px;">
   <div class="x-col x-col-10 row-buttom-border" xid="col4"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button2" icon="e-commerce e-commerce-fangdajing" style="color:#C3C3C3;">
   <i xid="i2" class="e-commerce e-commerce-fangdajing"></i>
   <span xid="span2"></span></a></div>
   <div class="x-col row-buttom-border" xid="col6"><input component="$UI/system/components/justep/input/input" class="input-group-addon" xid="input1" placeHolder="搜索"></input></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="padding:5px 15px 5px 15px;">
   <div class="x-col x-col-20 col-buttom-border" xid="col1"><img src=" " alt="" xid="image2" bind-attr-src=' $model.getImageUrl( val("picture"))' height="33px" style="width:50px;"></img></div>
   <div class="x-col col-buttom-border" xid="col2"><h5 xid="h51" bind-text=' val("nation")' style="color:#FFFFFF;">h5</h5></div>
   <div class="x-col x-col-20 col-buttom-border" xid="col3"><h5 xid="h52" class="text-center" bind-text=' val("number")' style="color:#C3C3C3;"><![CDATA[h5]]></h5></div></div></li></ul> </div></div>
   </div></div>