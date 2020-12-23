import * as React from 'react'
import { Box } from 'src/components/box'
import { Text } from 'src/components/text'
import { useTheme } from 'src/hooks/useTheme'

interface CalculatorPropsInterface {
    width?: number
    height?: number
}

export const Calculator: React.FC<CalculatorPropsInterface> = ({
    width = 300,
    height = 500
}): JSX.Element => {
    const { theme } = useTheme()

    return (
        <Box
            style={{
                width,
                height,
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.boxShadow.small,
                display: 'block',
            }}>
            <Text>
                hello
            </Text>
        </Box>
    )
}