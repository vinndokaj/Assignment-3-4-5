//Vincent Ndokaj
//Assignment 3

// 1) Select the section with an id of container without using querySelector.
console.log("Question 1");
let q1 = document.getElementById('container');
console.log(q1);

// 2) Select the section with an id of container using querySelector.
console.log("Question 2");
let q2 = document.querySelector('#container');
console.log(q2);

// 3) Select all of the list items with a class of "second".
console.log("Question 3");
let q3 = document.querySelectorAll('li.second');
const myArr = [...q3]
for(let i = 0; i < myArr.length; i++){
  console.log(myArr[i]);
}

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
console.log("Question 4");
let q4 = document.querySelector('ol .third')
console.log(q4);

// 5) Give the section with an id of container the text "Hello!".
let q5 = document.getElementById('container');
//q5.innerText = 'Hello!';

// 6) Add the class main to the div with a class of footer.
console.log("Question 6");
let q6 = document.querySelector('div.footer');
q6.classList.add('main');
console.log(q6);

// 7) Remove the class main on the div with a class of footer.
//q6.classList.remove('main');
console.log("Question 7");
let q7 = document.querySelector('div.footer');
q7.classList.remove('main');
console.log(q7);

// 8) Create a new li element.
let q8 = document.createElement('li');

// 9) Give the li the text "four".
q8.innerText = 'four';

// 10) Append the li to the ul element.
document.querySelector('ul').append(q8);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let q12 = document.querySelectorAll('ol li');
const arr = [...q12]
for(let i = 0; i < arr.length; i++){
  arr[i].style.background = 'green';
}

// 13) Remove the div with a class of footer.
let q13 = document.querySelector('div.footer');
q13.remove();
