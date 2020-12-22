import * as React from 'react'
import { Box } from 'src/components/box'
import { useTheme } from 'src/hooks/useTheme'

interface BodyPropsInterface {}

export const Body: React.FC<BodyPropsInterface> = ({
    children
}): JSX.Element => {
    const { theme } = useTheme()

    return (
        <Box
            style={{
                height: '100vh',
                backgroundColor: theme.palette.background.default
            }}>
            { children }
        </Box>
    )
}