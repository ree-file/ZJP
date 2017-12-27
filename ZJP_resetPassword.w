<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="标题"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title"><![CDATA[重置密码]]>
  </div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-25" xid="col1"><span xid="span1"><![CDATA[邮箱：]]></span></div>
   <div class="x-col" xid="col3" style="padding:0;"><input component="$UI/system/components/justep/input/input" class="form-control input-sm" xid="input1"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-25" xid="col5"><span xid="span2"><![CDATA[验证码：]]>
  </span></div>
   <div class="x-col" xid="col6" style="padding:0;"><input component="$UI/system/components/justep/input/input" class="form-control input-sm" xid="input2"></input></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col x-col-25" xid="col8"><![CDATA[]]>
  <span xid="span3"><![CDATA[密码：]]></span></div>
   <div class="x-col" xid="col9" style="padding:0"><input component="$UI/system/components/justep/input/password" class="form-control input-sm" xid="password1"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-25" xid="col11"><span xid="span4"><![CDATA[确认密码：]]></span></div>
   <div class="x-col" xid="col12" style="padding:0"><input component="$UI/system/components/justep/input/password" class="form-control input-sm" xid="password2"></input>
  </div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-10" xid="col14"></div>
   <div class="x-col" xid="col15" style="text-align:center"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm" label="发送邮件" xid="button1" style="width:100%;" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span5">发送邮件</span></a></div>
  <div class="x-col x-col-10" xid="col16"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-10" xid="col17"></div>
   <div class="x-col" xid="col18" style="text-align:center"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm" label="重置密码" xid="button2" style="width:100%;" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span6">重置密码</span></a></div>
   <div class="x-col x-col-10" xid="col19"></div></div>
  <div xid="div1"><p xid="p1"><![CDATA[重置流程为：先填写邮箱点击发送邮件获得验证码，在填写其他相应信息点击重置密码]]></p></div></div>
  </div> 
</div>