	$(window).resize(changewidth);
	changewidth();
	//当窗口变化的时候
	function changewidth(){
		var height = $(window).height() - 40;
		$(".p_con").css({
			height:height
		});
		$(".p_box").css("height",height-40);
	}
	//监听键盘按下去的事件
	$("#message").keyup(function(){
		if(isEmpty($("#message").val())){ //如果有输入内容,则设置按钮可用
			$("#p_btn_button").attr("disabled",true);
		}else{  //否则不可用
			$("#p_btn_button").attr("disabled",false);
		}
	});
	var boxx = document.getElementById("boxx");

	$("#message").focus(function(){
		$("#message").addClass("clicked");
		var height = $(window).height() - 40;
		$(".phone .p_con .p_msg").css("bottom","0");
		$(".phone .p_con .p_box").css("height",height-40);
		$(".phone .p_con .p_moremsg").css("bottom","-163px");
		mote = true;
		setTimeout(function(){
			boxx.scrollTop = boxx.scrollHeight;//使滚动条一直在底部		
		},200);
	});
	
	$("#message").blur(function(){
		setTimeout(function(){
			$("#message").removeClass("clicked");			
		},400);
	});
	
	$("#p_btn_button").click(function(){
		var value = $("#message").val();
		$("#p_btn_button").attr("disabled",true);//马上设置按钮不可用
		$("#message").val("");
		$(".p_box").append("<div class='p_right'><img class='imag' src='images/mine.jpg' alt='krry' width='36' height='36' />"+
				"<img class='jiaoright' src='images/sanjiao2.png' width='5'/>"+
				"<span>"+value+
	 		    "</span><div class='clear'></div></div>");
		$("#message").focus();
		boxx.scrollTop = boxx.scrollHeight;//使滚动条一直在底部
		urlmessage(value);
  });
	//回车键
	$(".p_text").keypress(function(event){
		if(event.keyCode == 13 && !isEmpty($("#message").val())){
			$("#p_btn_button").trigger("click");
		}
	});
  function urlmessage(value){
		$.ajax({
			type:"post",  //请求类型
			url:"data.jsp",
			data:{info:value},   //将自己输入的信息输入进图灵机器人 value(自己输入的信息)
			success:function(data){
				var json = JSON.parse(data);
				var string = "<div class='p_left'>"+
							"<img class='imag' src='images/123.png' alt='meimei' width='36' height='36'/>"+
							"<img class='jiaoleft' src='images/sanjiao1.png' width='5'/>";
				//如果信息里不包含链接
				if(isEmpty(json.url)){
					string += "<span>"+json.text+"</span><div class='clear'></div></div>";
				}else{//如果包含链接
					string += "<span>"+json.text+"<a class='urlaa' href='"+json.url+"'> 打开页面</a></span><div class='clear'></div></div>";
				}
				
				$(".p_box").append(string);
				
				//判读是否有list
				//如果有
				if(!isEmpty(json.list)){
					var newstring = "";
					var ListArr = json.list;
					var length = ListArr.length;
					length = length>4 ? 4 : length;
					
					var messName = isEmpty(ListArr[0].article) ? ListArr[0].name : ListArr[0].article;
					//如果没有标题，就按照来源设为标题
					if(isEmpty(messName)){
						messName = ListArr[0].source;
					}
					var width = $(".p_left").innerWidth()*0.82+10;//获取大的略缩图宽度
					
					//设定第一张信息
					newstring += "<a href='"+ListArr[0].detailurl+"'>"+
								 "  <div class='n_big'>"+
								 "	<div class='b_imgbig'>"+
								 "		<img class='detileimg' src='"+ListArr[0].icon+"' width='"+width+"' height='126' alt='略缩图'/>"+
						   		 "		<span class='g_span'>"+messName+"</span>"+
						   		 "	</div>"+
						   		 "	</div>"+
						   		 "</a>";

					//剩余信息
					for(var i=1;i<length;i++){
						var List = ListArr[i];
						var maeeName = isEmpty(List.article) ? List.name : List.article;
						//如果没有标题，就按照来源设为标题
						if(isEmpty(maeeName)){
							maeeName = List.source;
						}
		 				if(i != length-1){
		 					newstring += "<a href='"+List.detailurl+"'>"+
		 					 "	<div class='n_small'>"+
 							 "		<span>"+maeeName+"</span>"+
 							 "		<img class='detileimg' src='"+List.icon+"' width='56' height='56' alt='略缩图'/>"+
 							 "	</div>"+
 							 "</a>";
		 				}else{ //如果是最后一条信息，加上增加底部距离的样式
		 					newstring += "<a href='"+List.detailurl+"'>"+
		 					 "	<div class='n_small lastchild'>"+
 							 "		<span>"+maeeName+"</span>"+
 							 "		<img class='detileimg' src='"+List.icon+"' width='56' height='56' alt='略缩图'/>"+
 							 "	</div>"+
 							 "</a>";
		 				}
					}
		
					$(".p_box").append(newstring);
					
					$(".detileimg").on("error",function(){
						$(this).attr("src","images/noimage.gif");
					});

				}
				
				boxx.scrollTop = boxx.scrollHeight;//使滚动条一直在底部
			}
	   });
  }
  
  //点击+按钮
	var mote = true;
	var height = $(window).height() - 40;
	function moretext(){
		if(mote){
			if($("#message").hasClass("clicked")) {
				setTimeout(function(){
					toggerdown();
				},400);
			}else{
				toggerdown();
			}
		}else{
			toggerup();
		}
	}
	
	function toggerdown(){
		$(".phone .p_con .p_msg").animate({
			"bottom":"163px"
		},200);
		$(".phone .p_con .p_box").animate({
			"height":height-203
		},200);
		$(".phone .p_con .p_moremsg").animate({
			"bottom":0
		},200,function(){
			boxx.scrollTop = boxx.scrollHeight;//使滚动条一直在底部
		});
		mote = false;
	}
	
	function toggerup(){
		$(".phone .p_con .p_msg").animate({
			"bottom":"0"
		},200);
		$(".phone .p_con .p_box").animate({
			"height":height-40
		},200);
		$(".phone .p_con .p_moremsg").animate({
			"bottom":"-163px"
		},200);
		mote = true;
	}

	$(".phone .p_con .p_moremsg ul li span").click(function(){
		var message = $(this).text();
		$(".p_box").append("<div class='p_right'><img class='imag' src='images/mine.jpg' alt='krry' width='36' height='36' />"+
				"<img class='jiaoright' src='images/sanjiao2.png' width='5'/>"+
				"<span>"+message+
	 		    "</span><div class='clear'></div></div>");

		boxx.scrollTop = boxx.scrollHeight;//使滚动条一直在底部
		urlmessage(message);
	});
	
	/**
	 * 判断非空
	 * 
	 * @param val
	 * @returns {Boolean}
	 */
	function isEmpty(val) {
		val = $.trim(val);
		if (val == null)
			return true;
		if (val == undefined || val == 'undefined')
			return true;
		if (val == "")
			return true;
		if (val.length == 0)
			return true;
		if (!/[^(^\s*)|(\s*$)]/.test(val))
			return true;
		return false;
	}