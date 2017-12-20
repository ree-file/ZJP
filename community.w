<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" class="main13" component="$UI/system/components/justep/window/window"
  design="device:mobile;" xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:99px;left:-58px;" onActive="modelActive"> 
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
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group" tabbed="true" xid="buttonGroup1" style="width:100%;" selected="allBtn" bind-focus="buttonGroup1Focus">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default;rb;" label="总" xid="allBtn" style="width:33%;color:#C0C0C0;margin:0px 0px 0px 0px;background-color:#282D40;" target="content1">
    <i xid="i1"></i>
    <span xid="span3" style="color:#FFFFFF;">总</span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-default;rb;" label="二级代理" xid="SecondBtn" style="width:34%;color:#C0C0C0;margin:0px 0px 0px 0px;background-color:#282D40;" target="content2">
    <i xid="i2"></i>
    <span xid="span4" style="color:#FFFFFF;">二级代理</span></a> 
  <a component="$UI/system/components/justep/button/button" class="btn btn-default;rb;" label="三级代理" xid="ThirdBtn" style="width:33%;color:#C0C0C0;margin:0px 0px 0px 0px;background-color:#282D40;" target="content3">
   <i xid="i3"></i>
   <span xid="span5" style="color:#FFFFFF;">三级代理</span></a></div><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content1" onActive="content1Active" onInactive="content1Inactive"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row74" style="position:relative;top:150px;">
   <div class="x-col x-col-33" xid="col79" style="margin-right:0px;border-bottom-style:groove;border-bottom-width:thin;"><span xid="span53" class="pull-right spancenter" style="color:#C0C0C0;font-size:medium;position:relative;width:100%;"><![CDATA[总  人  数]]></span></div>
   <div class="x-col" xid="col80" style="margin-left:0px;border-bottom-style:groove;border-bottom-width:thin;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1"></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row75" style="position:relative;top:150px;margin-top:5px;">
   <div class="x-col x-col-33" xid="col82">
    <span xid="span54" class="pull-right spancenter" style="color:#C0C0C0;font-size:medium;position:relative;width:100%;"><![CDATA[总直接加速]]></span></div> 
   <div class="x-col" xid="col83">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output2"></div></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row76" style="position:relative;top:150px;margin-top:3px;">
   <div class="x-col x-col-33" xid="col84" style="margin-right:0px;border-bottom-style:groove;border-bottom-width:thin;">
    <span xid="span55" class="pull-right spancenter" style="color:#C0C0C0;font-size:medium;position:relative;width:100%;"><![CDATA[总社区加速]]></span></div> 
   <div class="x-col" xid="col85" style="margin-left:0px;border-bottom-style:groove;border-bottom-width:thin;">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output3"></div></div> </div></div><div class="x-contents-content" xid="content2" onActive="content2Active" onInactive="content2Inactive" style="color:#C0C0C0;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row33" style="margin-top:15%;height:20%;">
   <div class="x-col x-col-33" xid="col45">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button9" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i9"></i>
     <span xid="span26" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">总</span></a> </div> 
   <div class="x-col" xid="col43" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row39" style="padding-left:0px;">
     <div class="x-col x-col-33" xid="col38" style="margin-left:0px;padding-left:0px;margin-top:0px;padding-top:0px;">
      <span xid="span22" style="color:#C0C0C0;position:relative;width:100%;" class="spancenter"><![CDATA[社区人数]]></span></div> 
  <div class="x-col" xid="col1"></div></div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row34" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row35" style="padding-left:0px;margin-left:0px;">
     <div class="x-col" xid="col35" style="margin-left:0px;padding-left:0px;">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row38" style="padding-left:0px;margin-left:0px;">
       <div class="x-col x-col-33" xid="col44" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
        <span xid="span23" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"><![CDATA[直接加速]]></span></div> 
  <div class="x-col" xid="col2"></div></div> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row40" style="margin-left:0px;padding-left:0px;">
       <div class="x-col x-col-33" xid="col40" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
        <span xid="span24" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter"><![CDATA[社区加速]]></span></div> 
  <div class="x-col" xid="col3"></div></div> </div> </div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row37" style="margin-top:4%;height:20%;">
   <div class="x-col x-col-33" xid="col31">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button7" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i10"></i>
     <span xid="span35" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">A社区</span></a> </div> 
   <div class="x-col" xid="col81" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row30" style="padding-left:0px;">
    <div class="x-col x-col-33" xid="col52" style="margin-left:0px;padding-left:0px;margin-top:0px;padding-top:0px;">
     <span xid="span25" style="color:#C0C0C0;position:relative;width:100%;" class="spancenter">社区人数</span></div> 
    <div class="x-col" xid="col89"></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row26" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row28" style="padding-left:0px;margin-left:0px;">
    <div class="x-col" xid="col53" style="margin-left:0px;padding-left:0px;">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row27" style="padding-left:0px;margin-left:0px;">
      <div class="x-col x-col-33" xid="col54" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span21" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">直接加速</span></div> 
      <div class="x-col" xid="col87"></div></div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row29" style="margin-left:0px;padding-left:0px;">
      <div class="x-col x-col-33" xid="col86" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span20" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">社区加速</span></div> 
      <div class="x-col" xid="col88"></div></div> </div> </div> </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row47" style="margin-top:4%;height:20%;">
   <div class="x-col x-col-33" xid="col39">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button8" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i11"></i>
     <span xid="span33" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">B社区</span></a> </div> 
   <div class="x-col" xid="col93" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row42" style="padding-left:0px;">
    <div class="x-col x-col-33" xid="col90" style="margin-left:0px;padding-left:0px;margin-top:0px;padding-top:0px;">
     <span xid="span30" style="color:#C0C0C0;position:relative;width:100%;" class="spancenter">社区人数</span></div> 
    <div class="x-col" xid="col97"></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row31" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row36" style="padding-left:0px;margin-left:0px;">
    <div class="x-col" xid="col91" style="margin-left:0px;padding-left:0px;">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row32" style="padding-left:0px;margin-left:0px;">
      <div class="x-col x-col-33" xid="col92" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span28" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">直接加速</span></div> 
      <div class="x-col" xid="col95"></div></div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row41" style="margin-left:0px;padding-left:0px;">
      <div class="x-col x-col-33" xid="col94" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span27" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">社区加速</span></div> 
      <div class="x-col" xid="col96"></div></div> </div> </div> </div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row46" style="margin-top:4%;height:20%;">
   <div class="x-col x-col-33" xid="col50">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button5" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i12"></i>
     <span xid="span29" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">C社区</span></a> </div> 
   <div class="x-col" xid="col101" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row49" style="padding-left:0px;">
    <div class="x-col x-col-33" xid="col98" style="margin-left:0px;padding-left:0px;margin-top:0px;padding-top:0px;">
     <span xid="span34" style="color:#C0C0C0;position:relative;width:100%;" class="spancenter">社区人数</span></div> 
    <div class="x-col" xid="col105"></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row43" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row45" style="padding-left:0px;margin-left:0px;">
    <div class="x-col" xid="col99" style="margin-left:0px;padding-left:0px;">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row44" style="padding-left:0px;margin-left:0px;">
      <div class="x-col x-col-33" xid="col100" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span32" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">直接加速</span></div> 
      <div class="x-col" xid="col103"></div></div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row48" style="margin-left:0px;padding-left:0px;">
      <div class="x-col x-col-33" xid="col102" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span31" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">社区加速</span></div> 
      <div class="x-col" xid="col104"></div></div> </div> </div> </div></div></div><div class="x-contents-content" xid="content3" onActive="content3Active" onInactive="content3Inactive" style="color:#C0C0C0;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row57" style="margin-top:15%;height:20%;">
   <div class="x-col x-col-33" xid="col69">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button13" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i13"></i>
     <span xid="span42" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">总</span></a> </div> 
   <div class="x-col" xid="col109" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row64" style="padding-left:0px;">
    <div class="x-col x-col-33" xid="col106" style="margin-left:0px;padding-left:0px;margin-top:0px;padding-top:0px;">
     <span xid="span39" style="color:#C0C0C0;position:relative;width:100%;" class="spancenter">社区人数</span></div> 
    <div class="x-col" xid="col113"></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row58" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row62" style="padding-left:0px;margin-left:0px;">
    <div class="x-col" xid="col107" style="margin-left:0px;padding-left:0px;">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row59" style="padding-left:0px;margin-left:0px;">
      <div class="x-col x-col-33" xid="col108" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span38" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">直接加速</span></div> 
      <div class="x-col" xid="col111"></div></div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row63" style="margin-left:0px;padding-left:0px;">
      <div class="x-col x-col-33" xid="col110" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span36" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">社区加速</span></div> 
      <div class="x-col" xid="col112"></div></div> </div> </div> </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row61" style="margin-top:4%;height:20%;">
   <div class="x-col x-col-33" xid="col55">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button11" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i14"></i>
     <span xid="span51" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">A社区</span></a> </div> 
   <div class="x-col" xid="col117" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row81" style="padding-left:0px;">
    <div class="x-col x-col-33" xid="col114" style="margin-left:0px;padding-left:0px;margin-top:0px;padding-top:0px;">
     <span xid="span50" style="color:#C0C0C0;position:relative;width:100%;" class="spancenter">社区人数</span></div> 
    <div class="x-col" xid="col121"></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row77" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row79" style="padding-left:0px;margin-left:0px;">
    <div class="x-col" xid="col115" style="margin-left:0px;padding-left:0px;">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row78" style="padding-left:0px;margin-left:0px;">
      <div class="x-col x-col-33" xid="col116" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span41" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">直接加速</span></div> 
      <div class="x-col" xid="col119"></div></div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row80" style="margin-left:0px;padding-left:0px;">
      <div class="x-col x-col-33" xid="col118" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span40" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">社区加速</span></div> 
      <div class="x-col" xid="col120"></div></div> </div> </div> </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row71" style="margin-top:4%;height:20%;">
   <div class="x-col x-col-33" xid="col63">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button12" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i15"></i>
     <span xid="span49" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">B社区</span></a> </div> 
   <div class="x-col" xid="col125" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row86" style="padding-left:0px;">
    <div class="x-col x-col-33" xid="col122" style="margin-left:0px;padding-left:0px;margin-top:0px;padding-top:0px;">
     <span xid="span57" style="color:#C0C0C0;position:relative;width:100%;" class="spancenter">社区人数</span></div> 
    <div class="x-col" xid="col129"></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row82" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row84" style="padding-left:0px;margin-left:0px;">
    <div class="x-col" xid="col123" style="margin-left:0px;padding-left:0px;">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row83" style="padding-left:0px;margin-left:0px;">
      <div class="x-col x-col-33" xid="col124" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span56" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">直接加速</span></div> 
      <div class="x-col" xid="col127"></div></div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row85" style="margin-left:0px;padding-left:0px;">
      <div class="x-col x-col-33" xid="col126" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span52" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">社区加速</span></div> 
      <div class="x-col" xid="col128"></div></div> </div> </div> </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row70" style="margin-top:4%;height:20%;">
   <div class="x-col x-col-33" xid="col74">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button10" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i16"></i>
     <span xid="span45" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">C社区</span></a> </div> 
   <div class="x-col" xid="col133" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row91" style="padding-left:0px;">
    <div class="x-col x-col-33" xid="col130" style="margin-left:0px;padding-left:0px;margin-top:0px;padding-top:0px;">
     <span xid="span60" style="color:#C0C0C0;position:relative;width:100%;" class="spancenter">社区人数</span></div> 
    <div class="x-col" xid="col137"></div></div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row87" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row89" style="padding-left:0px;margin-left:0px;">
    <div class="x-col" xid="col131" style="margin-left:0px;padding-left:0px;">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row88" style="padding-left:0px;margin-left:0px;">
      <div class="x-col x-col-33" xid="col132" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span59" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">直接加速</span></div> 
      <div class="x-col" xid="col135"></div></div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row90" style="margin-left:0px;padding-left:0px;">
      <div class="x-col x-col-33" xid="col134" style="margin-right:0px;margin-bottom:0px;margin-left:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
       <span xid="span58" style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="spancenter">社区加速</span></div> 
      <div class="x-col" xid="col136"></div></div> </div> </div> </div></div></div>
  
  </div>
  </div> 
  </div> 
</div>