// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// de dolar a yen
function fromDollarToYen(dollar){
    const euros = dollar / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return yenes;
}
// de euro a dolar
function fromEuroToDollar(euros){
    return euros * oneEuroIs.USD 
}
// de yen a Libras
function fromYenToPound(yenes){
    const euro = yenes / oneEuroIs.JPY;
    const pounds = euro * oneEuroIs.GBP;
    return pounds;
}

console.log(fromDollarToYen(1)); // 146.26168224299064
console.log(fromEuroToDollar(1)); // 1.07
console.log(fromYenToPound(1)); // 0.00555984555984556

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }