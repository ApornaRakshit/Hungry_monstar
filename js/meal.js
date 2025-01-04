const loadFood = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await res.json();
    const foods = data.categories;
    //console.log(foods);
    displayFoods(foods)
}


const displayFoods = foods =>{
    //console.log(foods)

    const foodContainer = document.getElementById('food-container');

    foods.forEach(food =>{
        console.log(food);
        // 2 create a div
        const foodCard = document.createElement('div');
        foodCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        // 3. set innerHTML
        foodCard.innerHTML = `
        <figure>
        <img
        src="${food.strCategoryThumb}"
        alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${food.strCategory}</h2>
            <p>${food.strCategoryDescription}</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        // 4. append child
        foodContainer.appendChild(foodCard);
    })
}

loadFood();