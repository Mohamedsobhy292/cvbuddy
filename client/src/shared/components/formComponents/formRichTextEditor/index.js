import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'

const FormRichTextEditor = ({ name, defaultValue = '', ...props }) => {
    const methods = useFormContext()
    const { control } = methods
    return (
        <Controller
            as={Editor}
            name={name}
            control={control}
            defaultValue={defaultValue}
            label="Start typing..."
            init={{
                icons: 'material',
                branding: false,
                height: 200,
                max_height: 500,
                menubar: false,
                resize: false,
                statusbar: false,
                toolbar_mode: 'floating',
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                    'bold italic | bullist numlist | outdent indent | link | undo redo',
            }}
            apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
            {...props}
            onChangeName="onEditorChange"

            // onChange={(args) => onChange(name)(args[0].currentTarget.value)}
        />
    )
}

export { FormRichTextEditor }
