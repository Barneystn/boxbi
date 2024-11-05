document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("#movie-list .card");
    const currentPath = window.location.pathname;

    cards.forEach(card => {
        if (currentPath.includes("/movies") && !card.getAttribute("href").includes("movies")) {
            card.style.display = "none";
        } else if (currentPath.includes("/series") && !card.getAttribute("href").includes("series")) {
            card.style.display = "none";
        }
    });
});