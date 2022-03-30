const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
/*const ulIngredients = document.querySelector('ul#ingredients');

ingredients.forEach(name => {
    const elem = document.createElement('li');
    elem.textContent = name;
    elem.classList.add('item');
    ulIngredients.append(elem);
    //console.log(elem.innerHTML);
});

ulIngredients.innerHTML = ingredients
    .map(name => `<li class="item">${name}</li>`)
    .join('');
*/
//li == item\
const elems = ingredients.map(name => {
    const elem = document.createElement('li');
    elem.textContent = name;
    elem.classList.add('item');
    return elem;
});

document.querySelector('ul#ingredients').append(...elems);
