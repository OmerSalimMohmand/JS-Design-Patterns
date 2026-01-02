//---Extending the behavior, by adding a new layer, without changing the original

function saveUser(user) {
  console.log("user saved: ", user);
}

function withLogging(fn) {
  return (...args) => {
    console.log("user logged: ", ...args);
    fn(...args);
  };
}

const loggedSaveUser = withLogging(saveUser);
loggedSaveUser({ id: 1, name: "omer" });
