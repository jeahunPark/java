//1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

//2. Nemeric operators
console.log(1+1); //add 더하기
console.log(1-1); //substract 빼기
console.log(1/1); //divide나누기
console.log(1*1); //multiply 곱하기
console.log(5%2); //remainder 나머지
console.log(2**3); //expenentiation 제곱

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter +1;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
console.log(x+=y); //x=x+y
console.log(x-=y); //x=x-y
console.log(x*=y); //x=x*y
console.log(x/=y); //x=x/

//5. Comparison operators
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

//6. Logical operators : || (or), && (and), !(not)
const value1 = false;
const value2 = 4<2;
//||(or)
console.log(`or:${value1 || value2 || check()}`);

//&&(and)
console.log(`and:${value1 && value2 && check()}`);
function check(){
    for(let i=0; i<10;i++){
        console.log('haha');
    }
    return true;
}

//!(not)
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;
//==type은 신경쓰지 않음, ===type까지 신경씀

//8. Conditional operators : if
const name = 'df';
if(name==='ellie'){
    console.log('welcome, Ellie!');
}else if (name==='coder'){
    console.log('you are coder');
}else{
    console.log('unknown');
}

//9. Ternary operator:?
//conditon ? value1 : value2;
console.log(name==='ellie'?'yes' : 'no');

//10. switch statement
//use for multiple if checks
const browser = 'IE';
switch(browser){
    case 'IE' : console.log('Internet Explorer');
    break;
    case 'Chrome' : console.log('Google Chrome');
    break;
    case 'Firefox' : console.loig('Fire');
    break;
    default : console.log('same all');
    break;
}

//11. Loops
let i=3;
while(i>0){
    console.log(`while : ${i}`);
    i--;
}

do{ console.log(`do while : ${i}`);
i--;
} while (i>0);

//for loop
for(i=3; i>0;i--){
    console.log(`for : ${i}`);
}

for(i=3; i>0; i=i-2){
    console.log(`inline variable for:${i}`);
}

//continue
//Q1. 0부터 10까지 짝수 출력
for(i=0;i<11;i++){
    if(i%2 !==0){
    continue;
}
console.log(i);
}
//break
//Q1. 0부터 10까지 숫자 출력
for(i=0;i<11;i++){
    if(i> 8){
    break;
}
console.log(i);
}