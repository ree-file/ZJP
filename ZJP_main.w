<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:309px;left:136px;height:auto;" onLoad="modelLoad" onModelConstructDone="modelModelConstructDone" onModelConstruct="modelModelConstruct"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="AccountData" onCustomRefresh="AccountDataCustomRefresh" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column label="收益名称" name="earning_name" type="String" xid="xid2"></column>
  <column label="收益数量" name="earning_num" type="Decimal" xid="xid3"></column>
  <column label="所占比例" name="proportion" type="Decimal" xid="xid4"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="nestsAccount" idColumn="id"><column name="id" type="Integer" xid="xid5"></column>
  <column label="合约类型" name="nesttype" type="String" xid="xid6"></column>
  <column label="获得的金额" name="has_hatched" type="Integer" xid="xid7"></column>
  <column label="冻结金额" name="hacthing" type="Integer" xid="xid8"></column>
  <column label="社区人数" name="community" type="Integer" xid="xid9"></column>
  <data xid="default3">[{&quot;id&quot;:1,&quot;nesttype&quot;:&quot;第一级600&quot;,&quot;has_hatched&quot;:300,&quot;hacthing&quot;:1500,&quot;community&quot;:20},{&quot;id&quot;:2,&quot;nesttype&quot;:&quot;第二级1800&quot;,&quot;has_hatched&quot;:900,&quot;hacthing&quot;:4500,&quot;community&quot;:30}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/row/row" class="x-row nav-bar" xid="row12">
   <div class="x-col" xid="col13"></div>
   <div class="x-col title" xid="col17"><span xid="span24"><![CDATA[天使猫]]></span></div>
   <div class="x-col" xid="col19"><div class="dropdown btn-group" component="$UI/system/components/bootstrap/dropdown/dropdown" xid="dropdown1">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-right dropdown-toggle" label="更多" icon="icon-arrow-down-b" xid="button4">
    <i class="icon-arrow-down-b" xid="i4"></i>
    <span xid="span18">更多</span></a> 
   <ul component="$UI/system/components/justep/menu/menu" class="x-menu dropdown-menu" xid="menu1">
    <li class="x-menu-item" xid="item1">
     <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="产品中心" xid="button5">
      <i xid="i5"></i>
      <span xid="span19">产品中心</span></a> </li> 
    <li class="x-menu-item" xid="item2">
     <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="个人中心" xid="button6">
      <i xid="i6"></i>
      <span xid="span20">个人中心</span></a> </li> </ul> </div></div></div></div>  
    <div class="x-panel-content" xid="content1">
  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content2"><div component="$UI/system/components/justep/panel/panel" class="x-panel" xid="first-part" style="width:100%;height:65%;background-color:#1C1F26;">
	
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
   <div class="x-col" xid="col12"><span xid="span4"><![CDATA[3679($)]]></span></div></div></div></div>
  </div></div><div xid="first-bottom" class="first-bottom"><div component="$UI/system/components/justep/row/row" class="x-row bottom-row1" xid="row5">
   <div class="x-col" xid="col3" style="background-color:transparent;"><span xid="span5"><![CDATA[预计明日收益]]></span></div>
   <div class="x-col" xid="col7"><span xid="span6"><![CDATA[当前总金额]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row bottom-row2" xid="row6">
   <div class="x-col" xid="col10"><span xid="span7"><![CDATA[237($)]]></span></div>
   <div class="x-col" xid="col11"><span xid="span8"><![CDATA[78637($)]]></span></div>
   </div></div></div><div component="$UI/system/components/justep/panel/panel" class="x-panel" xid="last-part">
  
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
   </div></div></div></li></ul> </div></div></div>
  <div class="x-contents-content content-nest" xid="content3"><div component="$UI/system/components/justep/row/row" class="x-row hatched-title" xid="row13">
   <div class="x-col" xid="col20"></div>
   <div class="x-col" xid="col21" style="background-color:transparent;"><span xid="span21"><![CDATA[产品明细]]></span></div>
   <div class="x-col" xid="col22"></div></div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="nestsAccount">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2" class="production-li">
  <div component="$UI/system/components/justep/row/row" class="x-row production" xid="row14">
   <div class="x-col x-col-25 production-img" xid="col25">
  <img src="$UI/ZJP/images/egg.png" alt="" xid="image2" class="img-responsive"></img></div>
   <div class="x-col x-col-10 production-name" xid="col58"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row27">
   <div class="x-col" xid="col73"><span xid="span23" bind-text='val("id")'></span></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row24">
   <div class="x-col" xid="col62">
  <span xid="span25"><![CDATA[号]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row25">
   <div class="x-col" xid="col67"><span xid="span26"><![CDATA[产]]></span></div>
  </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row26">
   <div class="x-col" xid="col68"><span xid="span27"><![CDATA[品]]></span></div>
   </div>
  </div><div class="x-col x-col-50 production-details" xid="col26"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row15">
   <div class="x-col" xid="col30"><span xid="span28"><![CDATA[获得金额：]]></span>
  <span xid="span31" bind-text='val("has_hatched")'></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row16">
   <div class="x-col" xid="col33"><span xid="span29"><![CDATA[冻结金额：]]></span>
  <span xid="span32" bind-text='val("hacthing")'></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row17">
   <div class="x-col" xid="col36"><span xid="span30"><![CDATA[产品类型：]]></span>
  <span xid="span33" bind-text='val("nesttype")'></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row28">
   <div class="x-col" xid="col76"><span xid="span34"><![CDATA[社区人数：]]></span>
  <span xid="span35" bind-text='val("community")'></span></div>
   </div></div>
   <div class="x-col x-col-25 production-options" xid="col27"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row18">
   <div class="x-col" xid="col38"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="升单" xid="button7">
   <i xid="i7"></i>
   <span xid="span36">升单</span></a></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row19">
   <div class="x-col" xid="col41"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="复投" xid="button8">
   <i xid="i8"></i>
   <span xid="span37">复投</span></a></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row20">
   <div class="x-col" xid="col44"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="创建" xid="button9">
   <i xid="i9"></i>
   <span xid="span38">创建</span></a></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row29">
   <div class="x-col" xid="col81"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="社区" xid="button10">
   <i xid="i10"></i>
   <span xid="span39">社区</span></a></div></div></div>
  </div></li></ul> </div></div></div></div>
  <div class="x-panel-bottom" xid="bottom2"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified" tabbed="true" xid="buttonGroup1" style="width:100%;position:absolute;height:100%;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link index" label="首页" xid="button1" target="content2">
    <i xid="i1"></i>
    <span xid="span15">首页</span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top nests" label="产品" xid="button2" icon="img:$UI/ZJP/images/egg.png|" target="content3">
    <i xid="i2"></i>
    <img src="$UI/ZJP/images/egg.png" xid="image1" class="egg"></img><span xid="span16">产品</span></a> 
  <a component="$UI/system/components/justep/button/button" class="btn btn-link community" label="个人中心" xid="button3">
   <i xid="i3"></i>
   <span xid="span17">个人中心</span></a></div></div></div> 
</div>