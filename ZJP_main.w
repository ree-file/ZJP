<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:124px;left:17px;" onLoad="modelLoad" onModelConstructDone="modelModelConstructDone" onParamsReceive="modelParamsReceive" onActive="modelActive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="NestsAccount" idColumn="id" onCustomRefresh="NestsAccountCustomRefresh" confirmDelete="false" confirmRefresh="false"><column name="id" type="Integer" xid="xid5"></column>
  <column label="获得的金额" name="income" type="Integer" xid="xid7"></column>
  <column label="产品获得时间" name="time" type="Date" xid="xid10"></column>
  <column label="巢名称" name="name" type="String" xid="xid13"></column>
  <column label="产品类型" name="worth" type="String" xid="xid14"></column>
  <column label="利率" name="rate" type="String" xid="xid1"></column>
  <column label="冻结金额" name="freese" type="Integer" xid="xid2"></column>
  <column name="nest_id" type="Integer" xid="xid3"></column>
  <column name="finished" type="Integer" xid="xid4"></column>
  <column name="excess" type="Integer" xid="xid12"></column>
  <column name="title" type="String" xid="xid16"></column>
  <column name="info" type="String" xid="xid17"></column>
  <column name="langinvestment" type="String" xid="xid18"></column>
  <column name="langfreed" type="String" xid="xid19"></column>
  <column name="langfreeze" type="String" xid="xid20"></column>
  <column name="langrate" type="String" xid="xid21"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="incomeAccount" idColumn="id" onCustomRefresh="incomeAccountCustomRefresh" confirmDelete="false" confirmRefresh="false"><column name="id" type="Integer" xid="xid6"></column>
  <column name="name" type="String" xid="xid8"></column>
  <column name="date" type="Date" xid="xid9"></column>
  <column name="income" type="Float" xid="xid11"></column>
  <column name="type" type="String" xid="xid15"></column>
  <data xid="default1">[{&quot;id&quot;:1,&quot;name&quot;:&quot;qweasd123&quot;,&quot;date&quot;:&quot;2017-11-11&quot;,&quot;income&quot;:600,&quot;type&quot;:&quot;社区&quot;},{&quot;id&quot;:2,&quot;name&quot;:&quot;qweasd123&quot;,&quot;date&quot;:&quot;2017-11-11&quot;,&quot;income&quot;:600,&quot;type&quot;:&quot;直线&quot;},{&quot;id&quot;:3,&quot;name&quot;:&quot;qweasd123&quot;,&quot;date&quot;:&quot;2017-11-11&quot;,&quot;income&quot;:600,&quot;type&quot;:&quot;日常&quot;}]</data></div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar titlebar" xid="titleBar1">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1"><![CDATA[]]></div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>  
    <div class="x-panel-content" xid="content1" style="background:#1C1F26;height:100%;">
  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1" onActiveChange="contents1ActiveChange">
   <div class="x-contents-content" xid="content2"><div xid="main1" style="position:absolute;width:100%;height:50%;">
    
   <div xid="circle" class="circle" style="top:30px;">
    <div xid="remark" class="remark">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14">
    <div class="x-col" xid="col11">
     <div xid="div4" class="sign"></div></div> 
    <div class="x-col" xid="col16">
     <span xid="span24">活动</span></div> </div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row15">
    <div class="x-col" xid="col17">
     <div xid="div5" class="sign" style="background-color:#EA2229;"></div></div> 
    <div class="x-col" xid="col25">
     <span xid="span25">投资</span></div> </div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row16">
    <div class="x-col" xid="col26">
     <div xid="div6" class="sign" style="background-color:#EFA433;"></div></div> 
    <div class="x-col" xid="col28">
     <span xid="span26">市场</span></div> </div> </div><div xid="circle-box" class="circle-box">
     <div xid="circle-left" class="circle-left">
      <div xid="left" class="left"></div></div> 
     <div xid="circle-right" class="circle-right">
      <div xid="right" class="right"></div></div> 
     <div xid="circle-text" class="circle-text">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
       <div class="x-col" xid="col4"></div>
       <div class="x-col" xid="col5"></div>
       <div class="x-col" xid="col6"></div></div> 
      <div component="$UI/system/components/justep/row/row" class="x-row row-title" xid="row3">
       <div class="x-col" xid="col9">
        <span xid="span3" style="color:#8D8E8F;font-size:medium;"><![CDATA[]]></span></div> </div> 
      <div component="$UI/system/components/justep/row/row" class="x-row row-content" xid="row4">
       <div class="x-col" xid="col12">
        <span xid="span4" style="font-size:x-large;color:#FFFFFF;"><![CDATA[]]></span></div> </div> </div> </div> 
  </div> 
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="position:relative;top:60px;">
   <div class="x-col" xid="col3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col text-center" xid="col10"><span xid="span5" style="color:#8D8E8F;"><![CDATA[]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col text-center" xid="col18"><span xid="span8" style="font-size:x-large;color:#D0AD4F;"><![CDATA[]]></span></div>
   </div></div>
   <div class="x-col" xid="col8" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;border-left-style:solid;border-left-width:1px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col text-center" xid="col14"><span xid="span6" style="color:#8D8E8F;"><![CDATA[]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col text-center" xid="col24"><span xid="span7" style="font-size:x-large;color:#D0AD4F;"><![CDATA[]]></span></div>
   </div></div></div>
  <div xid="div1" style="position:relative;top:70px;"><div xid="div9"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col text-center" xid="col35" style="border-color:#282B32;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;"><span xid="span12" style="color:#8D8E8F;"><![CDATA[]]></span></div>
   <div class="x-col text-center" xid="col37" style="border-color:#282B32;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;"><span xid="span13" style="color:#8D8E8F;"><![CDATA[]]></span></div>
   <div class="x-col text-center" xid="col39" style="border-color:#282B32;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;"><span xid="span14" style="color:#8D8E8F;"><![CDATA[]]></span></div>
  <div class="x-col text-center" xid="col40" style="border-color:#282B32;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;"><![CDATA[]]>
  <span xid="span1" style="color:#8D8E8F;"><![CDATA[]]></span></div></div></div>
  
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="incomeAccount">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row21" style="padding-left:0px;margin-left:0px;text-align:center;">
   <div class="x-col" xid="col47"><span xid="span27" bind-text='val("date")'></span></div>
   <div class="x-col" xid="col48" style="border-color:#282B32;"><span xid="span19"><![CDATA[$]]></span><span xid="span28" bind-text='val("income")'></span>
  </div>
   <div class="x-col" xid="col49"><span xid="span29" bind-text='val("name")'></span></div>
  <div class="x-col" xid="col50"><span xid="span30" bind-text='val("type")'></span></div></div></li></ul> </div>
  <div xid="div10" style="height:100px;"></div></div></div></div>
  <div class="x-contents-content content-nest" xid="content3" style="background:#1C1F26"><div xid="div2">
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="NestsAccount">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1" style="text-align:center;"><span xid="span2" style="font-weight:600;font-size:medium;" bind-text='val("title")'><![CDATA[]]></span></div>
   <div class="x-col" xid="col2" style="text-align:center;"><span xid="span9" bind-text='val("name")' class="copy" bind-css='{"is_finished": val("finished")=="1"}'><![CDATA[]]></span></div>
   <div class="x-col" xid="col7" style="text-align:center;"><span xid="span23" bind-text='val("time")'><![CDATA[]]></span></div>
  <div class="x-col" xid="col32"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm nestInfo" xid="button8" style="background-color:#454C5E;width:100%;border-width:0px 0px 0px 0px;color:#FFFFFF;" onClick="button8Click">
   <i xid="i8"></i>
   <span xid="span36" bind-text='val("info")'></span></a></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col" xid="col15" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col19" style="border-color:#282B32;border-width:1px 1px 1px 1px;border-style:solid solid solid solid;text-align:center;"><span xid="span10" style="color:#8D8E8F;" bind-text='val("langrate")'><![CDATA[]]></span></div>
   <div class="x-col" xid="col20" style="border-color:#282B32;border-width:1px 1px 1px 1px;border-style:solid solid solid solid;text-align:center;"><span xid="span21" style="color:#8D8E8F;" bind-text='val("langinvestment")'><![CDATA[]]></span></div>
   <div class="x-col" xid="col33" style="border-color:#282B32;border-width:1px 1px 1px 1px;border-style:solid solid solid solid;text-align:center;"><span xid="span31" style="color:#8D8E8F;" bind-text='val("langfreed")'><![CDATA[]]></span></div>
  <div class="x-col" xid="col34" style="border-color:#282B32;border-width:1px 1px 1px 1px;border-style:solid solid solid solid;text-align:center;"><span xid="span32" style="color:#8D8E8F;" bind-text='val("langfreeze")'><![CDATA[]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13" style="border-color:#282B32;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;border-bottom-style:solid;border-bottom-width:1px;">
   <div class="x-col" xid="col22" style="text-align:center;"><span xid="span11" style="color:#36C4D2;font-size:small;" bind-text='val("rate")'><![CDATA[300%]]></span>
  </div>
   <div class="x-col" xid="col23" style="text-align:center;"><span xid="span20"><![CDATA[$]]></span><span xid="span22" style="color:#D37CC1;font-size:small;position:relative;" bind-text='val("worth")'><![CDATA[]]></span>
  </div>
   <div class="x-col" xid="col42" style="text-align:center;"><span xid="span37"><![CDATA[$]]></span><span xid="span33" style="color:#D0AD4F;font-size:small;position:relative;" bind-text='val("income")'><![CDATA[]]></span>
  </div>
  <div class="x-col" xid="col43" style="text-align:center;"><span xid="span38"><![CDATA[$]]></span><span xid="span34" style="color:#2BD0A3;font-size:small;position:relative;" bind-text='val("freese")'><![CDATA[]]></span>
  </div></div></div>
   </div></li></ul> </div></div>
  <div xid="div8" style="height:100px;"></div></div>
  <div class="x-contents-content" xid="content4"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer1" src="$UI/ZJP/personal.w" onReceive="windowContainer1Receive" autoLoad="false"></div></div>
  </div></div>
  <div class="x-panel-bottom" xid="bottom2"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified" tabbed="true" xid="buttonGroup1" style="width:100%;position:absolute;height:100%;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link index" xid="button1" target="content2" style="font-size:medium;border-color:#282B32;">
    <i xid="i1"></i>
    <span xid="span15"></span></a> 
   <a component="$UI/system/components/justep/button/button" xid="button2" target="content3" class="btn" style="font-size:medium;border-color:#282B32;">
    <i xid="i2"></i>
    <span xid="span16"></span></a> 
  <a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="button5" style="font-size:medium;border-color:#282B32;" onClick="button5Click">
   <i xid="i5"></i>
   <span xid="span39"></span></a><a component="$UI/system/components/justep/button/button" class="btn btn-link community" xid="button3" style="font-size:medium;border-color:#282B32;" target="content4">
   <i xid="i3"></i>
   <span xid="span17"></span></a>
  </div></div></div> 
<div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="setSecondPassword">
   <div class="x-popOver-overlay" xid="div3"></div>
   <div class="x-popOver-content setSecondPassword" xid="div7"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row17">
   <div class="x-col x-col-33" xid="col13"><h5 xid="h51" style="color:white;white-space:nowrap;font-size:x-small;"><![CDATA[]]></h5></div>
   <div class="x-col" xid="col27"><input component="$UI/system/components/justep/input/password" class="form-control input-sm" xid="password1" bind-blur="password1Blur"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row18">
   <div class="x-col x-col-33" xid="col29"><h5 xid="h52" style="color:white;white-space:nowrap;font-size:x-small;"><![CDATA[]]></h5></div>
   <div class="x-col" xid="col31"><input component="$UI/system/components/justep/input/password" class="form-control input-sm" xid="password2" bind-blur="password2Blur"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row19">
   <div class="x-col" xid="col38"><a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="button7" style="width:100%;border-radius:5px;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C7C7C7 #C7C7C7 #C7C7C7 #C7C7C7;" onClick="button7Click">
   <i xid="i7"></i>
   <span xid="span35"></span></a></div>
   </div></div></div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" onReceive="windowDialog1Receive" src="$UI/ZJP/mailLogin.w"></span></div>