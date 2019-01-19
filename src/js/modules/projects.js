(function () {
    if ($('#projects-page').length) {

        //variables
        const clientOpinionsCarousel            = document.querySelector('.client-opinions__carousel');
        const architectureProjectDescription    = document.querySelectorAll('.description__architecture');

        //lightbox variables
        const projectThumbnails                 = document.querySelectorAll('.lightbox__thumbnail');
        const architectureThumbnails            = document.querySelector('.lightbox__thumbnails-wrapper').querySelectorAll('.architecture');
        const structuralThumbnails              = document.querySelector('.lightbox__thumbnails-wrapper').querySelectorAll('.structural');
        const mechanicalThumbnails              = document.querySelector('.lightbox__thumbnails-wrapper').querySelectorAll('.mechanical');
        const landscapeThumbnails               = document.querySelector('.lightbox__thumbnails-wrapper').querySelectorAll('.landscape');
        const projectDescriptions               = document.querySelectorAll('.lightbox__description');
        const architectureDescription           = document.querySelector('.lightbox__description-wrapper').querySelectorAll('.architecture');
        const structuralDescription             = document.querySelector('.lightbox__description-wrapper').querySelectorAll('.structural');
        const mechanicalDescription             = document.querySelector('.lightbox__description-wrapper').querySelectorAll('.mechanical');
        const landscapeDescription              = document.querySelector('.lightbox__description-wrapper').querySelectorAll('.landscape');

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
        
        console.log(architectureDescription);
        console.log(structuralDescription);
        console.log(mechanicalDescription);
        console.log(landscapeDescription);

        console.log(architectureThumbnails);
        console.log(structuralThumbnails);
        console.log(mechanicalThumbnails);
        console.log(landscapeThumbnails);


        function initilizeLightbox() {
            $(projectDescriptions).hide();
            $(architectureDescription[0]).show();
            $(projectThumbnails).hide();
            $(architectureThumbnails).show();
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
            initilizeLightbox();
        }

        window.addEventListener("load",init)
    }
})();