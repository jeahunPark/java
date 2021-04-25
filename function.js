//1. function declaration(함수 선언문)
//function name(parameter1,parameter2){ body...return;}
//naming : doSomething, command, verb
//function is object in JS
function printHello(){
    console.log('hello');
}
printHello();

//2. parameters
//premitive parameters : passed by value
//object parameters : passed by reference
function changeName(obj){
    obj.name='coder'
}
const ellie ={name : `ellie`};
changeName(ellie);
console.log(ellie);

//3. Default parameters
function showMessage(message,from='unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. rest parameters
function printAll(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
}
printAll('dream','coding','ellie');

// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage) //error : childMessage는 괄호 안에서 선언되었기 때문
}
printMessage();

//6. return a value
function sum(a,b) {
    return a+b;  //return 타입이 없는 함수는 return undefined가 생략된 것
}
const result = sum(1,2); //3
console.log(`sum : ${result}`);

//7. Early return, early exit
function ungradeUser(user){
    if(user.point >10){

    }
} // bad

function ungradeUser(user){
    if(user.point <=10){
        return;
    }
} //good


//1. function expression(함수표현식)
//a function declaration can be called earlier than it is defined.
//a function expression is created when the execution reaches it.
const print = function(){
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,2));

//2. callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer ==='love you'){
    printYes();
}else{
    printNo();
}
}
const printYes = function(){
    console.log('yes');
}
const printNo = function print(){
    console.log('no');
}
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

//Arrow function (anonymous function)
const simplePrint = function(){
    console.log('simplePrint');
}
// const simplePrint = () => console.log('simplePrint');

//Immediately Invoked Function Expression
function hello(){
    console.log('IIFE');
}
hello();
//아래위 동일
(function hello(){
    console.log('IIFE');
})();

//Q1.
function calculate(command,a,b){
    switch (command){
        case 'add' :
            return a+b;
        case 'substract' :
            return a-b;
        case 'divide' :
            return a/b;
        case 'multiply' :
            return a*b;
        case 'remainder' :
            return a%b;
        default : 
        throw Error('unknown command');
    }
}
console.log(calculate('add',2,3));