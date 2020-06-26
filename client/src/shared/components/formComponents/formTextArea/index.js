import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextArea } from 'shared/components/textArea'

const FormTextArea = ({ name, defaultValue = '', onChange, ...props }) => {
    const methods = useFormContext()
    const { control } = methods
    return (
        <Controller
            as={TextArea}
            name={name}
            control={control}
            defaultValue={defaultValue}
            onChange={(e) => {
                const val = e[0].currentTarget.value
                onChange && onChange(val)
                return val
            }}
            {...props}
            // onChange={(args) => onChange(name)(args[0].currentTarget.value)}
        />
    )
}

export { FormTextArea }
