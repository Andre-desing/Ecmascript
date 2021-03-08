function newFunction(name, age, country) {
    var name= name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age =32, country = "MX") {
    console.log(name, age, country);
};

newFunction2 ();
newFunction2('Ricardo', '23', 'CO');
 

let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 =   `${hello} ${world}`;
console.log(epicPhrase2);

 //Antes de  ES6 era así

 let lorem ="This is an epic quote \n"
 + "this is another epic quote we'll need."

 //Así es despues de ES6 

 let lorem2 = `another epic quote we'll need
now this is another epic quote
 `;

console.log(lorem);
console.log(lorem2); 

//before es6

let person = {
    'name' : 'oscar',
    'age' : 32,
    'country' : 'MX'
}

console.log(person.name, person. age);

// after es6

let { name}= person;
console.log(name);

// before

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila'];

// after

let education = ['David', ...team1, ...team2];

console.log(education);

// uso de let

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalVar);

//It's been added also conts so that we make sure some values remain the same

const a = 'b';
a = 'a';

// 


let name = 'Andres';
let age = 25; 

//before es5

obj = { name: name, age: age };

//after es5
obj2 = { name, age};
console.log(obj2);