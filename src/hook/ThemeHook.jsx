import { useTheme } from "../context/ThemeProvider";
import {CiSun,CiCloudSun,CiCloudMoon} from  'react-icons/ci'

export const ThemeHook = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? <CiSun className="text-2xl"></CiSun> : <CiCloudSun className="text-2xl"></CiCloudSun>}
    </button>
  );
}

