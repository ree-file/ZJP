<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:314px;left:306px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="marketdata" idColumn="nest_id"><column name="nest_id" type="Integer" xid="xid1"></column>
  <column name="eggs" type="String" xid="xid2"></column>
  <column name="childrens" type="Integer" xid="xid3"></column>
  <column name="gradechildrens" type="Integer" xid="xid4"></column>
  <column name="money" type="Decimal" xid="xid5"></column>
  <column name="user_id" type="Integer" xid="xid6"></column>
  <data xid="default3">[{&quot;nest_id&quot;:1506010027,&quot;eggs&quot;:&quot;500/1800&quot;,&quot;childrens&quot;:5,&quot;gradechildrens&quot;:14,&quot;money&quot;:9999.21,&quot;user_id&quot;:12321312},{&quot;nest_id&quot;:123124,&quot;eggs&quot;:&quot;123/322&quot;,&quot;childrens&quot;:2,&quot;gradechildrens&quot;:5,&quot;money&quot;:3232,&quot;user_id&quot;:232323}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="市场"
          class="x-titlebar" style="background-color:#252932;">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
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
   <div class="x-contents-content" xid="marketcontent"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row15">
   <div class="x-col" xid="col45"><input component="$UI/system/components/justep/input/input" class="form-control pull-left" xid="minInput" style="width:43%;"></input>
  <span xid="span22" class="pull-left" style="color:#C0C0C0;font-size:xx-large;margin-left:7px;margin-top:-4px;"><![CDATA[~]]></span>
  <input component="$UI/system/components/justep/input/input" class="form-control pull-left" xid="maxInput" style="width:43%;margin-left:5px;"></input></div>
   <div class="x-col x-col-20" xid="col47"><a component="$UI/system/components/justep/button/button" class="btn btn-primary btn-block" label="价位" xid="selectbtn" onClick="selectbtnClick">
   <i xid="i8"></i>
   <span xid="span21">价位</span></a></div></div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="marketdata" filter=' $row.val("money") &lt;=$model.type2.get() &amp;&amp;  $row.val("money") &gt;=$model.type1.get()'>
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="border-top-style:groove;border-bottom-style:groove;border-top-width:thin;border-bottom-width:thin;margin-top:0px;">
   <div class="x-col x-col-20" xid="col1" style="position:relative;"><span xid="typeSpan" style="color:#FFFFFF;font-size:x-small;width:100%;font-variant:normal;height:100%;position:relative;top:37%;" bind-text='ref("nest_id")' class="center-block moneycenter"></span></div>
   <div class="x-col" xid="col2" style="padding:0px 0px 0px 0px;">
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col x-col-25" xid="col10" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><span xid="span13" class="pull-right moneycenterright" style="font-size:small;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><![CDATA[剩余]]></span></div>
   <div class="x-col" xid="col11" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><div component="$UI/system/components/justep/output/output" class="x-output pull-right moneycenter" xid="messageoutput" bind-ref='ref("eggs")' style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;">
   <div class="x-col x-col-25" xid="col18" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <span xid="span15" class="pull-right moneycenterright" style="font-size:small;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><![CDATA[子数]]></span></div> 
   <div class="x-col" xid="col17" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/output/output" class="x-output pull-right moneycenter" xid="output1" bind-ref='ref("childrens")' style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></div></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;border-top-style:groove;border-top-width:thin;">
   <div class="x-col x-col-25" xid="col30" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <span xid="span23" class="pull-right moneycenterright" style="font-size:small;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><![CDATA[孙数]]></span></div> 
   <div class="x-col" xid="col31" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/output/output" class="x-output pull-right moneycenter" xid="output2" bind-ref='ref("gradechildrens")' style="color:#C0C0C0;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"></div></div> </div></div>
   <div class="x-col x-col-20 center-block" xid="col16" style="padding:6px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;"><span xid="moneySpan" style="color:#FFFFFF;font-size:large;font-family:Impact;position:relative;width:100%;top:23%;" bind-text='ref("money")' class="center-block moneycenter"></span></div><div class="x-col x-col-10" xid="col3" style="padding:0px 0px 0px 0px;position:relative;" bind-click="col3Click"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-block center-block" label="购买" xid="button1" style="color:#FF3131;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;height:100%;top:36%;font-size:small;">
   <i xid="i5"></i>
   <span xid="span8" style="position:relative;">购买</span></a></div></div>
  </li></ul> </div></div>
  <div class="x-contents-content" xid="recordcontent"></div>
  <div class="x-contents-content" xid="sellcontent"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13" style="padding-right:20px;padding-left:20px;margin-top:20%;">
   <div class="x-col" xid="col38" style="margin-right:0px;padding-right:0px;border-bottom-style:groove;border-bottom-width:thin;position:relative;">
    <span xid="span26" class="pull-right center-block" style="color:#FFFFFF;margin-right:8px;position:relative;top:10px;"><![CDATA[孵化器ID]]></span></div> 
   <div class="x-col x-col-50" xid="col36" style="margin-right:0px;margin-left:0px;padding-right:0px;padding-left:0px;border-bottom-style:groove;border-bottom-width:thin;"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1"></input></div>
   <div class="x-col x-col-20" xid="col37" style="padding-left:0px;margin-left:0px;border-bottom-style:groove;border-bottom-width:thin;">
    </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="padding-right:20px;padding-left:20px;">
   <div class="x-col" xid="col13" style="margin-right:0px;padding-right:0px;border-bottom-style:groove;border-bottom-width:thin;position:relative;">
    <span xid="span9" class="pull-right center-block" style="color:#FFFFFF;margin-right:8px;position:relative;top:10px;"><![CDATA[标价（$）]]></span></div> 
   <div class="x-col x-col-50" xid="col33" style="margin-right:0px;margin-left:0px;padding-right:0px;padding-left:0px;border-bottom-style:groove;border-bottom-width:thin;">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input2"></input></div> 
   <div class="x-col x-col-20" xid="col32" style="padding-left:0px;margin-left:0px;border-bottom-style:groove;border-bottom-width:thin;"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14" style="padding-right:20px;padding-left:20px;">
   <div class="x-col" xid="col34" style="margin-right:0px;padding-right:0px;position:relative;padding-top:0px;margin-top:0px;">
    <span xid="span18" style="font-size:x-small;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><![CDATA[孵化器的具体数据将自动显示于交易市场]]></span></div> 
   
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row16">
   <div class="x-col" xid="col40"></div>
   <div class="x-col x-col-75" xid="col41"><a component="$UI/system/components/justep/button/button" class="btn btn-warning btn-block" label="卖出" xid="button2">
   <i xid="i6"></i>
   <span xid="span19">卖出</span></a></div>
   <div class="x-col" xid="col42"></div></div></div></div></div>
  </div> 
<div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" opacity="0.2" position="bottom" style="background-color:#1C1F26;width:100%;left:0%;top:40%;height:60%;">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2" style="background-color:#1C1F26;width:100%;left:0%;top:40%;height:60%;border-top-style:groove;border-top-width:thin;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="border-bottom-style:groove;border-bottom-width:thin;padding:0px 0px 0px 0px;">
   <div class="x-col x-col-10" xid="col28" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon btn-block" label="button" xid="button4" onClick="button4Click" icon="linear linear-cross">
   <i xid="i2" class="linear linear-cross"></i>
   <span xid="span2"></span></a></div>
   <div class="x-col" xid="col29"><span xid="span7" class="center-block moneycenter" style="color:#FFFFFF;font-size:medium;font-family:等线 Light;width:90%;height:100%;top:5px;position:relative;"><![CDATA[确认付款]]></span></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="margin-top:10px;">
   <div class="x-col x-col-25" xid="col19"></div>
   <div class="x-col" xid="col20"><span xid="span5" class="pull-left center-block moneycenterright" style="color:#FFFFFF;font-size:xx-large;font-family:等线 Light;width:10%;padding-right:6px;padding-top:0px;"><![CDATA[$]]></span><span xid="moneynumberSpan" class="center-block moneycenter" style="color:#FFFFFF;font-size:xx-large;font-family:等线 Light;width:90%;font-weight:bold;" bind-text='$model.marketdata.ref("money")'><![CDATA[]]></span>
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
    <span xid="span16" class="pull-right center-block" style="color:#FFFFFF;margin-right:8px;"><![CDATA[钱包余额]]></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"></div>
   <div class="x-col" xid="col5"></div>
   <div class="x-col" xid="col6"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="position:relative;top:10px;">
   <div class="x-col x-col-25" xid="col22" style="padding:0px 0px 0px 0px;position:relative;"><span xid="span10" class="pull-right " style="color:#FFFFFF;margin:0px 0px 0px 0px;position:relative;top:13px;"><![CDATA[支付密码]]></span></div>
   <div class="x-col" xid="col23"><input component="$UI/system/components/justep/input/input" type = "password" class="form-control" xid="passwordInput"></input></div>
   <div class="x-col x-col-20" xid="col24"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="position:absolute;bottom:5px;">
   <div class="x-col x-col-10" xid="col25"></div>
   <div class="x-col" xid="col26"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="确认支付" xid="paybutton" onClick="paybuttonClick">
   <i xid="i7"></i>
   <span xid="span6">确认支付</span></a></div>
   <div class="x-col x-col-10" xid="col27"></div></div>
  </div></div>
  </div>