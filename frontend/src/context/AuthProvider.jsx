import { useEffect, useRef, useState } from "react";
import { getCurrentUser } from "../api/AuthApi.js";
import { AuthContext } from "./AuthContext.js";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  const sessionVersion = useRef(0);

  useEffect(() => {
    let isActive = true;
    const requestVersion = sessionVersion.current;

    getCurrentUser()
      .then(({ user: currentUser }) => {
        if (isActive && requestVersion === sessionVersion.current) {
          setUser(currentUser);
        }
      })
      .catch((requestError) => {
        if (!isActive || requestVersion !== sessionVersion.current) return;

        if (requestError.response?.status === 401) {
          setUser(null);
          return;
        }

        setError(
          "We couldn't verify your sign-in. Check your connection and try again.",
        );
      })
      .finally(() => {
        if (isActive && requestVersion === sessionVersion.current) {
          setIsLoading(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, [attempt]);

  const retry = () => {
    setIsLoading(true);
    setError("");
    setAttempt((currentAttempt) => currentAttempt + 1);
  };
  const authenticate = (authenticatedUser) => {
    sessionVersion.current += 1;
    setUser(authenticatedUser);
    setError("");
    setIsLoading(false);
  };
  const clearAuthentication = () => {
    sessionVersion.current += 1;
    setUser(null);
    setError("");
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticate,
        clearAuthentication,
        isLoading,
        error,
        retry,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
