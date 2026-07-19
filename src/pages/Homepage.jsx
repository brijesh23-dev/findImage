import Tabs from "../components/Tabs.jsx";
//import ResultGrid from "../components/ResultGrid.jsx";
import { lazy, Suspense } from "react";
const ResultGrid = lazy(()=> import("../components/ResultGrid.jsx"))
import SearchBox from "../components/SearchBox.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeHook } from "../hook/ThemeHook.jsx";
const Homepage = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      <div className="mode flex justify-around  items-center px-5 h-[70px] font-Inter font-light tracking-tighter">
        <div>
          <h2 className="text-medium">MediaSearch</h2>
        </div>
        <div><SearchBox /></div>
        <div className="flex gap-5">
          <Link to="/">Search</Link>
          <Link to="/collection">Collection</Link>
          <ThemeHook></ThemeHook>
        </div>
      </div>
      {!query ? (
        ""
      ) : (
        <div>
          <Tabs />
          <Suspense fallback={<h1>loading....</h1>}  >
            <ResultGrid />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default Homepage;
