import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { InputField } from 'shared/components/inputField'

const Input = ({ name, defaultValue = '', disabled, ...props }) => {
    const methods = useFormContext()
    const { control } = methods
    return (
        <Controller
            as={InputField}
            name={name}
            control={control}
            defaultValue={defaultValue}
            disabled={disabled}
            {...props}
            // onChange={(args) => onChange(name)(args[0].currentTarget.value)}
        />
    )
}

const FormInput = React.memo(Input)

export { FormInput }
