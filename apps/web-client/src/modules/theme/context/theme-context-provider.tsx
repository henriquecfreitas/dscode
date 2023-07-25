import React, { PropsWithChildren, useCallback, useState } from "react"

import DarkTheme from "../dark-theme";
import LightTheme from "../light-theme";
import { Theme, Themes } from "../theme.type";
import ThemeContext from "./theme-context"

const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const  [theme, setTheme] = useState<Theme>(DarkTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.id === Themes.Dark ? LightTheme : DarkTheme)
  }, [theme, setTheme]);

  return <ThemeContext.Provider value={{
    theme,
    toggleTheme,
  }}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeContextProvider
