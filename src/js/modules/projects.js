(function () {
    if ($('#projects-page').length) {

        //client opinion carousel
        const clientOpinionsCarousel            = document.querySelector('.client-opinions__carousel');

        //project galleries
        const $architectureGallery              = $('.architecture__gallery');
        const $structuralGallery                = $('.structural__gallery');
        const $mechanicalGallery                = $('.mechanical__gallery');
        const $landscapeGallery                 = $('.landscape__gallery');

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

        const $lightbox                         = $('.projects__lightbox');
        const $lightboxImg                      = $('.lightbox__img');
        const $lightboxClose                    = $('.lightbox__close');


        /**
         * @name        showLightboxMainImg
         * @desc
         * @param       index
         */
        function showLightboxMainImg(index) {
            switch (index) {
                case 0:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/1-civil-mechanical-600.jpg 600w, dist/img/projects/1-civil-mechanical-1000.jpg 1000w",
                        sizes: "(max-width: 768px) 600px, 1000px",
                        src: "dist/img/projects/1-civil-mechanical-1000.jpg",
                        alt: "concrete dam"
                    });
                    break;
                case 1:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/2-architecture-landscape-600.jpg 600w, dist/img/projects/2-architecture-landscape-1000.jpg 1000w",
                        sizes: "(max-width: 768px) 600px, 1000px",
                        src: "dist/img/projects/2-architecture-landscape-1000.jpg",
                        alt: "bungalow with nice paving"
                    });
                    break;
                case 2:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/3-architecture-landscape-600.jpg 600w, dist/img/projects/3-architecture-landscape-1000.jpg 1000w",
                        sizes: "(max-width: 768px) 600px, 1000px",
                        src: "dist/img/projects/3-architecture-landscape-1000.jpg",
                        alt: "bird's eye view of a hotel"
                    });
                    break;
                case 3:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/4-mechanical-structural-600.jpg 600w, dist/img/projects/4-mechanical-structural-1000.jpg 1000w",
                        sizes: "(max-width: 768px) 600px, 1000px",
                        src: "dist/img/projects/4-mechanical-structural-1000.jpg",
                        alt: "office building with glazed facade"
                    });
                    break;
                case 4:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/5-mechanical-structural-600.jpg 600w, dist/img/projects/5-mechanical-structural-1000.jpg 1000w",
                        sizes: "(max-width: 768px) 600px, 1000px",
                        src: "dist/img/projects/5-mechanical-structural-1000.jpg",
                        alt: "roofs with concrete arches"
                    });
                    break;
                case 5:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/6-civil-structural-landscape-600.jpg 600w, dist/img/projects/6-civil-structural-landscape-1000.jpg 1000w",
                        sizes: "(max-width: 768px) 600px, 1000px",
                        src: "dist/img/projects/6-civil-structural-landscape-1000.jpg",
                        alt: "office building with reflective windows"
                    });
                    break;
                case 6:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/dist/img/projects/7-civil-mechanical-600.jpg 600w, dist/img/projects/7-civil-mechanical-1000.jpg 1000w",
                        sizes: "(max-width: 768px) 600px, 1000px",
                        src: "dist/img/projects/7-civil-mechanical-1000.jpg",
                        alt: "steel valves"
                    });

                    break;
                case 7:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/8-civil-structural-landscape-600.jpg 600w, dist/img/projects/8-civil-structural-landscape-1000.jpg 1000w",
                        sizes: "(max-width: 768px) 600px, 1000px",
                        src: "dist/img/projects/8-civil-structural-landscape-1000.jpg",
                        alt: "hobbit huts"
                    });

                    break;
                case 8:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/9-architecture-600.jpg 600w, dist/img/projects/9-architecture-1000.jpg 1000w",
                        sizes: "(max-width: 768px) 600px, 1000px",
                        src: "dist/img/projects/9-architecture-1000.jpg",
                        alt: "multi storey building with curved facade"
                    });

                    break;
                case 9:
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/10-architecture-600.jpg 600w, dist/img/projects/10-architecture-1000.jpg 1000w",
                        sizes: "(max-width: 768px) 600px, 1000px",
                        src: "dist/img/projects/10-architecture-1000.jpg",
                        alt: "tall office building"
                    });

                    break;
                default:
                    //shows first project as default
                    $lightboxImg.attr({
                        srcset: "dist/img/projects/1-civil-mechanical-600.jpg 600w, dist/img/projects/1-civil-mechanical-1000.jpg 1000w",
                        sizes: "(max-width: 768px) 600px, 1000px",
                        src: "dist/img/projects/1-civil-mechanical-1000.jpg",
                        alt: "concrete dam"
                    });
            }
        }

        /**
         * @name        showLightbox
         * @desc
         * @param       e
         * @param       discipline
         */
        function showLightbox(e,discipline) {
            const $targetImg            = $(e.target);
            const targetImgWrapper      = $targetImg.closest(".gallery__img-wrapper");
            const targetImgIndex        = $(targetImgWrapper).index();
            let descriptionIndex;
            $(projectDescriptions).hide();
            $(projectThumbnails).hide();
            $(projectThumbnails).removeClass("lightbox__thumbnail--selected");
            switch (discipline) {
                case "architecture":
                    $(architectureThumbnails).show();
                    $(architectureThumbnails[targetImgIndex]).addClass("lightbox__thumbnail--selected");
                    $(architectureDescription[targetImgIndex]).show();
                    descriptionIndex =  $(architectureDescription[targetImgIndex]).index();
                    break;
                case "structural":
                    $(structuralThumbnails).show();
                    $(structuralThumbnails[targetImgIndex]).addClass("lightbox__thumbnail--selected");
                    $(structuralDescription[targetImgIndex]).show();
                    descriptionIndex =  $(structuralDescription[targetImgIndex]).index();
                    break;
                case "mechanical":
                    $(mechanicalThumbnails).show();
                    $(mechanicalThumbnails[targetImgIndex]).addClass("lightbox__thumbnail--selected");
                    $(mechanicalDescription[targetImgIndex]).show();
                    descriptionIndex =  $(mechanicalDescription[targetImgIndex]).index();
                    break;
                case "landscape":
                    $(landscapeThumbnails).show();
                    $(landscapeThumbnails[targetImgIndex]).addClass("lightbox__thumbnail--selected");
                    $(landscapeDescription[targetImgIndex]).show();
                    descriptionIndex =  $(landscapeDescription[targetImgIndex]).index();
                    break;
                default:
                    //shows first project as default
                    $(mechanicalThumbnails).show();
                    $(mechanicalThumbnails[0]).addClass("lightbox__thumbnail--selected");
                    $(mechanicalDescription[0]).show();
                    descriptionIndex =  $(mechanicalDescription[0]).index();
            }
            showLightboxMainImg(descriptionIndex);
            $lightbox.show();
        }


        /*function initilizeLightbox() {
            $(projectDescriptions).hide();
            $(projectThumbnails).hide();
            $(architectureThumbnails).show();
            $(architectureDescription[0]).show();
            $(architectureThumbnails[0]).addClass("lightbox__thumbnail--selected");
            $lightbox.show();
        }*/

        /**
         * @name        closeLightbox
         * @desc
         */
        function closeLightbox() {
            $lightbox.hide();
        }
        
        /**
         * @name        animateClientOpinions
         * @desc        Functions animates client opinions using setInterval and by changing left property in CSS.
         *              If last opinion is shown, the function changes left property to 0 and shows first opinion.
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
                showLightbox(e,"architecture")
            });
            $structuralGallery.on("click", function (e) {
                showLightbox(e,"structural")
            });
            $mechanicalGallery.on("click", function (e) {
                showLightbox(e,"mechanical")
            });
            $landscapeGallery.on("click", function (e) {
                showLightbox(e,"landscape")
            });
            $lightboxClose.on("click",closeLightbox)
        }

        function init(){
            eventHandler();
            initilizeLightbox();
        }

        window.addEventListener("load",init)
    }
})();