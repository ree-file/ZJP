<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="typedata" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column name="type" type="String" xid="xid2"></column>
  <column name="is_show" type="Integer" xid="xid3"></column>
  <data xid="default1">[{&quot;id&quot;:1,&quot;type&quot;:&quot;第一级产品600&quot;,&quot;is_show&quot;:1},{&quot;id&quot;:2,&quot;type&quot;:&quot;第二级产品1800&quot;,&quot;is_show&quot;:1},{&quot;id&quot;:3,&quot;type&quot;:&quot;第三级产品6000&quot;,&quot;is_show&quot;:1},{&quot;id&quot;:4,&quot;type&quot;:&quot;第四级产品18000&quot;,&quot;is_show&quot;:1}]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/row/row" class="x-row row-title" xid="row1">
   <div class="x-col" xid="col1"></div>
   <div class="x-col" xid="col2"><span xid="span1"><![CDATA[产品升级]]>
  </span></div>
   <div class="x-col" xid="col3"></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1" class="introduction"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"></div>
   <div class="x-col" xid="col5"></div>
   <div class="x-col" xid="col6"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row row-introduction" xid="row3">
   <div class="x-col" xid="col7"></div>
   <div class="x-col" xid="col8"><span xid="span2"><![CDATA[功能简介]]></span></div>
   <div class="x-col" xid="col9"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm btn-icon-right" label="查看" xid="button8" icon="icon-arrow-down-b" onClick="button8Click">
   <i xid="i8" class="icon-arrow-down-b"></i>
   <span xid="span21">查看</span></a></div></div>
  <div xid="div2" class="introduction-article"><p xid="p1"><![CDATA[产品升级：就是在你已有的产品上再次投入资金，所需要的金额量为更高级产品所需金额减去当前产品已投入金额。最终收益为升级后的产品的承诺收益。若为最高级产品则不能升级。]]></p></div>
  <div xid="div3" class="production-upgrade"><div component="$UI/system/components/justep/row/row" class="x-row upgrade1" xid="upgrade-message">
   <div class="x-col x-col-33 " xid="col10"><span xid="span3"><![CDATA[当前产品价值：]]></span></div>
   <div class="x-col x-col-67" xid="col11"><span xid="production_worth"><![CDATA[]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row center-block necessary" xid="necessary">
   <div class="x-col x-col-33 center-block" xid="col13">
  <div xid="div6"><span xid="span4"><![CDATA[所要提升等级：]]></span></div></div>
   <div class="x-col x-col-50" xid="col14"><select component="$UI/system/components/justep/select/select" bind-optionsCaption="请选择..." xid="select1" style="color:black;" bind-options="typedata" optionsAutoLoad="true" bind-optionsValue="type" onChange="select1Change"></select></div>
   <div class="x-col x-17" xid="col31"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm btn-only-icon" label="帮助" xid="button2" icon="img:$UI/ZJP/images/helps.gif|" onClick="button2Click">
   <i xid="i1"></i>
   <img src="$UI/ZJP/images/helps.gif" xid="image1"></img><span xid="span12">帮助</span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row necessary_money" xid="necessary_money">
   <div class="x-col x-col-33" xid="col16"><span xid="span5"><![CDATA[所需金额：]]></span></div>
   <div class="x-col x-col-67" xid="col18"><span xid="need_money"><![CDATA[600]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row my_money" xid="my_money">
   <div class="x-col x-col-33" xid="col20"><span xid="span6"><![CDATA[钱包余额：]]></span></div>
   <div class="x-col x-col-67" xid="col21"><span xid="money"><![CDATA[]]></span></div></div>
  
  
  <div component="$UI/system/components/justep/row/row" xid="create_benefit" class="x-row create_benefit">
   <div class="x-col x-col-33" xid="col28"><span xid="span9"><![CDATA[受益人：]]></span></div>
   <div class="x-col x-col-50" xid="col30"><input component="$UI/system/components/justep/input/input" class="form-control input-sm" xid="input4" onBlur="input4Blur"></input></div>
  <div class="x-col x-17" xid="col33"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm btn-only-icon" label="帮助" xid="button4" icon="img:$UI/ZJP/images/helps.gif|" onClick="button4Click">
   <i xid="i3"></i>
   <img src="$UI/ZJP/images/helps.gif" xid="image3"></img><span xid="span14">帮助</span></a></div>
  </div><div component="$UI/system/components/justep/row/row" class="x-row community community_show" xid="community">
   <div class="x-col x-col-33" xid="col22"><span xid="span7"><![CDATA[社区：]]></span></div>
   <div class="x-col x-col-50" xid="col24"><span component="$UI/system/components/justep/button/radio" class="x-radio x-radio-sm" xid="radio1" label="A区" name="community_radio" checked="false" disabled="true"></span>
  <span component="$UI/system/components/justep/button/radio" class="x-radio x-radio-sm" xid="radio2" name="community_radio" label="B区" disabled="true"></span>
  <span component="$UI/system/components/justep/button/radio" class="x-radio x-radio-sm" xid="radio3" name="community_radio" label="C区" disabled="true"></span></div>
  <div class="x-col x-17" xid="col35"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm btn-only-icon" label="帮助" xid="button5" icon="img:$UI/ZJP/images/helps.gif|" onClick="button5Click">
   <i xid="i4"></i>
   <img src="$UI/ZJP/images/helps.gif" xid="image4"></img><span xid="span15">帮助</span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row creat_interval" xid="row5">
   <div class="x-col x-col-33" xid="col19"><span xid="span16"><![CDATA[邀请人：]]></span></div>
   <div class="x-col x-col-50" xid="col23"><input component="$UI/system/components/justep/input/input" class="form-control input-sm" xid="input2"></input></div>
   <div class="x-col" xid="col25"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm btn-only-icon" label="button" xid="button3" icon="img:$UI/ZJP/images/helps.gif|" onClick="button3Click">
   <i xid="i5"></i>
   <img src="$UI/ZJP/images/helps.gif" xid="image5"></img><span xid="span17"></span></a></div></div><div component="$UI/system/components/justep/row/row" class="x-row  creat_email" xid="row4">
   <div class="x-col x-col-33" xid="col12"><span xid="span8"><![CDATA[邮箱地址：]]></span></div>
   <div class="x-col x-col-50" xid="col15"><input component="$UI/system/components/justep/input/input" class="form-control input-sm" xid="input1"></input></div>
   <div class="x-col" xid="col17"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm btn-only-icon" label="button" xid="button1" icon="img:$UI/ZJP/images/helps.gif|" onClick="button1Click">
   <i xid="i2"></i>
   <img src="$UI/ZJP/images/helps.gif" xid="image2"></img><span xid="span13"></span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row submit" xid="submit">
   <div class="x-col" xid="col26"></div>
   <div class="x-col" xid="col29"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="确定" xid="button6" onClick="button6Click">
   <i xid="i6"></i>
   <span xid="span19">确定</span></a></div>
  <div class="x-col" xid="col32"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="重置" xid="button7" onClick="button7Click">
   <i xid="i7"></i>
   <span xid="span20">重置</span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   </div></div>
  </div>
  </div>
   </div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" opacity="0">
   <div class="x-popOver-overlay" xid="div4"></div>
   <div class="x-popOver-content" xid="div5"><p xid="p2"><![CDATA[这是一段帮助内容，内容随着不同按钮点击而变化]]></p></div></div></div>