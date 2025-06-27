//enhanced object literals 

//Traditional version  
function newUser(user, age, country) {
    return {
        user:user,
        age:age,
        country:country
    }
}

//Enhanced version 
function newUser(user, age, country) {
    return {
        user,
        age,
        country
    }
}