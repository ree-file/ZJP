<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:24px;left:570px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bankfromData" idColumn="id" confirmRefresh="false">
   <column name="id" type="Integer" xid="column1"></column>
  <column label="银行名称" name="name" type="String" xid="column2"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="img" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column name="img" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;id&quot;:1,&quot;img&quot;:&quot;&quot;}]</data></div></div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="background-color:#252932;"> 
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
    <div class="x-panel-content" xid="content1" style="height:100%;padding-bottom:20%;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="background-color:#1C1F26;">
   <div class="x-col" xid="col4">
    <span xid="span2"><![CDATA[]]></span></div> </div>
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="background-color:#252932;padding:0px 0px 0px 0px;margin:15px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col6" style="text-decoration:underline;">
    <span xid="span3" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col7" style="padding:0px 5px 0px 0px;">
    <select component="$UI/system/components/justep/select/select" class="form-control" xid="fromSelect" bind-options="bankfromData" bind-optionsValue="name" bind-optionsLabel="name" onChange="fromSelectChange"></select></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="otherbankrow" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
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
    <a component="$UI/system/components/justep/button/button" class="btn btn-danger btn-block" xid="button1">
   <i xid="i1"></i>
   <span xid="span4"></span></a></div> 
  <div class="x-col" xid="col1"></div></div>
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col20"><span xid="span6" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[]]></span></div>
   <div class="x-col" xid="col21"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" dataType="Float" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" onBlur="input1Blur"></input></div>
   <div class="x-col" xid="col22" style="text-align:center"><span xid="span8" style="color:red"></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col16">
    <span xid="span11" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col15" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="moneyInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="Float" onBlur="moneyInputBlur"></input></div> 
  <div class="x-col" xid="col19" style="padding-right:0px;padding-left:0px;margin-right:0px;margin-left:0px;"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;">
   <div class="x-col x-col-25" xid="col3">
    <span xid="span13" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[]]></span></div> 
   <div class="x-col" xid="col5" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="password" class="form-control" xid="securityInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="String"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;background-color:#252932;">
   <div class="x-col x-col-25" xid="col2"><span xid="span1" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[]]></span></div>
   <div class="x-col bgim" xid="col14"><input type="file" value="" xid="file2" style="height:100%;opacity:0;" bind-change="file2Change"></input>
  <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="上传图片" xid="button2" style="margin-top:-40px;width:100%;" icon="glyphicon glyphicon-cloud">
   <i xid="i2" class="glyphicon glyphicon-cloud"></i>
   <span xid="span5"><![CDATA[]]></span></a></div>
   <div class="x-col" xid="col17"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="position:relative;top:13px;">
   <div class="x-col" xid="col18">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-block submitbtn" xid="setupButton" style="background-color:#049FCC;" onClick="setupButtonClick">
     <i xid="i5"></i>
     <span xid="span12" style="color:#FFFFFF;"></span></a> </div> </div>
  </div>
  </div> 
</div>