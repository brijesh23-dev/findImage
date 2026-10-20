import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiAperture,
  FiArrowLeft,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { loginUser, registerUser } from "../api/AuthApi.js";

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const credentials = Object.fromEntries(formData.entries());
    console.log("Credentials:", credentials);

    try {
      if (isRegistering) {
        await registerUser(credentials);
      } else {
        await loginUser(credentials);
      }

      navigate("/", { replace: true });
    } catch (error) {
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

      setErrorMessage(
        knownMessages[serverMessage] ||
          serverMessage ||
          "We couldn't reach MediaSearch. Check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const switchMode = (registering) => {
    setIsRegistering(registering);
    setErrorMessage("");
  };

  return (
    <main className="auth-page">
      <aside className="auth-art-panel" aria-label="Discover inspiring imagery">
        <img
          className="auth-art-background"
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=85"
          alt=""
        />
        <div className="auth-art-shade" />
        <Link to="/" className="auth-brand">
          <span className="auth-brand-icon" aria-hidden="true">
            <FiAperture />
          </span>
          <span>MediaSearch</span>
        </Link>

        <img
          className="auth-floating-photo auth-floating-photo-one"
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=420&q=80"
          alt=""
        />
        <img
          className="auth-floating-photo auth-floating-photo-two"
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=420&q=80"
          alt=""
        />

        <div className="auth-art-copy">
          <h1>Find the image that feels like yours.</h1>
          <p>
            Search photos, videos, and GIFs. Save the ones you want to come
            back to.
          </p>
        </div>
        <span className="auth-art-credit">A little inspiration, every day.</span>
      </aside>

      <section className="auth-form-panel">
        <div className="auth-form-wrap">
          <div className="auth-form-heading">
            <p className="auth-welcome">
              {isRegistering ? "Start your collection" : "Welcome back"}
            </p>
            <h2>
              {isRegistering ? "Create your account" : "Good to see you again."}
            </h2>
            <p className="auth-intro">
              {isRegistering
                ? "One account for every image you want to keep close."
                : "Sign in to pick up right where your inspiration left off."}
            </p>
          </div>

          <div className="auth-mode-switch" aria-label="Choose account action">
            <button
              className={!isRegistering ? "is-selected" : ""}
              type="button"
              aria-pressed={!isRegistering}
              onClick={() => switchMode(false)}
            >
              Sign in
            </button>
            <button
              className={isRegistering ? "is-selected" : ""}
              type="button"
              aria-pressed={isRegistering}
              onClick={() => switchMode(true)}
            >
              Create account
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {isRegistering && (
              <label className="auth-field">
                <span>Your name</span>
                <input
                  autoComplete="name"
                  name="name"
                  placeholder="Alex Morgan"
                  required
                  type="text"
                />
              </label>
            )}

            <label className="auth-field">
              <span>Email address</span>
              <input
                autoComplete="email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>

            <label className="auth-field">
              <span>Password</span>
              <span className="auth-password-control">
                <input
                  autoComplete={isRegistering ? "new-password" : "current-password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                  type={showPassword ? "text" : "password"}
                />
                <button
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="auth-password-toggle"
                  onClick={() => setShowPassword((visible) => !visible)}
                  type="button"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </span>
            </label>

            {errorMessage && (
              <p className="auth-error" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              className="auth-submit"
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting
                ? isRegistering
                  ? "Creating account..."
                  : "Signing in..."
                : isRegistering
                  ? "Create account"
                  : "Sign in"}
            </button>
          </form>

          <Link className="auth-back-link" to="/">
            <FiArrowLeft aria-hidden="true" />
            Back to exploring
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
