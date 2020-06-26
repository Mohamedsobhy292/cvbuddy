import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { InputField } from 'shared/components/inputField'

const Input = ({ name, defaultValue = '', disabled, onChange, ...props }) => {
    const methods = useFormContext()
    const { control } = methods
    return (
        <Controller
            as={InputField}
            name={name}
            control={control}
            defaultValue={defaultValue}
            disabled={disabled}
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

const FormInput = React.memo(Input)

export { FormInput }
