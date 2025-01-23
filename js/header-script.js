// Allow browser to fully load and parse initial html
document.addEventListener("DOMContentLoaded", () => {

// Flyout Menu Adjustments Start //
    // Hook elements
    const hamburgerButton = document.querySelector(".hamburger-button");
    const flyoutMenu = document.querySelector(".flyout-menu");

    // Toggle flyout menu
    hamburgerButton.addEventListener("click", (event) => {
        const isExpanded = hamburgerButton.getAttribute("aria-expanded") === "true";

        // Update ARIA attributes
        hamburgerButton.setAttribute("aria-expanded", !isExpanded);
        flyoutMenu.setAttribute("aria-hidden", isExpanded);
        // Toggle classes
        hamburgerButton.classList.toggle("open");
        flyoutMenu.classList.toggle("open");

        // Prevent click from propagating to document listener
        event.stopPropagation();
    });

    // Close flyout menu when clicking outside of it
    document.addEventListener("click", (event) => {
        const isMenuOpen = hamburgerButton.getAttribute("aria-expanded") === "true";

        // If menu is open and click is outside the menu and hamburger
        if (
            isMenuOpen &&
            !flyoutMenu.contains(event.target) &&
            !hamburgerButton.contains(event.target)
        ) {
            // Close the menu
            hamburgerButton.setAttribute("aria-expanded", "false");
            flyoutMenu.setAttribute("aria-hidden", "true");
            // Remove open classes
            hamburgerButton.classList.remove("open");
            flyoutMenu.classList.remove("open");
        }
    })
// Flyout Menu Adjustments End //



// Header Adjustments Start //
    //Hook elements
    const logo = document.querySelector(".header__logo");
    const firstSection = document.getElementById("first-section");
    const header = document.querySelector("header");

    // Listen to scroll position
    window.addEventListener("scroll", () => {
        const sectionHeight = firstSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // Show logo if scrolled halfway down the first section
        if (scrollPosition > sectionHeight / (1.3)) {
            // Show the logo
            logo.style.display = "block";
            logo.setAttribute("aria-hidden", "false");

            // Add scrolled class to reduce padding
            header.classList.add("scrolled");
        } else {
            // Hide the logo
            logo.style.display = "none";
            logo.setAttribute("aria-hidden", "true");

            // Remove scrolled class to restore padding
            header.classList.remove("scrolled");
        }
    });
// Header Adjustments End //
});
