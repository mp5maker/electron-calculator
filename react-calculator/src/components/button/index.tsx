import * as React from 'react'
import styled from 'styled-components'
import { useTheme } from 'src/hooks/useTheme'
import { BUTTON_TYPE_BUTTON } from 'src/constants/settings'
import get from 'lodash/get'

const ButtonContainer = styled.button``

interface ButtonPropsInterface {
  onClick?: ((props: any) => any) | ((props: any) => void)
  component?: 'button'
  style?: any
  helper?: 'center' | 'spaceBetween'
}

export const Button: React.FC<ButtonPropsInterface> = ({
  component = BUTTON_TYPE_BUTTON,
  helper,
  style,
  children,
  ...props
}): JSX.Element => {
  const { theme } = useTheme()

  const styleProps = {
    ...(helper ? get(theme, `helper.${helper}`, {}) : {}),
    ...(style ? style : {})
  }

  return (
    <ButtonContainer style={styleProps} {...props}>
      {children}
    </ButtonContainer>
  )
}
