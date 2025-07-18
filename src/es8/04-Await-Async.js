const fnAsync = () => {
    return new Promise((resolve,reject) => {
        (true) 
        ? setTimeout(() => { resolve('Async')},4000) 
        : reject(new Error('Error!'));
    })
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something)
    console.log("Terminado")
}

console.log('Before')
anotherFn()
console.log('After')