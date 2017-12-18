<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:314px;left:306px;height:auto;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="marketdata" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column name="type" type="String" xid="xid2"></column>
  <column name="user_id" type="Integer" xid="xid3"></column>
  <column name="money" type="Decimal" xid="xid4"></column>
  <column name="message" type="String" xid="xid5"></column>
  <column name="status" type="String" xid="xid6"></column>
  <data xid="default1"><![CDATA[[{"id":1,"type":"创投合约","user_id":1,"money":99999,"message":"已孵化300个蛋<br>未孵化1500个","status":"上架"},{"id":2,"type":"创客合约","user_id":2,"money":1,"message":"已孵化0个蛋<br>未孵化600个蛋","status":"上架"}]]]></data></div></div>  
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
    <div class="x-panel-content" xid="content1" style="background-color:#252932;position:relative;height:100%;"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group" tabbed="true" xid="buttonGroup1" style="width:100%;position:relative;background-color:#1C1F26;height:40px;">
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
   <div class="x-col" xid="col2">
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="messageoutput" bind-ref='ref("message")'></div></div>
   <div class="x-col" xid="col3" style="padding:0px 0px 0px 0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col10" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col13" style="padding:3px 0px 0px 0px;margin:4px 0px 0px 3px;"><span xid="span9"><![CDATA[价值/元]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col center-block" xid="col16" style="padding:4px 0px 0px 0px;margin:0px 0px 0px 0px;"><span xid="moneySpan" style="color:#FFFFFF;font-size:large;" bind-text='ref("money")' class="center-block"></span></div>
   </div></div>
   <div class="x-col" xid="col11" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-block center-block" label="购买" xid="button1" style="color:#FF3939;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;height:100%;top:25px;">
   <i xid="i5"></i>
   <span xid="span8" style="position:relative;">购买</span></a></div>
   </div></div></div></li></ul> </div></div>
  <div class="x-contents-content" xid="recordcontent"></div>
  <div class="x-contents-content" xid="sellcontent"></div></div></div>
  </div> 
</div>