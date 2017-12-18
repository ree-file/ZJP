<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:314px;left:306px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="marketdata" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column name="type" type="String" xid="xid2"></column>
  <column name="user_id" type="Integer" xid="xid3"></column>
  <column name="money" type="Decimal" xid="xid4"></column>
  <column name="message" type="String" xid="xid5"></column>
  <column name="status" type="String" xid="xid6"></column>
  <data xid="default1"><![CDATA[[{"id":1,"type":"创投合约","user_id":1,"money":99999,"message":"已孵化300个蛋<br>未孵化1500个","status":"上架"},{"id":2,"type":"创客合约","user_id":2,"money":112,"message":"已孵化0个蛋<br>未孵化600个","status":"上架"}]]]></data></div></div>  
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
   <div class="x-contents-content" xid="marketcontent"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="marketdata">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="border-top-style:groove;border-bottom-style:groove;border-top-width:thin;border-bottom-width:thin;margin-top:0px;">
   <div class="x-col x-col-20" xid="col1"><span xid="typeSpan" style="color:#FFFFFF;font-size:x-large;" bind-text='ref("type")' class="center-block"></span></div>
   <div class="x-col" xid="col2" style="padding-top:7px;">
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="messageoutput" bind-ref='ref("message")'></div></div>
   <div class="x-col" xid="col3" style="padding:0px 0px 0px 0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col10" style="padding:4px 0px 0px 0px;margin:0px 0px 0px 0px;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col13" style="padding:5px 0px 0px 0px;margin:4px 0px 0px 3px;position:relative;"><span xid="span9" style="width:100%;position:relative;" class="center-block moneycenter"><![CDATA[价值/元]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col center-block" xid="col16" style="padding:6px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;"><span xid="moneySpan" style="color:#FFFFFF;font-size:large;font-family:Impact;position:relative;width:100%;" bind-text='ref("money")' class="center-block moneycenter"></span></div>
   </div></div>
   <div class="x-col" xid="col11" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;" bind-click="col11Click"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-block center-block" label="购买" xid="button1" style="color:#FF3939;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;height:100%;top:25px;">
   <i xid="i5"></i>
   <span xid="span8" style="position:relative;">购买</span></a></div>
   </div></div></div></li></ul> </div></div>
  <div class="x-contents-content" xid="recordcontent"></div>
  <div class="x-contents-content" xid="sellcontent"></div></div></div>
  </div> 
<div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" opacity="0">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2" style="background-color:#1C1F26;width:100%;left:0%;top:40%;height:60%;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="border-bottom-style:groove;border-bottom-width:thin;padding:0px 0px 0px 0px;">
   <div class="x-col x-col-10" xid="col28" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon btn-block" label="button" xid="button3" icon="linear linear-cross">
   <i xid="i7" class="linear linear-cross"></i>
   <span xid="span12"></span></a></div>
   <div class="x-col" xid="col29"></div>
   <div class="x-col" xid="col30"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col x-col-25" xid="col19"></div>
   <div class="x-col" xid="col20"><span xid="span5" class="pull-left center-block moneycenterright" style="color:#FFFFFF;font-size:xx-large;font-family:等线 Light;width:10%;"><![CDATA[￥]]></span><span xid="moneynumberSpan" class="center-block moneycenter" style="color:#FFFFFF;font-size:xx-large;font-family:等线 Light;width:90%;" bind-text='$model.marketdata.ref("money")'><![CDATA[]]></span>
  </div>
   <div class="x-col x-col-25" xid="col21"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col x-col-25" xid="col22" style="padding:0px 0px 0px 0px;position:relative;"><span xid="span10" class="pull-right " style="color:#7BBDFF;margin:0px 0px 0px 0px;position:relative;top:10px;"><![CDATA[支付密码]]></span></div>
   <div class="x-col" xid="col23"><input component="$UI/system/components/justep/input/input" type = "password" class="form-control" xid="passwordInput"></input></div>
   <div class="x-col x-col-20" xid="col24"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="position:absolute;bottom:5px;">
   <div class="x-col x-col-10" xid="col25"></div>
   <div class="x-col" xid="col26"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="确认支付" xid="button2">
   <i xid="i6"></i>
   <span xid="span11">确认支付</span></a></div>
   <div class="x-col x-col-10" xid="col27"></div></div></div></div></div>