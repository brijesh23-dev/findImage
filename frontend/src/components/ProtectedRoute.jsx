import { Link, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth.js";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading, error, retry } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <main
        className="mode grid min-h-screen place-items-center px-6"
        role="status"
      >
        Checking your sign-in...
      </main>
    );
  }

  if (error) {
    return (
      <main className="mode grid min-h-screen place-items-center px-6">
        <section className="max-w-md text-center" role="alert">
          <h1 className="text-2xl font-semibold">Can't verify your sign-in</h1>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            {error}
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              className="min-h-11 rounded-md bg-teal-700 px-5 text-sm font-semibold text-white hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:bg-teal-300 dark:text-neutral-950"
              onClick={retry}
              type="button"
            >
              Try again
            </button>
            <Link
              className="inline-flex min-h-11 items-center rounded-md px-4 text-sm font-semibold text-teal-800 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:text-teal-200"
              to="/login"
            >
              Log in
            </Link>
          </div>
        </section>
      </main>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return children;
};

export default ProtectedRoute;
