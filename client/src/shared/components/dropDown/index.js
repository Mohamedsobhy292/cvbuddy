import React from 'react'
import styles from './dropDown.module.scss'

const DropDown = ({ options, value, ...props }) => {
    return (
        <select className={styles.DropDown} {...props}>
            {options.map((option) => {
                return (
                    <option
                        value={option.value}
                        selected={option.value === value}
                    >
                        {option.label}
                    </option>
                )
            })}
        </select>
    )
}

export { DropDown }
