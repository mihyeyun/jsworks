//아이템 목록
let itemList = []; //빈 배열 생성

let addBtn = document.getElementById("add");

//버튼 클릭 이벤트
//addBtn.onclick = addList;
addBtn.addEventListener("click", addList);

//아이템 추가 함수
function addList(){
    let item = document.getElementById("item").value;
    itemList.push(item);  //item 1개 추가
    document.getElementById("item").value = ""; //아이템초기화
    document.getElementById("item").focus();    //커서 위치
    

    console.log(itemList);
    
    showList(); //목록 조회 함수
}

function showList(){
    //목록으로 표시 (ul~li태그 사용)
    let list = "<ul>";
    
    for(var i = 0; i < itemList.length; i++){
      //document.getElementById("itemList").innerHTML = itemList[i];
      list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>"
    document.getElementById("itemList").innerHTML = list;   //아이템 목록 출력

    //아이템 삭제
    let removeList = document.querySelectorAll(".close");

    //remove() 호출
    for(var i = 0; i < removeList.length; i++){
        removeList[i].addEventListener("click", remove);
    }
}

function remove(){
    console.log(this); //클릭한 대상
    //인덱스(속성) 가져오기
    let id = this.getAttribute("id");
    itemList.splice(id, 1); //특정 위치에서 삭제 
    
    showList();
}