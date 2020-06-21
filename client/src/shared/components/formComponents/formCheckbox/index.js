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
            onChange={onChange}
            control={control}
            defaultValue={true}
            valueName="checked"
            onChange={(e) => {
                console.log(e[0].target.checked)
                return e[0].target.checked
            }}
            {...props}
        />
    )
}

export { FormCheckBox }
