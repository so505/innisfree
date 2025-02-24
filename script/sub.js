//====주문금액+주문수량 js
//초기값: 주문수량(0) 주문금액 (0원) 수량1개당 39,900원
let price=30000; //주문금액
let number=0; //주문수량
const product_num=document.querySelector('#product_num');//수량표시 DOM
const total_num=document.querySelector('.total_num');//수량표시 DOM
const plusBtn=document.querySelector('#plus');//수량증가버튼DOM
const minusBtn=document.querySelector('#minus');//수량감소 버튼 DOM
const orderPrice=document.querySelector('.sum_price');//주문금액 담는그릇
const finaPrice=document.querySelector('.total_price');//주문금액 담는그릇

totalPrice=0; //최종 가격 저장 변수

console.log(orderPrice)

product_num.value=number //input이므로 속성value써야함.

//1. +버튼 클릭시
plusBtn.addEventListener('click',()=>{
    //2. 수량1 증가(최종 수량 1)
    number++; //1증가하는 증감연산자
    product_num.value=number;
    total_num.innerText=number.toLocaleString('ko-kr') + "개";
    //3. 수량에 따라 주문금액 증가 39900*1
    // orderPrice.innerText=price*number;  주문금액*주문수량
    totalPrice=price*number;

    orderPrice.innerText=totalPrice.toLocaleString('ko-kr');
    finaPrice.innerText=totalPrice.toLocaleString('ko-kr');
    
})

//4. 수량1 증가(최종 수량 2)
//4. 수량에 따라 주문금액 증가 39900*2
//6 ....반복

//1. -버튼(마이너스) 클릭시 
minusBtn.addEventListener('click',()=>{
    number--; //2. 수량 1감소
    if (number<0){
        number = 0;
    }
    product_num.value=number; //
    totalPrice=price*number; //3. 수량에 따라 주문금액 감소 39900*수량
    total_num.innerText=number.toLocaleString('ko-kr') + "개";

    orderPrice.innerText=totalPrice.toLocaleString('ko-kr');
    finaPrice.innerText=totalPrice.toLocaleString('ko-kr');
})

$('#cart_btn').click(function(){
    $("#cart_btn").css({"background-color":"#12B560","color":"#fff"});
    $("#buy_btn").css({"background-color":"#fff","color":"#000"});
});

$("#buy_btn").click(function(){
    $("#buy_btn").css({"background-color":"#12B560","color":"#fff"});
    $("#cart_btn").css({"background-color":"#fff","color":"#000"});
});

$("li").click(function(){
    $("li").removeClass("active"); 
    $(this).addClass("active"); 
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener("click", function(event) {
        const href = this.getAttribute("href"); // href 속성 가져오기
        
        if (!href || href === "#") {
            event.preventDefault(); // 빈 링크일 경우 기본 동작(상단 이동) 방지
        // } else {
        //     event.preventDefault(); // 기본 동작 방지 (새 창에서 열리도록 설정)
        //     window.open(href, '_blank'); // 새 창에서 열기
        }
    });
});