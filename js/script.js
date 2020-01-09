const responsive = (function() {

    let dropdownMenuContent;
    let dropdownMenuButton;

    let toggleMenu;

    /**
     * The width limit between mobile view and desktop view, in pixels. 
     */
    const MOBILE_WIDTH_CAP = 760;

    /**
     * Images directory
     */
    const IMG_DIRECTORY = "./img/";

    /**
     * Determines if screen is in mobile width or desktop width. 
     */
    function isMobileWidth() {
        return document.body.clientWidth < MOBILE_WIDTH_CAP;
    }

    /**
     * Initializes variables and events.
     */
    function init() {

        let cardImage = document.getElementById("cards-image");

        if (isMobileWidth()) {
            // Mobile width
            dropdownMenuContent = document.getElementById("nav");
            dropdownMenuButton = document.getElementById("dropdown-menu");

            dropdownMenuButton.addEventListener("click", toggleMenu);
            dropdownMenuContent.addEventListener("click", toggleMenu);

            cardImage.src = IMG_DIRECTORY + "cards-mobile.png";
        } else {
            // Desktop width
            cardImage.src = IMG_DIRECTORY + "cards-desktop.png";

            toggleMenu = function() {
                dropdownMenuContent.classList.toggle("expanded");
            }
        }

        // If application resizes screen, calls init.
        window.addEventListener("resize", init);

    }

    /**
     * Public members 
     */
    return { init };

})();
