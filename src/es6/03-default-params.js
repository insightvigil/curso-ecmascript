//Tradicional

function newUser(name,age,number){
    var name = name || 'Oscar'
    var age = age || 34;
    number = number || '552854'

    console.log(name,age,number)
}

newUser(); //La función creará un usuario por default

//Default parameters New
const newUser1 = (nameU = 'User', age = 34, number = '552854') => {
    console.log(nameU,age,number)

} 

newUser1();