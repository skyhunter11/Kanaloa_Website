/*
JS code for header logo
*/
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".header__logo");
    const firstSection = document.getElementById("first-section");

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        const sectionHeight = firstSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // Show logo if scrolled halfway down the first section
        if (scrollPosition > sectionHeight / 2) {

            // Show the logo
            logo.style.display = "block";
            logo.setAttribute("aria-hidden", "false");

            // Remove p-3 class
            header.classList.remove("p-3")
        } else {

            // Hide the logo
            logo.style.display = "none";
            logo.setAttribute("aria-hidden", "true");

            // Restore p-3 class
            header.classList.add("p-3");
        }
    });
});
