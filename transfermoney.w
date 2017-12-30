<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:24px;left:570px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bankfromData" idColumn="id" confirmRefresh="false">
   <column name="id" type="Integer" xid="column1"></column>
  <column label="银行名称" name="name" type="String" xid="column2"></column>
  <data xid="default1">[{&quot;id&quot;:1,&quot;name&quot;:&quot;中国银行&quot;},{&quot;id&quot;:2,&quot;name&quot;:&quot;中国工商银行&quot;},{&quot;id&quot;:3,&quot;name&quot;:&quot;中国建设银行&quot;},{&quot;id&quot;:4,&quot;name&quot;:&quot;中国农业银行&quot;},{&quot;id&quot;:5,&quot;name&quot;:&quot;中国招商银行&quot;},{&quot;id&quot;:6,&quot;name&quot;:&quot;中国交通银行&quot;},{&quot;id&quot;:7,&quot;name&quot;:&quot;广东发展银行&quot;},{&quot;id&quot;:8,&quot;name&quot;:&quot;恒丰银行&quot;},{&quot;id&quot;:9,&quot;name&quot;:&quot;华夏银行&quot;},{&quot;id&quot;:10,&quot;name&quot;:&quot;上海浦东发展银行&quot;},{&quot;id&quot;:11,&quot;name&quot;:&quot;深圳发展银行&quot;},{&quot;id&quot;:12,&quot;name&quot;:&quot;兴业银行&quot;},{&quot;id&quot;:13,&quot;name&quot;:&quot;邮政储蓄银行&quot;},{&quot;id&quot;:14,&quot;name&quot;:&quot;浙商银行&quot;},{&quot;id&quot;:15,&quot;name&quot;:&quot;中国光大银行&quot;},{&quot;id&quot;:16,&quot;name&quot;:&quot;中国民生银行&quot;},{&quot;id&quot;:17,&quot;name&quot;:&quot;中信银行&quot;},{&quot;id&quot;:18,&quot;name&quot;:&quot;其他银行&quot;}]</data></div>
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" style="background-color:#252932;" xid="title">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title"></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="background-color:#252932;height:100%;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="background-color:#1C1F26;">
   <div class="x-col" xid="col4">
    <span xid="span2"><![CDATA[]]></span></div> </div>
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="background-color:#252932;padding:0px 0px 0px 0px;margin:15px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col6" style="text-decoration:underline;">
    <span xid="span3" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col7" style="padding:0px 5px 0px 0px;">
    <select component="$UI/system/components/justep/select/select" class="form-control" xid="fromSelect" bind-options="bankfromData" bind-optionsValue="name" bind-optionsLabel="name" bind-optionsCaption="请选择..." onChange="fromSelectChange"></select></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="otherbankrow" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col11">
    <span xid="otherbankName" style="color:#A6A6A6;position:relative;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col8" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="text" class="form-control" xid="otherbankInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="String" maxLength="20" pattern="/(\d{4})(?=[^\s])/,'$1 '"></input></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col10">
    <span xid="span7" style="color:#A6A6A6;position:relative;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col9" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="text" class="form-control" xid="cardidInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="Integer" maxLength="20" pattern="/(\d{4})(?=[^\s])/,'$1 '"></input></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col13" style="text-decoration:underline;">
    <span xid="span9" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col12" style="padding:5px 5px 0px 0px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-danger btn-block" label="钱包金额" xid="button1">
   <i xid="i1"></i>
   <span xid="span4"><![CDATA[]]></span></a></div> 
  <div class="x-col" xid="col1"></div></div>
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col16">
    <span xid="span11" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col15" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="moneyInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="Integer"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;">
   <div class="x-col x-col-25" xid="col3">
    <span xid="span13" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col5" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="password" class="form-control" xid="securityInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="Integer"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="position:relative;top:13px;">
   <div class="x-col" xid="col18">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-block submitbtn" xid="setupButton" style="background-color:#049FCC;" onClick="setupButtonClick">
     <i xid="i5"></i>
     <span xid="span12" style="color:#FFFFFF;"></span></a> </div> </div>
  </div>
  </div> 
</div>