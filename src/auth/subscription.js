export function isProUser() {
  // simplest: store "pro" flag in localStorage after checkout
  return localStorage.getItem("plan") === "pro";
}

// helper for testing
export function setProUser(value) {
  localStorage.setItem("plan", value ? "pro" : "free");
}
