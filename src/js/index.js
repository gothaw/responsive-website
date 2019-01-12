(function () {
    if ($('#home-page').length) {
        // variables
        const counters                      = document.querySelectorAll('.stats__counter');
        const valuesDescription             = document.querySelectorAll('.values__description');
        const valuesTab                     = document.querySelectorAll('.values__tab');
        const projectsMenuItems             = document.querySelectorAll('.projects-menu__item');
        const projectStats                  = document.getElementById('projects-stats');
        const recentProjects                = document.querySelectorAll('.recent-projects__project-wrapper');
        const areaOfInterest                = document.querySelector(".contact__select");

        // jQuery variables
        const $recentProjectsArchitecture   = $('.architecture');
        const $recentProjectsStructural     = $('.structural');
        const $recentProjectsMechanical     = $('.mechanical');
        const $recentProjectsLandscape      = $('.landscape');
        const $recentProjectOverlay         = $('.recent-projects__overlay');
        const $recentProjectWrapper         = $('.recent-projects__description-wrapper');
        const $recentProjectDescription     = $('.recent-projects__description');

        /**
         * @name        checkCounters
         * @desc        Checks if counters are visible in the viewport.
         *              If counters are visible, animateCounter function is invoked for each counter with a limit that
         *              counter counts to.
         */
        function checkCounters() {
            const refreshRate=100;
            const checkingCounters=setInterval(function () {
                if(projectStats.getBoundingClientRect().top<window.innerHeight){
                    const projectsCompleted         =25;
                    const happyClients              =18;
                    const awardsWon                 =12;
                    const charteredEngineers        =10;
                    animateCounter(counters[0],projectsCompleted);
                    animateCounter(counters[1],happyClients);
                    animateCounter(counters[2],awardsWon);
                    animateCounter(counters[3],charteredEngineers);
                    clearInterval(checkingCounters);
                }
            },1000/refreshRate);
        }

        /**
         * @name        animateCounter
         * @desc        Function animates counter using setInterval by modifying innerHTML of counter parameter.
         * @param       counter - DOM element with class of stats__counter.
         * @param       limit - limit that a counter reaches after animation is finished.
         */
        function animateCounter(counter,limit) {
            let i=1;
            let refreshFactor=1.1;
            const interval = setInterval(function () {
                counter.innerHTML=i.toString();
                if (i===limit){
                    clearInterval(interval)
                }
                i++;
            },1000/(limit*refreshFactor));
        }

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

        /**
         * @name        greyOutSelectPlaceholder
         * @desc        Adds contact__select--grey class to the select tag in the form if first placeholder (first option) is selected.
         *              If other option is selected the class is removed.
         */
        function greyOutSelectPlaceholder(){
            if(areaOfInterest[0].selected){
                areaOfInterest.classList.add("contact__select--grey");
            }
            else{
                areaOfInterest.classList.remove("contact__select--grey");
            }
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
            areaOfInterest.addEventListener("change",greyOutSelectPlaceholder);
        }

        function init() {
            checkCounters();
            eventHandler();
            loadFourLatestProjects();
            greyOutSelectPlaceholder();
        }

        window.addEventListener("load", init);
    }
})();
