import enquire from '../lib/enquire.js'

(function () {
    // Variables
    const menuItems             = document.querySelectorAll('.menu__item');
    const menuLogo              = menuItems[2];
    // jQuery variables
    const $carouselItems        = $('.carousel__item');
    const $carouselArrows       = $('.carousel__arrow');
    const $menu                 = $('.menu');
    const $menuBar              = $('.menu__wrapper');
    const $menuItem             = $('.menu__item');
    const $toggleMenu           = $('.menu__toggle');
    const $toggleMenuIcon       = $('.toggle__icon');
    /**
     * @name    showNextImage
     * @desc    Function toggles between carousel images in header.
     */
    function showNextImage() {
        $carouselItems.toggleClass("carousel__item--shown").toggleClass("carousel__item--hidden");
    }
    /**
     * @name    toggleAnimationMenu
     * @desc    Function adds sticky behavior for the menu bar is width is greater than 1025px.
     */
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
    /**
     * @name    moveLogoToggleMenu
     * @desc    Function prepends logo image before menu links if width is less than 767px.
     *          If width is greater than 767px, logo is appended after second menu link.
     */
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
    /**
     * @name    registerMenu
     * @desc    Function hides the menu bar links when width is less than 767px and shows when it is greater than 767px.
     *          Uses enquire.js module.
     */
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
    /**
     * @name    toggleMenu
     * @desc    Slide toggle animation for hamburger menu.
     */
    function toggleMenu() {
        $menu.slideToggle();
    }

    /**
     * @name    menuScroll
     * @desc    scrolls down to relevant section of the page after clicking a menu item
     */
    function menuScroll(e) {
        e.preventDefault();
        const targetDiv = $(e.target).attr("href");
        console.log(targetDiv);
        $("html, body").animate(
            {
                "scrollTop" : $(targetDiv).offset().top
            }
        );
    }

    function eventHandler() {
        $carouselArrows.on("click", showNextImage);
        $carouselItems.on("touchmove",showNextImage);
        $toggleMenuIcon.on("click",toggleMenu);
        $menuItem.on("click",function (e) {
            enquire.register("screen and (max-width: 767px)", {
                match: menuScroll(e),
                unmatch: menuScroll(e),
            });
        });
    }

    function init() {
        eventHandler();
        moveLogoToggleMenu();
        registerMenu();
        $(document).scroll(toggleAnimationMenu);
    }
    window.addEventListener("load", init);
})();