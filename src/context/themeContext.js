import { createContext, useContext } from "react";

const ThemeContext = createContext({
    themeMode: "dark",
    themeDark: () => { },
    themeLight: () => { }
})

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => {
    return useContext(ThemeContext)
}
export default ThemeContext