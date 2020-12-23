import * as React from 'react'
import { BOX_TYPE_DIV, BOX_TYPE_SPAN } from 'src/constants/settings'
import styled from 'styled-components'
import get from 'lodash/get'
import { useTheme } from 'src/hooks/useTheme'

interface BoxPropsInterface {
    component?: 'div' | 'span',
    style?: any,
    helper?: 'center' | 'spaceBetween'
}

const BoxDiv = styled.div``
const BoxSpan = styled.span``

export const Box: React.FC<BoxPropsInterface> = ({
    component = BOX_TYPE_DIV,
    children,
    helper,
    style,
    ...props
}) => {
    const { theme } = useTheme()

    const styleProps = {
        ...(helper ? get(theme, `helper.${helper}`, {}) : {}),
        ...(style ? style : {})
    }


    if (component === BOX_TYPE_DIV) {
        return (
            <BoxDiv
                style={styleProps}
                {...props}>
                { children }
            </BoxDiv>
        )
    }

    if (component === BOX_TYPE_SPAN) {
        return (
            <BoxSpan
                style={styleProps}
                {...props}>
                { children }
            </BoxSpan>
        )
    }

    return (
        <></>
    )
}