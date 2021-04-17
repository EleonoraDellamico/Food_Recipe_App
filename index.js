const searchForm = document.querySelector('form');
const searchResult = document.querySelector('.search-result');
const container = document.querySelector('.container');
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
	const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_Key}&to=20`;
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
                        <h2>This is a recipe</h2>
                        <a class="view-button"  href="#">View recipe</a>     
                    </div>
                     <p class="item-data">Calories:120</p>  
                </div>  
				`;
	});
	searchResult.innerHTML = generetedHTML;
}
