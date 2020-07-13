import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { CheckBox } from 'shared/components/checkBox'

const FormCheckBox = ({ name, defaultValue = false, onChange, ...props }) => {
    const methods = useFormContext()
    const { control } = methods
    return (
        <Controller
            as={<CheckBox />}
            name={name}
            control={control}
            defaultValue={defaultValue}
            valueName="checked"
            onChange={(e) => {
                const val = e[0].target.checked
                onChange && onChange(val)
                return e[0].target.checked
            }}
            {...props}
        />
    )
}

export { FormCheckBox }
