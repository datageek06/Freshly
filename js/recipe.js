const favorites = JSON.parse(localStorage.getItem("favorites") || '[]');
function setFavorites(list) { 
    localStorage.setItem("favorites", JSON.stringify(list))
}
function isfavorite(id) { 
    return favorites.some(favorite => favorite.idMeal === id)
}

console.log(favorites)

const params = new URLSearchParams(window.location.search);
const recipeId = params.get('id');


async function loadRecipeDetails(id) {
  const res   = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data  = await res.json();
  const meal  = data.meals?.[0];
  const view  = document.getElementById('recipeDetail');
  document.title = `${meal.strMeal} - Freshly Recipes`

  if (!meal) return view.innerHTML = '<h2>Recipe not found.</h2>';
  
  const heartClass = isfavorite(meal.idMeal) ? 'fa-solid' : 'fa-regular';
  
  
    view.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h1 class="recipe_title">${meal.strMeal}</h1>
            <button class="recipe_like" id="favBtn">
                <i class="${heartClass} fa-heart"></i>
            </button>
        </div>
        
        <p class="recipe_category">${meal.strCategory}</p>
        <img class="recipe_img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3 class="recipe_instructions_title">Instructions:</h3>
        <p class="recipe_instructions">${meal.strInstructions}</p>
    `;



    document.getElementById('favBtn').addEventListener('click', () => {
        const icon = favBtn.querySelector('i');

        if (isfavorite(meal.idMeal)) {
            let remove_index = favorites.findIndex(favorite => favorite.idMeal === meal.idMeal)
            favorites.splice(remove_index, 1);
            icon.classList.replace('fa-solid', 'fa-regular');
        } else {
            favorites.push({ 
                idMeal: meal.idMeal, 
                strMeal: meal.strMeal, 
                strMealThumb: meal.strMealThumb
            })
            icon.classList.replace('fa-regular', 'fa-solid');
        }
        setFavorites(favorites)
    });
}

loadRecipeDetails(recipeId);







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