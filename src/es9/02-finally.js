//Promise

const anotherFunction = () => {
    return new Promise((resolve,reject) => {
        if(false) {
            resolve('Hey!')
        }
        else {
            reject('Oh no!')
        }
    }) 

}

//Esta función nos da un response
anotherFunction().then(respone => { console.log("Finalizado con éxito")}).catch(err => console.log("Falló"))
.finally(() => console.log("Todo se acabo"))