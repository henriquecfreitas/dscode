import React, { PropsWithChildren, useCallback, useState } from "react"
import { ConfigProvider, theme as antdTheme } from "antd";

import DarkTheme from "../dark-theme";
import LightTheme from "../light-theme";
import { Theme, Themes } from "../theme.type";
import ThemeContext from "./theme-context"

const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const  [theme, setTheme] = useState<Theme>(DarkTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.id === Themes.Dark ? LightTheme : DarkTheme)
  }, [theme, setTheme]);

  const { defaultAlgorithm, darkAlgorithm } = antdTheme;
  const algorithm = theme.id === Themes.Dark ? darkAlgorithm : defaultAlgorithm;

  return <ThemeContext.Provider value={{
    theme,
    toggleTheme,
  }}>
    <ConfigProvider theme={{algorithm}}>
      {children}
    </ConfigProvider>
  </ThemeContext.Provider>
}

export default ThemeContextProvider
