document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("#movie-list .card");
    const currentPath = window.location.pathname;

    cards.forEach(card => {
        if (currentPath.includes("/movies") && !card.getAttribute("href").includes("movies")) {
            card.style.display = "none";
        } else if (currentPath.includes("/series") && !card.getAttribute("href").includes("series")) {
            card.style.display = "none";
        } else if (currentPath.includes("/anime") && !card.getAttribute("href").includes("anime")) {
            card.style.display = "none";
        } else if (currentPath.includes("/irani") && !card.getAttribute("href").includes("irani")) {
            card.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme') || 'retro';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeController = document.getElementById('theme-controller');
    themeController.checked = savedTheme === 'forest';

    themeController.addEventListener('change', function () {
        const newTheme = themeController.checked ? 'forest' : 'retro';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
