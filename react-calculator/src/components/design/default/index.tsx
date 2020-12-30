import * as React from 'react'
import { Box } from 'src/components/box'
import { Button } from 'src/components/button'
import { useTheme } from 'src/hooks/useTheme'
import { Text } from 'src/components/text'
import { v4 } from 'uuid'
import { numberHelper } from 'src/utilities/numberHelper'

export const ButtonKey = ({ onClick, children, style }: any) => {
  const { theme } = useTheme()

  return (
    <Button
      onClick={onClick}
      helper={'center'}
      style={{
        width: 40,
        height: 40,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing.extraSmall,
        marginTop: theme.spacing.extraSmall,
        marginRight: theme.spacing.extraSmall,
        marginBottom: theme.spacing.extraSmall,
        boxShadow: theme.boxShadow.small,
        backgroundColor: theme.palette.background.default,
        border: 'none',
        ...(style ? style : {})
      }}
    >
      {children}
    </Button>
  )
}

export const Display = ({ working }: any) => {
  const { theme } = useTheme()

  return (
    <Box
      style={{
        height: 100,
        padding: theme.spacing.small,
        boxShadow: theme.boxShadow.small,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.warning.dark,
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        alignItems: 'flex-end'
      }}
    >
      {working.map((item: any) => {
        if (numberHelper.isOperator(item)) {
          return (
            <Text
              style={{
                marginLeft: theme.spacing.extraSmall,
                marginRight: theme.spacing.extraSmall
              }}
              key={item + v4()}
            >
              {item}
            </Text>
          )
        }

        return (
          <Text style={{ marginRight: 0 }} key={item + v4()}>
            {item}
          </Text>
        )
      })}
    </Box>
  )
}

interface CalculatorKeyPropsInterface {
  onClick?: ((params: any) => void) | ((params: any) => any)
  value?: React.ReactElement | React.ReactElement[] | HTMLElement | HTMLElement | string | number
  variant?: 'default' | 'shadow' | 'info' | 'success'
  last?: boolean
}

export const CalculatorKey: React.FC<CalculatorKeyPropsInterface> = ({
  children,
  onClick,
  value,
  variant = 'default',
  last = false
}) => {
  const { theme } = useTheme()

  const buttonStyle = {
    ...(variant === 'shadow'
      ? {
          boxShadow: `0 1px 15px 0 ${theme.palette.info.main}`
        }
      : {}),
    ...(variant === 'info'
      ? {
          backgroundColor: theme.palette.info.main
        }
      : {}),
    ...(variant === 'success'
      ? {
          backgroundColor: theme.palette.success.main
        }
      : {}),
    ...(last
      ? {
          marginRight: 0
        }
      : {})
  }

  const textStyle = {
    ...(variant === 'shadow'
      ? {
          color: theme.palette.info.main
        }
      : {})
  }

  return (
    <ButtonKey
      onClick={() => {
        if (onClick) {
          onClick({ value })
        }
      }}
      style={buttonStyle}
    >
      <Text style={textStyle}>{children ? children : value}</Text>
    </ButtonKey>
  )
}
