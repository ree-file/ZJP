<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:168px;left:142px;height:auto;"> 
  </div>  
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
    <div class="x-panel-content" xid="content1" style="background-color:#1C1F26;"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-10" xid="col1"><img src=" " alt="" xid="bankImage"></img></div>
   <div class="x-col" xid="col3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="bankName"></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col7"></div>
   <div class="x-col" xid="col9"><div component="$UI/system/components/justep/output/output" class="x-output" xid="bankCardId"></div></div></div></li></ul> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="background-color:#1D1D1D;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;">
   <div class="x-col x-col-10" xid="col6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button4" icon="glyphicon glyphicon-plus" style="height:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;left:50%;top:25%;">
     <i xid="i3" class="glyphicon glyphicon-plus"></i>
     <span xid="span4"></span></a> </div> 
   <div class="x-col" xid="col4">
    <span xid="span6" style="font-size:medium;position:relative;top:5px;">添加银行卡</span></div> 
   <div class="x-col x-col-10" xid="col5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-only-icon btn-default;" label="button" xid="button3" icon="linear linear-chevronright" style="height:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;position:relative;top:25%;">
     <i xid="i4" class="linear linear-chevronright"></i>
     <span xid="span5"></span></a> </div> </div></div>
  </div> 
</div>