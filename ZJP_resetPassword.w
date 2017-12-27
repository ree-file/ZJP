<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="标题"
          class="x-titlebar" style="background-color:#1C1F26;">
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
    <div class="x-panel-content" xid="content1" style="height:100%;background-color:#252932;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-25" xid="col1"><span xid="span1" style="color:white"><![CDATA[邮箱：]]></span></div>
   <div class="x-col" xid="col3" style="padding:0;"><input component="$UI/system/components/justep/input/input" class="form-control input-sm" xid="input1"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-25" xid="col5"><span xid="span2" style="color:white"><![CDATA[验证码：]]>
  </span></div>
   <div class="x-col" xid="col6" style="padding:0;"><input component="$UI/system/components/justep/input/input" class="form-control input-sm" xid="input2"></input></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col x-col-25" xid="col8"><![CDATA[]]>
  <span xid="span3" style="color:white"><![CDATA[密码：]]></span></div>
   <div class="x-col" xid="col9" style="padding:0"><input component="$UI/system/components/justep/input/password" class="form-control input-sm" xid="password1"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-25" xid="col11"><span xid="span4" style="color:white"><![CDATA[确认密码：]]></span></div>
   <div class="x-col" xid="col12" style="padding:0"><input component="$UI/system/components/justep/input/password" class="form-control input-sm" xid="password2"></input>
  </div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-10" xid="col14"></div>
   <div class="x-col" xid="col15" style="text-align:center"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="发送邮件" xid="button1" style="width:100%;border-color:#3BBFFF" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span5" style="color:white">发送邮件</span></a></div>
  <div class="x-col x-col-10" xid="col16"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-10" xid="col17"></div>
   <div class="x-col" xid="col18" style="text-align:center"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" label="重置密码" xid="button2" style="width:100%;border-color:#3BBFFF" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span6" style="color:white">重置密码</span></a></div>
   <div class="x-col x-col-10" xid="col19"></div></div>
  <div xid="div1"><p xid="p1" style="color:white"><![CDATA[重置流程为：先填写邮箱点击发送邮件获得验证码，在填写其他相应信息点击重置密码]]></p></div></div>
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive"></span></div>