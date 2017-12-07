<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:386px;left:215px;height:auto;"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full background-color-black" xid="panel1">
   <div class="x-panel-top" xid="top1">
    <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar titlebar" xid="titleBar1" title="重置密码">
     <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button3" icon="linear linear-chevronleft" onClick="button3Click">
   <i xid="i3" class="linear linear-chevronleft"></i>
   <span xid="span4"></span></a></div>
     <div class="x-titlebar-title" xid="title1">
      <span xid="span1" class="title-font"><![CDATA[重置密码]]></span>titlebar重置密码</div> 
     <div class="x-titlebar-right reverse" xid="right1"></div></div> </div> 
   <div class="x-panel-content background-color-black" xid="content1">
    <div xid="div3" class="div-padding">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
      <div class="x-col x-col-25 center-block " xid="col10">
       <h5 xid="h51" style="font-size:medium;font-family:华文细黑;font-weight:500;color:#FFFFFF;">邮箱</h5></div> 
      <div class="x-col" xid="col12">
       <input component="$UI/system/components/justep/input/input" class="input-group-addon " xid="input5" placeHolder="请输入邮箱地址" onFocus="input5Focus" onBlur="input5Blur"></input></div> </div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-25 center-block " xid="col4">
    <h5 xid="h54" style="font-size:medium;font-family:华文细黑;font-weight:500;color:#FFFFFF;"><![CDATA[验证码]]></h5></div> 
   <div class="x-col" xid="col3">
    <input component="$UI/system/components/justep/input/input" class="input-group-addon " xid="input1" onFocus="input1Focus" onBlur="input1Blur"></input></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="padding-top:1px;">
      <div class="x-col x-col-25 center-block" xid="col13" style="vertical-align:middle;text-align:left;">
       <h5 xid="h53" style="font-size:medium;font-family:华文细黑;font-weight:500;color:#FFFFFF;"><![CDATA[新密码]]></h5></div> 
      <div class="x-col" xid="col15" style="padding-bottom:0px;">
       <input component="$UI/system/components/justep/input/password" class="input-group-addon" xid="password1" bind-focus="password1Focus" bind-blur="password1Blur"></input></div> </div> 
  </div> 
    <div xid="div1" style="padding:10px 10px 10px 10px;">
     <a component="$UI/system/components/justep/button/button" class="btn blueButton btn-default btn-block" label="重置密码" xid="button1">
      <i xid="i1"></i>
      <span xid="span2">重置密码</span></a> 
     <a component="$UI/system/components/justep/button/button" class="btn garyButton btn-default btn-block" label="重新发送邮件" xid="button2">
   <i xid="i2"></i>
   <span xid="span3">重新发送邮件</span></a></div> </div> </div></div>