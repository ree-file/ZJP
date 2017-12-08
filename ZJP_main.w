<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onModelConstructDone="modelModelConstructDone" onModelConstruct="modelModelConstruct"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="AccountData" onCustomRefresh="AccountDataCustomRefresh" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column label="收益名称" name="earning_name" type="String" xid="xid2"></column>
  <column label="收益数量" name="earning_num" type="Decimal" xid="xid3"></column>
  <column label="所占比例" name="proportion" type="Decimal" xid="xid4"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="欢迎入坑"
          class="x-titlebar" style="background-color:#252932;">
          <div class="x-titlebar-left"> 
            </div>  
          <div class="x-titlebar-title">欢迎入坑</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/panel/panel" class="x-panel" xid="first-part" style="width:100%;height:65%;background-color:#1C1F26;">
	
   <div xid="main_message" style="position:absolute;width:100%;height:80%;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><span xid="span1" class="pull-right"><![CDATA[每日拉人]]></span></div>
   <div class="x-col" xid="col2"><span xid="span2"><![CDATA[收益过万]]></span></div>
   </div>
  <div xid="circle" class="circle"><div xid="circle-box" class="circle-box"><div xid="circle-left" class="circle-left"><div xid="left" class="left"></div></div>
  <div xid="circle-right" class="circle-right"><div xid="right" class="right"></div></div>
  <div xid="circle-text" class="circle-text"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"></div>
   <div class="x-col" xid="col5"></div>
   <div class="x-col" xid="col6"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row row-title" xid="row3">
   <div class="x-col" xid="col9"><span xid="span3"><![CDATA[今日收益]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row row-content" xid="row4">
   <div class="x-col" xid="col12"><span xid="span4"><![CDATA[3679($)]]></span></div></div></div></div></div></div><div xid="first-bottom" class="first-bottom"><div component="$UI/system/components/justep/row/row" class="x-row bottom-row1" xid="row5">
   <div class="x-col" xid="col3" style="background-color:transparent;"><span xid="span5"><![CDATA[预计明日收益]]></span></div>
   <div class="x-col" xid="col7"><span xid="span6"><![CDATA[当前总金额]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row bottom-row2" xid="row6">
   <div class="x-col" xid="col10"><span xid="span7"><![CDATA[237($)]]></span></div>
   <div class="x-col" xid="col11"><span xid="span8"><![CDATA[78637($)]]></span></div>
   </div></div></div>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel" xid="last-part">
  
   <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" autoLoad="true" data="AccountData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row account" xid="row7" bind-id="$index()" bind-attr-test="$index()">
   <div class="x-col proportion" xid="col14"><span xid="span9" bind-text='val("proportion")'></span>
  <span xid="span14"><![CDATA[%]]></span></div>
   <div class="x-col " xid="col15"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="height:35px;">
   <div class="x-col earning_name" xid="col8"><span xid="span10" class="earning_title"><![CDATA[收益项目]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="margin:0px 0px 0px 0px;height:35px;">
   <div class="x-col earning_content" xid="col18"><span xid="span12" bind-text='val("earning_name")' class="earning_content"></span></div>
   </div></div>
   <div class="x-col " xid="col16"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="height:35px;">
   <div class="x-col earning_name" xid="col23"><span xid="span11"><![CDATA[收益金额]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="margin:0px 0px 0px 0px;height:35px;">
   <div class="x-col earning_content" xid="col24"><span xid="span13" bind-text='val("earning_num")'></span></div>
   </div></div></div></li></ul> </div></div>
  </div>
  <div class="x-panel-bottom" xid="bottom2"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified" tabbed="true" xid="buttonGroup1" style="width:100%;position:absolute;height:100%;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link index" label="首页" xid="button1">
    <i xid="i1"></i>
    <span xid="span15">首页</span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top nests" label="孵化宝" xid="button2" icon="img:$UI/ZJP/images/egg.png|">
    <i xid="i2"></i>
    <img src="$UI/ZJP/images/egg.png" xid="image1" class="egg"></img><span xid="span16">孵化宝</span></a> 
  <a component="$UI/system/components/justep/button/button" class="btn btn-link community" label="社区" xid="button3">
   <i xid="i3"></i>
   <span xid="span17">社区</span></a></div></div></div> 
</div>