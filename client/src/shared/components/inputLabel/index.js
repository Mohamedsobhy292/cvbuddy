import React from 'react'
import styles from './InputLabel.module.scss'

const InputLabel = ({ children }) => {
    return <label className={styles.label}>{children}</label>
}

export { InputLabel }
