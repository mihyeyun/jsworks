/* 놀이공원 입장료 계산 프로그램
취학전아동 - 1000원
초등학생 - 2000원
중.고등학생 -2500원
일반인으로 3000원 구분(나이)*/

//입력
var age= 1;
var charge = 0;

//연산 및 출력
if(age < 8){
    document.write("취학전 아동입니다.<br>");
    charge = 1000;
}else if(age >= 8 && age < 14){
    document.write("초등학생 입니다.<br>");
    charge = 2000;
} 
else if(age >= 14 && age < 20){
    document.write("중고등학생 입니다.<br>");
    charge = 2500;
} 
else{
    document.write("일반인입니다.<br>")
    charge=3000;
}
document.write("입장료는 <span class='accent'>" + charge + "</span>원 입니다.");