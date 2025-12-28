//---Factories are often inside modules

// import { createUser } from "./userFactory.js";

// const admin = createUser("admin", "Lima");
// console.log(admin);

import * as UserCreator from "./userFactory.js";

console.log(typeof UserCreator);
console.log(UserCreator);

const admin = UserCreator.createUser("admin", "Lima");
console.log(admin);
