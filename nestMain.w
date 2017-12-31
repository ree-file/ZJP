<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:380px;left:313px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive" onActive="modelActive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id" confirmDelete="false" confirmRefresh="false"><column label="id" name="id" type="String" xid="xid1"></column>
  <column label="图片" name="picture" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;picture&quot;:&quot;$UI/ZJP/res/img/Germany.jpg&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="accelerate" idColumn="id" confirmDelete="false" confirmRefresh="false"><column name="id" type="String" xid="xid3"></column>
  <column name="time" type="String" xid="xid4"></column>
  <column name="number" type="Float" xid="xid5"></column>
  <column name="people" type="String" xid="xid6"></column>
  <column name="type" type="String" xid="xid7"></column>
  <data xid="default6">[{&quot;id&quot;:&quot;1&quot;,&quot;time&quot;:&quot;1095-02-09&quot;,&quot;number&quot;:36.5,&quot;people&quot;:&quot;zhulinen&quot;,&quot;type&quot;:&quot;直接加速&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;time&quot;:&quot;10095-02-15&quot;,&quot;number&quot;:73,&quot;people&quot;:&quot;samul&quot;,&quot;type&quot;:&quot;社区加速&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="nest" idColumn="id" onCustomRefresh="nestCustomRefresh" confirmDelete="false" confirmRefresh="false"><column name="id" type="String" xid="xid19"></column>
  <column label="编号" name="name" type="String" xid="xid20"></column>
  <column label="已释放的金额" name="released" type="Float" xid="xid21"></column>
  <column label="可提现金额" name="available" type="Float" xid="xid22"></column>
  <column label="提现金额" name="withdraw" type="Float" xid="xid23"></column>
  <column label="该合约的成长速率" name="speed" type="Float" xid="xid24"></column>
  <column label="投资金额" name="investment" type="Float" xid="xid25"></column>
  <column label="汇率" name="globalValue" type="Float" xid="xid28"></column>
  <column name="contract_id" type="Integer" xid="xid26"></column>
  <column name="community" type="String" xid="xid27"></column>
  <column label="当前小窝经营的合约" name="currentWorth" type="Float" xid="xid29"></column>
  <column name="expectReturn" type="Float" xid="xid30"></column>
  <column name="is_finished" type="Integer" xid="xid35"></column>
  <column label="合约等级" name="type" type="Integer" xid="xid36"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="historyData" idColumn="id" onCustomRefresh="historyDataCustomRefresh" confirmDelete="false" confirmRefresh="false"><column name="id" type="Integer" xid="xid8"></column>
  <column name="date" type="Date" xid="xid9"></column>
  <column name="message" type="String" xid="xid10"></column>
  <column name="money" type="Float" xid="xid11"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="accountData" idColumn="id" onCustomRefresh="accountDataCustomRefresh" confirmDelete="false" confirmRefresh="false"><column name="id" type="Integer" xid="xid12"></column>
  <column name="date" type="Date" xid="xid13"></column>
  <column name="money" type="Float" xid="xid14"></column>
  <column name="message" type="String" xid="xid15"></column>
  <column name="status" type="Integer" xid="xid16"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="withdrawData" idColumn="id" onCustomRefresh="withdrawDataCustomRefresh" confirmDelete="false" confirmRefresh="false"><column name="id" type="Integer" xid="xid17"></column>
  <column name="money" type="String" xid="xid18"></column>
  <column name="date" type="Date" xid="xid31"></column>
  <column name="contract_id" type="Integer" xid="xid32"></column>
  <column name="message" type="String" xid="xid33"></column>
  <column name="withdraw" type="Float" xid="xid34"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar titlebar" xid="titleBar1">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="button12" icon="icon-chevron-left" onClick="button12Click">
   <i xid="i12" class="icon-chevron-left"></i>
   <span xid="span29"></span></a></div>
   <div class="x-titlebar-title" xid="title1"><![CDATA[]]></div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>
   <div class="x-panel-content background-color-black" xid="content1" style="height:100%;"><div xid="div1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="height:10px;padding:0px 0px 0px 0px;">
   <div class="x-col" xid="col1">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col" xid="col38" style="padding:0px 0px 0px 0px;"><h5 xid="h52" class="gary-font-small" bind-text=' $model.nest.val("name")'><![CDATA[600U的小窝]]></h5></div>
   </div></div>
   <div class="x-col" xid="col2"></div>
   <div class="x-col pull-right text-right" xid="col3"><img alt="" xid="image2" height="26px" style="width:40px;" src="$UI/ZJP/res/img/Germany.jpg"></img></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="padding:0px 0px 0px 0px;height:85px;">
   <div class="x-col" xid="col19">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="padding:0px 0px 0px 0px;height:54px;">
   <div class="x-col" xid="col35"><h2 xid="h23" class="font-white" bind-text="'$'+ $model.nest.val(&quot;currentWorth&quot;)"><![CDATA[]]></h2></div>
   <div class="x-col" xid="col36"></div>
   <div class="x-col" xid="col37"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="padding:0px 0px 0px 0px;">
   <div class="x-col" xid="col28"><h5 xid="h55" class="font-white" bind-text="'￥'+ $model.nest.val(&quot;currentWorth&quot;) * $model.nest.val(&quot;globalValue&quot;)"><![CDATA[]]></h5></div>
   <div class="x-col" xid="col29"></div>
   <div class="x-col" xid="col30"></div></div>
  </div>
   <div class="x-col" xid="col21"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col" xid="col22"></div>
   <div class="x-col" xid="col23"></div>
   <div class="x-col" xid="col24"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="height:35px;">
   <div class="x-col x-col-67" xid="col26"><h5 xid="h58" class="gary-font-xsmall text-center" style="font-size:x-small;font-weight:300;"><![CDATA[]]></h5></div>
   <div class="x-col" xid="col27"><h5 xid="h56" class="text-right font-white" bind-text="'$'+  $model.nest.val(&quot;withdraw&quot;)"><![CDATA[]]></h5></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row33" style="height:35px;">
   <div class="x-col x-col-67" xid="col89">
    <h5 xid="h57" class="gary-font-xsmall text-center" style="font-size:x-small;font-weight:300;"><![CDATA[]]></h5></div> 
   <div class="x-col" xid="col33">
    <h5 xid="h54" class="text-right font-white"></h5></div> </div></div>
  </div>
  <div component="$UI/system/components/justep/row/row" class="x-row row-height" xid="row14">
   <div class="x-col " xid="col41"><h5 xid="h510" style="font-size:x-small;font-weight:300;" class="gary-font-xsmall"><![CDATA[]]></h5></div>
   <div class="x-col noMarginPadding" xid="col42">
  <div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row18">
   <div class="x-col x-col-offset-10 col-paddind-right" xid="col53"><h5 xid="h522" class="text-right font-white"><![CDATA[]]></h5></div>
   <div class="x-col col-padding-left" xid="col54"><h5 xid="h514" class="font-white text-left"><![CDATA[]]></h5></div>
   <div class="x-col" xid="col55"></div></div></div>
   <div class="x-col noMarginPadding" xid="col43"><div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row23">
   <div class="x-col " xid="col70">
    </div> 
   <div class="x-col  x-col-offset-10 col-paddind-right" xid="col69">
    <h5 xid="h530" class="text-right font-white"><![CDATA[]]></h5></div> 
   <div class="x-col col-padding-left" xid="col68"><h5 xid="h529" class="font-white text-left"><![CDATA[]]></h5></div></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row row-height" xid="row15">
   <div class="x-col" xid="col44"><h5 xid="h511" style="font-size:x-small;font-weight:300;" class="gary-font-xsmall"><![CDATA[]]></h5></div>
   <div class="x-col noMarginPadding " xid="col45">
  <div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row26">
   <div class="x-col x-col-offset-10 col-paddind-right" xid="col78"><h5 xid="h536" class="text-right font-white">$</h5></div>
   <div class="x-col col-padding-left" xid="col79">
    <h5 xid="h535" class="font-white text-left" bind-text=' $model.nest.val("speed") * $model.nest.val("currentWorth")'><![CDATA[]]></h5></div> 
   <div class="x-col " xid="col77">
    </div> </div></div>
   <div class="x-col noMarginPadding" xid="col46"><div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row20">
   <div class="x-col" xid="col61">
    </div> 
   <div class="x-col col-paddind-right" xid="col60">
    <h5 xid="h524" class="text-right font-white"><![CDATA[￥]]></h5></div> 
   <div class="x-col col-padding-left" xid="col59"><h5 xid="h523" class="font-white text-left" bind-text=' $model.fixtwo($model.nest.val("speed") * $model.nest.val("currentWorth") * $model.nest.val("globalValue"))'><![CDATA[]]></h5></div></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row row-height" xid="row16">
   <div class="x-col" xid="col47"><h5 xid="h512" style="font-size:x-small;font-weight:300;" class="gary-font-xsmall"><![CDATA[]]></h5></div>
   <div class="x-col noMarginPadding" xid="col48"><div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row21">
   <div class="x-col x-col-offset-10 col-paddind-right" xid="col64">
    <h5 xid="h526" class="text-right font-white">$</h5></div> 
   <div class="x-col col-padding-left" xid="col63">
    <h5 xid="h525" class="font-white text-left" bind-text=' $model.nest.val("investment")'><![CDATA[]]></h5></div> 
   <div class="x-col" xid="col62"></div></div></div>
   <div class="x-col noMarginPadding" xid="col49"><div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row24">
   <div class="x-col" xid="col72"></div>
   <div class="x-col col-paddind-right" xid="col73">
    <h5 xid="h532" class="text-right font-white"><![CDATA[￥]]></h5></div> 
   <div class="x-col col-padding-left" xid="col71">
    <h5 xid="h531" class="font-white text-left" bind-text=' $model.nest.val("investment") * $model.nest.val("globalValue")'><![CDATA[]]></h5></div> </div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row " xid="row17" style="height:40px;">
   <div class="x-col" xid="col50"><h5 xid="h513" style="font-size:x-small;font-weight:300;" class="gary-font-xsmall"><![CDATA[]]></h5></div>
   <div class="x-col noMarginPadding" xid="col51"><div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row22">
   <div class="x-col x-col-offset-10 col-paddind-right" xid="col67">
    <h5 xid="h528" class="text-right font-white">$</h5></div> 
   <div class="x-col col-padding-left" xid="col66">
    <h5 xid="h527" class="font-white text-left" bind-text='$model.nest.val("currentWorth") * $model.nest.val("expectReturn")'><![CDATA[]]></h5></div> 
   <div class="x-col" xid="col65"></div></div></div>
   <div class="x-col noMarginPadding" xid="col52"><div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row25">
   <div class="x-col" xid="col75"></div>
   <div class="x-col col-paddind-right" xid="col76">
    <h5 xid="h534" class="text-right font-white"><![CDATA[￥]]></h5></div> 
   <div class="x-col col-padding-left" xid="col74">
    <h5 xid="h533" class="font-white text-left" bind-text='$model.nest.val("currentWorth") * $model.nest.val("globalValue") * $model.nest.val("expectReturn")'><![CDATA[]]></h5></div> </div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row3">
   <div class="x-col noMarginPadding" xid="col7"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group noMarginPadding" tabbed="true" xid="buttonGroup1" style="width:100%;" selected="button5">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm background-color-black checkbtn" xid="button5" style="width:25%;height:100%;" target="content3">
    <i xid="i5"></i>
    <span xid="span5"></span></a> 
    
  <a component="$UI/system/components/justep/button/button" class="btn checkbtn btn-default btn-sm background-color-black" xid="button7" style="width:25%;" target="content5">
   <i xid="i7"></i>
   <span xid="span7"></span></a>
  <a component="$UI/system/components/justep/button/button" class="btn checkbtn btn-default btn-sm background-color-black" xid="button8" style="width:25%;" target="content6">
   <i xid="i8"></i>
   <span xid="span8"></span></a><a component="$UI/system/components/justep/button/button" class="btn checkbtn btn-default btn-sm background-color-black" xid="button6" style="width:25%;" target="content4">
    <i xid="i6"></i>
    <span xid="span6"></span></a></div></div>
   </div>
  <div xid="div2">
  <div component="$UI/system/components/justep/contents/contents" class="x-contents" active="0" xid="contents2">
   <div class="x-contents-content" xid="content3" onActive="content3Active" onInactive="content3Inactive"><div xid="div3"><div component="$UI/system/components/justep/row/row" class="x-row noTopButtomPadding" xid="row4">
   <div class="x-col  noTopButtomPadding col-buttom-border" xid="col9"><span xid="span10" style="color:#36C4D2;font-size:xx-small;" bind-text='"TCA:$"'><![CDATA[TCA]]></span></div>
   <div class="x-col col-buttom-border noTopButtomPadding" xid="col10"><span xid="span11" style="color:#D37CC1;font-size:xx-small;" bind-text="'TDA:$'">TDA:</span></div>
   <div class="x-col col-buttom-border noTopButtomPadding" xid="col11"><![CDATA[]]>
  <span xid="span12" style="color:#D0AD4F;font-size:xx-small;" bind-text="'TA:$'"><![CDATA[TA:]]></span></div>
  <div class="x-col col-buttom-border text-center" xid="col16"></div></div></div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="historyData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row2">
   <div class="x-col text-center" xid="col4"><span xid="span2" bind-text='val("id")'><![CDATA[date]]></span></div>
   <div class="x-col text-center" xid="col5"><span xid="span32"><![CDATA[$]]></span><span xid="span3" bind-style="{color:  val(&quot;type&quot;) =='直接加速'?'#FF565A':'#0EAA7D'}" bind-text='val("money")'><![CDATA[number]]></span>
  </div>
   <div class="x-col text-center" xid="col6"><![CDATA[]]>
  <span xid="span4" bind-text='val("date")'><![CDATA[people]]></span></div>
  <div class="x-col text-center" xid="col8"><span xid="span9" bind-style="{color:   val(&quot;type&quot;) =='直接加速'?'#FF565A':'#0EAA7D'}" bind-text='val("message")'><![CDATA[type]]></span></div></div></li></ul> </div>
  </div>
  
  <div class="x-contents-content" xid="content5" onActive="content5Active" onInactive="content5Inactive"><div xid="div4">
   <div component="$UI/system/components/justep/row/row" class="x-row noTopButtomPadding" xid="row6">
    <div class="x-col  noTopButtomPadding col-buttom-border" xid="col18">
     <span xid="span19" style="color:#36C4D2;font-size:xx-small;"><![CDATA[Return:]]></span></div> 
    <div class="x-col col-buttom-border noTopButtomPadding" xid="col25">
     <span xid="span20" style="color:#D37CC1;font-size:xx-small;"><![CDATA[Expend:]]></span></div> 
    <div class="x-col col-buttom-border text-center" xid="col20"></div>
    <div class="x-col col-buttom-border text-center" xid="col17"></div></div> </div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" data="accountData">
   <ul class="x-list-template" xid="listTemplateUl3">
    <li xid="li3">
     <div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row5">
      <div class="x-col text-center" xid="col14">
       <span xid="span13" bind-text="$index()+1">time</span></div> 
      <div class="x-col text-center" xid="col15">
       <span xid="span33"><![CDATA[$]]></span><span xid="span14" bind-text='val("money")'>number</span>
  </div> 
      <div class="x-col text-center" xid="col13">
       <span xid="span15" bind-text='val("message")'>people</span></div> 
      <div class="x-col text-center" xid="col12">
       <span xid="span16" bind-text='val("date")'>type</span></div> </div> </li> </ul> </div>
  </div>
  <div class="x-contents-content" xid="content6" onActive="content6Active" onInactive="content6Inactive"><div xid="div5">
   <div component="$UI/system/components/justep/row/row" class="x-row noTopButtomPadding" xid="row19">
    <div class="x-col  noTopButtomPadding col-buttom-border" xid="col31">
     <span xid="span21" style="color:#36C4D2;font-size:xx-small;" bind-text='"Invested:$"'><![CDATA[Invested:]]></span></div> 
    <div class="x-col col-buttom-border noTopButtomPadding" xid="col40">
     </div> 
    <div class="x-col col-buttom-border text-center" xid="col80"></div>
    <div class="x-col col-buttom-border text-center" xid="col32"></div></div> </div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="withdrawData">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2" bind-click="li2Click">
     <div component="$UI/system/components/justep/row/row" class="x-row noMarginPadding" xid="row27">
      <div class="x-col x-col-20 text-center" xid="col56">
       <span xid="span23" bind-text='val("id")'>time</span></div> 
      <div class="x-col text-center" xid="col39">
       <span xid="span34"><![CDATA[$]]></span><span xid="span22" bind-style="{color:  val(&quot;type&quot;)  =='购入小窝' || val(&quot;type&quot;) =='复投'?'#FF565A':'#0EAA7D'}" bind-text='val("money")'>number</span>
  </div> 
      <div class="x-col text-center" xid="col57" style="white-space:nowrap;padding-left:0;padding-right:0;">
       <span xid="span25" bind-text='"当天可提$"+val("withdraw")'>people</span></div> 
      <div class="x-col text-center" xid="col58">
       <span xid="span24" bind-style="{color:  val(&quot;type&quot;)  =='购入小窝' || val(&quot;type&quot;) =='复投'?'#FF565A':'#0EAA7D'}" bind-text='val("message")'>type</span></div> </div> </li> </ul> </div></div><div class="x-contents-content" xid="content4" onActive="content4Active" onInactive="content4Inactive" style="width:100%;height:auto;"><div xid="div8" style="width:100%;height:250px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row32" style="margin-top:100px;">
   <div class="x-col x-col-10" xid="col87"></div>
   <div class="x-col" xid="col88"><a component="$UI/system/components/justep/button/button" class="btn btn-link" xid="button11" style="color:white;width:100%;border-radius:5px;border-style:solid solid solid solid;border-width:2px 2px 2px 2px;border-color:#6A64AD #6A64AD #6A64AD #6A64AD;" onClick="button11Click">
   <i xid="i11"></i>
   <span xid="span31"></span></a></div>
  <div class="x-col x-col-10" xid="col93"></div></div></div></div></div></div>
  </div>
   <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified noMarginPadding background-color-black" tabbed="true" xid="buttonGroup2" style="width:100%;height:100%;">
   <a component="$UI/system/components/justep/button/button" class="btn checkbtn btn-default background-color-black" xid="button2" style="width:25%;" onClick="button2Click">
    <i xid="i2"></i>
    <span xid="span17"></span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn checkbtn btn-default background-color-black" xid="button3" style="width:25%;" onClick="button3Click">
    <i xid="i3"></i>
    <span xid="span18"></span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn checkbtn btn-default background-color-black" xid="button4" style="width:25%;" onClick="button4Click">
    <i xid="i4"></i>
    <span xid="span26"></span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn checkbtn btn-default background-color-black" xid="button9" style="width:25%;" onClick="button9Click">
    <i xid="i9"></i>
    <span xid="span27"></span></a> </div></div></div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="withDrawWindow" opacity="0" style="top:17px;left:152px;">
   <div class="x-popOver-overlay" xid="div6"></div>
   <div class="x-popOver-content withDrawWindow" xid="div7"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row28">
   <div class="x-col x-col-33" xid="col82"><h5 xid="h51" style="text-align:center;color:white;white-space:nowrap;"><![CDATA[]]></h5></div>
   <div class="x-col" xid="col83"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" onBlur="input1Blur"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col x-col-33" xid="col34"><h5 xid="h53" style="text-align:center;color:white;white-space:nowrap;"><![CDATA[]]></h5></div>
   <div class="x-col" xid="col81"><input component="$UI/system/components/justep/input/password" class="form-control" xid="password1" style="border-radius:5px;"></input></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row29">
   <div class="x-col" xid="col86"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" xid="button10" onClick="button10Click">
   <i xid="i10"></i>
   <span xid="span28"></span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row31">
   <div class="x-col" xid="col90"><p xid="p1" style="color:white;"><![CDATA[]]></p></div></div></div></div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive" style="top:17px;left:103px;"></span></div>