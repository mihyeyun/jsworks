//인사말 바꾸기 - 2초 간격으로 설정
let message = ["안녕하세요", "감사합니다.", "오늘도 좋은 하루!"];
let msgIdx = 0;

myGreeting();   //호출

function myGreeting(){
    let greeting = document.getElementById("demo");
    greeting.innerHTML = message[msgIdx];
    msgIdx++;

    if(msgIdx == message.length){
        msgIdx = 0;
    }
    
    setTimeout(myGreeting, 2000); //콜백함수 - 함수의 매개변수가 함수인 유형
}

