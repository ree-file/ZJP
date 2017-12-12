<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:287px;left:339px;height:auto;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="rootClassData" idColumn="id"><column name="id" type="String" xid="xid1"></column>
  <column name="name" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;name&quot;:&quot;天使猫&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;name&quot;:&quot;小窝&quot;},{&quot;id&quot;:&quot;3&quot;,&quot;name&quot;:&quot;猫币&quot;},{&quot;id&quot;:&quot;4&quot;,&quot;name&quot;:&quot;成长周期&quot;},{&quot;id&quot;:&quot;5&quot;,&quot;name&quot;:&quot;购入小窝&quot;},{&quot;id&quot;:&quot;6&quot;,&quot;name&quot;:&quot;复投小窝&quot;},{&quot;id&quot;:&quot;7&quot;,&quot;name&quot;:&quot;升级小窝&quot;},{&quot;id&quot;:&quot;8&quot;,&quot;name&quot;:&quot;加速成长&quot;},{&quot;id&quot;:&quot;9&quot;,&quot;name&quot;:&quot;直接加速&quot;},{&quot;id&quot;:&quot;10&quot;,&quot;name&quot;:&quot;社区加速&quot;},{&quot;id&quot;:&quot;11&quot;,&quot;name&quot;:&quot;猫窝交易&quot;},{&quot;id&quot;:&quot;12&quot;,&quot;name&quot;:&quot;社区类型&quot;},{&quot;id&quot;:&quot;13&quot;,&quot;name&quot;:&quot;加速规则&quot;},{&quot;id&quot;:&quot;14&quot;,&quot;name&quot;:&quot;提现流程&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="introduceData" idColumn="id"><column name="id" type="String" xid="xid3"></column>
  <column name="rootid" type="String" xid="xid4"></column>
  <column name="text" type="String" xid="xid5"></column>
  <data xid="default2">[{&quot;id&quot;:&quot;1&quot;,&quot;rootid&quot;:&quot;1&quot;,&quot;text&quot;:&quot;5454大神丢好烦&quot;}]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full background-color-black" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar titlebar" xid="titleBar1">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1"><![CDATA[介绍]]></div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>
   <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row1">
   <div class="x-col x-col-25 noMarginPadding" xid="col1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="rootClassData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" class="rootborder">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col5"><h5 xid="h51" bind-text=' val("name")' class="text-center" style="color:#FFFFFF;">h5</h5></div>
   </div></li></ul> </div></div>
   <div class="x-col" xid="col3"><div xid="div1">
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="introduceData" filter=' $row.val("rootid") == $model.rootClassData.val("id")'>
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><textarea cols="5" xid="textarea2" class="noborder background-color-black" style="width:100%;height:100%;" bind-text=' val("text")' rows="15"></textarea></li></ul> </div></div></div></div></div>
   </div></div>