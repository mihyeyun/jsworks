
// 구속을 변환하는 프로그램
const RATE_KPH_MPH = 1.609; //변환율
let mph, kph;

//입력 - 문자가 입력되므로 Number()로 변환
kph = Number(prompt("당신의 구속을 입력하세요(km/h) : ", "100"));

//연산
mph = kph / RATE_KPH_MPH;

//
document.write(kph+ "km는 " + mph.toFixed(2) + "mile입니다.");
//mph.toFixed(2) - 소수 둘째자리 설정
