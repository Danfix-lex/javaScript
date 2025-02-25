const wrapper = document.getElementById('wrapper');
console.log(wrapper);

const pageBanner = document.getElementById('page-banner');
console.log(pageBanner);

const searchBooks = document.getElementById('search-books');
console.log(searchBooks);

const title = document.getElementsByClassName('title');
const titles = Array.from(title)
titles.forEach((title)=>{
    title.textContent = "Danfix's Book Collection";
    console.log(title.textContent);
})