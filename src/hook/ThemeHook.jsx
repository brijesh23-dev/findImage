import { useTheme } from "../context/ThemeProvider";


export const ThemeHook = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

