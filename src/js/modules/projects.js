(function () {
    if ($('#projects-page').length) {

        //variables
        const clientOpinionsCarousel            = document.querySelector('.client-opinions__carousel');
        const architectureProjectDescription    = document.querySelectorAll('.description__architecture');


        //jQuery variables
        const $architectureGallery              = $('.architecture__gallery');
        const $lightbox                         = $('.lightbox__wrapper');

        function showProjectLightbox(e) {
            const $targetDiv        = $(e.target);
            const targetWrapper     = $targetDiv.closest(".gallery__img-wrapper");
            const targetIndex       = $(targetWrapper).index();
            $lightbox.addClass("lightbox__wrapper--shown");
            $(architectureProjectDescription[targetIndex]).addClass("description__wrapper");
        }
        
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
            $architectureGallery.on("click", function (e) {
                showProjectLightbox(e)
            });
        }

        function init(){
            eventHandler();
        }

        window.addEventListener("load",init)
    }
})();