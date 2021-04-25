//2. Variable, rw(read/write)
//let
let globalName = 'global name';
{let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

//