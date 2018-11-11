import enquire from './lib/enquire.js'

if ($('#index-main').length) {
    (function () {

            const menuItems             = document.querySelectorAll('.menu__item');
            const menuLogo              = menuItems[2];

            const $carouselItems        = $('.carousel__item');
            const $carouselArrows       = $('.carousel__arrow');
            const $menu                 = $('.menu');
            const $menuBar              = $('.menu__wrapper');
            const $toggleMenu           = $('.menu__toggle');
            const $toggleMenuIcon       = $('.toggle__icon');


            function showNextImage() {
                $carouselItems.toggleClass("carousel__item--shown").toggleClass("carousel__item--hidden");
            }

            function toggleAnimationMenu() {
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
                $menu.slideToggle();
            }

            function registerMenu() {
                enquire.register("screen and (max-width: 767px)", {
                    match: function () {
                        $menu.hide();
                    },
                    unmatch: function () {
                        $menu.show();
                    }
                });
            }

            function eventHandler() {
                $carouselArrows.on("click", showNextImage);
                $carouselItems.on("swipe",showNextImage);
                $toggleMenuIcon.on("click",toggleMenu);
            }

            function init() {
                eventHandler();
                moveLogoToggleMenu();
                registerMenu();
                $(document).scroll(toggleAnimationMenu);
            }

            window.addEventListener("load", init);
    })();
}