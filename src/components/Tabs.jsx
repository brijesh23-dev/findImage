import { useSelector, useDispatch } from "react-redux";
import { setActiveTabs } from "../features/searchSlice";

const Tabs = () => {
  const tabs = ["Photos", "Videos", "GIFs"];
  const activeTab = useSelector((state) => state.search.activeTab);
  console.log(activeTab);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-3 p-3 justify-center items-center border-none dark:text-white dark:bg-neutral-900 bg-teal-50 text-neutral-700  font-Inter font-light ">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          onClick={() => dispatch(setActiveTabs(tab))}
          className={`${activeTab === tab ? "bg-neutral-200/45 dark:bg-neutral-800/50" : ""}  rounded-full  border-none px-6  py-1  cursor-pointer outline  hover:outline-2 dark:outline-gray-500 outline-neutral-300`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
