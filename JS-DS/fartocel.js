//To convert temperature from Fahrenheit to Celsius, you can use the following formula:



function fahrenheitToCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

const fahrenheitTemperature = 32;
const celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
console.log(`${fahrenheitTemperature}°F is ${celsiusTemperature}°C`);
