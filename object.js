//Object
//one of the Javescript's data types.
//a collection of related data and/or functionality
//nearly all objects in Javascript are instances of Object
//object = {key : value}
//1. Literals and properties
const obj1 = {}; //'object literal' syntax(문법)
const obj2 = new Object(); //'object constructor' syntax
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name : 'ellie',
               age : 4,
}
print(ellie);
ellie.hasJob = true;
console.log(ellie.hasJob);
delete ellie.hasJob;
console.log(ellie.hasJob);

//2. computed properties
//key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasjob'] = true;
console.log(ellie.hadJob);

function printValue(obj,key){
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

//3. property value shorthand
const person1 = {name : 'bob', age : 2};
const person2 = {name : 'steve', age : 10};
const person3 = {name : 'dave', age : 20};
const person4 = new Person('ellie', 30);
console.log(person4);

//4. constructor function
function Person(name,age){
    this.name = name;
    this.age = age;
    return this; //생략가능
}

//5. in operator : property existance check(key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

//6. for...in  VS  for...of
//for (key in obj)
for(key in ellie){
    console.log(key);
}

//for (value of iterable)
const array = [1,2,3,4];
for(value of array){
    console.log(value)
}

//6. Fun cloning
//Object.assign
const user = {name:'ellie', age:'20'};
const user2 = user;
user2.name = 'coder';
console.log(user);
//old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.log(user3);
//new way
const user4={};
Object.assign(user4,user);
console.log(user4);

//another example
const fruit1 = {color :'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({},fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
