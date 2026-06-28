// nav-list.js
console.log('nav-list.js загружен!');

const currentPage = window.location.pathname;
console.log('Текущий путь:', currentPage);

const navLinks = document.querySelectorAll('.header__menu-link');

// ========== СНАЧАЛА УДАЛЯЕМ ВСЕ АКТИВНЫЕ КЛАССЫ ==========
navLinks.forEach(link => {
    link.classList.remove('is-active');
});

// ========== ПОТОМ ДОБАВЛЯЕМ НУЖНЫЙ ==========

// Функция для добавления класса к ссылке
function setActiveLink(href) {
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === href) {
            link.classList.add('is-active');
            console.log('Добавлен is-active для:', href);
        }
    });
}

// Определяем, на какой мы странице
if (currentPage === "/" || currentPage === "/index.html") {
    // Главная страница
    setActiveLink('/');
    setActiveLink('index.html'); // на всякий случай
} else if (currentPage.includes('search')) {
    // Страница поиска
    setActiveLink('search.html');
} else {
    // Для всех остальных страниц - ищем совпадение
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (currentPage.includes(linkHref)) {
            link.classList.add('is-active');
        }
    });
}

console.log('Готово!');