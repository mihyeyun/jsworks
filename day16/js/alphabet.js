//대문자 26자를 배열에 저장
//배열에 26개의 공간을 생성ㄴ
let alphabet = new Array(26);
let ch = 'A'; //코드값 65
ch = ch.charCodeAt(0);

//console.log(ch); //'A'
//console.log(ch.charCodeAt(0))

//저장
for(var i = 0; i < alphabet.length; i++){
    alphabet[i] = ch; //0번 인덱스에 65가 저장됨
    ch++;
}

//출력
for(var i = 0; i < alphabet.length; i++){
    console.log(alphabet[i] + ", " + String.fromCharCode(alphabet[i]));
}