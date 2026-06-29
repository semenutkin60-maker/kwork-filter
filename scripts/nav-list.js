// // nav-list.js
// console.log('nav-list.js загружен!');

// const currentPage = window.location.pathname;
// console.log('Текущий путь:', currentPage);

// const navLinks = document.querySelectorAll('.header__menu-link');

// // ========== СНАЧАЛА УДАЛЯЕМ ВСЕ АКТИВНЫЕ КЛАССЫ ==========
// navLinks.forEach(link => {
//     link.classList.remove('is-active');
// });

// // ========== ПОТОМ ДОБАВЛЯЕМ НУЖНЫЙ ==========

// // Функция для добавления класса к ссылке
// function setActiveLink(href) {
//     navLinks.forEach(link => {
//         const linkHref = link.getAttribute('href');
//         if (linkHref === href) {
//             link.classList.add('is-active');
//             console.log('Добавлен is-active для:', href);
//         }
//     });
// }

// // Определяем, на какой мы странице
// if (currentPage === "/" || currentPage === "/index.html") {
//     // Главная страница
//     setActiveLink('/');
//     setActiveLink('index.html'); // на всякий случай
// } else if (currentPage.includes('search')) {
//     // Страница поиска
//     setActiveLink('search.html');
// } else {
//     // Для всех остальных страниц - ищем совпадение
//     navLinks.forEach(link => {
//         const linkHref = link.getAttribute('href');
//         if (currentPage.includes(linkHref)) {
//             link.classList.add('is-active');
//         }
//     });
// }

// console.log('Готово!');





const currentPage = window.location.pathname;
console.log('Текущий путь:', currentPage);

function findPage() {
    // Убираем слеши для чистого сравнения
    const cleanPage = currentPage.replace(/^\/|\/$/g, '');
    console.log('Очищенный путь:', cleanPage);
    
    if (cleanPage === '' || cleanPage === 'index.html') {
        return '/';
    } else if (cleanPage === 'search.html') {
        return 'search.html';
    } else {
        console.log('❌ Неизвестная страница:', cleanPage);
        return null;
    }
}

console.log('Определенная страница:', findPage());

function addIsActive() {
    const navLinks = document.querySelectorAll('.header__menu-link');
    console.log('Найдено ссылок:', navLinks.length);
    
    // Сначала удаляем класс у всех
    navLinks.forEach(link => {
        link.classList.remove('is-active');
    });
    
    // Получаем текущую страницу
    const page = findPage();
    console.log('Ищем активную ссылку для:', page);
    
    // Теперь добавляем класс нужной ссылке
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        console.log('Проверяю ссылку:', href);
        
        // Логика для добавления класса
        if (href === page) {
            link.classList.add('is-active');
            console.log('✅ Добавлен класс для:', href);
        } else if (page === '/' && (href === '/' || href === 'index.html')) {
            link.classList.add('is-active');
            console.log('✅ Добавлен класс для главной:', href);
        } else if (page === 'search.html' && href === 'search.html') {
            link.classList.add('is-active');
            console.log('✅ Добавлен класс для поиска:', href);
        }
    });
}

// Запускаем функцию
addIsActive();
console.log('✅ Функция выполнена!');