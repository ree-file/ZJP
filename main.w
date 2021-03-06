<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:431px;left:281px;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="number"><column label="区号" name="number" type="String" xid="xid1"></column>
  <column label="国家" name="nation" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;number&quot;:&quot;+86&quot;,&quot;nation&quot;:&quot;中国&quot;}]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full background-color-black" xid="panel1">
   <div class="x-panel-top" xid="top1">
    <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" style="background-color:#252932;">
     <div class="x-titlebar-left" xid="left1"></div>
     <div class="x-titlebar-title" xid="title1">
      <span xid="span1" style="font-weight:normal;color:#868687;">登录</span></div> 
     <div class="x-titlebar-right reverse" xid="right1"></div></div> </div> 
   <div class="x-panel-content" xid="content1">
    
    <div xid="div3" style="padding:10px 10px 10px 10px;" class=".background-color-black"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-33 center-block " xid="col7" style="vertical-align:middle;text-align:left;"><h5 xid="h51" style="font-size:medium;font-family:华文细黑;font-weight:500;color:#FFFFFF;"><![CDATA[国家/地区]]></h5></div>
   <div class="x-col" xid="col9" style="vertical-align:middle;text-align:left;">
  <h5 xid="h52" style="font-size:medium;font-family:华文细黑;font-weight:500;color:##5D92E2;" bind-text=' $model.data1.val("nation")' class="center-block text-center"></h5></div>
  <div class="x-col x-col-10" xid="col4"><h5 xid="h54" style="font-size:medium;font-family:华文细黑;font-weight:600;color:#5D92E2;" class="center-block text-right">&gt;</h5></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-33 center-block " xid="col10"><input component="$UI/system/components/justep/input/input" class="input-group-addon" xid="input6" bind-ref='$model.data1.ref("number")' onFocus="input6Focus" onBlur="input6Blur"></input></div>
   <div class="x-col" xid="col12"><input component="$UI/system/components/justep/input/input" class="input-group-addon " xid="input5" placeHolder="请输入手机号码" onFocus="input5Focus" onBlur="input5Blur"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="padding-top:1px;">
   <div class="x-col x-col-33 center-block" xid="col13" style="vertical-align:middle;text-align:left;"><h5 xid="h53" style="font-size:medium;font-family:华文细黑;font-weight:500;color:#FFFFFF;"><![CDATA[密码]]></h5></div>
   <div class="x-col" xid="col15" style="padding-bottom:0px;"><input component="$UI/system/components/justep/input/password" class="input-group-addon" xid="password1" bind-focus="password1Focus" bind-blur="password1Blur"></input></div></div></div><div xid="div1" style="padding:10px 10px 10px 10px;" class=".background-color-black">
     <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="登录" xid="button1" style="background-color:#5D92E2;">
      <i xid="i1"></i>
      <span xid="span2">登录</span></a> 
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col1"><h5 xid="h55" style="font-size:medium;font-family:华文细黑;font-weight:500;color:#5D92E2;"><![CDATA[忘记密码？]]></h5></div>
   <div class="x-col center-block text-center" xid="col2"></div>
   <div class="x-col" xid="col3"><h5 xid="h56" style="text-align:right;font-size:medium;font-family:华文细黑;font-weight:500;#5D92E2;"><![CDATA[注册新用户]]></h5></div></div><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="邮箱登录" xid="button3" style="background-color:#454C5E;border-width:0px 0px 0px 0px;" onClick="button3Click">
   <i xid="i3"></i>
   <span xid="span9">邮箱登录</span></a>
  </div> </div> 
   </div></div>