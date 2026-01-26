const user = {
  id: 1,
  name: "Omer   ",
};
const normalize = (user) => ({ ...user, name: user.name.trim() });
const validate = (user) => (user.name ? user : new Error("Invalid user"));
const save = (user) => console.log("User saved:", user);

const register = (user) => save(validate(normalize(user)));

register(user);
