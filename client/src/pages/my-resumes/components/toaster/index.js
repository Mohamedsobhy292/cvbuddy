import React from 'react'
import { Check } from 'shared/components/radioButton/check'
import { CloseIcon } from 'shared/icons/closeIcon'
import styles from './successToast.module.scss'

const SuccessToast = ({ closeToast }) => {
    return (
        <div className={styles.successToast}>
            <span className={styles.iconContainer}>
                <Check className={styles.checkIcon} />
            </span>
            Changes saved successfuly
            <CloseIcon onClick={closeToast} className={styles.closeIcon} />
        </div>
    )
}

export { SuccessToast }
