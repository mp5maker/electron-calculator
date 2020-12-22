import * as React from 'react'
import { ThemeContext } from 'src/contexts/ThemeContext'

export const useTheme = () => {
    const props = React.useContext(ThemeContext)
    return { ...props }
}