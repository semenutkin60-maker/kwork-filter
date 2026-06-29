// ============================================================
// АНИМАЦИЯ ПРИ СКРОЛЛЕ
// ============================================================

class ScrollAnimator {
    constructor() {
        // Настройки
        this.threshold = 0.15; // 15% блока должно быть видно
        this.rootMargin = '0px 0px -50px 0px';
        
        // Все элементы для анимации
        this.elements = document.querySelectorAll('.scroll-animate, .cards__animation');
        
        // Запускаем
        this.initObserver();
        this.checkVisibilityOnLoad();
    }
    
    initObserver() {
        const options = {
            root: null,
            rootMargin: this.rootMargin,
            threshold: this.threshold
        };
        
        // Создаем наблюдатель
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Можно остановить наблюдение, чтобы не тратить ресурсы
                    // this.observer.unobserve(entry.target);
                }
            });
        }, options);
        
        // Добавляем все элементы в наблюдатель
        this.elements.forEach(el => {
            this.observer.observe(el);
        });
    }
    
    // Проверка для уже видимых элементов (при загрузке)
    checkVisibilityOnLoad() {
        this.elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Если элемент уже в видимой области
            if (rect.top < windowHeight - 50 && rect.bottom > 0) {
                el.classList.add('is-visible');
            }
        });
    }
}

// ============================================================
// ЗАПУСК
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimator();
});