import axios from "axios";

export async function loginUser(credentials) {
  const response = await axios.post("/api/login", credentials, {
    withCredentials: true,
  });
  return response.data;
}

export async function registerUser(credentials) {
  const response = await axios.post("/api/register", credentials, {
    withCredentials: true,
  });
  return response.data;
}
