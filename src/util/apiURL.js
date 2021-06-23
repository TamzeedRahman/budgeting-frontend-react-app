export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3003"
    : "https://morning-sands-53723.herokuapp.com";
};
