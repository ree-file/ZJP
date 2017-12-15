<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column label="银行名称" name="name" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;id&quot;:1,&quot;name&quot;:&quot;中国银行&quot;},{&quot;id&quot;:2,&quot;name&quot;:&quot;中国工商银行&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="充值"
          class="x-titlebar" style="background-color:#252932;">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title" style="background-color:#252932;">充值</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="background-color:#252932;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="background-color:#1C1F26;">
   <div class="x-col" xid="col4">
    <span xid="span2"><![CDATA[请确保已汇款后再提交，金额将于两小时内充值入您钱包]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:50px;">
   <div class="x-col x-col-25" xid="col1">
    <span xid="span1" style="color:#A6A6A6;position:relative;top:5px;">持卡人</span></div> 
   <div class="x-col" xid="col2">
    <span xid="span4" style="color:#FFFFFF;position:relative;top:5px;">徐重霄</span></div> 
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col10">
    <span xid="span7" style="color:#A6A6A6;position:relative;">卡号</span></div> 
   <div class="x-col" xid="col9" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="text" class="form-control" xid="cardidInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="Integer" maxLength="20" pattern="/(\d{4})(?=[^\s])/,'$1 '"></input></div> 
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col13" style="text-decoration:underline;">
    <span xid="span9" style="color:#A6A6A6;position:relative;top:5px;">银行</span></div> 
   <div class="x-col" xid="col12" style="padding:0px 5px 0px 0px;">
    <div class="x-gridSelect" component="$UI/system/components/justep/gridSelect/gridSelect" xid="gridSelect1" bind-ref='$model.data1.ref("name")' inputFilterable="true">
   <option xid="option1" data="data1" value="name"></option></div></div> 
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-25" xid="col16">
    <span xid="span11" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[金额]]></span></div> 
   <div class="x-col" xid="col15" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="password" class="form-control" xid="input3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="Integer"></input></div> 
   </div>
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:40px;">
   <div class="x-col x-col-25" xid="col3">
    <span xid="span13" style="color:#A6A6A6;position:relative;top:5px;">密码</span></div> 
   <div class="x-col" xid="col5" style="padding:0px 5px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="password" class="form-control" xid="input1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="Integer"></input></div> 
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="position:relative;top:13px;">
   <div class="x-col" xid="col18">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-block submitbtn" label="提交" xid="button5" style="background-color:#049FCC;">
     <i xid="i5"></i>
     <span xid="span12" style="color:#FFFFFF;">提交</span></a> </div> </div></div>
  </div> 
</div>