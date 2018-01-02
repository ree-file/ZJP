<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="background-color:#252932;"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="title" style="background-color:#252932;">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title"></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    
  <div class="x-panel-content" xid="content1" style="display:none;height:100%;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="background-color:#1C1F26;margin-bottom:8px;">
   <div class="x-col" xid="col5"><span xid="span2"></span></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col" xid="col4"><a component="$UI/system/components/justep/button/button" class="btn btn-danger btn-block" xid="button1" onClick="changeClick" style="border-width:0px 0px 0px 0px;">
   <i xid="i1"></i>
   <span xid="span1"></span></a></div>
  <div class="x-col x-col-10" xid="col8"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon btn-block" label="button" xid="button3" icon="linear linear-arrowright">
   <i xid="i3" class="linear linear-arrowright"></i>
   <span xid="span4"></span></a></div>
  <div class="x-col" xid="col9"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" xid="button2" onClick="changeClick" style="border-width:0px 0px 0px 0px;">
   <i xid="i2"></i>
   <span xid="span3"><![CDATA[]]></span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col10"><span xid="span11" style="color:#A6A6A6;position:relative;top:7px;margin-left:8px;"></span></div>
   <div class="x-col" xid="col12"><input component="$UI/system/components/justep/input/input" class="form-control" xid="moneyInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="Integer"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;">
   <div class="x-col x-col-25" xid="col17">
    <span xid="span5" style="color:#A6A6A6;position:relative;top:7px;margin-left:8px;"></span></div> 
   <div class="x-col" xid="col16">
    <input component="$UI/system/components/justep/input/input" type="password" class="form-control" xid="securityInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="String"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="position:relative;top:20px;">
   <div class="x-col" xid="col20"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-block submitbtn" xid="setupButton" style="background-color:#049FCC;" onClick="setupButtonClick">
   <i xid="i5"></i>
   <span xid="span12" style="color:#FFFFFF;"></span></a></div></div></div></div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive"></span></div>