let currentPage = 1;
const cardsPerPage = 5;

// تنظیم کوکی
function setCookie(name, value, hours) {
    let expires = "";
    if (hours) {
        const date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// خواندن کوکی
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// حذف کوکی
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

window.onload = function() {
    const isLoggedIn = getCookie('isLoggedIn');
    if (isLoggedIn === 'true') {

        const skeletons = document.getElementById('skeletons');
        skeletons.style.display = 'none';

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.display = 'block';
        });

        const params = new URLSearchParams(window.location.search);
        const pageParam = params.get('page');
        currentPage = pageParam ? parseInt(pageParam) : 1;
        
        showPage(currentPage);
    } else {
        window.location.href = '../login.html';
    }
};

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


document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('#search-input');
    const searchButton = document.querySelector('#search-button');

    function toggleSearchButton() {
        searchButton.disabled = !searchInput.value.trim();
    }

    searchInput.addEventListener('input', function() {
        toggleSearchButton();
    });
    
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            filterMovies(); // فیلتر کردن فیلم‌ها در صورت فشار دادن Enter
        }
    });

    searchButton.addEventListener('click', function() {
        filterMovies(); // فیلتر کردن فیلم‌ها در صورت کلیک بر روی دکمه جستجو
    });

    toggleSearchButton(); // غیرفعال کردن دکمه جستجو در ابتدا
});

// رویدادها
document.querySelector('#search-input').addEventListener('input', filterMovies);
document.querySelector('#search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        filterMovies();
    }