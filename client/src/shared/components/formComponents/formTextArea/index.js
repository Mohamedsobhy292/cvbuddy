import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextArea } from 'shared/components/textArea'

const FormTextArea = ({ name, defaultValue = '', onChange }) => {
    const methods = useFormContext()
    const { control } = methods
    return (
        <Controller
            as={TextArea}
            name={name}
            control={control}
            defaultValue={defaultValue}
            onChange={(args) => onChange(name)(args[0].currentTarget.value)}
        />
    )
}

export { FormTextArea }
