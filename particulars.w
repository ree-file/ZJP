<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="background-color:#1C1F26;"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="详情"
          class="x-titlebar" style="background-color:#252932;" xid="titile">
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
    <div class="x-panel-content" xid="content1" style="display:none;position:relative;height:100%;background-color:#1C1F26;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="position:relative;top:3%;">
   <div class="x-col x-col-33" xid="col1" style="padding-right:5%;"><span xid="span1" class="pull-right" style="color:#C0C0C0;font-size:medium;"><![CDATA[]]></span></div>
   <div class="x-col" xid="col3" style="padding-top:6px;"><span xid="orderIDSpan" style="color:#FFFFFF;font-size:medium;"><![CDATA[]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row rowradius" xid="row3" style="position:relative;top:6%;border-style:groove groove groove groove;border-width:thin thin thin thin;margin-left:7%;width:86%;height:120px;">
   <div class="x-col" xid="col7" style="padding-top:9px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-33" xid="col9"><span xid="span5" style="color:#C0C0C0;font-size:medium;"><![CDATA[]]></span></div>
   <div class="x-col" xid="col10" style="padding-top:6px;"><span xid="sellerIDSpan" style="color:#FFFFFF;font-size:medium;"><![CDATA[]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-33" xid="col12">
    <span xid="span7" style="color:#C0C0C0;font-size:medium;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col13" style="padding-top:6px;">
    <span xid="sellerEmailSpan" style="color:#FFFFFF;font-size:medium;"><![CDATA[]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-33" xid="col15">
    <span xid="span9" style="color:#C0C0C0;font-size:medium;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col14" style="padding-top:6px;">
    <span xid="priceSpan" style="font-size:medium;" class="moneyspan"><![CDATA[]]></span></div> </div></div>
   <div xid="div1" style="position:absolute;background-color:#1C1F26;left:10%;top:-8%;padding-right:10px;padding-left:10px;"><span xid="span4" class="center-block" style="color:#FFFFFF;font-size:small;"><![CDATA[]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row rowradius" xid="row8" style="position:relative;border-style:groove groove groove groove;border-width:thin thin thin thin;margin-left:7%;width:86%;top:9%;height:260px;">
   <div class="x-col" xid="col22" style="padding-top:9px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
     <div class="x-col x-col-33" xid="col20">
      <span xid="span12" style="color:#C0C0C0;font-size:medium;"><![CDATA[]]></span></div> 
     <div class="x-col" xid="col21" style="padding-top:6px;">
      <span xid="nestIDSpan" style="color:#FFFFFF;font-size:medium;"><![CDATA[]]></span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
     <div class="x-col x-col-33" xid="col19">
      <span xid="span14" style="color:#C0C0C0;font-size:medium;"><![CDATA[]]></span></div> 
     <div class="x-col" xid="col18" style="padding-top:6px;">
      <span xid="nestNameSpan" style="color:#FFFFFF;font-size:medium;"><![CDATA[]]></span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col x-col-33" xid="col26">
    <span xid="span20" style="color:#C0C0C0;font-size:medium;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col25" style="padding-top:6px;">
    <span xid="eggstotalspan" style="font-size:medium;" class="redspan"><![CDATA[]]></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col x-col-33" xid="col28">
    <span xid="span22" style="color:#C0C0C0;font-size:medium;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col27" style="padding-top:6px;">
    <span xid="eggsrestspan" style="font-size:medium;" class="redspan"><![CDATA[]]></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
     <div class="x-col x-col-33" xid="col16">
      <span xid="span16" style="color:#C0C0C0;font-size:medium;"><![CDATA[]]></span></div> 
     <div class="x-col" xid="col17" style="padding-top:6px;">
      <span xid="nestChildrenLengthSpan" style="font-size:medium;" class="redspan"><![CDATA[]]></span></div> </div> 
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col x-col-33" xid="col24">
    <span xid="span19" style="color:#C0C0C0;font-size:medium;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col23" style="padding-top:6px;">
    <span xid="nestGrandchildrenLengthSpan" style="font-size:medium;" class="redspan"><![CDATA[]]></span></div> </div>
  
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row15">
   <div class="x-col x-col-33" xid="col6">
    <span xid="span6" style="color:#C0C0C0;font-size:medium;"></span></div> 
   <div class="x-col" xid="col5" style="padding-top:6px;">
    <span xid="nestGrandGrandchildrenLengthSpan" style="font-size:medium;" class="redspan"></span></div> </div></div> 
   <div xid="div2" style="position:absolute;background-color:#1C1F26;left:10%;padding-right:10px;padding-left:10px;top:-4%;">
    <span xid="span11" class="center-block" style="color:#FFFFFF;font-size:small;"><![CDATA[]]></span></div> </div></div>
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive"></span></div>