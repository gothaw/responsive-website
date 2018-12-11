if ($('#home').length) {
    (function () {
        // Variables
        const valuesDescription             = document.querySelectorAll('.values__description');
        const valuesTab                     = document.querySelectorAll('.values__tab');
        const projectsMenuItems             = document.querySelectorAll('.projects-menu__item');
        const recentProjects                = document.querySelectorAll('.recent-projects__project-wrapper');
        // jQuery variables
        const $recentProjectsArchitecture   = $('.architecture');
        const $recentProjectsStructural     = $('.structural');
        const $recentProjectsMechanical     = $('.mechanical');
        const $recentProjectsLandscape      = $('.landscape');
        const $recentProjectOverlay         = $('.recent-projects__overlay')
        const $recentProjectWrapper         = $('.recent-projects__description-wrapper');
        const $recentProjectDescription     = $('.recent-projects__description');

        //
        const $projectStats             = $('#projects-stats');
        const projectStats=document.getElementById('projects-stats');
        let animated                  = false;

        function animateCounters() {
            if(!animated){
                console.log('Hello world');
                animated=true;
            }

        }

        $(window).scroll(function () {
            const docViewTop = $(window).scrollTop();
            const docViewBottom = docViewTop + $(window).height();

            const elementTop = $projectStats.offset().top;
            const elementBottom = elementTop+$projectStats.height();

            if ((elementBottom<=docViewBottom) && (elementTop>=docViewTop)){
                animateCounters();
            }
            /*if(projectStats.getBoundingClientRect().top<window.innerHeight && !animated){
                console.log("1");
                animated=true;
            }*/
        });
        //
        
        
        
        
        /**
         * @name        switchBetweenTabs
         * @param       e - tab click event
         * @param       descriptionIndex - index of description tab to be shown
         * @desc        Function switches between value tabs and hides and shows value descriptions by adding and removing classes.
         */
        function switchBetweenTabs(e,descriptionIndex) {
            const $targetTab = $(e.target);
            const $targetDescription = $(valuesDescription[descriptionIndex]);
            $targetTab.addClass("values__tab--selected").removeClass("values__tab--unselected");
            $targetTab.siblings().addClass("values__tab--unselected").removeClass("values__tab--selected");
            $targetDescription.addClass("values__description--active").removeClass("values__description--hidden");
            $(valuesDescription).not($targetDescription).addClass("values__description--hidden");
        }

        /**
         * @name        selectProjectCategory
         * @desc        Function controls switching between categories on the recent projects menu.
         *              It also displays selected projects using jQuery fadeIn function.
         * @param       e - item click event
         */
        function selectProjectCategory(e) {
            const $targetItem = $(e.target);
            $targetItem.addClass("projects-menu__item--selected");
            $targetItem.siblings().removeClass("projects-menu__item--selected");
            const category=$targetItem.html();
            $(recentProjects).hide();
            switch (category) {
                case "Architecture":
                    $recentProjectsArchitecture.fadeIn();
                    break;
                case "Structural":
                    $recentProjectsStructural.fadeIn();
                    break;
                case "Mechanical":
                    $recentProjectsMechanical.fadeIn();
                    break;
                case "Landscape":
                    $recentProjectsLandscape.fadeIn();
                    break;
                default:
                    loadFourLatestProjects();
            }
        }

        /**
         * @name        loadFourRecentProjects
         * @desc        Displays four latest project irrespective of their category.
         */
        function loadFourLatestProjects() {
            let fourLatestProjects=[];
            $(recentProjects).hide();
            for (let i=0;i<4;i++){
                fourLatestProjects.push(recentProjects[i]);
            }
            $(fourLatestProjects).fadeIn();
        }

        /**
         * @name        toggleProjectDescription
         * @desc        Toggles project description when project image is clicked.
         * @param       e - project clicked event
         */
        function toggleProjectDescription(e) {
            const $targetProject        = $(e.target);
            const overlay               = $targetProject.closest('.recent-projects__overlay');
            const wrapper               = overlay.find('.recent-projects__description-wrapper');
            const description           = overlay.find('.recent-projects__description');
            $recentProjectOverlay.not(overlay).removeClass('recent-projects__overlay--shown');
            $recentProjectWrapper.not(wrapper).removeClass('recent-projects__description-wrapper--shown');
            $recentProjectDescription.not(description).removeClass('recent-projects__description--shown');
            overlay.toggleClass('recent-projects__overlay--shown');
            wrapper.toggleClass('recent-projects__description-wrapper--shown');
            description.toggleClass('recent-projects__description--shown');
        }
        function eventHandler() {
            for (let i=0;i<3;i++){
                valuesTab[i].addEventListener("click",function (e) {
                        switchBetweenTabs(e,i)
                })
            }
            $(projectsMenuItems).on("click",function (e) {
                selectProjectCategory(e);
            });
            $recentProjectWrapper.on("click",function (e) {
               toggleProjectDescription(e);
            });
        }

        function init() {
            eventHandler();
            loadFourLatestProjects();
        }

        window.addEventListener("load", init);
    })();
}