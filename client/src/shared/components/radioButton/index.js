import React from 'react'
import classnames from 'classnames'
import styles from './RadioButton.module.scss'
import { Check } from './check'

const RadioButton = ({ checked, className, onChange }) => {
    return (
        <div className={`${styles.radioWrapper} ${className}`}>
            <div
                className={classnames(styles.circle, {
                    [styles.isActive]: checked,
                })}
            >
                <Check className={styles.checkIcon} />
            </div>
            <input type="radio" checked={checked} readOnly />
        </div>
    )
}

export { RadioButton }
