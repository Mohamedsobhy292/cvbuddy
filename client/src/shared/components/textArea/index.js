import React from 'react'
import styles from './textArea.module.scss'

const TextArea = ({ value, onChange }) => {
    const handleChange = (e) => {
        onChange(e)
    }
    return (
        <textarea
            className={styles.textArea}
            value={value}
            onChange={handleChange}
        />
    )
}

export { TextArea }
