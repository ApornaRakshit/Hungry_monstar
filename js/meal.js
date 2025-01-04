const loadFood = async (searchText) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
    const data = await res.json();
    const foods = data.meals;
    //console.log(foods);
    displayFoods(foods)
}


const displayFoods = foods =>{
    //console.log(foods)

    const foodContainer = document.getElementById('food-container');
    // clear food container cards before adding new one
    foodContainer.textContent = '';
    foods.forEach(food =>{
        console.log(food);
        // 2 create a div
        const foodCard = document.createElement('div');
        foodCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        // 3. set innerHTML
        foodCard.innerHTML = `
        <figure>
        <img
        src="${food.strMealThumb}"
        alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${food.strCategory}</h2>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        // 4. append child
        foodContainer.appendChild(foodCard);
    })
}

//handle search button 
const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadFood(searchText);
}
//loadFood();