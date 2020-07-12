import React from 'react'
import { InputLabel } from 'shared/components/inputLabel'
import { FormInput } from 'shared/components/formComponents/FormInput'
import styles from 'pages/build-resume/BuildResume.module.scss'

const EducationFormField = ({
    label,
    name,
    additionalClassName = '',
    component,
    children,
    ...props
}) => {
    const Component = component || FormInput
    return (
        <div className={`${styles.formControl} ${additionalClassName}`}>
            <InputLabel>{label}</InputLabel>
            <Component name={name} {...props} />
            {children}
        </div>
    )
}

const EducationFormFieldMemo = React.memo(EducationFormField)

export { EducationFormFieldMemo as EducationFormField }
