

$(document).ready( function() {
	//상단 메뉴 마우스오버, 탭 클릭 드
	//let isOver1 = false;
	//let isOver2 = false;

	let isOver1 = [false, false, false, false];
	let isOver2 = [false, false, false, false];

	//fadeOut()에 시간 설정
	function goHide(){
		for(var i = 1; i < 4; i++){
			if(!isOver1[i] && !isOver2[i]){	//상위, 하위 메뉴가 닿았을 때
			$(".gnb_depth2_" + (i+1)).fadeOut("fast");
			}
		}
	}

	$(".openAll1").mouseover(function(){
		//서브메뉴 나타나기 (header의 너비가 800 보다 클 때)
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_1").fadeIn("fast");
			isOver1[0] =  true;
	}).focus(function(){
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_1").fadeIn("fast");
			isOver1[0] =  true;
	}).mouseout(function(){
		// $(".gnb_depth2_1").fadeOut("fast");
		setTimeout(goHide, 100);  //0.1초
		isOver1[0] =  false;
	}).blur(function(){
		setTimeout(goHide, 100);
		isOver1[0] =  false;
	});
	
	$(".gnb_depth2_1").mouseover(function(){
		isOver2[0] =  true;
	}).focus(function(){
		isOver2[0] =  true;
	}).mouseout(function(){
		setTimeout(goHide, 1000);
		isOver2[0] =  false;
	}).blur(function(){
		setTimeout(goHide, 1000);
		isOver2[0] =  false;
	});

	$(".openAll2").mouseover(function(){
		//서브메뉴 나타나기 (header의 너비가 800 보다 클 때)
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_2").fadeIn("fast");
			isOver1[1] =  true;
	}).focus(function(){
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_2").fadeIn("fast");
			isOver1[1] =  true;
	}).mouseout(function(){
		//$(".gnb_depth2_2").fadeOut("fast");
		setTimeout(goHide, 100);
		isOver1[1] =  false;
	}).blur(function(){
		setTimeout(goHide, 100);
		isOver1[1] =  false;
	});

	$(".gnb_depth2_2").mouseover(function(){
		isOver2[1] =  true;
	}).focus(function(){
		isOver2[1] =  true;
	}).mouseout(function(){
		setTimeout(goHide, 1000);
		isOver2[1] =  false;
	}).blur(function(){
		setTimeout(goHide, 1000);
		isOver2[1] =  false;
	});

	$(".openAll3").mouseover(function(){
		//서브메뉴 나타나기 (header의 너비가 800 보다 클 때)
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_3").fadeIn("fast");
			isOver1[2] =  true;
	}).focus(function(){
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_3").fadeIn("fast");
			isOver1[2] =  true;
	}).mouseout(function(){
		//$(".gnb_depth2_3").fadeOut("fast");
		setTimeout(goHide, 100);
		isOver1[2] =  false;
	}).blur(function(){
		setTimeout(goHide, 100);
		isOver1[2] =  false;
	});

	$(".gnb_depth2_3").mouseover(function(){
		isOver2[2] =  true;
	}).focus(function(){
		isOver2[2] =  true;
	}).mouseout(function(){
		setTimeout(goHide, 1000);
		isOver2[2] =  false;
	}).blur(function(){
		setTimeout(goHide, 1000);
		isOver2[2] =  false;
	});

	$(".openAll4").mouseover(function(){
		//서브메뉴 나타나기 (header의 너비가 800 보다 클 때)
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_4").fadeIn("fast");
			isOver1[3] =  true;
	}).focus(function(){
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_4").fadeIn("fast");
			isOver1[3] =  true;
	}).mouseout(function(){
		//$(".gnb_depth2_4").fadeOut("fast");
		setTimeout(goHide, 100);
		isOver1[3] =  false;
	}).blur(function(){
		setTimeout(goHide, 100);
		isOver1[3] =  false;
	});

	$(".gnb_depth2_4").mouseover(function(){
		isOver2[3] =  true;
	}).focus(function(){
		isOver2[3] =  true;
	}).mouseout(function(){
		setTimeout(goHide, 1000);
		isOver2[3] =  false;
	}).blur(function(){
		setTimeout(goHide, 1000);
		isOver2[3] =  false;
	});



	//top을 클릭하면 header로 이동(라이브러리)
	$('a.s_point').smoothScroll();

	// 스크롤하여 내려와야 top버튼이 보이도록 함.
	if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	else $('.to_top').removeClass('hide');
	$(window).scroll( function() {
	  if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	  else $('.to_top').removeClass('hide');
	});

	
	//모바일 메뉴 띄움
	$('.openMOgnb').click(function(){
		$('header').addClass('on');
		$('header .header_cont').slideDown('fast');
		$('header .header_area .header_cont .closePop').show();			
		$("body").bind('touchmove', function(e){e.preventDefault()});
	});
	$('header .header_cont .closePop').click(function(){
        $('.header_cont').slideUp('fast');
        $('header').removeClass('on');
        $("body").unbind('touchmove');
	});




	$(document).ready(function(){
		// PC브라우저에서 좁혀서 메뉴 닫고 다시 넓힐 때 상단메뉴 노출되게.
		$(window).resize(function() {
			if ( parseInt($('header').css('width')) > 800 ) $('.header_cont').show();
		}); 
		
		$('.program_list li .btn_more a').click(function(){
			if ($(this).parent().parent().find('.subtxt').css('display') =='none'){
				$(this).parent().parent().find('.subtxt').css('display','inline')
				$(this).text('접기')
			} else {
				$(this).parent().parent().find('.subtxt').css('display','none')
				$(this).text('더보기')
			}
		});
	});
});