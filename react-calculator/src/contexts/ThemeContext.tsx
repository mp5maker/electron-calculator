import * as React from 'react'
import { THEME_DARK } from 'src/constants/settings'
import { ThemeProvider } from 'styled-components'
import get from 'lodash/get'
import { themes } from 'src/constants/themes'

interface ThemeContextProps {
    theme: any
    currentThemeKey: string
    setTheme: ((params: any) => any) | ((params: any) => void)
}

export const ThemeContext = React.createContext<Partial<ThemeContextProps>>({})


export const ThemeContextProvider = ({ children }: any): JSX.Element => {
    const [currentThemeKey, setCurrentThemeKey] = React.useState<'light'|'dark'>(THEME_DARK)

    const theme = get(themes, currentThemeKey, {});

    return (
        <ThemeContext.Provider
            value={{
                currentThemeKey,
                setTheme: setCurrentThemeKey,
                theme
            }}>
            <ThemeProvider theme={theme}>
                <>
                    { children }
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}