// Define types
type Phone = {
    makeCall: () => void;
};

// Factory function
const phoneFactory = (type: string): Phone => {
    switch (type.toLowerCase()) {
        case 'samsung':
            return {
                makeCall: () => console.log("Making a call with Samsung phone.")
            };
        case 'iphone':
            return {
                makeCall: () => console.log("Making a call with iPhone.")
            };
        default:
            throw new Error("Invalid phone type.");
    }
};

// Usage
const samsungPhone = phoneFactory('samsung');
samsungPhone.makeCall(); // Making a call with Samsung phone.

const iPhone = phoneFactory('iPhone');
iPhone.makeCall(); // Making a call with iPhone.
