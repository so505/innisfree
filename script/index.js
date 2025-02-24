document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const changePoint = 808;  // 스크롤 임계점(px)

    window.addEventListener("scroll", function () {
        if (window.scrollY > changePoint) {
            // 스크롤 위치가 임계점을 넘으면:
            header.style.backgroundColor = "rgba(1, 58, 125, 1)";
            header.style.top = "-30px";  // 헤더의 위쪽 40px을 숨김 (아래쪽 40px만 보임)
        } else {
            // 임계점보다 낮으면 원래 상태로 복원
            header.style.backgroundColor = "transparent";
            header.style.top = "0";
        }
    });
});



// document.addEventListener("DOMContentLoaded", function () {
//     const topBtn = document.getElementById("topBtn");

//     // 스크롤 시 버튼 표시/숨기기
//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 1000) {  // 300px 이상 스크롤하면
//             topBtn.style.display = "block";
//         } else {
//             topBtn.style.display = "none";
//         }
//     });

//     // 버튼 클릭 시 페이지 상단으로 부드럽게 스크롤
//     topBtn.addEventListener("click", function () {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     });
// });

const swipeItem = new Swiper('.swiper', {
    slidesPerView: 1,       // 한 화면에 1개 표시
    slidesPerGroup: 1,      // 한 번에 1개씩 이동
    loop: true,             // 무한 반복
    speed: 1000,             // 전환 속도 (1초)
    navigation: {           // 네비게이션 버튼 활성화
        nextEl: ".next_btn",
        prevEl: ".prev_btn",
    },
    autoplay: {             // 자동 이동 (필요 시 사용)
        delay: 2000,       // 2초마다 이동
        disableOnInteraction: false
    },
});

// 카운트
document.addEventListener("DOMContentLoaded", function () {
    // .time_sale 안의 em 요소 선택
    const emElement = document.querySelector(".time_sale em");
    // 초기 카운트 값을 em 요소의 텍스트(28)에서 가져오기 (문자열을 정수로 변환)
    let countdown = parseInt(emElement.textContent, 10);

    // 1초마다 실행하는 인터벌 설정
    setInterval(function () {
      countdown--;  // 카운트 감소
      // 카운트가 0 미만이면 다시 60로 리셋 (무한 반복)
    if (countdown < 0) {
        countdown = 60;
    }
      // em 요소의 텍스트 업데이트
    emElement.textContent = countdown;
    }, 1000); // 1000ms = 1초
    });

    
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener("click", function(event) {
            const href = this.getAttribute("href"); // href 속성 가져오기
            
            if (!href || href === "#") {
                event.preventDefault(); // 빈 링크일 경우 기본 동작(상단 이동) 방지
            } //else {
                // event.preventDefault(); // 기본 동작 방지 (새 창에서 열리도록 설정)
                // window.open(href, '_blank'); // 새 창에서 열기
            //}
        });
    });