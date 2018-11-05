(function () {
    if ($('#index-main').length) {

        const carouselItems = document.querySelectorAll('.carousel__item');
        const carouselArrows = document.querySelectorAll('.carousel__arrow');
        const $menuBar = $('.menu__wrapper');


        function showNextImage() {
            $(carouselItems[0]).toggleClass("carousel__item--shown").toggleClass("carousel__item--hidden");
            $(carouselItems[1]).toggleClass("carousel__item--shown").toggleClass("carousel__item--hidden");
        }



        function eventHandler() {
            carouselArrows[0].addEventListener("click", showNextImage);
            carouselArrows[1].addEventListener("click", showNextImage);
            carouselItems[0].addEventListener("touchstart",showNextImage);
            carouselItems[1].addEventListener("touchstart",showNextImage);
        }

        function init() {
            eventHandler();
        }

        window.addEventListener("load", init);
        $(document).scroll(function () {
            const scrollTop = $(window).scrollTop();
            if(scrollTop>0){
                $menuBar.removeClass("menu__wrapper--top").addClass("menu__wrapper--scroll");
            }
            else{
                $menuBar.removeClass("menu__wrapper--scroll").addClass("menu__wrapper--top");
            }
        });
    }
})();