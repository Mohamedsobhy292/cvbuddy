import React, { useContext } from 'react'

import styles from 'pages/build-resume/BuildResume.module.scss'

import { FormRichTextEditor } from 'shared/components/formComponents/formRichTextEditor'
import { AppContext } from 'shared/context/appContext'
import { PersonalInformationField } from './personalInformationField'

const PersonalInformation = () => {
    const { dispatch } = useContext(AppContext)

    const handleFieldChange = (name) => (value) => {
        console.log(name, value)
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: {
                name,
                value,
            },
        })
    }

    const handleSummaryChange = (name) => (value) => {
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: {
                name,
                value: value[0],
            },
        })
    }

    return (
        <div className={styles.sectionContainer}>
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
                    name="jobTitle"
                    placeholder="e.g data scientist"
                    label="Job title"
                    handleFieldChange={handleFieldChange}
                />

                <PersonalInformationField
                    name="residence"
                    placeholder="e.g Berlin,Germany"
                    label="Residence"
                    handleFieldChange={handleFieldChange}
                />

                <PersonalInformationField
                    additionalClassName={styles.fullWidth}
                    name="summary"
                    label="Summary"
                    component={FormRichTextEditor}
                    handleFieldChange={handleSummaryChange}
                />
            </div>
        </div>
    )
}

export { PersonalInformation }
