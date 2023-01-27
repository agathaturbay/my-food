import './Recipes.scss';
import config from '../config.json'

function Recipes (){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': config.API_key,
			'X-RapidAPI-Host': config.API_host
		}
	};
	
	fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
    return(
		<h1>my Component has Mounted, Check the browser 'console' </h1>
    )
}

export default Recipes;