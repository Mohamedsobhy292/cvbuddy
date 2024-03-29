import React from 'react'
import { InputLabel } from 'shared/components/inputLabel'
import { FormInput } from 'shared/components/formComponents/FormInput'
import styles from 'pages/build-resume/BuildResume.module.scss'

const PersonalInformationField = ({
    label,
    handleFieldChange,
    name,
    additionalClassName = '',
    component,
    ...props
}) => {
    const Component = component || FormInput
    return (
        <div className={`${styles.formControl} ${additionalClassName}`}>
            <InputLabel>{label}</InputLabel>
            <Component
                name={name}
                onChange={handleFieldChange(name)}
                {...props}
            />
        </div>
    )
}

export { PersonalInformationField }
