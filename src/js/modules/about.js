(function () {
    if ($('#about').length) {
        // Variables
        const valueCard             = document.querySelectorAll('.values__card');
        // jQuery variables
        const $valueFront           = $('.card__front');
        const $valueBack            = $('.card__back');
        const $valueCard            = $('.values__card');


        /**
         * @name        animateValueDescriptions
         * @desc        Functions animate value cards using setInterval and showing a single card description every 5 seconds.
         */
        function animateValueDescriptions() {
            let i=0;
            setInterval(function () {
                if (i<3){
                    $(valueCard[i]).addClass("values__card--flipped");
                    $valueCard.not(valueCard[i]).removeClass("values__card--flipped");
                    setTimeout(function () {
                        $valueCard.removeClass("values__card--flipped");
                    },4000);
                    i++;
                }
                else {
                    i=0;
                    $valueCard.removeClass("values__card--flipped");
                }
            },6000);
        }


        /**
         * @name        showValueDescription
         * @desc        Shows value description by adding --flipped class and closes all other descriptions that were clicked previously.
         * @param       e - clicked value div
         */
        function showValueDescription(e) {
            const target = $(e.target).closest($valueCard);
            target.addClass("values__card--flipped");
            setTimeout(()=>{$valueCard.not(target).removeClass("values__card--flipped");}, 100);
        }

        /**
         * @name        hideValueDescription
         * @desc        Hides value description by removing --flipped class.
         * @param       e - clicked value div
         */
        function hideValueDescription(e) {
            const target = $(e.target).closest($valueCard);
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
            animateValueDescriptions();
        }

        window.addEventListener("load", init);
    }
})();
