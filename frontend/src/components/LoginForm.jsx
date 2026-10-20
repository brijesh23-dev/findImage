import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuthErrorMessage, loginUser } from "../api/AuthApi.js";
import { useAuth } from "../context/useAuth.js";
import AuthFormFields from "./AuthFormFields.jsx";

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { authenticate } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);
    const credentials = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    );

    try {
      const response = await loginUser(credentials);
      authenticate(response.user);
      navigate(location.state?.from || "/", { replace: true });
    } catch (error) {
      //console.error("Login failed:", error);
      setErrorMessage(getAuthErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthFormFields
      isRegistering={false}
      isSubmitting={isSubmitting}
      errorMessage={errorMessage}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginForm;
