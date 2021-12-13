let stuff = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

let container = document.querySelector('.container');

// CICLO FOR 
// for (let index = 0; index < stuff.length; index++) {
// 	const element = stuff[index];
// 	let content = `<div class="card"><i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i> <div class="card-name">${element.name}</div></div>`;
	
// 	container.innerHTML += content;
	
// }

// CICLO FOREACH
stuff.forEach((element) => {

	let content = `<div class="card ${element.type}"><i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i> <div class="card-name">${element.name}</div></div>`;
	
 	container.innerHTML += content;
} );

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

let typeSelector = document.getElementById('type-selector');
let animals = document.querySelectorAll('.animal');
let vegetables = document.querySelectorAll('.vegetable');
let users = document.querySelectorAll('.user');

console.log(animals);

typeSelector.addEventListener("change", function() {

	for (let index = 0; index < animals.length; index++) {
		animals[index].classList.remove('disactive');	
	};
	for (let index = 0; index < vegetables.length; index++) {
		vegetables[index].classList.remove('disactive');	
	};
	for (let index = 0; index < users.length; index++) {
		users[index].classList.remove('disactive');	
	};

	console.log('You selected: ', this.value);
	if (typeSelector.value == 'animal') {
		for (let index = 0; index < vegetables.length; index++) {
			vegetables[index].classList.add('disactive');
		};
		for (let index = 0; index < users.length; index++) {
			users[index].classList.add('disactive');	
		}
	} else if (typeSelector.value == 'vegetable') {
		for (let index = 0; index < animals.length; index++) {
			animals[index].classList.add('disactive');
		};
		for (let index = 0; index < users.length; index++) {
			users[index].classList.add('disactive');	
		}
	} else if (typeSelector.value == 'user') {
		for (let index = 0; index < animals.length; index++) {
			animals[index].classList.add('disactive');
		};
		for (let index = 0; index < vegetables.length; index++) {
			vegetables[index].classList.add('disactive');	
		}
	}
});