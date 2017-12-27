<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:56px;left:119px;" onLoad="modelLoad" onModelConstructDone="modelModelConstructDone"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="marketdata" idColumn="id" onCustomRefresh="marketdataCustomRefresh" confirmDelete="false" confirmRefresh="false"><column name="id" type="Integer" xid="xid1"></column>
  <column name="name" type="String" xid="xid2"></column>
  <column name="childrenNum" type="Integer" xid="xid3"></column>
  <column name="grandChildrenNum" type="Integer" xid="xid4"></column>
  <column name="worth" type="Decimal" xid="xid5"></column>
  <column name="nest_id" type="Integer" xid="xid6"></column>
  <column name="contract_worth" type="Float" xid="xid17"></column>
  <column name="contract_remaining" type="Float" xid="xid18"></column>
  <column name="type" type="Integer" xid="xid19"></column>
  <column name="remainingeggs" type="Integer" xid="xid20"></column>
  <column name="freeseeggs" type="Integer" xid="xid21"></column>
  <column name="orderid" type="Integer" xid="xid25"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="conditionData" idColumn="id"><column name="id" type="String" xid="xid7"></column>
  <column name="fName" type="String" xid="xid8"></column>
  <column name="fState" type="Integer" xid="xid9"></column>
  <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;fName&quot;:&quot;综合排序&quot;,&quot;fState&quot;:1},{&quot;id&quot;:&quot;2&quot;,&quot;fName&quot;:&quot;价格升序&quot;,&quot;fState&quot;:0},{&quot;id&quot;:&quot;3&quot;,&quot;fName&quot;:&quot;价格降序&quot;,&quot;fState&quot;:0}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="transactionrecord" idColumn="id" onCustomRefresh="transactionrecordCustomRefresh"><column name="id" type="Integer" xid="xid10"></column>
  <column name="productioncode" type="String" xid="xid11"></column>
  <column name="transactionmoney" type="Float" xid="xid12"></column>
  <column name="status" type="String" xid="xid13"></column>
  <column name="date" type="Date" xid="xid14"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="price" idColumn="id"><column name="id" type="Integer" xid="xid15"></column>
  <column name="price" type="Integer" xid="xid16"></column>
  <data xid="default5">[{&quot;id&quot;:1,&quot;price&quot;:0}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="filterdata" idColumn="id"><column name="id" type="Integer" xid="xid22"></column>
  <column name="min" type="Float" xid="xid23"></column>
  <column name="max" type="Float" xid="xid24"></column>
  <data xid="default2">[{&quot;id&quot;:1,&quot;min&quot;:0,&quot;max&quot;:0}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="市场"
          class="x-titlebar" style="background-color:#252932;">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title" style="background-color:#252932;">市场</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="background-color:#252932;position:relative;height:100%;"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group" tabbed="true" xid="buttonGroup1" style="width:100%;position:relative;background-color:#1C1F26;height:40px;" selected="marketbutton">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="交易市场" xid="marketbutton" style="position:relative;color:#808080;width:33%;" target="marketcontent">
    <i xid="i1"></i>
    <span xid="span1">交易市场</span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="交易记录" xid="recordbutton" style="position:relative;color:#808080;width:34%;" target="recordcontent">
   <i xid="i3"></i>
   <span xid="span3">交易记录</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="快捷卖出" xid="sellbutton" style="position:relative;color:#808080;width:33%;" target="sellcontent">
   <i xid="i4"></i>
   <span xid="span4">快捷卖出</span></a></div>
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1" style="position:relative;top:40px;">
   <div class="x-contents-content" xid="marketcontent" bind-touchstart="marketcontentTouchstart" bind-touchend="marketcontentTouchend"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified" tabbed="true" xid="buttonGroup2" style="height:40px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="综合排序" xid="sortingBtn" icon="icon-arrow-down-b" onClick="sortingBtnClick" style="width:30%;">
    <i xid="i13" class="icon-arrow-down-b text-danger" style="color:#24A3EE;"></i>
    <span class="text-primary" xid="span24">综合排序</span></a> 
   
   <input component="$UI/system/components/justep/input/input" class="form-control" xid="input3" bind-keyup="input3Keyup"></input><a component="$UI/system/components/justep/button/button" class="btn btn-link" label="筛选" icon="icon-arrow-down-b" xid="screeningBtn" style="width:30%;" onClick="screeningBtnClick">
    <i xid="i10" class="icon-arrow-down-b"></i>
    <span xid="span17">筛选</span></a> </div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="marketdata">
   <ul class="x-list-template" xid="listTemplateUl1">
    <div xid="div13" class="refresh"><span xid="span49" style="font-size:medium;"></span>
  <span xid="span48">加载中</span></div><li xid="li1" bind-click="li1Click"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="border-top-style:groove;border-bottom-style:groove;border-top-width:thin;border-bottom-width:thin;margin-top:0px;">
   <div class="x-col x-col-20" xid="col1" style="position:relative;" bind-click="col1Click"><span xid="typeSpan" style="color:#FFFFFF;font-size:x-small;width:100%;font-variant:normal;height:100%;position:relative;margin-top:23%;" bind-text='val("name")' class="center-block moneycenter"></span></div>
   <div class="x-col" xid="col2" style="padding:0px 0px 0px 0px;" bind-click="col1Click">
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col x-col-25" xid="col10" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><span xid="span13" class="pull-right moneycenterright" style="font-size:small;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><![CDATA[剩余]]></span></div>
   <div class="x-col" xid="col11" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;text-align:center"><span xid="span44" bind-text='val("contract_remaining")'></span>
  <span xid="span45"><![CDATA[/]]></span>
  <span xid="span46" bind-text='val("contract_worth")'></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;">
   <div class="x-col x-col-25" xid="col18" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <span xid="span15" class="pull-right moneycenterright" style="font-size:small;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><![CDATA[子数]]></span></div> 
   <div class="x-col" xid="col17" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/output/output" class="x-output pull-right moneycenter" xid="output1" bind-ref='ref("childrenNum")' style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></div></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;">
   <div class="x-col x-col-25" xid="col30" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <span xid="span23" class="pull-right moneycenterright" style="font-size:small;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><![CDATA[孙数]]></span></div> 
   <div class="x-col" xid="col31" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/output/output" class="x-output pull-right moneycenter" xid="output2" bind-ref='ref("grandChildrenNum")' style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></div></div> </div></div>
   <div class="x-col x-col-33 center-block" xid="col16" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row15" style="margin-top:0px;padding-top:0px;">
   <div class="x-col" xid="col35"><span xid="span20" style="width:5%;color:#FFFFFF;font-size:large;padding-top:0px;margin-top:-1px;font-family:Cambria Math;" class="pull-left"><![CDATA[$]]></span><span xid="moneySpan" style="color:#FFFFFF;font-size:large;font-family:Impact;position:relative;width:92%;" bind-text='val("worth")' class="pull-left center-block moneycenter"></span>
  </div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row17">
   <div class="x-col" xid="col3" style="padding:0px 0px 0px 0px;position:relative;"><a component="$UI/system/components/justep/button/button" class="btn btn-danger btn-block center-block" label="购买" xid="button1" style="color:#FFFFFF;padding:0px 0px 0px 0px;position:relative;height:100%;font-size:small;width:100%;margin-right:0px;margin-bottom:0px;margin-left:0px;" onClick="button1Click">
   <i xid="i5"></i>
   <span xid="span8" style="position:relative;">购买</span></a></div></div></div></div>
  </li></ul> </div>
  <div xid="div12" class="load"><span xid="span42" style="font-size:medium;"><![CDATA[]]></span>
  <span xid="span47"><![CDATA[加载完成]]></span></div></div>
  <div class="x-contents-content" xid="recordcontent"><div component="$UI/system/components/justep/row/row" class="x-row transactiontitle" xid="row18">
   <div class="x-col x-col-33" xid="col39"><span xid="span21"><![CDATA[产品编号]]></span></div>
   <div class="x-col" xid="col43"><span xid="span22"><![CDATA[金额]]></span></div>
   <div class="x-col" xid="col44"><span xid="span30"><![CDATA[状态]]></span></div>
  <div class="x-col x-col-33" xid="col45"><span xid="span32"><![CDATA[交易时间]]></span></div>
  </div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="transactionrecord">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li3" bind-click="li3Click"><div component="$UI/system/components/justep/row/row" class="x-row transcationcontent" xid="row19">
   <div class="x-col x-col-33" xid="col46" style="text-align:center;white-space:nowrap;"><span xid="span33" bind-text='val("productioncode")'></span></div>
   <div class="x-col" xid="col47" style="text-align:center;white-space:nowrap;color:#FFFFFF;"><span xid="span43"><![CDATA[$]]></span><span xid="span34" bind-text='val("transactionmoney")' style="white-space:nowrap;"></span>
  </div>
   <div class="x-col" xid="col48" style="text-align:center;white-space:nowrap;"><span xid="span35" bind-text='val("status")' style="color:#FFDE63;" bind-css="{'getmoney':  val(&quot;status&quot;)==&quot;Sell&quot;,'paymoney':  val(&quot;status&quot;)==&quot;Bought&quot;}"></span></div>
  <div class="x-col x-col-33" xid="col50" style="text-align:center;white-space:nowrap;"><span xid="span36" bind-text='val("date")'></span></div></div></li></ul> </div>
  </div>
  <div class="x-contents-content" xid="sellcontent"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13" style="padding-right:20px;padding-left:20px;margin-top:20%;">
   <div class="x-col" xid="col38" style="margin-right:0px;padding-right:0px;border-bottom-style:groove;border-bottom-width:thin;position:relative;">
    <span xid="span26" class="pull-right center-block" style="color:#FFFFFF;margin-right:8px;position:relative;top:10px;"><![CDATA[孵化器ID]]></span></div> 
   <div class="x-col x-col-50" xid="col36" style="margin-right:0px;margin-left:0px;padding-right:0px;padding-left:0px;border-bottom-style:groove;border-bottom-width:thin;"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" onBlur="input1Blur"></input></div>
   <div class="x-col x-col-20" xid="col37" style="padding-left:0px;margin-left:0px;border-bottom-style:groove;border-bottom-width:thin;">
    </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="padding-right:20px;padding-left:20px;">
   <div class="x-col" xid="col13" style="margin-right:0px;padding-right:0px;border-bottom-style:groove;border-bottom-width:thin;position:relative;">
    <span xid="span9" class="pull-right center-block" style="color:#FFFFFF;margin-right:8px;position:relative;top:10px;"><![CDATA[标价（$）]]></span></div> 
   <div class="x-col x-col-50" xid="col33" style="margin-right:0px;margin-left:0px;padding-right:0px;padding-left:0px;border-bottom-style:groove;border-bottom-width:thin;">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input2" bind-ref='$model.price.ref("price")'></input></div> 
   <div class="x-col x-col-20" xid="col32" style="padding-left:0px;margin-left:0px;border-bottom-style:groove;border-bottom-width:thin;"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14" style="padding-right:20px;padding-left:20px;">
   <div class="x-col" xid="col34" style="margin-right:0px;padding-right:0px;position:relative;padding-top:0px;margin-top:0px;">
    <span xid="span18" style="font-size:x-small;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><![CDATA[孵化器的具体数据将自动显示于交易市场]]></span></div> 
   
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row16">
   <div class="x-col" xid="col40"></div>
   <div class="x-col x-col-75" xid="col41"><a component="$UI/system/components/justep/button/button" class="btn btn-warning btn-block" label="卖出" xid="button2" onClick="button2Click">
   <i xid="i6"></i>
   <span xid="span19">卖出</span></a></div>
   <div class="x-col" xid="col42"></div></div></div></div></div>
  </div> 
<div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="right-bottom" xid="screeningPopOver" opacity="0" position="center" anchor="screeningBtn" style="top:88px;left:26px;">
   <div class="x-popOver-overlay" xid="div5"></div>
   <div class="x-popOver-content tb-sorting" xid="div6"><div xid="div7">
   <div class="list-group-item" xid="div26">
    <span class="pull-left" xid="span28">价格区间（元）</span>
    <input component="$UI/system/components/justep/input/input" class="form-control input-sm pull-left center-block" xid="minInput" style="width:30%;" onBlur="minInputBlur"></input>
    <span class="pull-left" xid="span27">－</span>
    <input component="$UI/system/components/justep/input/input" class="form-control input-sm pull-left center-block" xid="maxInput" style="width:30%;" onBlur="maxInputBlur"></input>
    <div class="clearfix" xid="div27"></div></div> 
   
   
   <div class="text-center panel-body" xid="div33">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm tb-resetBtn x-flex1" label=" 重 置 " xid="resetBtn" onClick="resetBtnClick">
     <i xid="i9"></i>
     <span xid="span31">重 置</span></a> </div> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-lg btn-block tb-okBtn" label="确认" xid="betweenbutton" style="width:80%;left:10%;position:relative;margin-bottom:5px;" onClick="betweenbuttonClick">
    <i xid="i14"></i>
    <span xid="span27" class="text-white">确认</span></a> </div></div></div><div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="left-bottom" xid="sortingPopOver" opacity="0" anchor="sortingBtn" style="top:97px;left:25px;">
   <div class="x-popOver-overlay" xid="div3"></div>
   <div class="x-popOver-content tb-sorting" xid="div4"><div component="$UI/system/components/justep/list/list" class="x-list" data="conditionData" bind-click="sortingListClick" xid="conditionList" dataItemAlias="conditionRow">
   <ul class="x-list-template" xid="ul1">
    <li class="list-group-item" bind-css="{'current':conditionRow.val('fState')==1}" xid="li2">
     <span bind-text='val("fName")' xid="span25"></span></li> </ul> </div></div></div><div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" opacity="0.2" position="bottom" style="background-color:#1C1F26;top:66px;left:67px;">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2" style="background-color:#1C1F26;width:100%;left:0%;top:40%;height:60%;border-top-style:groove;border-top-width:thin;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="border-bottom-style:groove;border-bottom-width:thin;padding:0px 0px 0px 0px;">
   <div class="x-col x-col-10" xid="col28" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon btn-block" label="button" xid="button4" onClick="button4Click" icon="linear linear-cross">
   <i xid="i2" class="linear linear-cross"></i>
   <span xid="span2"></span></a></div>
   <div class="x-col" xid="col29"><span xid="span7" class="center-block moneycenter" style="color:#FFFFFF;font-size:medium;font-family:等线 Light;width:90%;height:100%;top:5px;position:relative;"><![CDATA[确认付款]]></span></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="margin-top:10px;">
   <div class="x-col x-col-25" xid="col19"></div>
   <div class="x-col" xid="col20"><span xid="span5" class="pull-left center-block moneycenterright" style="color:#FFFFFF;font-size:xx-large;font-family:等线 Light;width:10%;padding-right:6px;padding-top:0px;"><![CDATA[$]]></span><span xid="moneynumberSpan" class="center-block moneycenter" style="color:#FFFFFF;font-size:xx-large;font-family:等线 Light;width:90%;font-weight:bold;"><![CDATA[]]></span>
  </div>
   <div class="x-col x-col-25" xid="col21"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding-right:20px;padding-left:20px;">
   <div class="x-col" xid="col7" style="margin-right:0px;padding-right:0px;border-bottom-style:groove;border-bottom-width:thin;"><span xid="span11" class="pull-right center-block" style="color:#FFFFFF;margin-right:8px;"><![CDATA[订单信息]]></span></div>
   <div class="x-col x-col-50" xid="col8" style="margin-right:0px;margin-left:0px;padding-right:0px;padding-left:0px;border-bottom-style:groove;border-bottom-width:thin;"></div>
   <div class="x-col" xid="col9" style="padding-left:0px;margin-left:0px;border-bottom-style:groove;border-bottom-width:thin;"><span xid="span12" class="pull-right center-block" style="color:#FFFFFF;margin-right:8px;"><![CDATA[付款]]></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="padding-right:20px;padding-left:20px;">
   <div class="x-col x-col-25" xid="col15" style="margin-right:0px;padding-right:0px;border-bottom-style:groove;border-bottom-width:thin;">
    <span xid="span14" class="pull-right center-block" style="color:#FFFFFF;margin-right:8px;"><![CDATA[付款方式]]></span></div> 
   <div class="x-col x-col-50" xid="col12" style="margin-right:0px;margin-left:0px;padding-right:0px;padding-left:0px;border-bottom-style:groove;border-bottom-width:thin;"></div>
   <div class="x-col" xid="col14" style="padding-left:0px;margin-left:0px;border-bottom-style:groove;border-bottom-width:thin;">
    <span xid="span16" class="pull-right center-block" style="color:#FFFFFF;margin-right:8px;"><![CDATA[市场余额]]></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"></div>
   <div class="x-col" xid="col5"></div>
   <div class="x-col" xid="col6"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="position:relative;top:10px;">
   <div class="x-col x-col-25" xid="col22" style="padding:0px 0px 0px 0px;position:relative;"><span xid="span10" class="pull-right " style="color:#FFFFFF;margin:0px 0px 0px 0px;position:relative;top:13px;"><![CDATA[支付密码]]></span></div>
   <div class="x-col" xid="col23"><input component="$UI/system/components/justep/input/input" type = "password" class="form-control" xid="passwordInput"></input></div>
   <div class="x-col x-col-20" xid="col24"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="position:relative;top:20%;">
   <div class="x-col x-col-10" xid="col25"></div>
   <div class="x-col" xid="col26"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="确认支付" xid="paybutton" onClick="paybuttonClick">
   <i xid="i7"></i>
   <span xid="span6">确认支付</span></a></div>
   <div class="x-col x-col-10" xid="col27"></div></div>
  </div></div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="chooseSoleStatus" opacity="0" style="top:26px;left:80px;">
   <div class="x-popOver-overlay" xid="div8"></div>
   <div class="x-popOver-content chooseContent chooseSoleStatus" xid="div9" style="height:auto;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row20">
   <div class="x-col" xid="col53" style="text-align:center;"><span xid="span37" style="color:white;"><![CDATA[是否下架]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row21">
   <div class="x-col" xid="col55" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="是" xid="button3" onClick="button3Click" target="marketcontent">
   <i xid="i8"></i>
   <span xid="span38" style="color:white;">是</span></a></div>
   <div class="x-col" xid="col56" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="否" xid="button6" onClick="button6Click">
   <i xid="i12"></i>
   <span xid="span39" style="color:white;">否</span></a></div></div></div></div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="secondPassword" style="top:15px;left:120px;">
   <div class="x-popOver-overlay" xid="div11"></div>
   <div class="x-popOver-content setSecondPassword chooseSoleStatus" xid="div10" style="height:auto;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row22">
     <div class="x-col x-col-33" xid="col52">
      <h5 xid="h52" style="color:#FFF8F3;">二级密码：</h5></div> 
     <div class="x-col" xid="col54">
      <input component="$UI/system/components/justep/input/password" class="form-control input-sm" xid="password1"></input></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row secondcheck" xid="row23">
     <div class="x-col" xid="col51">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="确认密码" xid="button7" style="color:#8E8E8E;" onClick="button7Click">
       <i xid="i15"></i>
       <span xid="span40">确认密码</span></a> </div> 
     <div class="x-col" xid="col49">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="设置密码" xid="button9" style="color:#8E8E8E;" onClick="button9Click">
       <i xid="i16"></i>
       <span xid="span41">设置密码</span></a> </div> </div> </div> </div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive"></span></div>