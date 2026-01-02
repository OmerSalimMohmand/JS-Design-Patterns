// const AuthService = require("./authService") // CommonJS syntax
import * as AuthService from "./authService.js"; // ES modules syntax

AuthService.login({ id: 1, name: "omer" });
console.log(AuthService.getUser());
