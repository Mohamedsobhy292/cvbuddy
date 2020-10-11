import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ children, variant, className, ...props }) => {
    return (
        <button
            type="button"
            className={classnames(
                styles.button,
                {
                    [styles.primary]: variant === 'primary',
                    [styles.tertiary]: variant === 'tertiary',
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export { Button }
