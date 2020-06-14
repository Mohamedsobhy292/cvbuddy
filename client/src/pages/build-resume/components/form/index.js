import React from 'react'
import classnames from 'classnames'
import { useForm, FormContext } from 'react-hook-form'

import styles from '../../BuildResume.module.scss'
import { InputLabel } from 'shared/components/inputLabel'
import { FormInput } from 'shared/components/formComponents/FormInput'
import { FormTextArea } from 'shared/components/formComponents/formTextArea'

const Form = () => {
    const methods = useForm()
    const { handleSubmit } = methods
    const onSubmit = (data) => console.log(data)
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
                        <InputLabel>Job title</InputLabel>
                        <FormInput name="jobTitle" />
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

export { Form }
