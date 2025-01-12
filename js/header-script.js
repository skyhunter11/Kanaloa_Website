/*
JS code for header logo
*/
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".header__logo");
    const firstSection = document.getElementById("first-section");

    window.addEventListener("scroll", () => {
        const sectionHeight = firstSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // Show logo if scrolled halfway down the first section
        if (scrollPosition > sectionHeight / 2) {
            logo.style.display = "block"; // Show the logo
            logo.setAttribute("aria-hidden", "false");
        } else {
            logo.style.display = "none"; // Hide the logo
            logo.setAttribute("aria-hidden", "true");
        }
    });
});
