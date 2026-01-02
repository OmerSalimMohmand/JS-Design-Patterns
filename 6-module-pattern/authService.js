let currentUser = null;

function login(user) {
  currentUser = user;
}

function logout() {
  currentUser = null;
}

function getUser() {
  return currentUser;
}

// module.exports = { login, logout, getUser }; //CommonJS syntax
export { login, logout, getUser }; // ES modules syntax
