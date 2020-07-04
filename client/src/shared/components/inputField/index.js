import React from 'react'
import styles from './InputField.module.scss'
import classnames from 'classnames'

const InputField = ({
    value,
    onChange,
    additionalClassName = '',
    ...props
}) => {
    const handleChange = (e) => {
        onChange(e)
    }
    return (
        <input
            type="text"
            className={classnames(styles.InputField, additionalClassName)}
            value={value}
            onChange={handleChange}
            {...props}
        />
    )
}

export { InputField }
