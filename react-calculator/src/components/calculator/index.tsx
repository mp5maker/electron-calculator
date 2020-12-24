import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from 'src/components/box'
import { Text } from 'src/components/text'
import { Button } from 'src/components/button'
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
  const { t } = useTranslation()

  const ButtonKey = ({ onClick, children }: any) => {
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
          border: 'none'
        }}
      >
        {children}
      </Button>
    )
  }

  return (
    <Box
      style={{
        width,
        height,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.boxShadow.small,
        padding: theme.spacing.small,
        display: 'block'
      }}
    >
      <Box
        style={{
          height: 100,
          padding: theme.spacing.small,
          boxShadow: theme.boxShadow.small,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.warning.dark
        }}
      ></Box>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <ButtonKey>
          <Text>{t('7')}</Text>
        </ButtonKey>
        <ButtonKey>
          <Text>{t('8')}</Text>
        </ButtonKey>
        <ButtonKey>
          <Text>{t('9')}</Text>
        </ButtonKey>
      </Box>
    </Box>
  )
}
