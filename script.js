// Мобильное меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Валидация формы
const form = document.getElementById('feedback-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    
    if (!email.includes('@')) {
        alert('Пожалуйста, введите корректный email адрес');
        return;
    }
    
    alert('Сообщение отправлено!');
    form.reset();
});
