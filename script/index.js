//index.js

$(document).ready(function () {

    //.main-info 페이드 효과
    $('.main-info').fadeIn(3000);

    //menu 슬라이드 초기 설정

    // pager 초기설정
    $('.menu-pager li').first().addClass('active');

    // 자동 실행
    var menuAuto = setInterval(menuLeftMove, 3000);

    // 마우스 오버 시 멈춤 / 아웃 시 재시작
    $('.menu .slide-box').mouseenter(function () {
        clearInterval(menuAuto);
    }).mouseleave(function () {
        menuAuto = setInterval(menuLeftMove, 3000);
    });

    
    //store 슬라이드 초기 설정

    $('.store-pager li').first().addClass('active');

    var storeAuto = setInterval(storeLeftMove, 3000);

    $('.store .slide-box').mouseenter(function () {
        clearInterval(storeAuto);
    }).mouseleave(function () {
        storeAuto = setInterval(storeLeftMove, 3000);
    });

});


//menu 슬라이드

var menuPage = 0; // 현재 메뉴 슬라이드 인덱스

function menuLeftMove() {

    menuPage++;

    // 마지막(복제) 슬라이드 도착 시 리셋
    if (menuPage === 4) {
        $('.menu-img').css('left', 0);
        menuPage = 1;
    }

    // 슬라이드 이동
    $('.menu-img').animate({
        left: -(700 * menuPage)
    }, 800);

    // 메뉴명 / 페이저 초기화
    $('.menu-name-list li').removeClass('active');
    $('.menu-pager li').removeClass('active');

    // 활성화 인덱스 계산
    var activeIndex = (menuPage === 3) ? 0 : menuPage;

    $('.menu-name-list li').eq(activeIndex).addClass('active');
    $('.menu-pager li').eq(activeIndex).addClass('active');
}


//store 슬라이드

var storePage = 0; // 현재 스토어 슬라이드 인덱스

function storeLeftMove() {

    storePage++;

    if (storePage === 4) {
        $('.store-img').css('left', 0);
        storePage = 1;
    }

    $('.store-img').animate({
        left: -(1280 * storePage)
    }, 800);

    $('.store-name-list li').removeClass('active');
    $('.store-pager li').removeClass('active');

    var activeIndex = (storePage === 3) ? 0 : storePage;

    $('.store-name-list li').eq(activeIndex).addClass('active');
    $('.store-pager li').eq(activeIndex).addClass('active');
}

// 휠이벤트

/////// 전역변수 설정 ///////////////////////////////////////////////
var pageCount = 0;          // 현재 페이지 인덱스
var total;                  // 전체 페이지 수
var stat = 0;               // 스크롤 잠금 상태 (0: 허용, 1: 잠금)
////////////////////////////////////////////////////////////////////

$(document).ready(function () {

    // 전체 페이지 갯수 읽어오기
    total = $('.page').length;
    console.log('전체 페이지 갯수: ' + total); //4+1

    // 휠 이벤트
    $(document).on('mousewheel DOMMouseScroll', function (e) {

        // 1. 스크롤 잠금
        if (stat === 1) {
            return;
        }
        stat = 1;

        //2. 표준 방식으로 변경
        const evt = e.originalEvent;
        console.log(evt);

        //3. wheelDelta(또는 detail) 값 구하기
        var delta = evt.detail ? evt.detail : evt.wheelDelta;


        //4. 파이아폭스 처리
        if(/Firefox/i.test(navigator.userAgent)){
            delta = -evt.detail;
            console.log('파이어폭스 detail: ' + delta);
        }


        //5. 마우스 휠로 페이지 이동
        if (delta > 0){
            //양수, 휠 위로, 이전 페이지 
            pageCount--;
            if (pageCount === -1) pageCount=0;

        } else {
            //음수, 휠 아래로, 다음 페이지
            pageCount++;
            if (pageCount === total) pageCount = total-1;
        }

        console.log('현재 페이지:', pageCount);

        //6. 이동할 위치 계산
        var moveTop = $('.page').eq(pageCount).offset().top;

        //7.  스크롤 애니메이션 실행
        $('html, body').animate({
            scrollTop: moveTop
        }, 800, function () {
            stat = 0; // 스크롤 잠금 해제
        });

    });

});