//object itiration
const book = {
    title: "JS for newbies",
    author: "Nithya",
    year: 2026
};
for(let key in book){
    console.log(key,":",book[key]);
}
console.log("keys",Object.keys(book));
console.log("vslues",Object.values(book));
console.log("entries",Object.entries(book));