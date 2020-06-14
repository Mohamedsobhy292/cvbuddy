import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextArea } from 'shared/components/textArea'

const FormTextArea = ({ name, defaultValue = '' }) => {
    const methods = useFormContext()
    const { control } = methods
    return (
        <Controller
            as={TextArea}
            name={name}
            control={control}
            defaultValue={defaultValue}
        />
    )
}

export { FormTextArea }
