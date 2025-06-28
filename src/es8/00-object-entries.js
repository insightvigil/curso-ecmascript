//Object.entries(Object)
const countries = {MX:'Mexico', CO:'Colombia', CL:'Chile', PE:'Peru'}

console.log(Object.entries(countries))

//Object.fromEntries(tuplasArray)
const ACountries = [['MX','México'],['CO','Colombia'],['CL','Chile']];

console.log(Object.fromEntries(ACountries))

//Result { MX: 'México', CO: 'Colombia', CL: 'Chile' }