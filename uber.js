// UberCalculator 
class UberCalculator {
    constructor(distance, time) {
        this.distance = distance; 
        this.time = time; 
    }

    calculatePrice() {
        
        const baseFare = 75;  
        const ratePerKm = 7;
        const ratePerMin = 1.2; 
        const fare = baseFare + (this.distance * ratePerKm) + (this.time * ratePerMin);
        return fare;
    }
}

const distance = 10; 
const time = 15; 
const uberCalculator = new UberCalculator(distance, time);
const price = uberCalculator.calculatePrice();
console.log("Uber Price:", price.toFixed(2), "INR");

// OUTPUT: Uber Price: 163.00 INR

