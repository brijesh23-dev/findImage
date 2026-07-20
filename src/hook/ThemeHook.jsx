import { useTheme } from "../context/ThemeProvider";
import {CiSun,CiCloudSun,CiCloudMoon} from  'react-icons/ci'

export const ThemeHook = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="text-2xl cursor-pointer ">
      {theme === "dark" ? <CiSun ></CiSun> : <CiCloudSun ></CiCloudSun>}
    </button>
  );
}

