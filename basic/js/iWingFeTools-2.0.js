// JavaScript Document
var iWing = {
	alarmFun : function(a_obj,close_button,alarm_obj){
		var window_height = $(window).height();
		$(".black_blank").css("height",window_height);
		$(a_obj).click(function(){
			$(".black_blank").show();
			$(alarm_obj).show();
		})
		$(close_button).click(function(){
			$(".black_blank").hide();
			$(alarm_obj).hide();
		})
	},
	textScrollLoop : function(obj,delayTime,interTime){
		var _this = $(obj);
		var line_height = _this.find("ul li").height();
		var line_number = _this.find("ul li").length;
		var dang = 0;
		_this.find("ul").append(_this.find("ul li").clone());
		var timer = null;
		if(delayTime==null){
			delayTime=500;
		}
		if(interTime==null){
			interTime=3000;
		}
		timer = window.setInterval(function(){
			dang++;
			if(dang>(line_number*2)-1){
				dang=line_number;
				_this.find("ul").css("top",-line_height*(line_number-1));
			}
			_this.find("ul").animate({"top":-line_height*dang},delayTime)
		},interTime)
		_this.hover(function(){
			window.clearInterval(timer);
			},function(){
			timer = window.setInterval(function(){
				dang++;
				if(dang>(line_number*2)-1){
					dang=line_number;
					_this.find("ul").css("top",-line_height*(line_number-1));
				}
				_this.find("ul").animate({"top":-line_height*dang},delayTime)
			},interTime)
		})	
	},
	slide_banner : function(obj,delayTime,tab_num,show_num,li_allwidth){
		var _this = $(obj);
		var this_src = null;
		var this_num = 0;
		if(delayTime==null){
			delayTime=500;
		}
		var this_have = _this.find(".ctrl_area ul li").length;
		_this.find(".ctrl_area ul li").click(function(){
			if(!$(".ctrl_area ul").is(":animated")){
				this_num = $(this).index();
				this_src = $(this).find("img").attr("src");
				$(".ctrl_area ul li").removeClass("on");
				$(this).addClass("on");
				_this.find(".img_area").find("img").attr("src",this_src);
				if(this_num>2 && this_num<this_have-tab_num){
					$(".ctrl_area ul").animate({left:-li_allwidth*(this_num-2)+"px"},delayTime);
				}
				if(this_num==1){
					$(".ctrl_area ul").animate({left:"0px"},delayTime);
				}
				if(this_num==this_have-tab_num){
					$(".ctrl_area ul").animate({left:-li_allwidth*(this_have-show_num)+"px"},delayTime);
				}
				if(this_num==this_have-2){
					$(".ctrl_area ul").animate({left:-li_allwidth*(this_have-show_num)+"px"},delayTime);
				}		
			}		
		})
		_this.find(".btn_left").click(function(){
			if(!$(".ctrl_area ul").is(":animated")){
				this_num--;
				if(this_num<0){
					this_num=0;
				}
				_this.find(".ctrl_area ul li").eq(this_num).click();
			}
		})
		_this.find(".btn_right").click(function(){
			if(!$(".ctrl_area ul").is(":animated")){
				this_num++;
				if(this_num>this_have-1){
					this_num=this_have-1;
				}
				_this.find(".ctrl_area ul li").eq(this_num).click();
			}
		})		
		_this.find(".ctrl_area ul li").eq(0).click();	
	},
	back_top : function(obj){
		$(window).scroll(function () { /*屏幕上下滚动返回头部*/
			if($(window).scrollTop()>1000) {//滚动超过多少距离出现返回头部的按钮
				$(obj).fadeIn();
			} else { 
					$(obj).fadeOut();
			} 
		}); 
		$(obj).click(function () { 
			$('html,body').animate({ 
				scrollTop :0 
			}, 200); 
		})
	},
	shop_fixed : function(obj,fixed_class){
		var num1=$(obj).offset().top;
		$(window).scroll(function(){	
			var num=$(obj).offset().top;
			var ttop=$(window).scrollTop();
			if(num<=ttop){
				$(obj).addClass(fixed_class);
			}
			if(ttop<num1){
				$(obj).removeClass(fixed_class);
			}
		})
	},
	userName_test : function(obj){
		var _this = $(obj).val();
		if(_this!=""){
			if(_this.length<6 || !/^[a-zA-z]\w{3,15}$/.test(_this)){
				$(obj).next(".biao_tishi").text("用户名格式错误！");
				return false;
				}else{
					$(obj).next(".biao_tishi").text("正确");
					return true;
					}
			}else{
				$(obj).next(".biao_tishi").text("请输入用户名！");
				return false;
				}
	},
	e_mail_test : function(obj){
		var _this = $(obj).val();
		if(_this!=""){
			if(!/.+@.+\.[a-zA-Z]{2,4}$/.test(_this)){
				$(obj).next(".biao_tishi").text("请输入正确格式的邮箱！");
				return false;
				}else{
					$(obj).next(".biao_tishi").text("正确");
					return true;
					}
			}else{
				$(obj).next(".biao_tishi").text("请输入邮箱！");
				return false;
				}
	},
	mobile_number_test : function(obj){
		var _this = $(obj).val();
		if(_this!=""){
			if(!/^1\d{10}$/.test(_this)){
				$(obj).next(".biao_tishi").text("请输入正确的手机号码");
				return false;
				}else{
					$(obj).next(".biao_tishi").text("正确");
					return true;
					}
			}else{
				$(obj).next(".biao_tishi").text("请输入手机号码！");
				return false;
				}
	},
	password_test : function(obj){
		var _this = $(obj).val();
		if(_this!=""){
			if(_this.length<6 || _this.length>20){
				$(obj).next(".biao_tishi").text("密码格式错误");
				return false;
				}else{
					$(obj).next(".biao_tishi").text("正确");
					return true;
					}
			}else{
				$(obj).next(".biao_tishi").text("请输入密码");
				return false;
				}
	},
	password_twice_test : function(obj,obj_before){
		var _this = $(obj).val();
		var _before_this = $(obj_before).val();
		if(_before_this!=""){
			if(_before_this!=_this){
				$(obj_before).next(".biao_tishi").text("两次输入的密码不同");
				return false;
				}else{
					$(obj_before).next(".biao_tishi").text("正确");
					return true;
					}
			}else{
				$(obj_before).next(".biao_tishi").text("请再次输入密码");
				return false;
				}
	},
	IsPC : function(){
		var userAgentInfo = navigator.userAgent;  
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
        var flag = true;  
        for (var v = 0; v < Agents.length; v++) {  
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
            }  
        return flag; 
	},
	writeCookie : function(name,value){
		var Days = 30; //此 cookie 将被保存 30 天
		var exp = new Date();
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
	},
	readCookie : function(name){
		var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		if(arr != null){
			return unescape(arr[0]);
		}
	},
	scrollFixed : function(obj,fixed_class){
		var positop_height = $(".foot").offset().top-750; //到达底部时固定的位置，这里的750请自行修改，由于页面的高度不同，需要自己调试
	    var num1=100; //窗口滚动大于多少距离时开始固定滚动
        $(window).scroll(function(){    
            var num=$(obj).offset().top;//对象距离顶部的距离
            var num2 = $(".foot").offset().top-750;//最底端的对象距离顶部的距离
            var ttop=$(window).scrollTop();
            if(num<=ttop){
                $(obj).addClass(fixed_class);
                $(".window_nav.fixed").css("top","28px");//固定滚动fixed的位置
            }
            if(ttop<num1){
                $(obj).removeClass(fixed_class);
                $(".window_nav").css("top","80px");//在头部顶端绝对定位时的位置
            }
            if(num2<=ttop){
                $(obj).addClass("posi");
                $(".window_nav.posi").css("top",positop_height); //到达底部时固定的位置
            }
            if(ttop<num2){
                $(obj).removeClass("posi");
                $(".window_nav.fixed").css("top","28px");//固定滚动fixed的位置
            }       
        }) 
	}
}
