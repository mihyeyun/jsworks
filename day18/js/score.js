//시험 성적 관리

window.onload = function(){
    
    //5명의 국어, 수학 성적
    let score = [
        [80, 70],
        [90, 60],
        [70, 70],
        [100, 90],
        [83, 35],
    ];

    let korSum = 0, mathSum = 0;
    let korAvg = 0.0, mathAvg = 0.0;

    //과목별 점수 합계
    for(let i = 0; i < score.length; i++){
        korSum += score[i][0]; //국어 누적
        mathSum += score[i][1]; //수학 누적
    }

    //과목별 점수 평균
    korAvg = korSum / score.length;
    mathAvg = mathSum / score.length;

    document.write("국어 합계 : " + korSum + "점" + "<br>");
    document.write("수학 합계 : " + mathSum + "점" + "<br>");
    document.write("국어 평균 : " + korAvg + "점" + "<br>");
    document.write("수학 평균 : " + mathAvg + "점" + "<br>");




}