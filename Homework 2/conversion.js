function convertMilesToKm(miles) {
    return miles * 1.6
}
console.log("Miles to kilimeters", convertMilesToKm(1))

// 2
function convertCelsuisToFahrenheit(celsuis) {
    return celsuis * 1.8
}
console.log("Celsuis to Fahrenheit", convertCelsuisToFahrenheit(1))

//3
function convertPoundsToKilogram(pounds){
    return pounds * 0.45
}
console.log("Pounds to Kilograms", convertPoundsToKilogram(1))

//4
function convertFeetToMetres(feet){
    return feet * 0.3
}
console.log("Feet to metres", convertFeetToMetres(1))

module.exports = {
    convertCelsuisToFahrenheit,
    convertFeetToMetres,
    convertMilesToKm,
    convertPoundsToKilogram,
}