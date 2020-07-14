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

const BuiledResumeForm = () => {
    const methods = useForm()
    const { reset } = methods
    const { state } = useContext(AppContext)

    const Load = () => {
        reset(state.userData)
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
