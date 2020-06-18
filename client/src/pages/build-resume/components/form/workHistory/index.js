import React, { useContext } from 'react'

import styles from '../../../BuildResume.module.scss'
import { WorkHistoryItem } from './workHistoryItem'
import { AppContext } from 'shared/context/appContext'
import { useFormContext, useFieldArray } from 'react-hook-form'

const WorkHistory = () => {
    const { state, dispatch } = useContext(AppContext)
    // const { experience } = state.userData
    const { control } = useFormContext()
    const { fields: experience, append, remove } = useFieldArray({
        control,
        name: 'experience',
    })

    console.log(experience)

    return (
        <>
            <h3 className={styles.title}> Work History</h3>
            {experience &&
                experience.map((experience, index) => {
                    return (
                        <WorkHistoryItem
                            experience={experience}
                            index={index}
                            fieldName={`experience[${index}]`}
                        />
                    )
                })}

            <button onClick={() => append({})}>append</button>

            {/* {experience &&
                experience.map((experience, index) => {
                    return (
                        <WorkHistoryItem
                            experience={experience}
                            index={index}
                        />
                    )
                })} */}
        </>
    )
}

export { WorkHistory }
