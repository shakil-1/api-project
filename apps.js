const searchFood = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // console.log('searchText');
  // clear data
  searchField.value = '';
  if(searchText == ''){
    // please write somting to display
  }
  else{
    // load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displaySeachResult(data.meals));
  }

  
}

const displaySeachResult = meals => {
  const searchResult = document.getElementById('search-result');
  searchResult.textContent ='';
  if(meals.length == 0){
    // show now frsult found
  }
  meals.forEach(meal => {
    //  console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
      <div class="col">
      <div onclick="loadMealDetail(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
      </div>
    </div>
      `;
    searchResult.appendChild(div);
  })
}

  const loadMealDetail = mealId => {
  // console.log(mealId)
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetaile(data.meals[0]));
  // .then(data => console.log(data.meals ))
}

const displayMealDetaile = meal => {
  // console.log(meal);
  const mealDetailes = document.getElementById('meal-details');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML =
    ` <img src="${meal.strMealThumb}" class="card-img-top" >
     <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `;

  mealDetailes.appendChild(div);
} 