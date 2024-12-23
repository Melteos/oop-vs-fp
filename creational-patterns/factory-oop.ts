// Product interface
interface Phone {
    makeCall(): void;
}

// Concrete products
class SamsungPhone implements Phone {
    makeCall() {
        console.log("Making a call with Samsung phone.");
    }
}

class IPhone implements Phone {
    makeCall() {
        console.log("Making a call with iPhone.");
    }
}

// Factory class
class PhoneFactory {
    createPhone(type: string): Phone {
        switch (type.toLowerCase()) {
            case 'samsung':
                return new SamsungPhone();
            case 'iphone':
                return new IPhone();
            default:
                throw new Error("Invalid phone type.");
        }
    }
}

// Usage
const factory = new PhoneFactory();

const samsungPhone = factory.createPhone('samsung');
samsungPhone.makeCall(); // Making a call with Samsung phone.

const iPhone = factory.createPhone('iPhone');
iPhone.makeCall(); // Making a call with iPhone.
