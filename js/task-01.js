const categories = document.querySelector('ul#categories');
const items = categories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item =>
    console.log(
        `Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}`
    )
);
