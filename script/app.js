//just input element
let kelvin = document.querySelector('#input-kelvin');
let celsius = document.querySelector('#input-celsius');
let fahrenheit = document.querySelector('#input-fahrenheit');

//decorate element bg-cl
let kelvinColor = document.querySelector('.kelvin__tube--color');
let celsiusColor = document.querySelector('.celsius__tube--color');
let fahrenheitColor = document.querySelector('.fahrenheit__tube--color');



//function change input value
const handleChange = (e) => {
    switch (e.target) {
        case kelvin:
            celsius.value = +(kelvin.value) - 273
            fahrenheit.value = Math.floor(celsius.value * (9/5) + 32)
            break;
        case celsius:
            kelvin.value = +(celsius.value) + 273
            fahrenheit.value = Math.floor(celsius.value * (9 / 5) + 32)
            break;
        case fahrenheit:
            celsius.value = (fahrenheit.value - 32) *  5/9 
             kelvin.value = +(celsius.value) + 273
        default:
            break;
    }
    
    
    fahrenheitColor.style.height = fahrenheit.value + 'px'
    //celsius
    if (celsius.value >= 500) {
        celsiusColor.style.height = 496 + 'px'  
    } else if (celsius.value <= 0) {
         celsiusColor.style.height = 0 + 'px'
    } else {
        celsiusColor.style.height = celsius.value + 'px'
    }
    //kelvin
    if (kelvin.value >= 500) {
        kelvinColor.style.height = 496 + 'px'  
    } else if (kelvin.value <= 0) {
         kelvinColor.style.height = 0 + 'px'
    } else {
        kelvinColor.style.height = kelvin.value + 'px'
    }

    //fahrenheit
    if (fahrenheit.value >= 500) {
        fahrenheitColor.style.height = 496 + 'px'  
    } else if (fahrenheit.value <= 0) {
         fahrenheitColor.style.height = 0 + 'px'
    } else {
        fahrenheitColor.style.height = fahrenheit.value + 'px'
    }
}

document.body.addEventListener('change', handleChange)
