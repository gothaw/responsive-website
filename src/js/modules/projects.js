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
        const $lightboxArrowLeft                = $('.lightbox__arrow--left');
        const $lightboxArrowRight               = $('.lightbox__arrow--right');

        //image index in a selected project discipline/gallery from 0 to 3
        let imageIndex;
        //overall index of the project from 0 to 9
        let projectIndex;
        //selected project discipline/gallery: 'architecture', 'structural', 'mechanical' or 'landscape'
        let projectDiscipline;

        /**
         * @name        showPreviousProject
         * @desc        Function shows previous project from selected project discipline/gallery.
         */
        function showPreviousProject() {
            imageIndex--;
            $(projectThumbnails).removeClass("lightbox__thumbnail--selected");
            $(projectDescriptions).hide();
            if(imageIndex<0){
                imageIndex=3;
            }
            showProjectDetails(imageIndex,projectDiscipline);
            showLightboxMainImg(projectIndex);
        }

        /**
         * @name        showNextProject
         * @desc        Function shows next project from selected project discipline/gallery.
         */
        function showNextProject() {
            imageIndex++;
            $(projectThumbnails).removeClass("lightbox__thumbnail--selected");
            $(projectDescriptions).hide();
            if(imageIndex>3){
                imageIndex=0;
            }
            showProjectDetails(imageIndex,projectDiscipline);
            showLightboxMainImg(projectIndex);
        }

        /**
         * @name        showProjectFromThumbnail
         * @desc        Function shows project image and description when a thumbnail is clicked.
         * @param       e - target thumbnail click event
         */
        function showProjectFromThumbnail(e) {
            const $targetImg            = $(e.target);
            const targetThumbnail       = $targetImg.closest(".lightbox__thumbnail");
            projectIndex                = $(targetThumbnail).index();
            $(projectThumbnails).removeClass("lightbox__thumbnail--selected");
            $(targetThumbnail).addClass("lightbox__thumbnail--selected");
            switch (projectDiscipline) {
                case "architecture":
                    imageIndex = $(targetThumbnail).index(".lightbox__thumbnail.architecture");
                    break;
                case "structural":
                    imageIndex = $(targetThumbnail).index(".lightbox__thumbnail.structural");
                    break;
                case "mechanical":
                    imageIndex = $(targetThumbnail).index(".lightbox__thumbnail.mechanical");
                    break;
                case "landscape":
                    imageIndex = $(targetThumbnail).index(".lightbox__thumbnail.landscape");
                    break;
            }
            $(projectDescriptions).hide();
            $(projectDescriptions[projectIndex]).show();
            showLightboxMainImg(projectIndex);
        }

        /**
         * @name        showLightboxMainImg
         * @desc        Function changes attributes of the main lightbox image depending on what image was clicked in the gallery.
         * @param       index - project index number from 0 to 9. It is index of the project description lightbox__description.
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
            }
        }

        /**
         * @name        showProjectDetails
         * @desc        Function shows project description and thumbnails of similar project from selected discipline.
         * @param       index - index of a project in selected discipline/gallery
         * @param       discipline - string describing project discipline: 'architecture', 'structural', 'mechanical' or 'landscape'
         */
        function showProjectDetails(index,discipline) {
            switch (discipline) {
                case "architecture":
                    $(architectureThumbnails).show();
                    $(architectureThumbnails[index]).addClass("lightbox__thumbnail--selected");
                    $(architectureDescription[index]).show();
                    projectIndex = $(architectureDescription[index]).index();
                    break;
                case "structural":
                    $(structuralThumbnails).show();
                    $(structuralThumbnails[index]).addClass("lightbox__thumbnail--selected");
                    $(structuralDescription[index]).show();
                    projectIndex = $(structuralDescription[index]).index();
                    break;
                case "mechanical":
                    $(mechanicalThumbnails).show();
                    $(mechanicalThumbnails[index]).addClass("lightbox__thumbnail--selected");
                    $(mechanicalDescription[index]).show();
                    projectIndex = $(mechanicalDescription[index]).index();
                    break;
                case "landscape":
                    $(landscapeThumbnails).show();
                    $(landscapeThumbnails[index]).addClass("lightbox__thumbnail--selected");
                    $(landscapeDescription[index]).show();
                    projectIndex = $(landscapeDescription[index]).index();
                    break;
            }
        }

        /**
         * @name        showLightbox
         * @desc        Function shows project lightbox when an image in project gallery is clicked.
         *              It shows main image by invoking showLightboxMainImg. It also shows project description and thumbnails for projects from the same discipline.
         * @param       e - image click event
         * @param       discipline - string describing project discipline: 'architecture', 'structural', 'mechanical' or 'landscape'
         */
        function showLightbox(e,discipline) {
            const $targetImg            = $(e.target);
            const targetImgWrapper      = $targetImg.closest(".gallery__img-wrapper");
            const targetImgIndex        = $(targetImgWrapper).index();
            imageIndex = targetImgIndex;
            projectDiscipline = discipline;
            $(projectDescriptions).hide();
            $(projectThumbnails).hide();
            $(projectThumbnails).removeClass("lightbox__thumbnail--selected");
            showProjectDetails(targetImgIndex,discipline);
            showLightboxMainImg(projectIndex);
            $lightbox.show();
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
                showLightbox(e,"architecture");
            });
            $structuralGallery.on("click", function (e) {
                showLightbox(e,"structural");
            });
            $mechanicalGallery.on("click", function (e) {
                showLightbox(e,"mechanical");
            });
            $landscapeGallery.on("click", function (e) {
                showLightbox(e,"landscape");
            });
            $lightboxClose.on("click",function (){
                $lightbox.hide();
            });
            $(projectThumbnails).on("click",function (e) {
                showProjectFromThumbnail(e);
            });
            $lightboxArrowLeft.on("click",showPreviousProject);
            $lightboxArrowRight.on("click",showNextProject);
        }

        function init(){
            eventHandler();
        }

        window.addEventListener("load",init)
    }
})();