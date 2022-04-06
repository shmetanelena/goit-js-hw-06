const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const elems = ingredients.map(name => {
    const elem = document.createElement('li');
    elem.textContent = name;
    elem.classList.add('item');
    return elem;
});

document.querySelector('ul#ingredients').append(...elems);
