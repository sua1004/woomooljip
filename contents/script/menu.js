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
    sotbapSlide();

});