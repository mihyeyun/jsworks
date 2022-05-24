//자리 배치도
let customNum = Number(prompt("입장객은 몇명입니까?")); //고객
let colNum = Number(prompt("한 줄에 몇 명 앉나요?"));   //열 수
let rowNum = 0;     //행(줄) 수

//입장객 수에 따른 행과 열 계산
//조건 - 나누어떨어질 때, 나머지가 있을 때
if(customNum % colNum == 0){
    rowNum = customNum / colNum;
}else{
    rowNum = parseInt(customNum / colNum) + 1;
    //나누면 실수이므로 정수로 형변환
    //1줄이 더 필요함
}

// document.write(rowNum);
document.write("<table>")
for(let i = 0; i < rowNum; i++){
    //god
    document.write("<tr>")
    for(let j = 1; j <= colNum; j++){
        let seatNum= i * colNum + j;
        if(customNum < seatNum){
            break;
        }
        document.write("<td>좌석 " + seatNum + "</td>"); //열
    }
    document.write("</tr>")
}
document.write("</table>")