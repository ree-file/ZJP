<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onActive="modelActive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id" confirmRefresh="false"><column label="1" name="id" type="Integer" xid="xid1"></column>
  <data xid="default1">[{&quot;id&quot;:1}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="background-color:#282F37;"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="钱包"
          class="x-titlebar" style="background-color:#252932;" xid="title">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title"><![CDATA[]]></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="display:none;background-color:#282F37;height:100%;"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-content" xid="content2" style="margin-bottom:15%;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="background-color:#1C1F26;">
   <div class="x-col x-col-10" xid="col4" style="position:relative;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon btn-block" label="button" xid="button1" icon="glyphicon glyphicon-usd" style="color:#FFFFFF;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;height:100%;width:100%;font-size:xx-large;top:10px;">
   <i xid="i1" class="glyphicon-usd glyphicon" style="position:relative;left:15%;top:15%;"></i>
   <span xid="span2"></span></a></div>
   <div class="x-col" xid="col5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col7" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col14" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><span xid="span3" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:7%;top:1%;"><![CDATA[]]></span></div>
   <div class="x-col x-col-25" xid="col15" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="showhidBtn" icon="linear linear-eye" style="color:#FFFFFF;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" onClick="showhidBtnClick">
   <i xid="i2" class="linear linear-eye" style="position:relative;"></i>
   <span xid="span4"></span></a></div>
   </div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col11" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col17" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><span xid="activeMSpan" type="password" style="font-size:x-large;color:#FFFFFF;position:relative;font-family:Trebuchet MS;font-variant:small-caps;text-transform:lowercase;font-style:inherit;top:1%;font-weight:bolder;text-decoration:blink;left:5%;"><![CDATA[]]></span>
  </div>
   </div></div>
   </div></div>
   <div class="x-col" xid="col10" style="padding-top:3%;"><a component="$UI/system/components/justep/button/button" class="btn btn-default pull-right resetbtn" label="重置支付密码" xid="resetSecurity" style="font-size:small;" bind-click="resetSecurityClick">
   <i xid="i4"></i>
   <span xid="span7"><![CDATA[]]></span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="background-color:#1C1F26;border-top-style:groove;border-top-width:thin;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col x-col-33" xid="col20" style="padding:0px 0px 0px 0px;margin:20px 0px 0px 0px;position:relative;"><span xid="span10" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"><![CDATA[]]></span></div>
   <div class="x-col" xid="col23" style="padding:0px 0px 0px 0px;margin:20px 0px 0px 0px;position:relative;"><span xid="allMSpan" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;font-weight:bolder;"><![CDATA[]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="background-color:#1C1F26;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col x-col-33" xid="col25" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="span8" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col24" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="limitMSpan" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;font-weight:bolder;"><![CDATA[]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="background-color:#1C1F26;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col x-col-33" xid="col13" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="span6" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"></span></div> 
   <div class="x-col" xid="col16" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="cangetSpan" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;font-weight:bolder;"></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="background-color:#1C1F26;padding:0px 20px 0px 20px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col" xid="col28" style="border-bottom-style:solid;border-bottom-width:thin;"></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="background-color:#1C1F26;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col" xid="col32" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="span13" style="font-size:small;color:#808080;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"><![CDATA[]]></span></div> 
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="background-color:#1C1F26;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col" xid="col33" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="span15" style="font-size:small;color:#808080;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"><![CDATA[]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13" style="background-color:#1C1F26;padding:0px 0px 0px 0px;margin:-4px 0px 0px 0px;position:relative;">
   <div class="x-col" xid="col34" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="span16" style="font-size:small;color:#808080;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"><![CDATA[]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row17" style="background-color:#1C1F26;padding:0px 0px 0px 0px;margin:-4px 0px 0px 0px;position:relative;">
   <div class="x-col" xid="col12" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="span17" style="font-size:small;color:#808080;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row18" style="background-color:#1C1F26;padding:0px 0px 20px 0px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col" xid="col18" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="span18" style="font-size:small;color:#808080;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row meddlerow" xid="row14" style="margin-top:25px;background-color:#1C1F26;" bind-click="row14Click">
   <div class="x-col" xid="col35">
    <span xid="span19" style="font-size:medium;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:8px;top:2px;"><![CDATA[]]></span></div> 
   <div class="x-col x-col-10" xid="col36">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon middlebtn" label="button" xid="button5" icon="dataControl dataControl-arrowrightl" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;color:#FFFFFF;width:18px;font-size:medium;font-weight:bolder;position:relative;top:2px;">
     <i xid="i5" class="dataControl dataControl-arrowrightl"></i>
     <span xid="span20"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row meddlerow" xid="row1" style="background-color:#1C1F26;" bind-click="row1Click">
    
   <div class="x-col" xid="col2">
    <span xid="span1" style="font-size:medium;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:8px;top:2px;"></span></div><div class="x-col x-col-10" xid="col1">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon middlebtn" label="button" xid="button2" icon="dataControl dataControl-arrowrightl" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;color:#FFFFFF;width:18px;font-size:medium;font-weight:bolder;position:relative;top:2px;">
     <i xid="i3" class="dataControl dataControl-arrowrightl"></i>
     <span xid="span5"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row meddlerow" xid="row15" style="background-color:#1C1F26;" bind-click="row15Click">
   <div class="x-col" xid="col6">
    <span xid="span9" style="font-size:medium;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:8px;top:2px;"></span></div> 
   <div class="x-col x-col-10" xid="col3">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon middlebtn" label="button" xid="button3" icon="dataControl dataControl-arrowrightl" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;color:#FFFFFF;width:18px;font-size:medium;font-weight:bolder;position:relative;top:2px;">
     <i xid="i6" class="dataControl dataControl-arrowrightl"></i>
     <span xid="span11"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row meddlerow" xid="row16" style="background-color:#1C1F26;margin-bottom:20px;" bind-click="row16Click">
   <div class="x-col" xid="col8">
    <span xid="span12" style="font-size:medium;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:8px;top:2px;"></span></div> 
   <div class="x-col x-col-10" xid="col9">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon middlebtn" label="button" xid="button4" icon="dataControl dataControl-arrowrightl" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;color:#FFFFFF;width:18px;font-size:medium;font-weight:bolder;position:relative;top:2px;">
     <i xid="i7" class="dataControl dataControl-arrowrightl"></i>
     <span xid="span14"></span></a> </div> </div>
  </div>
   </div>
  </div>
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive"></span><div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" style="position:relative;top:30px;left:160px;">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2"></div></div></div>