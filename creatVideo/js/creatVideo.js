// JavaScript Document
var creatVideo = {
	window_height:null,
	creatHTML : function(){
		var video_black_blank = '<div class="video_black_blank"><a href="javascript:;" class="close_creatVideo"></a><div style="width:808px;height:542px;margin:0 auto;margin-top:100px;"><div id="mediaplayer"></div></div></div>';
		$("body").append(video_black_blank);
	},
	creatStyle : function(){
		window_height = $(window).height();
		$(".video_black_blank").css({
			"width":"100%",
			"height":window_height,
			"background":"url(images/black_png.png) repeat",
			"position":"fixed",
			"left":0,
			"top":0,
			"z-index":8000,
			"display":"none"
		});
		$(".close_creatVideo").css({
			"width":"26px",
			"height":"26px",
			"background":"url(images/video_close_bbtn.png) no-repeat"	,
			"position":"absolute",
			"right":"10px",
			"top":"10px"
		});
	},
	bindFun : function(){
		$(".alertVideo").click(function(){
			$(".video_black_blank").show();	
			$("body").css({
				"height":creatVideo.window_height,
				"overflow":"hidden"	
			});
		});
		$(".close_creatVideo").click(function(){
			$(".video_black_blank").hide();	
			$("body").css({
				"height":"auto",
				"overflow":"auto"	
			});
		})
	},
	setVideoPlayer : function(){
		var Player = jwplayer("mediaplayer").setup({
			flashplayer: "js/player.swf",
			file: videoUrl,
			width: 808,
			height: 542,
			dock:false,
			controlbar: 'over',
			plugins:{
				viral:{
					onpause:false,
					oncomplete:false,
					allowmenu:false
					}
			}
		});
	},
	Run : function(){
		creatVideo.creatHTML();
		creatVideo.creatStyle();
		creatVideo.bindFun();
		creatVideo.setVideoPlayer();
	}	
}
creatVideo.Run();