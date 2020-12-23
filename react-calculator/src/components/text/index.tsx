import * as React from 'react'
import styled from 'styled-components'
import { useTheme } from 'src/hooks/useTheme'
import { TEXT_PARAGRAPH, TEXT_CODE } from 'src/constants/settings'
import get from 'lodash/get'

interface TextPropsInterface {
  component?: 'p' | 'code'
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'text'
  variant?: 'light' | 'main' | 'dark' | 'contrastText'
  style?: any
}

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`
const Code = styled.code`
  margin: 0;
  padding: 0;
`

const Span = styled.span`
  margin: 0;
  padding: 0;
`

export const Text: React.FC<TextPropsInterface> = ({
  component = TEXT_PARAGRAPH,
  color = 'text',
  variant = 'main',
  children,
  ...otherProps
}): JSX.Element => {
  const { theme } = useTheme()

  const props = {
    ...otherProps,
    style: {
      color: get(theme, `palette.${color}.${variant}`, theme.palette.text.main),
      ...(otherProps?.style ? otherProps.style : {})
    }
  }

  if (component === TEXT_PARAGRAPH) {
    return <Paragraph {...props}>{children}</Paragraph>
  }

  if (component === TEXT_CODE) {
    return <Code {...props}>{children}</Code>
  }

  return <Span {...props}>{children}</Span>
}
