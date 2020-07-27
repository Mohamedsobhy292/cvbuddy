import React from 'react'
import styles from './dropDown.module.scss'
import { ArrowDownIcon } from 'shared/icons/arrowDownIcon'

const DropDown = ({ options, value, ...props }) => {
    return (
        <div className={styles.DropDownContainer}>
            <select className={styles.DropDown} {...props}>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    )
                })}
            </select>
            <ArrowDownIcon className={styles.icon} />
        </div>
    )
}

export { DropDown }
