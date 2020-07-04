import React from 'react'
import { InputLabel } from 'shared/components/inputLabel'
import { FormInput } from 'shared/components/formComponents/FormInput'
import styles from 'pages/build-resume/BuildResume.module.scss'

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

const WorkHistoryFormFieldMemo = React.memo(WorkHistoryFormField)

export { WorkHistoryFormFieldMemo as WorkHistoryFormField }
