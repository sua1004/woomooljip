//menu.js

$(document).ready(function(){

    //메인 슬라이드
    var mainIndex = 0;
    var mainCount = $('.main-img li').length; // 4 (더미 포함)
    var mainTimer;

    function mainSlide(){
        mainTimer = setInterval(function(){
            mainIndex++;

            $('.main-img').animate({
                left: (-100 * mainIndex) + '%'
            }, 1000, function(){

                if(mainIndex === mainCount - 1){
                    mainIndex = 0;
                    $('.main-img').css({ left: 0 });
                }

                $('.main-pager li').removeClass('active');
                $('.main-pager li').eq(mainIndex).addClass('active');
            });

        }, 3000);
    }
    mainSlide();


// 육수 슬라이드

var slideWidth = 576; // 보여지는 슬라이드 너비값
var slideCount = 3; // 페이지 수
var idx = 0; // 인덱스 번호를 담을 변수

// 초기 세팅
$('#yuksu-img li:last').prependTo('#yuksu-img');
$('#yuksu-img').css('margin-left', -slideWidth);

// 다음 버튼
$('.yuksu-btn .next').click(function () {

    $('#yuksu-img').animate({
        marginLeft: '-=' + slideWidth
    }, 600, function () {

        $('#yuksu-img li:first').appendTo('#yuksu-img');
        $('#yuksu-img').css('margin-left', -slideWidth);

        idx++;
        if (idx >= slideCount) idx = 0;

        page();
    });
});

// 이전 버튼
$('.yuksu-btn .prev').click(function(){

    $('#yuksu-img').animate({
        marginLeft: '+=' + slideWidth
    }, 600, function(){

        $('#yuksu-img li:last').prependTo('#yuksu-img');
        $('#yuksu-img').css('margin-left', -slideWidth);

        idx--;
        if (idx < 0) idx = slideCount - 1;

        page();
    });
});

// 페이저 이동
function page(){
    $('#yuksu-pager li').eq(idx).addClass('active').siblings().removeClass('active');
}

// 솥밥 슬라이드
// 솥밥 슬라이드

var sotbapSlideWidth = 576; // 보여지는 슬라이드 너비
var sotbapSlideCount = 2;  // 페이지 수 (이미지 개수)
var sotbapIdx = 0;         // 인덱스

// 초기 세팅
$('#sotbap-img li:last').prependTo('#sotbap-img');
$('#sotbap-img').css('margin-left', -sotbapSlideWidth);

// 다음 버튼
$('.sotbap-btn .next').click(function () {

    $('#sotbap-img').animate({
        marginLeft: '-=' + sotbapSlideWidth
    }, 600, function () {

        $('#sotbap-img li:first').appendTo('#sotbap-img');
        $('#sotbap-img').css('margin-left', -sotbapSlideWidth);

        sotbapIdx++;
        if (sotbapIdx >= sotbapSlideCount) sotbapIdx = 0;

        sotbapPage();
    });
});

// 이전 버튼
$('.sotbap-btn .prev').click(function () {

    $('#sotbap-img').animate({
        marginLeft: '+=' + sotbapSlideWidth
    }, 600, function () {

        $('#sotbap-img li:last').prependTo('#sotbap-img');
        $('#sotbap-img').css('margin-left', -sotbapSlideWidth);

        sotbapIdx--;
        if (sotbapIdx < 0) sotbapIdx = sotbapSlideCount - 1;

        sotbapPage();
    });
});

// 페이저 이동
function sotbapPage() {
    $('#sotbap-pager li').eq(sotbapIdx).addClass('active').siblings().removeClass('active');
}

   /*  // 육수 슬라이드
    var yuksuIndex = 0;
    var yuksuCount = $('.yuksu-img li').length; // 4 (더미 포함)
    var yuksuTimer;

    function yuksuSlide(){
        yuksuTimer = setInterval(function(){
            yuksuIndex++;

            $('.yuksu-img').css({
                transform: 'translateX(' + (-25 * yuksuIndex) + '%)'
            });

            if(yuksuIndex === yuksuCount - 1){
                setTimeout(function(){
                    yuksuIndex = 0;
                    $('.yuksu-img').css({
                        transition: 'none',
                        transform: 'translateX(0)'
                    });
                }, 600);

                setTimeout(function(){
                    $('.yuksu-img').css({
                        transition: 'transform 0.6s ease'
                    });
                }, 650);
            }

            $('.yuksu-pager li').removeClass('active');
            $('.yuksu-pager li').eq(yuksuIndex).addClass('active');

        }, 3000);
    }
    yuksuSlide();


    // 솥밥 슬라이드
    var sotbapIndex = 0;
    var sotbapCount = $('.sotbap-img li').length; // 3 (더미 포함)
    var sotbapTimer;

    function sotbapSlide(){
        sotbapTimer = setInterval(function(){
            sotbapIndex++;

            $('.sotbap-img').css({
                transform: 'translateX(' + (-33.3334 * sotbapIndex) + '%)'
            });

            if(sotbapIndex === sotbapCount - 1){
                setTimeout(function(){
                    sotbapIndex = 0;
                    $('.sotbap-img').css({
                        transition: 'none',
                        transform: 'translateX(0)'
                    });
                }, 600);

                setTimeout(function(){
                    $('.sotbap-img').css({
                        transition: 'transform 0.6s ease'
                    });
                }, 650);
            }

            $('.sotbap-pager li').removeClass('active');
            $('.sotbap-pager li').eq(sotbapIndex).addClass('active');

        }, 3000);
    }
    sotbapSlide(); */

});