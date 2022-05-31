//내장 함수
//인코딩, 디코딩 함수
//인코딩 (한글 > 16진수 유니코드)
var encodeStr="자바스크립트";
//한글 에러 발생하므로 콛화함.
console.log(encodeURIComponent(encodeStr));

//디코딩(16진수 유니코드 > 한글)
var decodestr = encodeURIComponent(encodeStr);
console.log(decodeURIComponent(decodestr));

//숫자, 유한무한 값 판별
//NaN = not a number
var num1 = "숫자";
if (!isNaN(num1)){  //!ture = palse

}else console.log("숫자아님");


// 자바스크립트 코드 변경 함수
let str1 = "var num7 = 10";
let str2 = "var num8 = 20";

//자바스크립트 코드로 변경 - eval()
eval(str1);
var num7 = 10;
eval(str2);
var num8 = 20;
console.log(num7 + num8);

console.log(eval("2*30"));
console.log(eval("2/30"));