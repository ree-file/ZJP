<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onActive="modelActive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bankData" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column label="银行名称" name="name" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;id&quot;:1,&quot;name&quot;:&quot;中国银行&quot;},{&quot;id&quot;:2,&quot;name&quot;:&quot;中国工商银行&quot;},{&quot;id&quot;:3,&quot;name&quot;:&quot;中国建设银行&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="银行卡添加"
          class="x-titlebar" style="background-color:#252932;">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">银行卡添加</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="background-color:#1C1F26;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"><span xid="span2"><![CDATA[请绑定持卡人本人的银行卡]]></span></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="background-color:#1D1D1D;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;">
   <div class="x-col x-col-20" xid="col1"><span xid="span1" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[持卡人]]></span></div>
   <div class="x-col" xid="col2"><span xid="span4" style="color:#FFFFFF;position:relative;top:5px;"><![CDATA[徐重霄]]></span></div>
   <div class="x-col x-col-20 x-col-15" xid="col7"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="linear linear-user" style="position:relative;left:45%;">
   <i xid="i1" class="linear linear-user"></i>
   <span xid="span3"></span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="background-color:#1D1D1D;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;">
   <div class="x-col x-col-20" xid="col10">
    <span xid="span7" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[卡号]]></span></div> 
   <div class="x-col" xid="col9" style="padding:0px 0px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="text" class="form-control" xid="cardidInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#A5DFFC;" onChange="cardidInputChange" onBlur="cardidInputBlur" dataType="Integer" maxLength="20" pattern="/(\d{4})(?=[^\s])/,'$1 '"></input></div> 
   <div class="x-col x-col-20 x-col-15" xid="col8">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button2" icon="icon-laptop" style="position:relative;left:45%;">
     <i xid="i2" class="icon-laptop"></i>
     <span xid="span5"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="background-color:#1D1D1D;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;">
   <div class="x-col x-col-20" xid="col13">
    <span xid="span9" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[银行]]></span></div> 
   <div class="x-col" xid="col12" style="padding:0px 0px 0px 0px;">
    <div class="x-gridSelect" component="$UI/system/components/justep/gridSelect/gridSelect" xid="gridSelect3" inputFilterable="true" bind-ref='$model.bankData.ref("name")'>
   <option xid="option3" data="bankData" value="name"></option></div></div> 
   <div class="x-col x-col-20 x-col-15" xid="col11">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button3" icon="glyphicon glyphicon-bitcoin" style="position:relative;left:45%;">
     <i xid="i3" class="glyphicon glyphicon-bitcoin"></i>
     <span xid="span8"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="background-color:#1D1D1D;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;">
   <div class="x-col x-col-20" xid="col16">
    <span xid="span11" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[密码]]></span></div> 
   <div class="x-col" xid="col15" style="padding:0px 0px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="password" class="form-control" xid="input3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#A5DFFC;" onChange="cardidInputChange" onBlur="cardidInputBlur" dataType="Integer"></input></div> 
   <div class="x-col x-col-20 x-col-15" xid="col14">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button4" icon="icon-ios7-keypad" style="position:relative;left:45%;">
     <i xid="i4" class="icon-ios7-keypad"></i>
     <span xid="span10"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col17"></div>
   <div class="x-col" xid="col18"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="button" xid="button5">
   <i xid="i5"></i>
   <span xid="span12"></span></a></div>
   <div class="x-col" xid="col19"></div></div></div>
  </div> 
</div>