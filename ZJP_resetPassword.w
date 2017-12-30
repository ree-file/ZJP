<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive" onunLoad="modelUnLoad"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="标题"
          class="x-titlebar" style="background-color:#1C1F26;" xid="title">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title"><![CDATA[]]></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="height:100%;background-color:#252932;padding-top:100px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-25" xid="col1"><span xid="span1" style="color:white"><![CDATA[]]></span></div>
   <div class="x-col" xid="col3" style="padding:0;"><input component="$UI/system/components/justep/input/input" class="form-control input-sm" xid="input1"></input></div>
  <div class="x-col x-col-10" xid="col2"></div>
  </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-25" xid="col5"><span xid="span2" style="color:white"><![CDATA[]]></span></div>
   <div class="x-col" xid="col6" style="padding:0;"><input component="$UI/system/components/justep/input/input" class="form-control input-sm" xid="input2"></input></div>
  <div class="x-col x-col-10" xid="col7"></div>
  </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col x-col-25" xid="col8"><![CDATA[]]>
  <span xid="span3" style="color:white"><![CDATA[]]></span></div>
   <div class="x-col" xid="col9" style="padding:0"><input component="$UI/system/components/justep/input/password" class="form-control input-sm" xid="password1"></input></div>
  <div class="x-col x-col-10" xid="col13"></div>
  </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-25" xid="col11"><span xid="span4" style="color:white"><![CDATA[]]></span></div>
   <div class="x-col" xid="col12" style="padding:0"><input component="$UI/system/components/justep/input/password" class="form-control input-sm" xid="password2"></input>
  </div>
  <div class="x-col x-col-10" xid="col21"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-25" xid="col14"></div>
   <div class="x-col" xid="col15" style="text-align:center"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" xid="button1" style="width:100%;border-color:#3BBFFF" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span5" style="color:white"></span></a></div>
  <div class="x-col x-col-10" xid="col16"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-25" xid="col17"></div>
   <div class="x-col" xid="col18" style="text-align:center"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-sm" xid="button2" style="width:100%;border-color:#3BBFFF" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span6" style="color:white"></span></a></div>
   <div class="x-col x-col-10" xid="col19"></div></div>
  <div xid="div1"><p xid="p1" style="color:white"><![CDATA[]]></p></div></div>
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ZJP/mailLogin.w" onReceive="windowDialog1Receive"></span></div>