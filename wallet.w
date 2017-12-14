<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column label="1" name="id" type="Integer" xid="xid1"></column>
  <data xid="default1">[{&quot;id&quot;:1}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="钱包"
          class="x-titlebar" style="background-color:#252932;">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">钱包</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="background-color:#282F37;"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-content" xid="content2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="background-color:#1C1F26;">
   <div class="x-col x-col-10" xid="col4" style="position:relative;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon btn-block" label="button" xid="button1" icon="glyphicon glyphicon-yen" style="color:#FFFFFF;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;height:100%;width:100%;font-size:xx-large;">
   <i xid="i1" class="glyphicon glyphicon-yen" style="position:relative;top:15%;left:15%;"></i>
   <span xid="span2"></span></a></div>
   <div class="x-col" xid="col5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col7" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col14" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><span xid="span3" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:7%;top:1%;"><![CDATA[钱包金额（元）]]></span></div>
   <div class="x-col x-col-25" xid="col15" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="showhidBtn" icon="linear linear-eye" style="color:#FFFFFF;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" onClick="showhidBtnClick">
   <i xid="i2" class="linear linear-eye" style="position:relative;"></i>
   <span xid="span4"></span></a></div>
   </div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col11" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col17" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><span xid="marketMSpan" type="password" style="font-size:x-large;color:#FFFFFF;position:relative;font-family:Trebuchet MS;font-variant:small-caps;text-transform:lowercase;font-style:inherit;top:1%;font-weight:bolder;text-decoration:blink;left:3%;"><![CDATA[12312.1]]></span>
  </div>
   </div></div>
   </div></div>
   <div class="x-col" xid="col10"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="background-color:#1C1F26;border-top-style:groove;border-top-width:thin;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col x-col-25" xid="col20" style="padding:0px 0px 0px 0px;margin:20px 0px 0px 0px;position:relative;"><span xid="span6" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"><![CDATA[交易金额]]></span></div>
   <div class="x-col" xid="col23" style="padding:0px 0px 0px 0px;margin:20px 0px 0px 0px;position:relative;"><span xid="activeMSpan" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;font-weight:bolder;"><![CDATA[0.00]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="background-color:#1C1F26;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col x-col-25" xid="col25" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="span8" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"><![CDATA[激活金额]]></span></div> 
   <div class="x-col" xid="col24" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="limitMSpan" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;font-weight:bolder;"><![CDATA[22.49]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="background-color:#1C1F26;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col x-col-25" xid="col26" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="span10" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"><![CDATA[总金额]]></span></div> 
   <div class="x-col" xid="col27" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="allMSpan" style="font-size:small;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;font-weight:bolder;">22.49</span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="background-color:#1C1F26;padding:0px 20px 0px 20px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col" xid="col28" style="border-bottom-style:solid;border-bottom-width:thin;"></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="background-color:#1C1F26;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col" xid="col32" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="span13" style="font-size:small;color:#808080;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"><![CDATA[钱包金额—通过充值存进账户的金额数]]></span></div> 
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="background-color:#1C1F26;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col" xid="col33" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="span15" style="font-size:small;color:#808080;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"><![CDATA[交易金额—通过孵化获得自由交易的金额数]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13" style="background-color:#1C1F26;padding:0px 0px 20px 0px;margin:0px 0px 0px 0px;position:relative;">
   <div class="x-col" xid="col34" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;position:relative;">
    <span xid="span16" style="font-size:small;color:#808080;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:20px;"><![CDATA[激活金额—通过孵化获得只能用于激活的金额数]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row meddlerow" xid="row14" style="margin-top:25px;background-color:#1C1F26;">
   <div class="x-col" xid="col35">
    <span xid="span19" style="font-size:medium;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:8px;top:2px;"><![CDATA[金额充值]]></span></div> 
   <div class="x-col x-col-10" xid="col36">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon middlebtn" label="button" xid="button5" icon="dataControl dataControl-arrowrightl" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;color:#FFFFFF;width:18px;font-size:medium;font-weight:bolder;position:relative;top:2px;">
     <i xid="i5" class="dataControl dataControl-arrowrightl"></i>
     <span xid="span20"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row meddlerow" xid="row15" style="background-color:#1C1F26;">
   <div class="x-col" xid="col38">
    <span xid="span17" style="font-size:medium;color:#FFFFFF;position:relative;font-family:微软雅黑 Light;font-variant:small-caps;text-transform:lowercase;font-style:inherit;left:8px;top:2px;"><![CDATA[密码修改]]></span></div> 
   <div class="x-col x-col-10" xid="col37">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon middlebtn" label="button" xid="button3" icon="dataControl dataControl-arrowrightl" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;color:#FFFFFF;width:18px;font-size:medium;font-weight:bolder;position:relative;top:2px;">
     <i xid="i3" class="dataControl dataControl-arrowrightl"></i>
     <span xid="span18"></span></a> </div> </div></div>
   </div>
  </div>
  </div> 
</div>