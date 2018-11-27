if ($('#home').length) {
    (function () {
        // Variables
        const valuesDescription = document.querySelectorAll('.values__description');
        const valuesTab = document.querySelectorAll('.values__tab');
        const projectsMenuItems = document.querySelectorAll('.projects-menu__item');
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
         * @desc        Function controls switching between categories and
         * @param       e - item click event
         */
        function selectProjectCategory(e) {
            const $targetItem = $(e.target);
            $targetItem.addClass("projects-menu__item--selected");
            $targetItem.siblings().removeClass("projects-menu__item--selected");
            const category=$targetItem.html();
            switch (category) {
                case "Architecture":
                    console.log("1");
                    break;
                case "Structural":
                    console.log("2");
                    break;
                case "Mechanical":
                    console.log("3");
                    break;
                case "Landscape":
                    console.log("4");
                    break;
                default:
                    console.log("All");
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
            })
        }

        function init() {
            eventHandler();
        }
        window.addEventListener("load", init);
    })();
}