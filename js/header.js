const header = document.getElementById('pageHeader');

window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
        header.classList.remove('transparent');
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
        header.classList.add('transparent');
    }
});