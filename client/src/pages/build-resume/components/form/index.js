import React, { useContext } from 'react'
import { useForm, FormContext } from 'react-hook-form'

import { AppContext } from 'shared/context/appContext'
import { PersonalInformation } from './personalInformation'
import { WorkHistory } from './workHistory'
import { Skills } from './skills'
import { Links } from './links'
import { Education } from './education'
import { Languages } from './languages'
import { Certificates } from './Certificates'
import { initialDetails } from 'shared/context/appContext'

const BuiledResumeForm = () => {
    const methods = useForm()
    const { reset } = methods
    const { dispatch } = useContext(AppContext)

    const Load = () => {
        dispatch({
            type: 'RESET_USER_INFO',
            payload: { ...initialDetails },
        })
        reset(initialDetails)
    }

    return (
        <FormContext {...methods}>
            <form>
                <button type="button" onClick={() => Load()}>
                    Load
                </button>
                <div>
                    <PersonalInformation />
                    <WorkHistory />
                    <Education />
                    <Skills />
                    <Links />
                    <Languages />
                    <Certificates />
                </div>
            </form>
        </FormContext>
    )
}

const Form = React.memo(BuiledResumeForm)
export { Form }
