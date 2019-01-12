(function () {
    if ($('#projects-page').length) {

        //variables
        const clientOpinionsCarousel    = document.querySelector('.client-opinions__carousel');

        /**
         * @name    animateClientOpinions
         * @desc    Functions animates client opinions using setInterval and by changing left property in CSS.
         *          If last opinion is shown, the function changes left property to 0 and shows first opinion.
         */
        function animateClientOpinions() {
            //index of client opinion that is currently displayed
            let i = 0;
            setInterval(function () {
                if (i<2){
                    i++;
                    clientOpinionsCarousel.style.left = `${-i*100}%`;
                }
                else{
                    i=0;
                    clientOpinionsCarousel.style.left = "0";
                }
            },5000)
        }


        function eventHandler() {
            animateClientOpinions();
        }

        function init(){
            eventHandler();
        }

        window.addEventListener("load",init)
    }
})();