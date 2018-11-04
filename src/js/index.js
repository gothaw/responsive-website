(function () {
    if ($('#index-main').length) {

        const carouselItems = document.querySelectorAll('.carousel__item');
        const carouselArrows = document.querySelectorAll('.carousel__arrow');

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
    }
})();