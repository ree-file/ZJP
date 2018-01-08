define(function(require){

	return {
		showprompt:['请重新登录','邮箱不能为空','密码不能为空',"账号或者密码错误","账号或者密码不能为空",
		            "购买成功","购买失败","安全密码不能为空","价格区间不能为空","无交易记录",
		            "产品不存在","产品名称不能为空","产品编号错误","下架失败请重新提交请求","出售成功",
		            "出售失败","确定售价为0吗","暂无更多数据","价格区间错误","金额不能为空",
		            "超出当前所拥有金额","请输入整数","填写错误金额","产品已经结束，请重新复投","产品尚未完成，不能复投",
		            '请确保选择正确',"你还没有二级密码请设置","密码不匹配","设置成功","设置失败，请重新登录",
		            "请输入邮箱地址","不存在巢","请输入一个巢名","产品类型必需选择","上级猫窝不能为空",
		            "邀请猫窝不能为空","请选择社区","二级密码错误","创建失败","创建成功",
		            "提升失败","提升成功","请选择家族,点击上级猫窝的输入框在点击其他地方","金额不足","不能选择比当前产品低或者一样的产品",
		            "请重新在产品界面进入","没有这个用户","验证码不能为空","重置失败","邮箱和验证码不能为空",
		            "重置成功","发送失败","发送成功","邮件发送失败，请查看邮箱是否正确","邮件已经发送",
		            '删除成功','添加成功','添加失败，请重新添加','此产品不属于你',"二级密码错误",
					"不能买自己的产品",'产品不在销售中',"超过100才能提现","请重新选择网路并刷新页面","需要上传凭证",
					"请选择银行","请输入正确的银行卡号","请输入正确的银行卡号和提款金额","请完整输入数据","邀请巢不存在",
					"提款达总上限，请联系管理员提高上限"],
		bankAddind:['银行卡添加','请绑定持卡本人的银行卡','持卡人','卡号','银行','提交并审核','其他银行'],
		bankBanding:['银行卡绑定','添加银行卡','删除'],
		community:["家族","家族结构","家族福利","家族总人数","直接加速",
							"家族加速","下一级人数","下二级人数","下三级人数","总情况",
							"下级人数"],
		illustrate:["产品说明","产品介绍：","产品规则："],
		mailLogin:["登录","邮箱","密码","请输入邮箱地址","忘记密码"],
		market:["市场","交易市场","交易记录","快捷卖出","综合排序","筛选",
		        "剩余","子数","孙数","购买","加载完成","加载中","产品编号",
		        "金额","状态","交易时间","猫窝ID","标价（$）","孵化器的具体数据将自动显示于交易市场",
		        "卖出","价格区间"," 重 置 ","确认","综合排序","价格升序",
		        "价格降序","确认付款","订单信息","付款方式","付款","市场余额",
		        "支付密码","确认支付","是否下架","是","否","二级密码：",
		        "确认密码","设置密码","刷新中"],
		nestMain:["小窝","已提金额","可提金额","成长速率","总投资数",
		          "预期收益","小窝历史","账单明细","激活金额","进入社区",
		          "创建","复投","提现","邀请加速","日常收益",
		          "社区加速","已冲入钱包","进入社区","升级小窝","复投小窝",
		          "挂牌交易","创建小窝","提取钱数：","安全密码：","确定",
		          "获得金额的80%将充入活动资金，20%将充入投资资金",],
		particulars:["详情","订单编号","卖家详情","卖家ID","卖家邮箱",
		             "定价   $","猫窝详情","猫窝ID","猫窝名称","总只数",
		             "剩余只数","未产只数","下一级数","下二级数","下三级数",
		             ],
		personal:["个人中心","Personal","钱包","交易&激活金额","银行卡绑定",
		          "绑定、添加银行卡","邀请他人","修改密码","用户邮箱",
		          "原密码","修改密码","确认密码","产品介绍","版本信息",
		          "退出登录","用户 I D"],
		selectNation:["选择国家","搜索"],
		transfermoney:["充值","请确保已汇款后再提交","卡号","开户行","银行名称",
		               "汇入账户","美元","支付密码","提交","钱包金额",
		               "市场金额","其他银行","上传凭证","上传图片","已有图片",
		               "人名币","!美元和人名币只需添一个即可",],
		transferGetmoney:["提现","提交后请等待申请核实","卡号","开户行","银行名称",
		               "汇出账户","美元","支付密码","提交","钱包金额",
		               "市场金额","其他银行","上传图片","可提$","本次提取金额分配",
									 "入户金额","激活金额","备用金","确定","取消"],
		transferMymoney:["转账","转账为即刻到账","对方ID","金额$",
										"支付密码","提交"],
		transferRecord:["无任何提现转账记录","记录","编号","金额","转出金额",
										"备用金","激活金额","时间","转出","转入",
										"对方ID","充值记录","提现记录","转账记录","处理",
										"成功","拒绝","卡号"],
		wallet:["钱包","钱包金额","重置支付密码","/已废除/市场金额","激活金额",
		        "备用金","钱包金额—通过充值存进账户的金额","/已废除/市场金额—通过钱包充值用于市场购买的金额","激活金额—通过提现获得只能用于激活的金额数","备用金—通过提现获得用于限制提现金额",
						"充值","提现","转账","记录","今日可提"],
		ZJP_main:["天使猫","今日收益","总投资","总金额","日期",
		          "金额","猫窝","类型","首页","猫窝",
		          "市场","个人中心","二级密码：","确认密码：","确认",
		          "可提","备用金","限制"],
		nestjs : ["天使猫窝","详情","收益率","投资金额","总只数",
		          "获得只数","日常获得","邀请获得","家族获得"],
		ZJP_production:["请输入以下信息","产品价值","产品类型","邀请猫窝","邮箱地址",
		                "上级猫窝","所需金额","交易资金","复投资金","确定",
		                "关于邀请","猫窝邀请","您将创建一个新的猫窝，该猫窝用有独立的家族结构和指定归属人","关于创建",
		                "猫窝创建","关于复投","猫窝复投","关于升级","猫窝升级",
		                "将会建立一个新的交易账户，猫窝的归属交易账户。","填入一个猫窝的编码，该编码的猫窝将会获得直线加速","A社区：直接加速成长；B社区：直接加速和社区加速【每日最多加速现猫窝投资额的30%】；C社区：直线加速和社区加速【每日最多加速此猫窝累计投资额的30%】","此选项将决定此猫窝的上级","此选项表明你将获得的猫窝的价值",
		                "此选项表明新建的邮箱用户获得的猫窝的价值","此选项表明你升级后猫窝的价值","此选项表明你升级后猫窝的价值"],
		ZJP_resetPassword:["重置密码","邮箱：","验证码：","密码：","确认密码：",
		                   "发送邮件","重置密码","重置流程为：先填写邮箱点击发送邮件获得验证码，在填写其他相应信息点击重置密码","重置流程：点击发送邮件获得验证码，并把其他选项补齐，点击重置按钮"],
		personaljs:["修改成功",'转账成功','转账失败，请确认ID，金额，密码是否错误','提交成功','查询成功','查询失败，请重新查询'],
		marketjs:["产品正在出售中"],
		bank:["中国银行","中国招商银行","中国农业银行","中国工商银行","中国建设银行","中国交通银行",
					"中国民生银行","邮政储蓄银行","华夏银行","中信银行","深圳发展银行","中国光大银行","浙商银行","兴业银行",
					"上海浦东发展银行","恒丰银行","广东发展银行","其他银行"]
	}
});
