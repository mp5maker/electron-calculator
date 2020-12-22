import * as React from 'react'
import { BOX_TYPE_DIV, BOX_TYPE_SPAN } from 'src/constants/settings'

interface BoxPropsInterface {
    component?: 'div' | 'span',
    style?: any
}

export const Box: React.FC<BoxPropsInterface> = ({
    component = BOX_TYPE_DIV,
    children,
    ...props
}) => {

    if (component === BOX_TYPE_DIV) {
        return (
            <div
                {...props}>
                { children }
            </div>
        )
    }

    if (component === BOX_TYPE_SPAN) {
        return (
            <span
                {...props}>
                { children }
            </span>
        )
    }

    return (
        <></>
    )
}