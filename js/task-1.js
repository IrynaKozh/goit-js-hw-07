const listCategories = document.querySelector("#categories");
const item = document.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);

item.forEach((category) => {
    const title = category.querySelector("h2").textContent;
    const itemsCount = category.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsCount}`);
});