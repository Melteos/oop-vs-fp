// Observer Interface
interface WeatherObserver {
    update(temperature: number): void;
}

// Concrete Observers
class PhoneApp implements WeatherObserver {
    update(temperature: number): void {
        console.log(`PhoneApp: Temperature updated to ${temperature}°C`);
    }
}

class Website implements WeatherObserver {
    update(temperature: number): void {
        console.log(`Website: Temperature updated to ${temperature}°C`);
    }
}

class DigitalBoard implements WeatherObserver {
    update(temperature: number): void {
        console.log(`DigitalBoard: Temperature updated to ${temperature}°C`);
    }
}

// Publisher (WeatherStation)
class WeatherStation {
    private observers: WeatherObserver[] = [];
    private temperature: number = 0;

    subscribe(observer: WeatherObserver): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: WeatherObserver): void {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    setTemperature(temp: number): void {
        this.temperature = temp;
        this.notifyObservers();
    }

    private notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}

// Client Code
const weatherStation = new WeatherStation();

const phoneApp = new PhoneApp();
const website = new Website();
const digitalBoard = new DigitalBoard();

weatherStation.subscribe(phoneApp);
weatherStation.subscribe(website);
weatherStation.subscribe(digitalBoard);

weatherStation.setTemperature(25); // All observers are notified
weatherStation.setTemperature(30); // All observers are notified