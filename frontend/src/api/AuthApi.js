import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_KEY || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

export async function loginUser(credentials) {
  const response = await Api.post("/login", credentials, {
    withCredentials: true,
  });
  return response.data;
}

export async function registerUser(credentials) {
  const response = await Api.post("/register", credentials, {
    withCredentials: true,
  });
  return response.data;
}

export async function getCurrentUser() {
  const response = await Api.get("/profile");
  return response.data;
}

export async function logoutUser() {
  const response = await Api.post("/logout");
  return response.data;
}

export function getAuthErrorMessage(error) {
  const serverMessage =
    typeof error.response?.data?.message === "string"
      ? error.response.data.message
      : "";
  const knownMessages = {
    "Email registered nahi hai.":
      "We couldn't find an account with that email. Check it or create an account.",
    "galat password dala hai.": "That password doesn't match. Try again.",
    "User already exists.":
      "An account with that email already exists. Sign in instead.",
  };

  return (
    knownMessages[serverMessage] ||
    serverMessage ||
    (error.response
      ? "The server couldn't complete that request. Please try again."
      : "Couldn't connect to the server. Check that the backend is running and try again.")
  );
}
