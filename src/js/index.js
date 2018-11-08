import enquire from './lib/enquire.js'

if ($('#index-main').length) {
    (function () {

            const carouselItems = document.querySelectorAll('.carousel__item');
            const carouselArrows = document.querySelectorAll('.carousel__arrow');
            const menuItems = document.querySelectorAll('.menu__item');
            const $menuBar = $('.menu__wrapper');
            const menuLogo = menuItems[2];

            console.log(menuLogo);
            console.log(menuItems);

            function showNextImage() {
                $(carouselItems[0]).toggleClass("carousel__item--shown").toggleClass("carousel__item--hidden");
                $(carouselItems[1]).toggleClass("carousel__item--shown").toggleClass("carousel__item--hidden");
            }

            function toggleNavBarAnimation() {
                enquire.register("screen and (min-width: 1025px)", {
                    match: function () {
                        let scrollTop = $(window).scrollTop();
                        if (scrollTop > 0) {
                            $menuBar.removeClass("menu__wrapper--top").addClass("menu__wrapper--scroll");
                        }
                        else {
                            $menuBar.removeClass("menu__wrapper--scroll").addClass("menu__wrapper--top");
                        }
                    },
                    unmatch: function () {
                        $menuBar.removeClass("menu__wrapper--scroll").addClass("menu__wrapper--top");
                    }
                });
            }

            function toggleNavBar() {
                enquire.register("screen and (max-width: 767px)", {
                    match: function () {
                        $(menuLogo).prependTo($menuBar);
                    },
                    unmatch: function () {
                        $(menuItems[1]).after(menuLogo);
                    }
                });
            }

            function eventHandler() {
                carouselArrows[0].addEventListener("click", showNextImage);
                carouselArrows[1].addEventListener("click", showNextImage);
                carouselItems[0].addEventListener("touchstart",showNextImage);
                carouselItems[1].addEventListener("touchstart",showNextImage);
            }

            function init() {
                eventHandler();
                $(document).scroll(toggleNavBarAnimation);
                toggleNavBar()
            }

            window.addEventListener("load", init);
    })();
}