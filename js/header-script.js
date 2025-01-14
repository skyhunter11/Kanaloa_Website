/*
JS code for header logo
*/
document.addEventListener("DOMContentLoaded", () => {

    // Hook .header_logo
    const logo = document.querySelector(".header__logo");

    // Hook first-section
    const firstSection = document.getElementById("first-section");
    
    // Hook header
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        const sectionHeight = firstSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // Show logo if scrolled halfway down the first section
        if (scrollPosition > sectionHeight / 2) {

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
});
