//이미지 슬라이드 구현
let num = 0;	//이미지, 버튼 번호
let slidingAuto = null; //슬라이드 작동 (객체이므로 null)

//일정시간 간격으로 작동 (호출)
slidingAuto = setTimeout("play('right')", 3000); 

function play(direct){	//방향 매개 변수 설정
	if(direct =="right"){
		num++;
		if(num > 2)
			num = 0;
	}else if(direct =="left"){
		num--;
		if(num < 0)
			num = 2;
	}else{
		num = direct;
	}

	//이미지 애니메이션

	if(num == 0){
		$(".viewImgList li.imglist1").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist2").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist0").animate({"opacity" : 1}, 1000);
	}else if(num == 1){
		$(".viewImgList li.imglist0").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist2").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist1").animate({"opacity" : 1}, 1000);
	}else if(num == 2){
		$(".viewImgList li.imglist0").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist1").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist2").animate({"opacity" : 1}, 1000);
	};

	//버튼이 on -> off로 이동, 계속 전체적으로 순환
	$(".rollingbtn").find("li.seq a").each(function(){
		$(".rollingbtn li.seq a img").attr("src",
			$(".rollingbtn li.seq a img").attr("src").replace("_on.png", "_off.png"));
	});

	//하나의 버튼이 on -> off 변경
	$(".rollingbtn li.butt" + num + " a img").attr('src', 
			$(".rollingbtn li.butt" + num + " a img").attr("src").replace("_off.png", "_on.png"));

	slidingAuto = setTimeout("play('right')", 3000); 	//콜백

};


//재생과 일시정지 구현
$(function(){
	//정지 버튼 클릭 시 
	$(".rollstop a").click(function(){
		$(this).parent().hide();	//정지 버튼 숨기기
		$(".rollplay").css("display", "inline-block");	//재생버튼 보임
		if(slidingAuto)	//슬라이드가 작동중이면
			clearTimeout(slidingAuto);	//정지시킴
	});

	//재생 버튼 클릭 시
	$(".rollplay a").click(function(){
		$(this).parent().hide();	//재생 버튼 숨기기
		$(".rollstop").css("display", "inline-block");	//정지 버튼 보이기
		play("right");
	});
});