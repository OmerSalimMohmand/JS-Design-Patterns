const pricingStrategies = {
  guest: (price) => price,
  member: (price) => price * 0.9,
  vip: (price) => price * 0.8,
};

function createPricingStrategy(type) {
  return pricingStrategies[type];
}

const strategy = createPricingStrategy("member");
console.log(strategy(100));
