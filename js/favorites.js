function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites") || '[]');
}

function renderFavorites() {
  const favorites = getFavorites();
  console.log(favorites)
  const container = document.getElementById('recipeContainer');

  if (favorites.length === 0) {
    container.innerHTML = '<p>You have no favorite recipes yet.</p>';
    return;
  }

  container.innerHTML = ''; // clear container

  favorites.forEach(meal => {
    const card = document.createElement('a');
    card.className = 'recipe';
    card.href = `/recipe.html?id=${meal.idMeal}`;
    card.innerHTML = `
      <img class="recipe_img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <div class="recipe_body">
        <h3>${meal.strMeal}</h3>
      </div>
    `;
    container.appendChild(card);
  });
}

renderFavorites();





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