import enquire from './lib/enquire.js'

if ($('#index-main').length) {
    (function () {

            const menuItems             = document.querySelectorAll('.menu__item');
            const menuLogo              = menuItems[2];

            const $carouselItems        = $('.carousel__item');
            const $carouselArrows       = $('.carousel__arrow');
            const $menu                 = $('.menu__wrapper');
            const $toggleMenu           = $('.menu__toggle');
            const $toggleMenuIcon       = $('.toggle__icon');


            function showNextImage() {
                $($carouselItems[0]).toggleClass("carousel__item--shown").toggleClass("carousel__item--hidden");
                $($carouselItems[1]).toggleClass("carousel__item--shown").toggleClass("carousel__item--hidden");
            }

            function toggleAnimationMenu() {
                enquire.register("screen and (min-width: 1025px)", {
                    match: function () {
                        let scrollTop = $(window).scrollTop();
                        if (scrollTop > 0) {
                            $menu.removeClass("menu__wrapper--top").addClass("menu__wrapper--scroll");
                        }
                        else {
                            $menu.removeClass("menu__wrapper--scroll").addClass("menu__wrapper--top");
                        }
                    },
                    unmatch: function () {
                        $menu.removeClass("menu__wrapper--scroll").addClass("menu__wrapper--top");
                    }
                });
            }

            function moveLogoToggleMenu() {
                enquire.register("screen and (max-width: 767px)", {
                    match: function () {
                        $(menuLogo).prependTo($toggleMenu);
                    },
                    unmatch: function () {
                        $(menuItems[1]).after(menuLogo);
                    }
                });
            }

            function toggleMenu() {

            }


            function eventHandler() {
                $carouselArrows.on("click", showNextImage);
                $carouselItems.on("touchstart",showNextImage);
                $toggleMenuIcon.on("click",toggleMenu);
            }

            function init() {
                eventHandler();
                moveLogoToggleMenu();
                $(document).scroll(toggleAnimationMenu);
            }

            window.addEventListener("load", init);
    })();
}