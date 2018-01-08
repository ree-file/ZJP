<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
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
    
  <div class="x-panel-content" xid="content1" style="height:100%;">
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="background-color:#1C1F26;margin-bottom:8px;position:relative;padding:0px 0px 0px 0px;">
   <div class="x-col" xid="col2" style="padding-left:12px;">
   <span xid="span2"></span></div></div>
  
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col1">
    <span xid="span6" style="color:#A6A6A6;position:relative;top:7px;margin-left:8px;"></span></div> 
   <div class="x-col" xid="col5">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="useridInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="String"></input></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col7">
    <span xid="span8" style="color:#A6A6A6;position:relative;top:7px;margin-left:8px;"></span></div> 
   <div class="x-col" xid="col6">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="moneyInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="String"></input></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;">
   <div class="x-col x-col-25" xid="col13">
    <span xid="span9" style="color:#A6A6A6;position:relative;top:7px;margin-left:8px;"></span></div> 
   <div class="x-col" xid="col11">
    <input component="$UI/system/components/justep/input/input" type="password" class="form-control" xid="securityInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="String"></input></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="position:relative;top:20px;">
   <div class="x-col" xid="col14">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-block submitbtn" xid="button5" style="background-color:#049FCC;" onClick="setupButtonClick">
     <i xid="i6"></i>
     <span xid="span10" style="color:#FFFFFF;"></span></a> </div> </div></div></div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive"></span>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" opacity="0" style="left:131px;top:14px;">
   <div class="x-popOver-overlay" xid="div4"></div>
   <div class="x-popOver-content" xid="div5">
    <span xid="span5" style="color:#C0C0C0;width:100%;font-size:medium;margin-top:10px;" class="center-block daospan"></span>
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
     <div class="x-col x-col-10" xid="col33"></div>
     <div class="x-col" xid="col26">
      <span xid="span1" class="popspan"><![CDATA[]]></span></div> 
     <div class="x-col" xid="col27">
      <span xid="walletspan" class="popspanout"></span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
     <div class="x-col x-col-10" xid="col34"></div>
     <div class="x-col" xid="col30">
      <span xid="span14" class="popspan">xcx</span></div> 
     <div class="x-col" xid="col29">
      <span xid="moneyactive" class="popspanout"></span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
     <div class="x-col x-col-10" xid="col35"></div>
     <div class="x-col" xid="col32">
      <span xid="span16" class="popspan">xcx</span></div> 
     <div class="x-col" xid="col31">
      <span xid="money_withdrawal" class="popspanout"></span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14">
     <div class="x-col" xid="col36" style="padding-right:12px;padding-left:25px;">
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" xid="button2" onClick="button2Click">
       <i xid="i2"></i>
       <span xid="span17"></span></a> </div> 
     <div class="x-col" xid="col39" style="padding-right:25px;padding-left:13px;">
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" xid="button1" onClick="button1Click">
       <i xid="i1"></i>
       <span xid="span19"></span></a> </div> </div> </div> </div></div>