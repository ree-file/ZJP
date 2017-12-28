<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive" style="top:32px;left:296px;height:auto;"><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="typedata" idColumn="id" onCustomRefresh="typedataCustomRefresh" confirmRefresh="false" confirmDelete="false"><column name="id" type="Integer" xid="xid1"></column>
  <column name="type" type="String" xid="xid2"></column>
  <column name="is_show" type="Integer" xid="xid3"></column>
  <data xid="default1">[{&quot;id&quot;:1,&quot;type&quot;:&quot;第一级产品&quot;,&quot;is_show&quot;:1},{&quot;id&quot;:2,&quot;type&quot;:&quot;第二级产品&quot;,&quot;is_show&quot;:1},{&quot;id&quot;:3,&quot;type&quot;:&quot;第三级产品&quot;,&quot;is_show&quot;:1},{&quot;id&quot;:4,&quot;type&quot;:&quot;第四级产品&quot;,&quot;is_show&quot;:1}]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar backgroundAll" xid="titleBar1" title="猫窝升级">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" xid="button11" icon="linear linear-chevronleft" onClick="button11Click">
   <i xid="i11" class="linear linear-chevronleft"></i>
   <span xid="span1"></span></a></div>
   <div class="x-titlebar-title" xid="title1">猫窝升级</div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>
   <div class="x-panel-content backgroundAll" xid="content1" style="height:100%;"><div xid="div1" class="introduction">
  <div xid="div3" class="production-upgrade"><div component="$UI/system/components/justep/row/row" class="x-row backgroundD" xid="row8">
   <div class="x-col" xid="col39"><span xid="span20"><![CDATA[请输入以下信息]]></span></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row normalRow" xid="upgrade-message">
   <div class="x-col x-col-20" xid="col10" style="padding-top:10px;"><span xid="span3" class="leftspan"><![CDATA[产品价值]]></span></div>
   <div class="x-col " xid="col11"><span xid="production_worth" style="line-height:40px;"><![CDATA[]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row normalRow center-block necessary" xid="necessary">
   <div class="x-col x-col-20 center-block" xid="col13">
  <div xid="div6"><span xid="span4" class="leftspan"><![CDATA[提升等级]]></span></div></div>
   <div class="x-col nopadding" xid="col14"><select component="$UI/system/components/justep/select/select" bind-optionsCaption="请选择..." xid="select1" style="color:black;width:100%;height:38px;" bind-options="typedata" optionsAutoLoad="true" bind-optionsValue="id" onChange="select1Change" bind-optionsLabel="type"></select></div>
   <div class="x-col x-col-20 nopadding" xid="col31"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="帮助" xid="button2" icon="icon-alert" onClick="button2Click" style="position:relative;left:45%;color:#A6A6A6;">
   <i xid="i1" class="icon-alert"></i>
   <span xid="span12">帮助</span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row normalRow creat_interval" xid="row5">
   <div class="x-col x-col-20" xid="col19"><span xid="span16" class="leftspan"><![CDATA[邀请猫窝]]></span></div>
   <div class="x-col nopadding" xid="col23"><input component="$UI/system/components/justep/input/input" class="form-control inputAndSelect" xid="input2" onBlur="input2Blur"></input></div>
   <div class="x-col x-col-20 nopadding" xid="col25"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button3" icon="icon-alert" onClick="button3Click" style="position:relative;left:45%;color:#A6A6A6;">
   <i xid="i5" class="icon-alert"></i>
   <span xid="span17"></span></a></div></div><div component="$UI/system/components/justep/row/row" class="x-row normalRow  creat_email" xid="row4">
   <div class="x-col x-col-20" xid="col12"><span xid="span8" class="leftspan"><![CDATA[邮箱地址]]></span></div>
   <div class="x-col nopadding" xid="col15"><input component="$UI/system/components/justep/input/input" class="form-control inputAndSelect" xid="input1" onBlur="input1Blur"></input></div>
   <div class="x-col x-col-20 nopadding " xid="col17"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-alert" onClick="button1Click" style="position:relative;left:45%;color:#A6A6A6;">
   <i xid="i2" class="icon-alert"></i>
   <span xid="span13"></span></a></div></div><div component="$UI/system/components/justep/row/row" xid="create_benefit" class="x-row normalRow create_benefit" style="height:50px;">
   <div class="x-col x-col-20" xid="col28"><span xid="span9" class="leftspan"><![CDATA[上级猫窝]]></span></div>
   <div class="x-col nopadding" xid="col30"><input component="$UI/system/components/justep/input/input" class="form-control inputAndSelect" xid="input4" onBlur="input4Blur"></input></div>
  <div class="x-col x-col-20 nopadding " xid="col33"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="帮助" xid="button4" icon="icon-alert" onClick="button4Click" style="position:relative;left:45%;color:#A6A6A6;">
   <i xid="i3" class="icon-alert"></i>
   <span xid="span14">帮助</span></a></div>
  </div><div component="$UI/system/components/justep/row/row" class="x-row community community_show" xid="community">
   <div class="x-col x-col-33" xid="col22"><span xid="span7"><![CDATA[家族：]]></span></div>
   <div class="x-col x-col-50" xid="col24"><span component="$UI/system/components/justep/button/radio" class="x-radio x-radio-sm" xid="radio1" label="A区" name="community_radio" disabled="true"></span>
  <span component="$UI/system/components/justep/button/radio" class="x-radio x-radio-sm" xid="radio2" name="community_radio" label="B区" disabled="true"></span>
  <span component="$UI/system/components/justep/button/radio" class="x-radio x-radio-sm" xid="radio3" name="community_radio" label="C区" disabled="true"></span></div>
  <div class="x-col x-17" xid="col35"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm btn-only-icon" label="帮助" xid="button5" icon="icon-alert" onClick="button5Click">
   <i xid="i4" class="icon-alert"></i>
   <span xid="span15">帮助</span></a></div></div><div component="$UI/system/components/justep/row/row" class="x-row normalRow" xid="necessary_money">
   <div class="x-col x-col-20" xid="col16"><h5 xid="h55" class="leftspan"><![CDATA[所需金额]]></h5></div>
   <div class="x-col " xid="col18"><h5 xid="need_money" class="leftspan"><![CDATA[0]]></h5></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row normalRow my_money" xid="my_money">
   <div class="x-col x-col-20" xid="col20"><h5 xid="h56" class="leftspan"><![CDATA[交易资金]]></h5></div>
   <div class="x-col " xid="col21"><h5 xid="money" class="leftspan"><![CDATA[money]]></h5></div></div>
  
  
  <div component="$UI/system/components/justep/row/row" class="x-row my_money normalRow" xid="row6" style="height:50px;">
   <div class="x-col x-col-20" xid="col34">
    <h5 xid="h57" class="leftspan"><![CDATA[复投资金]]></h5></div> 
   <div class="x-col " xid="col27">
    <h5 xid="investment" class="leftspan"><![CDATA[]]></h5></div> </div>
  
  <div component="$UI/system/components/justep/row/row" class="x-row row-introduction normalRow" xid="row3">
   <div class="x-col x-col-20" xid="col7"></div>
   <div class="x-col" xid="col9"><a component="$UI/system/components/justep/button/button" class="btn btn-xs button8" xid="button8" onClick="button8Click">
   <i xid="i8"></i>
   <span xid="span21"></span></a></div>
  <div class="x-col x-col-20" xid="col42"></div></div><div xid="div2" class="introduction-article"><p xid="p1"><![CDATA[您将支付与现猫窝不同种类猫窝的差价来将其升级为更高级的猫窝]]></p></div><div component="$UI/system/components/justep/row/row" class="x-row submit" xid="submit">
   <div class="x-col" xid="col29"><a component="$UI/system/components/justep/button/button" class="btn blueButton" label="确定" xid="button6" onClick="button6Click">
   <i xid="i6"></i>
   <span xid="span19">确定</span></a></div>
  </div>
  <div component="$UI/system/components/justep/row/row" class="x-row " xid="row7">
   <div class="x-col" xid="col36">
    <a component="$UI/system/components/justep/button/button" class="btn garyButton" label="重置" xid="button10" onClick="button10Click">
     <i xid="i10"></i>
     <span xid="span18">重置</span></a></div> 
   </div>
  </div>
  </div>
  </div>
   </div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" opacity="0" style="top:63px;left:119px;">
   <div class="x-popOver-overlay" xid="div4"></div>
   <div class="x-popOver-content" xid="div5"><p xid="p2"><![CDATA[这是一段帮助内容，内容随着不同按钮点击而变化]]></p></div></div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="secondPassword" opacity="0" style="top:22px;left:229px;">
   <div class="x-popOver-overlay" xid="div7"></div>
   <div class="x-popOver-content" xid="div8" style="height:auto;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-33" xid="col2"><h5 xid="h52" style="color:#FAFFF3;"><![CDATA[二级密码：]]></h5></div>
   <div class="x-col" xid="col3"><input component="$UI/system/components/justep/input/password" class="form-control input-sm" xid="password1"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row secondcheck" xid="row2">
   <div class="x-col" xid="col5"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="确认密码" xid="button7" style="color:#8E8E8E;" onClick="button7Click">
   <i xid="i7"></i>
   <span xid="span2">确认密码</span></a></div>
   <div class="x-col" xid="col6"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="设置密码" xid="button9" style="color:#8E8E8E;" onClick="button9Click">
   <i xid="i9"></i>
   <span xid="span5">设置密码</span></a></div></div></div></div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceived="windowDialog1Received"></span></div>