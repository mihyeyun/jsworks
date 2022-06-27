//아코디언 기능

$(document).ready(function(){
    $(".accordion_box ol li").click(function(){
        $(".accordion_box ol li").removeClass("on"); //접기
        $(this).addClass("on"); //펼치기
    });
});