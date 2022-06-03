let check = document.querySelector("#shippingInfo");
check.addEventListener("click", checkbox);

// let billingName = document.querySelector("#billingName");
// let billingTel = document.querySelector("#billingTel");
// let billingAddr = document.querySelector("#billingAddr");

// let shippingName = document.querySelector("#shippingName");
// let shippingTel = document.querySelector("#shippingTel");
// let shippingAddr = document.querySelector("#shippingAddr");

function checkbox(){
    //name 속성으로 처리
    if(check.checked==true){
        shippingName.value = billingName.value;
        shippingTel.value = billingTel.value;
        shippingAddr.value = billingAddr.value;
    }else{
        shippingName.value = "";
        shippingTel.value = "";
        shippingAddr.value = "";
    }
}