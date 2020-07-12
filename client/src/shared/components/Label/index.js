import React from 'react'
import styles from './label.module.scss'

const Label = ({ children, className = '' }) => {
    return <span className={`${styles.label} ${className}`}>{children}</span>
}

export { Label }
