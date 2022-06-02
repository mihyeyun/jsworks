window.onload = function(){
//일정 시간 간격으로 이미지 바꾸기
let picture = ["./images/coffee-blue.jpg", "./images/coffee-gray.jpg", "./images/coffee-pink.jpg"];
let picIdx =0;

showSlide();

function showSlide(){
   let img = document.getElementById("pic");
   img.src= picture[picIdx];
   picIdx++;    //다음 인덱스로 증가
   if(picIdx == picture.length){
       picIdx = 0;
   }

   setTimeout(showSlide, 2000) //콜백
}
}