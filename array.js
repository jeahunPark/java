'use strict';

//Array
//1. declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]);

//3. Looping over an array
//for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//for of
for(let fruit of fruits){
    console.log(fruit);
}
//for each
fruits.forEach(
    (fruit)=>console.log(fruit)
    )

//4.Addition, deletion,copy
//push:add and item to the end
fruits.push('pear','plum');
console.log(fruits);
//pop : remove an item from the end
fruits.pop();
console.log(fruits);
//unshift : add an item to teh beginning
fruits.unshift('lemon');
console.log(fruits);
//shift : remove an item to the beginning
fruits.shift();
console.log(fruits);
//splice:remove and item by index position
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'watermelon','strawberry');
console.log(fruits);
//combine tow arrays
const fruits2 = ['tomato'];
const newFruits=fruits.concat(fruits2);
console.log(newFruits);

//5.Searching
console.log(fruits.indexOf('pear'));
//includes
console.log(fruits.includes('strawberry'));
//lastIndexOf
console.log(fruits);
fruits.push('apple');
console.log(fruits);
console.log(fruits.lastIndexOf('apple'));