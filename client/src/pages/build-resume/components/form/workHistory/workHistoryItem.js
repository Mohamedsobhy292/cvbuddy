import React from 'react'
import classnames from 'classnames'

import { InputLabel } from 'shared/components/inputLabel'
import { FormInput } from 'shared/components/formComponents/FormInput'
import { FormTextArea } from 'shared/components/formComponents/formTextArea'
import styles from '../../../BuildResume.module.scss'

const WorkHistoryItem = ({ name, index }) => {
    return (
        <div className={styles.formContainer}>
            <div className={styles.formControl}>
                <InputLabel>Job title</InputLabel>
                <FormInput name={`${name}[${index}].jobTitle`} />
            </div>

            <div className={styles.formControl}>
                <InputLabel>Company</InputLabel>
                <FormInput name={`${name}[${index}].company`} />
            </div>

            <div className={styles.formControl}>
                <InputLabel>City</InputLabel>
                <FormInput name={`${name}[${index}].city`} />
            </div>

            <div className={classnames(styles.formControl, styles.fullWidth)}>
                <InputLabel>Description</InputLabel>
                <FormTextArea name={`${name}[${index}].description`} />
            </div>
        </div>
    )
}

export { WorkHistoryItem }
