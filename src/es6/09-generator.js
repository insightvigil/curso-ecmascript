//Generator
function* iterate(array){
    for(let value of array) {
        yield value;
    }
}


const it = iterate(['Oscar','Vigil','Ana','Freddy']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);