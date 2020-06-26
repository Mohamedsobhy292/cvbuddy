import React, { useContext } from 'react'
import styles from '../../../BuildResume.module.scss'

import { FormTextArea } from 'shared/components/formComponents/formTextArea'
import { AppContext } from 'shared/context/appContext'
import { PersonalInformationField } from './personalInformationField'

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
    }

    return (
        <>
            <h3 className={styles.title}> Personal Information</h3>
            <div className={styles.formContainer}>
                <PersonalInformationField
                    name="firstName"
                    label="First Name"
                    handleFieldChange={handleFieldChange}
                />

                <PersonalInformationField
                    name="lastName"
                    label="Last Name"
                    handleFieldChange={handleFieldChange}
                />

                <PersonalInformationField
                    name="email"
                    label="Email"
                    handleFieldChange={handleFieldChange}
                />

                <PersonalInformationField
                    label="Phone number"
                    name="phone"
                    handleFieldChange={handleFieldChange}
                />

                <PersonalInformationField
                    additionalClassName={styles.fullWidth}
                    name="jobTitle"
                    label="Job title"
                    handleFieldChange={handleFieldChange}
                />

                <PersonalInformationField
                    additionalClassName={styles.fullWidth}
                    name="summary"
                    label="Summary"
                    component={FormTextArea}
                    handleFieldChange={handleFieldChange}
                />
            </div>
        </>
    )
}

export { PersonalInformation }
