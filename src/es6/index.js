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

//Arrow functions 

const name = [
    {name: 'Andres', age: 25},
    {name: 'Yesica', age: 27}
]

let  listOfNames = names.map(function (item) {
    console.log(tiem.name);
})

//es6

let listOfNames2 = names.map (item => console.log(item.name));

const listOfNames3 = (name, age, country) => { 
    // ...
}

const listOfNames4 =name => {
    // ...
}

const square = num => num * num;

//Promises

const helloPromise = () => {
    return new Promise((resolve, reject) => { 
        if (false) { 
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

    // Clases, Módulos y Generadores
    class calculator {
        constructor(){
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB) {
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }
    
    const calc = new calculator ();
    console.log(calc.sum(2,2));

    import { hello } from './module';

    hello();

    function* helloWorld () {
        if (true) {
            yield 'Hello, ';
        }
        if (true) {
            yield 'World';
        }
    };


const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);



     