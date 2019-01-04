(function () {
    if ($('#about').length) {
        // jQuery variables
        const $valueFront           = $('.card__front');
        const $valueBack            = $('.card__back');
        const $valueWrapper         = $('.values__card');


        /**
         * @name    showValueDescription
         * @desc    Shows value description by adding --flipped class and closes all other descriptions that were clicked previously.
         * @param   e - clicked value div
         */
        function showValueDescription(e) {
            const target = $(e.target).closest($valueWrapper);
            target.addClass("values__card--flipped");
            setTimeout(()=>{$valueWrapper.not(target).removeClass("values__card--flipped");}, 100);
        }

        /**
         * @name    hideValueDescription
         * @desc    Hides value description by removing --flipped class.
         * @param   e - clicked value div
         */
        function hideValueDescription(e) {
            const target = $(e.target).closest($valueWrapper);
            target.removeClass("values__card--flipped");
        }

        function eventHandler() {
            $valueFront.on("click",function (e) {
                showValueDescription(e);
            });
            $valueBack.on("click",function (e) {
                hideValueDescription(e);
            });
        }

        function init() {
            eventHandler();
        }

        window.addEventListener("load", init);
    }
})();
