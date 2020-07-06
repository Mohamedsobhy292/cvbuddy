import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { DropDown } from 'shared/components/dropDown'

const FormDropDown = ({ name, defaultValue = false, onChange, ...props }) => {
    const methods = useFormContext()
    const { control } = methods
    return (
        <Controller
            as={<DropDown />}
            name={name}
            control={control}
            valueName="selected"
            onChange={(e) => {
                const val = e[0].target.value
                onChange && onChange(val)
                return e[0].target.value
            }}
            {...props}
        />
    )
}

export { FormDropDown }
