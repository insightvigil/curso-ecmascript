//Arrays destructuring 

let fruits = ['Apple', 'Banana', 'Oranges']
let [fa, fb, fc] = fruits;

console.log(fa,fb,fc)


//Object destructuring 
let user = {
    name: 'Vigil',
    password:  '123'
}

let {name, password} = user
console.log(`Hola mi nombre es ${name} y mi pass es ${password}`)


//Spread Operator ...
let user1 = {
    name: 'Oscar',
    password:  '2'
}

let country = 'MX'

let newUser1 = {...user1, country}
console.log(newUser1)

// rest
function sum(num,...values) {
    return console.log(num + values)
}

sum(10,10,10,10,10)