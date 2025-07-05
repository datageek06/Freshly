async function loadRecipes() {
    const response = await fetch('./data/popular_recipes.json');
    const recipes = await response.json();

    console.log(recipes)
    renderRecipes(recipes);
}

function renderRecipes(recipes) {
    const container = document.getElementById('recipeContainer');
    container.innerHTML = '';
    recipes.forEach(meal => {
        const card = document.createElement('a');
        card.href = `recipe.html?id=${meal.id}`
        card.className = 'recipe';
        card.innerHTML = `
            <img class="recipe_img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <div class="recipe_body">
                <h3>${meal.strMeal}</h3>
                <p>${meal.strCategory}</p>
            </div>
        `;

        container.appendChild(card);
    });
}


loadRecipes();






const input = document.getElementById('search_input');
const btn = document.getElementById('search_btn');
const results = document.getElementById('results');

async function searchMeals(query) {
  if (!query.trim()) return results.innerHTML = ''

  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
    const data = await res.json();
    renderResults(data.meals || []);
  } catch (err) {
    console.error(err);
    results.innerHTML = '<p>Something went wrong…</p>';
  }
}

function renderResults(meals) {
  const resultsTitle = meals.length > 0 ? '<h3 class="result_text">Results:</h3>' : '';
  const resultsHTML = meals.map(meal => `
    <a class="card" href="/recipe.html?id=${meal.idMeal}">
        <img class="recipe_img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="recipe_body">
            <h3>${meal.strMeal}</h3>
            <p>${meal.strCategory}</p>
        </div>
    </a>
  `).join('');

    results.innerHTML = meals.length > 0 ? (
        resultsTitle + '<div class="results-grid">' + resultsHTML + '</div>'
    ) : (
        '<p>No recipes found.</p>'
    )
}

btn.addEventListener('click', () => searchMeals(input.value));

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    btn.click();
  }
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