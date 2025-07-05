const hamburger = document.querySelector('.hamburger');
const menuPopup = document.getElementById('menuPopup');
const closeBtn = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
    menuPopup.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    menuPopup.classList.remove('open');
});

document.querySelectorAll('.popup-nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuPopup.classList.remove('open');
    });
});