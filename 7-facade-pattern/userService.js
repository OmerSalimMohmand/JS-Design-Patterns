import { validate } from "./validation.js";
import { save } from "./repo.js";
import { sendWelcomeEmail } from "./email.js";

export function register(user) {
  validate(user);
  save(user);
  sendWelcomeEmail(user);
}
