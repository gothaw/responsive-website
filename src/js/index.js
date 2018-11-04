(function () {
    if ($('#index-main').length) {
    const carouselItems = $('.carousel__item');
    const carouselArrows = $('.carousel__arrow');

    let indexCarouselImage = 0;


    function showNextImage() {
        if(indexCarouselImage===0){
            //$(carouselItems[0]).fadeIn();
            //$(carouselItems[1]).fadeOut();
            indexCarouselImage=1;
        }
        else if(indexCarouselImage===1){
            //$(carouselItems[1]).fadeIn();
            //$(carouselItems[0]).fadeOut();
            indexCarouselImage=0;
        }
        (carouselItems).toggleClass("carousel__item--shown").toggleClass("carousel__item--hidden");
    }


    function eventHandler() {
        carouselArrows[0].addEventListener("click", showNextImage);
        carouselArrows[1].addEventListener("click", showNextImage);
    }

    function init() {
        eventHandler();
    }

    window.addEventListener("load", init);
}
})();