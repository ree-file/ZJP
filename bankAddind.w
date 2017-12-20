<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:14px;left:107px;height:auto;" onActive="modelActive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bankData" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column label="银行名称" name="name" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;id&quot;:1,&quot;name&quot;:&quot;中国银行&quot;},{&quot;id&quot;:2,&quot;name&quot;:&quot;中国工商银行&quot;},{&quot;id&quot;:3,&quot;name&quot;:&quot;中国建设银行&quot;},{&quot;id&quot;:4,&quot;name&quot;:&quot;中国农业银行&quot;},{&quot;id&quot;:5,&quot;name&quot;:&quot;中国招商银行&quot;},{&quot;id&quot;:6,&quot;name&quot;:&quot;中国交通银行&quot;},{&quot;id&quot;:7,&quot;name&quot;:&quot;广东发展银行&quot;},{&quot;id&quot;:8,&quot;name&quot;:&quot;恒丰银行&quot;},{&quot;id&quot;:9,&quot;name&quot;:&quot;华夏银行&quot;},{&quot;id&quot;:10,&quot;name&quot;:&quot;上海浦东发展银行&quot;},{&quot;id&quot;:11,&quot;name&quot;:&quot;深圳发展银行&quot;},{&quot;id&quot;:12,&quot;name&quot;:&quot;兴业银行&quot;},{&quot;id&quot;:13,&quot;name&quot;:&quot;邮政储蓄银行&quot;},{&quot;id&quot;:14,&quot;name&quot;:&quot;浙商银行&quot;},{&quot;id&quot;:15,&quot;name&quot;:&quot;中国光大银行 &quot;},{&quot;id&quot;:16,&quot;name&quot;:&quot;中国民生银行&quot;},{&quot;id&quot;:17,&quot;name&quot;:&quot;中信银行&quot;},{&quot;id&quot;:18,&quot;name&quot;:&quot;其他银行&quot;}]</data></div></div>  
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
    <div class="x-panel-content" xid="content1" style="background-color:#252932;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="background-color:#1C1F26;">
   <div class="x-col" xid="col4"><span xid="span2"><![CDATA[请绑定持卡人本人的银行卡]]></span></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="background-color:#252932;padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;height:50px;">
   <div class="x-col x-col-20" xid="col1"><span xid="span1" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[持卡人]]></span></div>
   <div class="x-col" xid="col2" style="padding:2px 0px 0px 0px;"><input component="$UI/system/components/justep/input/input" type="text" class="form-control" xid="nameInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E;" dataType="String" maxLength="20" pattern="/(\d{4})(?=[^\s])/,'$1 '"></input></div>
   <div class="x-col x-col-20 x-col-15" xid="col7"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="linear linear-user" style="position:relative;left:45%;color:#A6A6A6;">
   <i xid="i1" class="linear linear-user"></i>
   <span xid="span3"></span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-20" xid="col10">
    <span xid="span7" style="color:#A6A6A6;position:relative;"><![CDATA[卡号]]></span></div> 
   <div class="x-col" xid="col9" style="padding:0px 0px 0px 0px;">
    <input component="$UI/system/components/justep/input/input" type="text" class="form-control" xid="cardidInput" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#1C1F26;color:#FFFFFF;border-color:#2F363E" dataType="Integer" maxLength="20" pattern="/(\d{4})(?=[^\s])/,'$1 '"></input></div> 
   <div class="x-col x-col-20 x-col-15" xid="col8">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button2" icon="icon-laptop" style="position:relative;left:45%;color:#A6A6A6;">
     <i xid="i2" class="icon-laptop"></i>
     <span xid="span5"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="background-color:#252932;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:60px;">
   <div class="x-col x-col-20" xid="col13">
    <span xid="span9" style="color:#A6A6A6;position:relative;top:5px;"><![CDATA[银行]]></span></div> 
   <div class="x-col" xid="col12" style="padding:0px 0px 0px 0px;">
    
  <select component="$UI/system/components/justep/select/select" class="form-control" xid="bankSelect" bind-ref='$model.bankData.ref("name")' bind-options="bankData" bind-optionsValue="name" bind-optionsLabel="name"></select></div> 
   <div class="x-col x-col-20 x-col-15" xid="col11">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button3" icon="glyphicon glyphicon-bitcoin" style="position:relative;left:45%;color:#A6A6A6;">
     <i xid="i3" class="glyphicon glyphicon-bitcoin"></i>
     <span xid="span8"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="position:relative;top:13px;">
   <div class="x-col" xid="col18"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-block submitbtn" label="提交并审核" xid="button5" style="background-color:#049FCC;" onClick="button5Click">
   <i xid="i5"></i>
   <span xid="span12" style="color:#FFFFFF;">提交并审核</span></a></div>
   </div></div>
  </div> 
</div>