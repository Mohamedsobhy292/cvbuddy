import React, { useContext } from 'react'
import classnames from 'classnames'
import styles from '../../../BuildResume.module.scss'

import { InputLabel } from 'shared/components/inputLabel'
import { FormInput } from 'shared/components/formComponents/FormInput'
import { FormTextArea } from 'shared/components/formComponents/formTextArea'
import { AppContext } from 'shared/context/appContext'

const PersonalInformation = () => {
    const { dispatch } = useContext(AppContext)
    const handleFieldChange = (name) => (value) => {
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: {
                name,
                value,
            },
        })
        console.log(value)
        return value
    }
    return (
        <>
            <h3 className={styles.title}> Personal Information</h3>
            <div className={styles.formContainer}>
                <div className={styles.formControl}>
                    <InputLabel>First Name</InputLabel>
                    <FormInput name="firstName" onChange={handleFieldChange} />
                </div>

                <div className={styles.formControl}>
                    <InputLabel>Last Name</InputLabel>
                    <FormInput name="lastName" onChange={handleFieldChange} />
                </div>

                <div className={styles.formControl}>
                    <InputLabel>Email</InputLabel>
                    <FormInput name="email" onChange={handleFieldChange} />
                </div>

                <div className={styles.formControl}>
                    <InputLabel>Phone number</InputLabel>
                    <FormInput name="phone" onChange={handleFieldChange} />
                </div>

                <div
                    className={classnames(styles.formControl, styles.fullWidth)}
                >
                    <InputLabel>Job title</InputLabel>
                    <FormInput name="jobTitle" onChange={handleFieldChange} />
                </div>

                <div
                    className={classnames(styles.formControl, styles.fullWidth)}
                >
                    <InputLabel>Summary</InputLabel>
                    <FormTextArea name="summary" onChange={handleFieldChange} />
                </div>
            </div>
        </>
    )
}

export { PersonalInformation }
