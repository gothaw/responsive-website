import enquire from '../lib/enquire.js'

(function () {
    // Variables
    const menuItems             = document.querySelectorAll('.menu__item');
    const menuLogo              = document.getElementById('logo');
    // jQuery variables
    const $carouselItems        = $('.carousel__item');
    const $carouselArrows       = $('.carousel__arrow');
    const $menu                 = $('.menu');
    const $menuBar              = $('.menu__wrapper');
    const $menuItem             = $('.menu__item').not('.menu__home');
    const $toggleMenu           = $('.menu__toggle');
    const $toggleMenuIcon       = $('.toggle__icon');
    const $toggleMenuIconImg    = $('.toggle__img');

    let toggleMenuActive        = false;
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
     *          If width is greater than 767px, logo is appended after second or third menu link.
     */
    function moveLogoToggleMenu() {
        enquire.register("screen and (max-width: 767px)", {
            match: function () {
                $(menuLogo).prependTo($toggleMenu);
            },
            unmatch: function () {
                if ($('#home').length){
                    $(menuItems[1]).after(menuLogo);
                }
                else {
                    $(menuItems[2]).after(menuLogo);
                }
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
                $toggleMenuIconImg.attr("src","../../../dist/img/icons/toggle-icon-32-32.png");
                toggleMenuActive=false;
            },
            unmatch: function () {
                $menu.show();
            }
        });
    }

    /**
     * @name    toggleMenu
     * @desc    Slide toggle animation for hamburger menu. Changes src attribute for menu icon image when icon is clicked.
     */
    function toggleMenu() {
        $menu.slideToggle();
        if(toggleMenuActive){
            $toggleMenuIconImg.attr("src","../../../dist/img/icons/toggle-icon.png");
            toggleMenuActive=false;
        }
        else {
            $toggleMenuIconImg.attr("src","../../../dist/img/icons/toggle-icon-red.png");
            toggleMenuActive=true;
        }
    }

    /**
     * @name    menuScroll
     * @param   e - menu item click event
     * @desc    Scrolls down to relevant section of the page after clicking on a menu item.
     */
    function menuScroll(e) {
        let offset=0;
        e.preventDefault();
        const menuItemHref = $(e.target).attr("href");
        enquire.register("screen and (min-width: 1025px)", {
            match: function () {
                offset=100;
                return offset;
            },
            unmatch: function () {
                offset=0;
                return offset;
            }
        });
        $("html, body").animate(
            {
                "scrollTop" : $(menuItemHref).offset().top - offset
            },
            1000
        );
    }

    /**
     * @name    homeScroll
     * @desc    Scrolls to the top of the page when logo is clicked (works only on home page).
     */
    function homeScroll() {
        $("html, body").animate(
            {
                "scrollTop" : 0
            },
            1000
        );
    }

    function eventHandler() {
        $carouselArrows.on("click", showNextImage);
        $carouselItems.on("touchmove",showNextImage);
        $toggleMenuIcon.on("click",toggleMenu);
        $menuItem.on("click",function (e) {
          menuScroll(e)
        });
        if($('#home').length){
            $(menuLogo).on("click",homeScroll);
        }
    }

    function init() {
        eventHandler();
        moveLogoToggleMenu();
        registerMenu();
        $(document).scroll(toggleAnimationMenu);
    }
    window.addEventListener("load", init);
})();