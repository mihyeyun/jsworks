$(document).ready(function(){
    $("tr:even").css("background", "red");
    $("tr:odd").css("background", "orange");
    $("td:first").css("background", "yellow");
    $("td:last").css("background", "green");
    $(":header").css("background", "blue");
    $("li:eq(0)").css("background", "navy");
    $("li:gt(0)").css("background", "purple");
    $("li:lt(3)").css("border", "4px solid gray");
    $(":root").css("background", "lightgray");
    //실행 함수 (매개 변수가 없는 함수)
    //(function upDown(){
    //    $("h2").slideToggle(2000, upDown); //콜백함수, 
    //})();

    upDown();
    function upDown(){
        $("h2").slideToggle(2000, upDown);
    }
    //움직이는 요소 선택
        $(":animated").css("border", "4px solid darkred")

})