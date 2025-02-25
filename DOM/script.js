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

const name = document.getElementsByClassName('name')
const names = Array.from(name)
names.forEach((name)=>{
    names[0].textContent = "Jagun Jagun";
    console.log(names[1]);
})

const nameOne = document.getElementsByClassName('name')
const namesOne = Array.from(nameOne)
namesOne.forEach((name)=>{
    namesOne[1].textContent = "Oloriogun";
    console.log(namesOne[1]);
})

const nameTwo = document.getElementsByClassName('name')
const namesTwo = Array.from(nameTwo)
namesTwo.forEach((name)=>{
    namesTwo[2].textContent = "Koto Aye";
    console.log(namesTwo[2]);
})

const nameThree = document.getElementsByClassName('name')
const namesThree = Array.from(nameThree)
namesThree.forEach((name)=>{
    namesThree[3].textContent = "Iberu Obi";
    console.log(namesThree[3]);
})
