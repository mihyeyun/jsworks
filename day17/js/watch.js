//디지털 시계 구현
/*setInterval(watch, 1000);

function watch(){
    const date = new Date();
    let now = date.toLocaleTimeString(); //시간 표시
    document.getElementById("display").innerHTML = now;
}*/

//실행 함수
let timer = setInterval(function(){
    const date = new Date();
    let now = date.toLocaleTimeString();
    document.getElementById("display").innerHTML = now;
}, 1000);


//시간 정지
function myStop(){
    clearInterval(timer);
}