import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuthErrorMessage, logoutUser } from "../api/AuthApi.js";
import { clearCollection } from "../features/collectionSlice.js";
import { clearSearch } from "../features/searchSlice.js";
import { useAuth } from "../context/useAuth.js";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { clearAuthentication } = useAuth();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logoutUser();
      clearAuthentication();
      dispatch(clearCollection());
      dispatch(clearSearch());
      navigate("/login", { replace: true });
    } catch (error) {
      toast.error(getAuthErrorMessage(error));
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <button
      className="inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-md border border-teal-700 px-4 text-sm font-semibold text-teal-800 transition-colors hover:bg-teal-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-wait disabled:opacity-60 dark:border-teal-300 dark:text-teal-200 dark:hover:bg-neutral-800"
      disabled={isLoggingOut}
      onClick={handleLogout}
      type="button"
    >
      <FiLogOut aria-hidden="true" />
      {isLoggingOut ? "Logging out..." : "Log out"}
    </button>
  );
};

export default LogoutButton;
