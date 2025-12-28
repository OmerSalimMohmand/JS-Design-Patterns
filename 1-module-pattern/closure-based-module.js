//---The original Module Pattern (closure-based)

const Counter = (function () {
  count = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    decrement,
    getCount,
  };
})();

Counter.increment();
console.log(Counter.getCount());
