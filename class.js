//class : template
//object : instance of a clss
//Javascript classes
//1. class declarations
class Person {
    //constructor
    constructor(name,age){
        //fields
        this.name = name;
        this.age = age;
    }
//methods
speak(){
    console.log(`${this.name} : hello`);
}
}
const ellie = new Person('ellie',30);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and Setter
class User{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
       return this._age;
    }
    set age(value){
        //if(value<0){
        //    throw Error('age can not be negative');
        //}
       this._age = value<0 ? 0 : value;
    }
}
const user1 = new User('steve', 'job',-1);
console.log(user1.age);

//3. Inheritance
// way for one class to extend another class.
class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width *this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        console.log('ㅅ');
    }
    getArea(){
        return (this.width * this.height)/2;
    }
}
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

//4. Class checking instanceOf
console.log(rectangle instanceOf Rectangle);
console.log(triangle instanceOf Rectangle);
console.log(triangle instanceOf Triangle);
console.log(triangle instanceOf Shape);
console.log(triangle instanceOf object);

