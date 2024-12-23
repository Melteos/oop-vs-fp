type Observer = (temperature: number) => void;

// Publisher (WeatherStation)
const createWeatherStation = () => {
    let observers: Array<Observer> = [];
    let temperature = 0;

    return {
        subscribe: (observer: Observer) => {
            observers.push(observer);
        },
        unsubscribe: (observer: Observer) => {
            observers = observers.filter((obs) => obs !== observer);
        },
        setTemperature: (temp: number) => {
            temperature = temp;
            observers.forEach((observer) => observer(temperature));
        },
    };
};

// Client Code
const weatherStation = createWeatherStation();

const phoneApp: Observer = (temp: number) => {
    console.log(`PhoneApp: Temperature updated to ${temp}°C`);
};
const website: Observer = (temp: number) => {
    console.log(`Website: Temperature updated to ${temp}°C`);
};
const digitalBoard: Observer = (temp: number) => {
    console.log(`DigitalBoard: Temperature updated to ${temp}°C`);
};

weatherStation.subscribe(phoneApp);
weatherStation.subscribe(website);
weatherStation.subscribe(digitalBoard);

weatherStation.setTemperature(25); // All observers are notified
weatherStation.setTemperature(30); // All observers are notified