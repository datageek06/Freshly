const form = document.getElementById('contactForm');

function setError(el, msg = "") {
  const err = document.getElementById(el.id + 'Err');
  if (err) {
    err.textContent = msg;
  }
  el.classList.toggle('error', Boolean(msg));
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    let hasError = false;

    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const messageEl = document.getElementById('message');

    if (!data.name.trim()) {
      setError(nameEl, 'Name is required');
      hasError = true;
    } else setError(nameEl);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      setError(emailEl, 'Enter a valid email');
      hasError = true;
    } else setError(emailEl);

    if (!data.message.trim()) {
      setError(messageEl, 'Message is required');
      hasError = true;
    } else setError(messageEl);

    if (hasError) return;

    console.log('Result:', data);
    form.reset();
});




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