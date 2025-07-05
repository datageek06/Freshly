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



async function loadCategories() {
    const response = await fetch('../data/popular_categories.json');
    const categories = await response.json();

    renderCategories(categories);
}

function renderCategories(categories) {
    const container = document.getElementById('categoryContainer');
    container.innerHTML = '';
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category';
        card.innerHTML = `
            <img class="category_img" src="${category.strCategoryThumb}" alt="${category.idCategory}">
            <p class="category_title">${category.strCategory}</p>
        `;

        container.appendChild(card);
    });
}



loadRecipes();
loadCategories();




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