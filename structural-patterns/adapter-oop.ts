// Legacy API providing temperature in Fahrenheit
class FahrenheitSensor {
    getTemperature(fahrenheitTemperature: number): number {
        return fahrenheitTemperature; // returns temperature in Fahrenheit
    }
}

// Target interface for expected Celsius data
interface CelsiusSensor {
    getTemperature(fahrenheitTemperature: number): number;
}

// Adapter class to convert Fahrenheit to Celsius
class TemperatureAdapter implements CelsiusSensor {
    private fahrenheitSensor: FahrenheitSensor;

    constructor(fahrenheitSensor: FahrenheitSensor) {
        this.fahrenheitSensor = fahrenheitSensor;
    }

    getTemperature(fahrenheitTemperature: number): number {
        // Convert Fahrenheit to Celsius
        return ((this.fahrenheitSensor.getTemperature(fahrenheitTemperature) - 32) * 5) / 9;
    }
}

// Usage
const fahrenheitSensor = new FahrenheitSensor();
const temperatureAdapter = new TemperatureAdapter(fahrenheitSensor);
console.log(temperatureAdapter.getTemperature(86)); // Output in Celsius