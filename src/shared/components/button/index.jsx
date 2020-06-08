import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ children, variant, className }) => {
    return (
        <button
            className={classnames(styles.button, className, {
                [styles.primary]: variant === 'primary',
            })}
        >
            {children}
        </button>
    )
}

export { Button }
