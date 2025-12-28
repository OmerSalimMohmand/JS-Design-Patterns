export function createUser(type, name) {
  if (type === "admin") {
    return {
      name,
      role: "admin",
      permissions: ["read", "write", "delete"],
    };
  }

  if (type === "guest") {
    return {
      name,
      role: "guest",
      permissions: ["read"],
    };
  }

  throw new Error("Unknown user type");
}
