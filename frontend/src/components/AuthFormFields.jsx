import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AuthFormFields = ({
  isRegistering,
  isSubmitting,
  errorMessage,
  onSubmit,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="auth-form" onSubmit={onSubmit}>
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
  );
};

export default AuthFormFields;
