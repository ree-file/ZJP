<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" class="main13" component="$UI/system/components/justep/window/window"
  design="device:mobile;" xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:99px;left:-58px;" onActive="modelActive" onLoad="modelLoad"> 
    </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full x-card x-has-iosstatusbar"> 
    <div class="x-panel-top" height="49"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        title="社区" style="background-color:#252932;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon"
            xid="button6" icon="icon-chevron-left" onClick="{operation:'window.close'}" style="color:#565657;"> 
            <i xid="i6" class="icon-chevron-left"/>  
            <span xid="span6"><![CDATA[]]></span> 
          </a> 
        </div>  
        <div class="x-titlebar-title"><![CDATA[]]>
  <span xid="TitleSpan" style="color:#868687;"><![CDATA[社区]]></span></div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div xid="content" class="x-panel-content x-cards" style="background-color:#1C1F26;"> 
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group" tabbed="true" xid="buttonGroup1" style="width:100%;" selected="SecondBtn" bind-focus="buttonGroup1Focus">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default;rb;" label="社区" xid="SecondBtn" style="width:50%;color:#C0C0C0;margin:0px 0px 0px 0px;background-color:#282D40;" target="content2">
    <i xid="i2"></i>
    <span xid="span4" style="color:#FFFFFF;">社区</span></a> 
  <a component="$UI/system/components/justep/button/button" class="btn btn-default;rb;" label="社区福利" xid="ThirdBtn" style="width:50%;color:#C0C0C0;margin:0px 0px 0px 0px;background-color:#282D40;" target="content3">
   <i xid="i3"></i>
   <span xid="span5" style="color:#FFFFFF;">社区福利</span></a></div><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content2" onActive="content2Active" onInactive="content2Inactive" style="color:#C0C0C0;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row33" style="margin-top:25%;height:20%;">
   <div class="x-col x-col-33" xid="col45">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button9" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i9"></i>
     <span xid="span26" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">总</span></a> </div> 
   <div class="x-col" xid="col43" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row39" style="padding-left:0px;">
     <div class="x-col x-col-33" xid="col38" style="margin-left:0px;padding-left:0px;margin-top:0px;padding-top:0px;margin-right:-7px;">
      <span xid="span22" style="color:#C0C0C0;position:relative;width:100%;" class="spancenter"><![CDATA[社区人数]]></span></div> 
  <div class="x-col" xid="col1"><span xid="allpeople" style="color:#FFFFFF;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;top:-5px;left:-3px;" class="spancenter"></span></div></div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row34" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row35" style="padding-left:0px;margin-left:0px;">
     <div class="x-col" xid="col35" style="margin-left:0px;padding-left:0px;">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row38" style="padding-left:0px;margin-left:0px;">
       <div class="x-col x-col-33" xid="col44" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
        <span xid="span23" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"><![CDATA[直接加速]]></span></div> 
  <div class="x-col" xid="col2"><span xid="receiversspan" style="color:#FFFFFF;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"><![CDATA[]]></span></div></div> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row40" style="margin-left:0px;padding-left:0px;">
       <div class="x-col x-col-33" xid="col40" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
        <span xid="span24" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"><![CDATA[社区加速]]></span></div> 
  <div class="x-col" xid="col3"><span xid="communityspan" style="color:#FFFFFF;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"></span></div></div> </div> </div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row37" style="margin-top:4%;height:20%;">
   <div class="x-col x-col-33" xid="col31">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button7" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i10"></i>
     <span xid="span35" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block"><![CDATA[下级人数]]></span></a> </div> 
   <div class="x-col" xid="col81" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row30" style="padding-left:0px;">
    <div class="x-col x-col-33" xid="col52" style="margin-left:0px;padding-left:0px;margin-top:0px;padding-top:0px;margin-right:-7px;">
     <span xid="span25" style="color:#C0C0C0;position:relative;width:100%;" class="spancenter"><![CDATA[A社区]]></span></div> 
    <div class="x-col" xid="col89"><span xid="Anumber1Span" style="color:#FFFFFF;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;top:-5px;left:-3px;" class="spancenter"></span></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row26" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row28" style="padding-left:0px;margin-left:0px;">
    <div class="x-col" xid="col53" style="margin-left:0px;padding-left:0px;">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row27" style="padding-left:0px;margin-left:0px;">
      <div class="x-col x-col-33" xid="col54" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span21" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"><![CDATA[B社区]]></span></div> 
      <div class="x-col" xid="col87"><span xid="Bnumber1Span" style="color:#FFFFFF;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"></span></div></div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row29" style="margin-left:0px;padding-left:0px;">
      <div class="x-col x-col-33" xid="col86" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span20" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"><![CDATA[C社区]]></span></div> 
      <div class="x-col" xid="col88"><span xid="Cnumber1Span" style="color:#FFFFFF;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"></span></div></div> </div> </div> </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row47" style="margin-top:4%;height:20%;">
   <div class="x-col x-col-33" xid="col39">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button8" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i11"></i>
     <span xid="span33" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block"><![CDATA[下下级人数]]></span></a> </div> 
   <div class="x-col" xid="col93" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row42" style="padding-left:0px;">
    <div class="x-col x-col-33" xid="col90" style="margin-left:0px;padding-left:0px;margin-top:0px;padding-top:0px;margin-right:-7px;">
     <span xid="span30" style="color:#C0C0C0;position:relative;width:100%;" class="spancenter"><![CDATA[A社区]]></span></div> 
    <div class="x-col" xid="col97"><span xid="Anumber2Span" style="color:#FFFFFF;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;top:-5px;left:-3px;" class="spancenter"></span></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row31" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row36" style="padding-left:0px;margin-left:0px;">
    <div class="x-col" xid="col91" style="margin-left:0px;padding-left:0px;">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row32" style="padding-left:0px;margin-left:0px;">
      <div class="x-col x-col-33" xid="col92" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span28" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"><![CDATA[B社区]]></span></div> 
      <div class="x-col" xid="col95"><span xid="Bnumber2Span" style="color:#FFFFFF;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"></span></div></div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row41" style="margin-left:0px;padding-left:0px;">
      <div class="x-col x-col-33" xid="col94" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span27" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"><![CDATA[C社区]]></span></div> 
      <div class="x-col" xid="col96"><span xid="Cnumber2Span" style="color:#FFFFFF;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"></span></div></div> </div> </div> </div></div></div><div class="x-contents-content" xid="content3" onActive="content3Active" onInactive="content3Inactive" style="color:#C0C0C0;position:relative;height:100%;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="position:relative;top:13%;margin-top:15%;">
   
   <div class="x-col" xid="col4">
    <span xid="span2" class="spancenter" style="width:100%;font-size:large;"><![CDATA[社区新增业务]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="top:13%;position:relative;">
   
   <div class="x-col" xid="col6">
    <span xid="span1" style="color:#FFFFFF;width:100%;" class="spancenter"><![CDATA[300单 —— 奖5万人民币]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="top:13%;position:relative;">
   
   <div class="x-col" xid="col7">
    <span xid="span7" style="color:#FFFFFF;width:100%;" class="spancenter"><![CDATA[500单 —— 奖8万人民币]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="top:13%;position:relative;">
   <div class="x-col" xid="col10">
    <span xid="span8" style="color:#FFFFFF;width:100%;" class="spancenter"><![CDATA[1000单 —— 奖15万人民币]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="top:13%;position:relative;">
   <div class="x-col" xid="col12">
    <span xid="span9" style="color:#FFFFFF;width:100%;" class="spancenter"><![CDATA[5000单 —— 奖100万人民币]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="top:13%;position:relative;">
   <div class="x-col" xid="col14">
    <span xid="span10" style="color:#FFFFFF;width:100%;" class="spancenter"><![CDATA[10000单 —— 五百万或别墅一套]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="top:13%;position:relative;">
   <div class="x-col" xid="col16">
    <span xid="span11" style="color:#FFFFFF;width:100%;" class="spancenter"><![CDATA[10000单 —— 五百万或别墅一套]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="top:13%;position:relative;">
   <div class="x-col" xid="col18">
    <span xid="span12" style="color:#FFFFFF;width:100%;" class="spancenter"><![CDATA[10000单 —— 五百万或别墅一套]]></span></div> </div></div>
  
  </div>
  </div> 
  </div> 
</div>