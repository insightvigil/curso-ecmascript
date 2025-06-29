//Classes

class User {
    constructor(property, property1) {
        this.property = property
        this.property1 = property1
        //properties attributes
    }

    //methods

    #greeting() {
        return `Hello ${this.property}`
    }

    get #uAge() {
        return this.property1
    }

    set #uAge(age) {
        this.age = age
    }
}

//Instancia de una clase
const newUser = new User('Adrian',10);

console.log(newUser.greeting() + newUser.property1);

console.log(newUser.uAge);
console.log(newUser.uAge = 20);

//Setters and Getters Privados son identificados con la almohadilla #