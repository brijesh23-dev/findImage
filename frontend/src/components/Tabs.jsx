import { useSelector, useDispatch } from "react-redux";
import { setActiveTabs } from "../features/searchSlice";

const Tabs = () => {
  const tabs = ["Photos", "Videos", "GIFs"];
  const activeTab = useSelector((state) => state.search.activeTab);
  const dispatch = useDispatch();
  return (
    <div className="mode flex items-center justify-center gap-2 overflow-x-auto px-3 py-3 font-Inter font-light sm:gap-3">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          onClick={() => dispatch(setActiveTabs(tab))}
          className={`${activeTab === tab ? "bg-neutral-200/70 dark:bg-neutral-800" : ""} min-h-11 shrink-0 rounded-full border-none px-5 py-2 cursor-pointer outline hover:outline-2 dark:outline-gray-500 outline-neutral-300 sm:px-6`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
