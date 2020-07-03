import React, { useContext } from 'react'
import { useForm, FormContext } from 'react-hook-form'
import { Routes, Route } from 'react-router-dom'

import { AppContext } from 'shared/context/appContext'
import { PersonalInformation } from './personalInformation'
import { WorkHistory } from './workHistory'

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
                <button>Submit</button>
                <button type="button" onClick={() => Load()}>
                    Load
                </button>
                <div>
                    <Routes>
                        <Route path="/" element={<PersonalInformation />} />
                        <Route path="/workHistory" element={<WorkHistory />} />
                        {/* <PersonalInformation /> */}
                        {/* <WorkHistory /> */}
                    </Routes>
                </div>
            </form>
        </FormContext>
    )
}

const Form = React.memo(BuiledResumeForm)
export { Form }
