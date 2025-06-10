// Constructor function for Scooter
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

// Constructor function for Driver
function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

// Constructor function for PickupLocation
function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}

// Example instances
const scooter1 = new Scooter(2022, "red", "X2");
const driver1 = new Driver("Alice", 30, "5 years");
const pickup1 = new PickupLocation("123 Main St", "New York");

// Export if needed for testing
module.exports = { Scooter, Driver, PickupLocation };
