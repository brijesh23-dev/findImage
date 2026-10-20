import Tabs from "../components/Tabs.jsx";
import ResultGrid from "../components/ResultGrid.jsx";
// const ResultGrid = lazy(()=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(import("../components/ResultGrid.jsx"))
//     },2000)
//   })
// })

import SearchBox from "../components/SearchBox.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeHook } from "../hook/ThemeHook.jsx";
import { CiHardDrive, CiHeart } from "react-icons/ci";
const Homepage = () => {
  const { query,results } = useSelector((store) => store.search);
  
  return (
      <div>
      <div className="mode flex justify-around  items-center px-5 h-[70px] font-Inter font-light tracking-tighter">
        <div>
          <h2 className="text-medium">MediaSearch</h2>
        </div>
        <div><SearchBox /></div>
        <div className="flex gap-5">
          <Link to="/">Search</Link>
          <Link to="/collection"><CiHeart  className="text-2xl hover:text-red-600"></CiHeart></Link>
          <Link to="/login" className="whitespace-nowrap">Sign in</Link>
          <ThemeHook></ThemeHook>
        </div>
      </div>
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
