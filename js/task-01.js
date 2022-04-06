const categories = document.querySelector('ul#categories');
const items = categories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item =>
    console.log(
        `Category: ${item.querySelector('h2').textContent}\n
        Elements:${item.querySelectorAll('li').length}\n`
    )
);
