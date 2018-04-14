<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!doctype html>
<html>
   <head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<title>智能Mini --Krry</title>
		<meta name="keywords" content="Mini智能回复,智能问答系统,问题查询">
		<meta name="description" content="智能Mini是一款智能回复系统，可以查快递、天气、航班、菜谱、讲段子、讲笑话等等">
		<!-- 一些移动设备的全屏 -->
	    <meta name="apple-mobile-web-app-capable" content="yes">
	    <meta name="apple-touch-fullscreen" content="yes">
	    <meta name="apple-mobile-web-app-status-bar-style" content="black">
	    <meta name="full-screen" content="yes">
	    <meta name="browsermode" content="application">
	    <meta name="x5-fullscreen" content="true">
	    <meta name="x5-page-mode" content="app">
	    
		<link rel="stylesheet" href="css/index.css" />
   </head>

	<body>
		<div class="phone">
			<div class="p_title">智能Mini</div>
			<div class="p_con">
				<div class="p_box" id="boxx">
				   <div class="p_left">
						<img class="imag" src="images/123.png" alt="智能客服机器人" width="36" height="36"/>
						<img class='jiaoleft' src="images/sanjiao1.png" width="5"/><span>欢迎您，我是人见人爱的Mini^_^</span><div class='clear'></div>
				   </div>
				</div>
				<div class="p_msg">
					<p class="p_more" onclick="moretext();"></p>
				    <input class="p_text"  id="message" type="text" />
				    <input type="button" value="发&nbsp;送" class="p_btn" id="p_btn_button" disabled="true" />
				</div>
				<div class="p_moremsg">
					<div class="g_container">
						<ul>
							<li style="margin-top:10px;"><span>广州天气</span></li>
							<li><span>今天日期</span></li>
							<li><span>查快递</span></li>
							<li><span>菜谱大全</span></li>
							<li><span>风景图片</span></li>
							<li><span>翻译 我爱你</span></li>
							<li><span>讲笑话</span></li>
							<li><span>星座运势</span></li>
							<li><span>新闻</span></li>
							<li><span>绕口令</span></li>
							<li><span>顺口溜</span></li>
							<li><span>歇后语</span></li>
							<li><span>脑经急转弯</span></li>
							<li><span>讲个故事</span></li>
							<div class="clear"></div>
						</ul>
					</div>
				</div>
			</div>
		</div>   
     <!-- 引入jQuery官方类库-->
	<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
	</body>
</html>