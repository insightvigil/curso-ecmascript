const anotherFunction = () => {
    return new Promise((resolve,reject) => {
        (true) ? resolve('Hey!') : reject('Oh no!') 
    }) 

}

const anotherFunction2 = () => { 
    return new Promise((resolve,reject) => {
        (false) ? resolve('Oh yes') : reject('Oh no')
    })
}

const anotherFunction3 = () => {
    return new Promise((resolve,reject) => {
        (true) ? resolve('Hey!') : reject('Oh no!')
    }) 

}

//Captura la primera promesa que se cumpla 
Promise.any([anotherFunction(),anotherFunction2(),anotherFunction3()]).then(response => console.log(response))