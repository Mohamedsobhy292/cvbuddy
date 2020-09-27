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
import { useParams } from 'react-router'
import { GET_ONE_RESUME } from 'shared/api/endPoints'

const BuiledResumeForm = () => {
    const methods = useForm()
    const { reset } = methods
    const { dispatch } = useContext(AppContext)
    let { id } = useParams()

    const Load = (initialDetails) => {
        dispatch({
            type: 'RESET_USER_INFO',
            payload: { ...initialDetails },
        })
        reset(initialDetails)
    }

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const token = await localStorage.getItem('cvbuddy_access_token')
                Axios(`${GET_ONE_RESUME}/${id}`).then((res) => {
                    Load(res.data.data)
                })
            }
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
