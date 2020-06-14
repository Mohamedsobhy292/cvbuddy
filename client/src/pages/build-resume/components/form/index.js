import React, { useEffect, useContext } from 'react'
import classnames from 'classnames'
import { useForm, FormContext } from 'react-hook-form'

import styles from '../../BuildResume.module.scss'
import { InputLabel } from 'shared/components/inputLabel'
import { FormInput } from 'shared/components/formComponents/FormInput'
import { FormTextArea } from 'shared/components/formComponents/formTextArea'
import { AppContext } from 'shared/context/appContext'

const BuiledResumeForm = () => {
    const methods = useForm()
    const { handleSubmit, watch } = methods
    const onSubmit = (data) => console.log(data)
    const { updateUserData } = useContext(AppContext)
    const formValues = watch()
    const fields = [formValues.firstName, formValues.lastName, formValues.email]

    useEffect(() => {
        updateUserData(formValues)
    }, [...fields])

    return (
        <FormContext {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button>Submit</button>
                <div className={styles.formContainer}>
                    <div className={styles.formControl}>
                        <InputLabel>First Name</InputLabel>
                        <FormInput name="firstName" />
                    </div>

                    <div className={styles.formControl}>
                        <InputLabel>Last Name</InputLabel>
                        <FormInput name="lastName" />
                    </div>

                    <div className={styles.formControl}>
                        <InputLabel>Email</InputLabel>
                        <FormInput name="email" />
                    </div>

                    <div className={styles.formControl}>
                        <InputLabel>Phone number</InputLabel>
                        <FormInput name="phone" />
                    </div>

                    <div
                        className={classnames(
                            styles.formControl,
                            styles.fullWidth
                        )}
                    >
                        <InputLabel>Job title</InputLabel>
                        <FormInput name="jobTitle" />
                    </div>

                    <div
                        className={classnames(
                            styles.formControl,
                            styles.fullWidth
                        )}
                    >
                        <InputLabel>Summary</InputLabel>
                        <FormTextArea name="summary" />
                    </div>
                </div>
            </form>
        </FormContext>
    )
}

const Form = React.memo(BuiledResumeForm)
export { Form }
