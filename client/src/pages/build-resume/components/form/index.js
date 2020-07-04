import React, { useContext } from 'react'
import { useForm, FormContext } from 'react-hook-form'

import { AppContext } from 'shared/context/appContext'
import { PersonalInformation } from './personalInformation'
import { WorkHistory } from './workHistory'
import { Skills } from './skills'
import { Links } from './links'

const BuiledResumeForm = () => {
    const methods = useForm()
    const { handleSubmit, reset } = methods
    const { dispatch, state } = useContext(AppContext)

    const Load = () => {
        reset(state.userData)
    }

    const onSubmit = (data) => {
        dispatch({
            type: 'UPDATE_USER_INFO',
            payload: {
                ...data,
            },
        })
    }

    return (
        <FormContext {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <button>Submit</button> */}
                <button type="button" onClick={() => Load()}>
                    Load
                </button>
                <div>
                    <PersonalInformation />
                    <WorkHistory />
                    <Skills />
                    <Links />
                </div>
            </form>
        </FormContext>
    )
}

const Form = React.memo(BuiledResumeForm)
export { Form }
