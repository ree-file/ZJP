<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:168px;left:142px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bankBandedData" idColumn="id"><column name="id" type="Integer" xid="xid5"></column>
  <column name="username" type="String" xid="xid6"></column>
  <column name="number" type="Integer" xid="xid7"></column>
  <column name="bankname" type="String" xid="xid8"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="银行卡绑定"
          class="x-titlebar" style="background-color:#252932;">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">银行卡绑定</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="background-color:#1C1F26;"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="bankBandedData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" style="padding-right:10px;padding-left:10px;">
  
  <div component="$UI/system/components/justep/row/row" class="x-row bankrow" xid="row4" style="padding:0px 0px 0px 0px;margin:0px 0px 10px 0px;background-color:#8686FF;">
   <div class="x-col" xid="col2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="margin-bottom:0px;padding-bottom:0px;padding-left:20px;margin-top:12px;">
   <div class="x-col x-col-10 imgcol" xid="col1" style="position:relative;background-color:#FFFFFF;"><img alt="" xid="bankImage" height="100%" style="position:relative;width:100%;" src="$UI/ZJP/images/bankimg/银行.png"></img></div>
   <div class="x-col" xid="col3" style="padding:0px 0px 0px 0px;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="bankName" bind-ref='ref("bankname")' style="color:#FFFFFF;font-weight:bold;font-size:medium;margin:0px 0px 0px 5px;padding:5px 0px 0px 0px;"></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding-top:0px;margin-top:0px;margin-bottom:10px;">
   <div class="x-col x-col-25" xid="col7"></div>
   <div class="x-col" xid="col9"><div component="$UI/system/components/justep/output/output" class="x-output numberOutput" xid="bankCardId" bind-ref='ref("number")' style="color:#FFFFFF;font-family:Leelawadee UI;font-size:large;"></div></div></div></div>
   </div></li></ul> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="background-color:#1D1D1D;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;" bind-click="row2Click">
   <div class="x-col x-col-10" xid="col6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button4" icon="glyphicon glyphicon-plus" style="height:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;color:#FFFFFF;left:50%;top:25%;">
     <i xid="i3" class="glyphicon glyphicon-plus" style="position:relative;top:12px;"></i>
     <span xid="span4"></span></a> </div> 
   <div class="x-col" xid="col4">
    <span xid="span6" style="font-size:medium;position:relative;top:5px;">添加银行卡</span></div> 
   <div class="x-col x-col-10" xid="col5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-only-icon btn-default;" label="button" xid="button3" icon="linear linear-chevronright" style="height:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;top:25%;color:#FFFFFF;font-weight:bolder;">
     <i xid="i4" class="linear linear-chevronright" style="position:relative;top:12px;"></i>
     <span xid="span5"></span></a> </div> </div></div>
  </div> 
</div>