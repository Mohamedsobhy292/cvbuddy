import React from 'react'
import classnames from 'classnames'
import styles from './Checkbox.module.scss'
import { Check } from '../radioButton/check'

const CheckBox = ({ checked, className, name, onChange, value, children }) => {
    return (
        <label
            htmlFor={name}
            className={`${styles.checkboxContainer} ${className}`}
        >
            <div
                className={classnames(styles.checkBoxRectangle, {
                    [styles.isActive]: checked,
                })}
            >
                <Check className={styles.checkIcon} />
            </div>
            <input
                onChange={onChange}
                type="checkbox"
                checked={checked}
                name={name}
                id={name}
                value={value}
            />
            {children}
        </label>
    )
}

export { CheckBox }
