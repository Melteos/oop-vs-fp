// Legacy function providing temperature in Fahrenheit
const getTemperatureFahrenheit = (fahrenheitTemperature: number): number => fahrenheitTemperature; // temperature in Fahrenheit

// Adapter function to convert Fahrenheit to Celsius
const convertFahrenheitToCelsius = (fahrenheit: number): number =>
    ((fahrenheit - 32) * 5) / 9;

// Usage
const getTemperatureCelsius = (fahrenheitTemperature: number) => convertFahrenheitToCelsius(getTemperatureFahrenheit(fahrenheitTemperature));
console.log(getTemperatureCelsius(86)); // Output in Celsius