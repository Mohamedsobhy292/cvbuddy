import React from 'react'
import cn from 'classnames'
import styles from './loader.module.scss'

const Loader = ({ size, color, extraClass, ...props }) => {
    const dynamicStyle = {
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: color,
        borderRightColor: color,
        borderBottomColor: color,
    }

    return (
        <div {...props}>
            <div
                className={cn(styles.loader, extraClass)}
                style={dynamicStyle}
            />
        </div>
    )
}

export { Loader }
