/*
JS code for header logo
*/
document.addEventListener("DOMContentLoaded", () => {

// Hamburger Adjustments Start //
    // Hook elements
    const hamburger = document.querySelector(".hamburger");
    const flyoutNav = document.querySelector(".header__nav--flyout");

    // Toggle flyout menu
    hamburger.addEventListener("click", () => {
        const isExpanded = hamburger.getAttribute("aria-expanded") === "true";

        // Update ARIA attributes
        hamburger.setAttribute("aria-expanded", !isExpanded);
        flyoutNav.setAttribute("aria-hidden", isExpanded);

        // Toggle classes
        flyoutNav.classList.toggle("active");
        hamburger.classList.toggle("open");
    });
// Hamburger Adjustments End //

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
