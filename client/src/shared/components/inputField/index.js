import React from 'react'
import styles from './InputField.module.scss'

const InputField = ({ value, onChange, ...props }) => {
    const handleChange = (e) => {
        onChange(e)
    }
    return (
        <input
            type="text"
            className={styles.InputField}
            value={value}
            onChange={handleChange}
            {...props}
        />
    )
}

export { InputField }
