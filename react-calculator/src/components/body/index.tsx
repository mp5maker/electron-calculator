import * as React from 'react'
import styled from 'styled-components'
import { Box } from 'src/components/box'

interface BodyPropsInterface {}

const BodyBox = styled(Box)`
    height: 100vh;
    background-color: ${(props) => props.theme.palette.background.default }
`

export const Body: React.FC<BodyPropsInterface> = ({
    children
}): JSX.Element => {
    return (
        <BodyBox
            helper={'center'}>
            { children }
        </BodyBox>
    )
}