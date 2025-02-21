let array = new Array(10, 20, 30, 40, 50);
let arr = [10, 15, 20, 25, 30, 35, 40, 45, 50];

// arr.forEach((element, index) => {
//   console.log("Index: ", index);
//   console.log("Element: ", element);
// });

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// arr.push(60);
// arr.pop();
// // arr.unshift(0);
// arr.shift();

// arr.map((element, index) => {
//   console.log("Index: ", index);
//   console.log("Element: ", element);
// });

let even = arr.filter((element, index) => element % 2 == 0);

let odd = arr.find((element, index) => element % 2 != 0);

let movie = "something else";

// console.log(movie.endsWith("E"));
// console.log(movie.substring(0, 5));
// console.log(movie.slice(0, 5));
// console.log(movie.charAt(6));
// console.log(movie.indexOf("e"));
// console.log(movie.lastIndexOf("e"));
// console.log(movie.indexOf("e"));
// console.log(movie.lastIndexOf("e"));
console.log(movie.includes("else"));
console.log(movie.length);
console.log(movie.split(" "));
movie1 = movie.split(" ");
console.log(movie1);
console.log(movie1.join(""));
console.log(movie.toUpperCase());
console.log(movie.toLowerCase());
console.log(movie.charAt(0).toUpperCase() + movie.slice(1));

// console.log(odd);

// console.log(arr);
const counter = document.querySelector("#counter");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
// console.log(counter, increment, decrement);
let count = 0;
counter.innerText = count;
increment.addEventListener("click", (e) => {
  if (count < 100) {
    counter.innerText = ++count;
  }
});
decrement.addEventListener("click", () => {
  if (count > 0) {
    counter.innerText = --count;
  }
});
