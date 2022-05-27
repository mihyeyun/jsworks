function showText(){
    //텍스트는 보이기
    let text = document.getElementById("detail");
    text.style.display= "block";

    //보기 버튼 숨기기
    let button = document.getElementById("show");
    button.style.display = "none";
    
}
function hideText(){
    //텍스트는 숨기기
    let text = document.getElementById("detail");
    text.style.display= "none";

    //보기 버튼 보이기
    let button = document.getElementById("show");
    button.style.display = "block";
}
