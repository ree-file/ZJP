<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bankfromData" idColumn="id" confirmRefresh="false">
   <column name="id" type="Integer" xid="column1"></column>
  <column label="银行名称" name="name" type="String" xid="column2"></column></div></div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive"></span>
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="background-color:#252932;"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="title" style="background-color:#252932;">
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
    <div class="x-panel-content" xid="content1" style="height:100%;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="background-color:#1C1F26;">
   <div class="x-col" xid="col1"><span xid="span2"></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="background-color:#252932;padding:0px 0px 0px 0px;margin:15px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col5"><span xid="span9" style="color:#C0C0C0;position:relative;top:5px;"></span></div>
   <div class="x-col" xid="col6"><a component="$UI/system/components/justep/button/button" class="btn btn-danger btn-block" xid="button1">
   <i xid="i1"></i>
   <span xid="span4"></span></a></div>
  <div class="x-col" xid="col2"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col3"><span xid="span3" style="color:#C0C0C0;position:relative;top:5px;"></span></div>
   <div class="x-col" xid="col7"><select component="$UI/system/components/justep/select/select" class="form-control" xid="toSelect" bind-options="bankfromData" bind-optionsValue="name" bind-optionsLabel="name" onChange="toSelectChange"></select></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="otherbankrow" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col11">
    <span xid="otherbankName" style="color:#C0C0C0;position:relative;"></span></div> 
   <div class="x-col" xid="col8" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="text" class="form-control" xid="otherbankInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="String" maxLength="20" pattern="/(\d{4})(?=[^\s])/,'$1 '"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col10">
    <span xid="span7" style="color:#C0C0C0;position:relative;"></span></div> 
   <div class="x-col" xid="col9" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="text" class="form-control" xid="cardidInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="Integer" maxLength="20" pattern="/(\d{4})(?=[^\s])/,'$1 '"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col16">
    <span xid="span11" style="color:#C0C0C0;position:relative;top:5px;"></span></div> 
   <div class="x-col" xid="col15" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="moneyInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="Float"></input></div> 
  <div class="x-col" xid="col19" style="padding-right:0px;padding-left:0px;margin-right:0px;margin-left:0px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm pull-left" xid="button3" style="margin-right:3px;margin-left:0px;font-weight:bolder;" icon="glyphicon glyphicon-yen" onClick="button3Click">
   <i xid="i3" class="glyphicon glyphicon-yen"></i>
   <span xid="span10"></span></a>
  <span xid="daospan" style="font-size:medium;color:#FFFFFF;margin-top:3px;" class="daospan"></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;">
   <div class="x-col x-col-25" xid="col13">
    <span xid="span13" style="color:#C0C0C0;position:relative;top:5px;"></span></div> 
   <div class="x-col" xid="col12" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="password" class="form-control" xid="securityInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="String"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="position:relative;top:13px;">
   <div class="x-col" xid="col18">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-block submitbtn" xid="setupButton" style="background-color:#049FCC;" onClick="setupButtonClick">
     <i xid="i5"></i>
     <span xid="span12" style="color:#FFFFFF;"></span></a> </div> </div></div>
  </div> 
<div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" opacity="0" style="left:131px;top:14px;">
   <div class="x-popOver-overlay" xid="div4"></div>
   <div class="x-popOver-content" xid="div5">
    <span xid="span5" style="color:#C0C0C0;width:100%;font-size:medium;margin-top:10px;" class="center-block daospan"></span><div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   
   
   <div class="x-col x-col-10" xid="col33"></div><div class="x-col" xid="col26"><span xid="span1" class="popspan"><![CDATA[xcx]]></span></div><div class="x-col" xid="col27"><span xid="span6" class="popspanout"><![CDATA[]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col x-col-10" xid="col34"></div><div class="x-col" xid="col30">
    <span xid="span14" class="popspan"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col29">
    <span xid="span8" class="popspanout"></span></div> 
  </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col x-col-10" xid="col35"></div><div class="x-col" xid="col32">
    <span xid="span16" class="popspan">xcx</span></div> 
   <div class="x-col" xid="col31">
    <span xid="span15" class="popspanout"></span></div> 
  </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14">
   <div class="x-col" xid="col36" style="padding-right:12px;padding-left:25px;"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" xid="button2" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span17"></span></a></div>
   <div class="x-col" xid="col39" style="padding-right:25px;padding-left:13px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" xid="button5" onClick="button5Click">
    <i xid="i6"></i>
    <span xid="span19"></span></a> </div></div></div> </div></div>