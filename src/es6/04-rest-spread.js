//Arrays destructuring 

let fruits = ['Apple', 'Banana', 'Oranges']
let [fa, fb, fc] = fruits;

console.log(fa,fb,fc)

let user = {
    name: 'Vigil',
    password:  '123'
}

let {name, password} = user
console.log(`Hola mi nombre es ${name} y mi pass es ${password}`)