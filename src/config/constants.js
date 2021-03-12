export const API_URL =
  process.env.NODE_ENV === "production"
    ? "http://grab-market-server-inf.herokuapp.com"
    : "http://localhost:8080";
