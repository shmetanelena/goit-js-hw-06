const categories = document.querySelector('ul#categories');
const items = categories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
/*items.forEach(item => {
    const title = item.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    const elems = item.querySelectorAll('li');
    console.log(`Elements: ${elems.length}`);
});
*/

items.forEach(item =>
    console.log(
        `Category: ${item.querySelector('h2').textContent}\nElements: ${
            item.querySelectorAll('li').length
        }\n`
    )
);
