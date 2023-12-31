import { createContext } from "react";

import { Theme } from "../theme.type";
import DarkTheme from "../dark-theme";

const ThemeContext = createContext<{
  theme: Theme,
  toggleTheme: () => void,
}>({
  theme: DarkTheme,
  toggleTheme: () => {},
});

export default ThemeContext;