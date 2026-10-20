import Tabs from "../components/Tabs.jsx";
import ResultGrid from "../components/ResultGrid.jsx";
import SearchBox from "../components/SearchBox.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeHook } from "../hook/ThemeHook.jsx";
import { CiHeart } from "react-icons/ci";
import LogoutButton from "../components/LogoutButton.jsx";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Homepage = () => {
  const { query } = useSelector((store) => store.search);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <header className="mode relative z-20 flex min-h-[70px] flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 font-Inter font-light tracking-tighter sm:px-6">
        <Link
          className="shrink-0 text-lg font-semibold tracking-tight"
          to="/"
          onClick={closeMenu}
        >
          MediaSearch
        </Link>

        <div className="order-3 w-full min-w-0 sm:order-none sm:w-auto sm:flex-1 sm:px-4 lg:max-w-xl">
          <SearchBox />
        </div>

        <div className="static flex shrink-0 items-center gap-3 sm:relative sm:gap-5">
          <button
            type="button"
            className="inline-grid size-11 place-items-center rounded-md sm:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={`${isMenuOpen ? "flex" : "hidden"} absolute right-4 top-[calc(100%+0.5rem)] min-w-56 flex-col items-stretch gap-2 rounded-xl border border-teal-900/10 bg-teal-50 p-3 shadow-lg dark:border-white/10 dark:bg-neutral-900 sm:static sm:flex sm:min-w-0 sm:flex-row sm:items-center sm:gap-5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
          >
            <Link
              className="flex min-h-11 items-center rounded-md px-3 sm:px-0"
              to="/"
              onClick={closeMenu}
            >
              Search
            </Link>
            <Link
              className="flex min-h-11 items-center gap-2 rounded-md px-3 sm:px-0"
              to="/collection"
              onClick={closeMenu}
            >
              <CiHeart aria-hidden="true" className="text-xl" />
              Collection
            </Link>
            <LogoutButton />
            <div className="flex min-h-11 items-center px-3 sm:px-0">
              <ThemeHook />
            </div>
          </nav>
        </div>
      </header>
      {!query ? (
        ""
      ) : (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      )}
    </div>
  );
};

export default Homepage;
