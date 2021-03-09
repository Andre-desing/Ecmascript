const obj = {
    name: 'Andres',
    age: 32, 
    country: 'MX'
};

let { country, ...all } = obj;
console.log(all);

const obj = {
    name: 'Andres',
    age: 32, 
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1);




const helloWorld = () => {
    return new Promise((resolve, reject) => {
    (true)
    ? resolve('hello World')
    : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))
