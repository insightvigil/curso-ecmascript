//Traditional form with generators
/*
async function* anotherGenerator() {
    yield await Promise.resolve(10);
    yield await Promise.resolve(20);
    yield await Promise.resolve(30);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');
*/
const arrayN = ['Vigil', 'Paola', 'Miguel']
//Async and await of
async function arrayOfNames(array) {
    for await(let value of array) {
        console.log(value)
    }
}

arrayOfNames(arrayN)