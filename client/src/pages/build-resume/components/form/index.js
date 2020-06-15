import React, { useEffect, useContext } from 'react'
import { useForm, FormContext } from 'react-hook-form'

import { AppContext } from 'shared/context/appContext'
import { PersonalInformation } from './personalInformation'
import { WorkHistory } from './workHistory'

const BuiledResumeForm = () => {
    const methods = useForm()
    const { handleSubmit } = methods
    const { dispatch } = useContext(AppContext)

    const onSubmit = (data) => {
        console.log(data)
        dispatch({
            type: 'RESET_USER_INFO',
            payload: {
                ...data,
            },
        })
    }

    // useEffect(() => {
    //     dispatch({
    //         type: 'RESET_USER_INFO',
    //         payload: {
    //             ...formValues,
    //         },
    //     })
    // }, [dispatch])

    return (
        <FormContext {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button>Submit</button>
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
