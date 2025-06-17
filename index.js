// Scooter constructor
function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

// Driver constructor
function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

// PickupLocation constructor
function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}

// Export all constructors if needed by tests
module.exports = {
  Scooter,
  Driver,
  PickupLocation
};