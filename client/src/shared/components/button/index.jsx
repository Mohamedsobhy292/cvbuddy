import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ children, variant, className, ...props }) => {
    return (
        <button
            className={classnames(styles.button, className, {
                [styles.primary]: variant === 'primary',
                [styles.link]: variant === 'link',
            })}
            {...props}
        >
            {children}
        </button>
    )
}

export { Button }
