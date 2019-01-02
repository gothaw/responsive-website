(function () {
    if ($('#about').length) {
        // jQuery variables
        const $valueFront           = $('.values__front');
        const $valueBack            = $('.values__back');
        const $valueWrapper         = $('.values__wrapper');


        /**
         * @name    showValueDescription
         * @desc
         * @param   e
         */
        function showValueDescription(e) {
            const targetValue = $(e.target).closest($valueWrapper);
            targetValue.addClass("flip");
        }

        /**
         * @name    hideValueDescription
         * @desc
         * @param   e
         */
        function hideValueDescription(e) {
            const targetValue = $(e.target).closest($valueWrapper);
            targetValue.removeClass("flip");
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
