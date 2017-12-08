<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" class="main13" component="$UI/system/components/justep/window/window"
  design="device:mobile;" xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:32px;top:226px;" onActive="modelActive"> 
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
   <div class="x-contents-content" xid="content1" onActive="content1Active" onInactive="content1Inactive"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row74" style="position:relative;top:30%;left:16%;">
   <div class="x-col x-col-33" xid="col79"><span xid="span53" style="margin-left:10%;"><![CDATA[总  人  数  ：]]></span></div>
   <div class="x-col" xid="col80"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1"></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row75" style="position:relative;top:30%;left:16%;">
   <div class="x-col x-col-33" xid="col82">
    <span xid="span54"><![CDATA[总直接加速：]]></span></div> 
   <div class="x-col" xid="col83">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output2"></div></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row76" style="position:relative;top:30%;left:16%;">
   <div class="x-col x-col-33" xid="col84">
    <span xid="span55"><![CDATA[总社区加速：]]></span></div> 
   <div class="x-col" xid="col85">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output3"></div></div> </div></div><div class="x-contents-content" xid="content2" onActive="content2Active" onInactive="content2Inactive"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row33" style="margin-top:15%;height:20%;">
   <div class="x-col x-col-33" xid="col45">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button9" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i9"></i>
     <span xid="span26" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">总</span></a> </div> 
   <div class="x-col" xid="col43" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row39">
     <div class="x-col" xid="col38" style="margin-left:0px;padding-left:0px;">
      <span xid="span22">人数：</span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row34" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row35" style="padding-left:0px;margin-left:0px;">
     <div class="x-col" xid="col35" style="margin-left:0px;padding-left:0px;">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row38" style="padding-left:0px;margin-left:0px;">
       <div class="x-col" xid="col44">
        <span xid="span23">直接加速：</span></div> </div> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row40" style="margin-left:0px;padding-left:0px;">
       <div class="x-col" xid="col40">
        <span xid="span24">社区加速：</span></div> </div> </div> </div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row37" style="margin-top:1%;height:20%;">
   <div class="x-col x-col-33" xid="col31">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button7" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i10"></i>
     <span xid="span35" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">A社区</span></a> </div> 
   <div class="x-col" xid="col33" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row27">
     <div class="x-col" xid="col36" style="margin-left:0px;padding-left:0px;">
      <span xid="span25">人数：</span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row36" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row28" style="padding-left:0px;margin-left:0px;">
     <div class="x-col" xid="col37" style="margin-left:0px;padding-left:0px;">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row26" style="padding-left:0px;margin-left:0px;">
       <div class="x-col" xid="col32">
        <span xid="span34">直接加速：</span></div> </div> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row31" style="margin-left:0px;padding-left:0px;">
       <div class="x-col" xid="col34">
        <span xid="span36">社区加速：</span></div> </div> </div> </div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row47" style="margin-top:1%;height:20%;">
   <div class="x-col x-col-33" xid="col39">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button8" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i11"></i>
     <span xid="span33" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">B社区</span></a> </div> 
   <div class="x-col" xid="col41" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row29">
     <div class="x-col" xid="col52" style="margin-left:0px;padding-left:0px;">
      <span xid="span31">人数：</span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row49" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row30" style="padding-left:0px;margin-left:0px;">
     <div class="x-col" xid="col51" style="margin-left:0px;padding-left:0px;">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row32" style="padding-left:0px;margin-left:0px;">
       <div class="x-col" xid="col42">
        <span xid="span30">直接加速：</span></div> </div> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row48" style="margin-left:0px;padding-left:0px;">
       <div class="x-col" xid="col53">
        <span xid="span32">社区加速：</span></div> </div> </div> </div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row46" style="margin-top:1%;height:20%;">
   <div class="x-col x-col-33" xid="col50">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button5" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i12"></i>
     <span xid="span29" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">C社区</span></a> </div> 
   <div class="x-col" xid="col48" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row44">
     <div class="x-col" xid="col46" style="margin-left:0px;padding-left:0px;">
      <span xid="span28">人数：</span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row45" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row41" style="padding-left:0px;margin-left:0px;">
     <div class="x-col" xid="col54" style="margin-left:0px;padding-left:0px;">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row43" style="padding-left:0px;margin-left:0px;">
       <div class="x-col" xid="col49">
        <span xid="span27">直接加速：</span></div> </div> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row42" style="margin-left:0px;padding-left:0px;">
       <div class="x-col" xid="col47">
        <span xid="span21">社区加速：</span></div> </div> </div> </div> </div> </div></div><div class="x-contents-content" xid="content3" onActive="content3Active" onInactive="content3Inactive">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row57" style="margin-top:15%;height:20%;">
   <div class="x-col x-col-33" xid="col69">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button13" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i13"></i>
     <span xid="span42" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">总</span></a> </div> 
   <div class="x-col" xid="col67" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row63">
     <div class="x-col" xid="col62" style="margin-left:0px;padding-left:0px;">
      <span xid="span38">人数：</span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row58" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row59" style="padding-left:0px;margin-left:0px;">
     <div class="x-col" xid="col59" style="margin-left:0px;padding-left:0px;">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row62" style="padding-left:0px;margin-left:0px;">
       <div class="x-col" xid="col68">
        <span xid="span39">直接加速：</span></div> </div> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row64" style="margin-left:0px;padding-left:0px;">
       <div class="x-col" xid="col64">
        <span xid="span40">社区加速：</span></div> </div> </div> </div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row61" style="margin-top:1%;height:20%;">
   <div class="x-col x-col-33" xid="col55">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button11" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i14"></i>
     <span xid="span51" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">A社区</span></a> </div> 
   <div class="x-col" xid="col57" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row51">
     <div class="x-col" xid="col60" style="margin-left:0px;padding-left:0px;">
      <span xid="span41">人数：</span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row60" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row52" style="padding-left:0px;margin-left:0px;">
     <div class="x-col" xid="col61" style="margin-left:0px;padding-left:0px;">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row50" style="padding-left:0px;margin-left:0px;">
       <div class="x-col" xid="col56">
        <span xid="span50">直接加速：</span></div> </div> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row55" style="margin-left:0px;padding-left:0px;">
       <div class="x-col" xid="col58">
        <span xid="span52">社区加速：</span></div> </div> </div> </div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row71" style="margin-top:1%;height:20%;">
   <div class="x-col x-col-33" xid="col63">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button12" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i15"></i>
     <span xid="span49" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">B社区</span></a> </div> 
   <div class="x-col" xid="col65" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row53">
     <div class="x-col" xid="col76" style="margin-left:0px;padding-left:0px;">
      <span xid="span47">人数：</span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row73" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row54" style="padding-left:0px;margin-left:0px;">
     <div class="x-col" xid="col75" style="margin-left:0px;padding-left:0px;">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row56" style="padding-left:0px;margin-left:0px;">
       <div class="x-col" xid="col66">
        <span xid="span46">直接加速：</span></div> </div> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row72" style="margin-left:0px;padding-left:0px;">
       <div class="x-col" xid="col77">
        <span xid="span48">社区加速：</span></div> </div> </div> </div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row70" style="margin-top:1%;height:20%;">
   <div class="x-col x-col-33" xid="col74">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default;ctbtn;" xid="button10" style="padding:0px 0px 0px 0px;border-style:ridge ridge ridge ridge;border-color:#E4E3E9;border-width:medium medium medium medium;background-color:#292E41;height:90px;width:90px;">
     <i xid="i16"></i>
     <span xid="span45" style="width:100%;height:100%;font-size:medium;color:#C0C0C0;top:40%;position:relative;" class="center-block">C社区</span></a> </div> 
   <div class="x-col" xid="col72" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row68">
     <div class="x-col" xid="col70" style="margin-left:0px;padding-left:0px;">
      <span xid="span44">人数：</span></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row69" style="padding:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;"></div>
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row65" style="padding-left:0px;margin-left:0px;">
     <div class="x-col" xid="col78" style="margin-left:0px;padding-left:0px;">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row67" style="padding-left:0px;margin-left:0px;">
       <div class="x-col" xid="col73">
        <span xid="span43">直接加速：</span></div> </div> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row66" style="margin-left:0px;padding-left:0px;">
       <div class="x-col" xid="col71">
        <span xid="span37">社区加速：</span></div> </div> </div> </div> </div> </div></div>
  
  </div>
  </div> 
  </div> 
</div>