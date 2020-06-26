import React from 'react'
import { InputLabel } from 'shared/components/inputLabel'
import { FormInput } from 'shared/components/formComponents/FormInput'
import styles from '../../../BuildResume.module.scss'

const WorkHistoryFormField = ({
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

export { WorkHistoryFormField }
