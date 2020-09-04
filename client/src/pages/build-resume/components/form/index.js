import React, { useContext, useEffect } from 'react'
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
import Axios from 'axios'

const BuiledResumeForm = () => {
    const methods = useForm()
    const { reset } = methods
    const { dispatch } = useContext(AppContext)

    const Load = (initialDetails) => {
        dispatch({
            type: 'RESET_USER_INFO',
            payload: { ...initialDetails },
        })
        reset(initialDetails)
    }

    useEffect(() => {
        const fetchData = async () => {
            const token = await localStorage.getItem('cvbuddy_access_token')
            Axios(
                'http://localhost:4000/resumeInformation/5f529690d7cde75da152ceee',
                {
                    headers: {
                        Authorization: `bearer ${token}`,
                    },
                }
            ).then((res) => {
                console.log(res.data.data[0])
                Load(res.data.data[0])
            })
        }
        fetchData()
    }, [])

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
