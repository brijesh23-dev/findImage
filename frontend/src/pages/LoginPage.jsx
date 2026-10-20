import { useState } from "react";
import { Link } from "react-router-dom";
import { FiAperture } from "react-icons/fi";
import LoginForm from "../components/LoginForm.jsx";
import SignupForm from "../components/SignupForm.jsx";

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const switchMode = (registering) => {
    setIsRegistering(registering);
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
        <Link to="/login" className="auth-brand">
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

          {isRegistering ? <SignupForm /> : <LoginForm />}

          <p className="auth-gate-note">
            Sign in or create an account to search and save media.
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
