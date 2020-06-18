import React, { useContext } from 'react'
import { useForm, FormContext } from 'react-hook-form'

import { AppContext } from 'shared/context/appContext'
import { PersonalInformation } from './personalInformation'
import { WorkHistory } from './workHistory'

const BuiledResumeForm = () => {
    const methods = useForm()
    const { handleSubmit, reset, watch } = methods
    const { dispatch, state } = useContext(AppContext)
    const values = watch()
    console.log(values)

    const Load = () => {
        reset(state.userData)
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <FormContext {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button>Submit</button>
                <button type="button" onClick={() => Load()}>
                    Load
                </button>
                <div>
                    <PersonalInformation />
                    <WorkHistory />
                </div>
            </form>
        </FormContext>
    )
}

const Form = React.memo(BuiledResumeForm)
export { Form }
