import React from 'react'
import styles from './InputField.module.scss'

const InputField = ({ value, onChange }) => {
    const handleChange = (e) => {
        onChange(e)
    }
    return (
        <input
            type="text"
            className={styles.InputField}
            value={value}
            onChange={onChange}
        />
    )
}

export { InputField }
