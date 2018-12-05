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
        const $recentProjectDescriptions    = $('.recent-projects__description-wrapper');
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
            const $targetProject = $(e.target);
            $($targetProject.closest('.recent-projects__overlay')).animate({
                    "opacity": 1.0
                },
                500
            );
            $targetProject.animate({
                    "opacity": 1.0
                },
                1000
            );
            $($targetProject.closest('.recent-projects__description')).animate({
                    "opacity": 1.0
                },
                2000
            );
            console.log($targetProject);
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
            $recentProjectDescriptions.on("click",function (e) {
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