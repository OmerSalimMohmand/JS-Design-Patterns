const pricingStrategies = {
  guest: (price) => price,
  member: (price) => price * 0.9,
  vip: (price) => price * 0.8,
}; //Interchangeable behaviors encapsulation to avoid if-else

pricingStrategies.student = (price) => price * 0.7;

function calculatePrice(userType, price) {
  const strategy = pricingStrategies[userType]; // Selecting the appropriate behavior for the userType
  return strategy(price); // Execute behavior
}

const memberPrice = calculatePrice("member", 100);
const studentPrice = calculatePrice("student", 100);
console.log(memberPrice);
console.log(studentPrice);
