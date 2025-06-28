//Spread with Objects
const user = {username:'insight', age: 26, country: 'MX'}

const {username, ...otherValues} = user

console.log(username)
console.log(otherValues)