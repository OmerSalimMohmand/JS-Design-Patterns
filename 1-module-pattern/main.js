//---Modern JavaScript Module Pattern (ES Modules)
// import { increment, getCount, decrement } from "./counter.js";

// increment();
// increment();
// increment();
// decrement();
// console.log(getCount());

import * as Counter from "./counter.js";

Counter.increment();
console.log(Counter.getCount());
