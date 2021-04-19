const searchForm = document.querySelector('form');
const searchResult = document.querySelector('.search-result');
const container = document.querySelector('.container');
const btn = document.querySelector('.btnSearch');
let searchQuery = '';
const APP_ID = 'c68077ad';
const APP_Key = '62e16dfbc48c7674a8f2a41a5a20128f';

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	searchQuery = e.target.querySelector('input').value;
	console.log(searchQuery);
	fetchApi();
});
async function fetchApi() {
	const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_Key}&to=20`;
	const response = await fetch(baseURL);
	const data = await response.json();
	generateHTML(data.hits);

	console.log(data);
}

function generateHTML(results) {
	let generetedHTML = '';
	results.map((result) => {
		generetedHTML += `
		<div class="item">
                    <img src="${result.recipe.image}"tiramisu.jpeg" alt="">
                    <div class="flex-container">
                        <h2 class="title">${result.recipe.label}</h2>
                        <a class="view-button"  href="${result.recipe.url}" target="_blank">View recipe</a>     
                    </div>
                     <p class="item-data">Calories:${result.recipe.calories.toFixed(2)}</p>  
                </div>  
				`;
	});
	searchResult.innerHTML = generetedHTML;
}
