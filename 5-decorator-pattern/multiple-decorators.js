const saveUser = (user) => {
    console.log("user saved: ", user);
    return true;
};

const withLogging = (fn) => {
  return (...args) => {
    console.log("user logged: ", ...args);
    return fn(...args);
  };
};

const withAuth = fn => (...args) => {
    isAuthenticated = () => args[0].name === "omer" //Simple logic
    if (!isAuthenticated())
        throw new Error("Unauthorized");
    console.log("user authenticated: ", ...args)
    return fn(...args);
};

const withValidation = fn => (...args) => {
  console.log("user validated: ", ...args)
  return fn(...args);
};

const enhancedSaveUser = withAuth(withValidation(withLogging(saveUser)));
enhancedSaveUser({ id: 1, name: "omer" });