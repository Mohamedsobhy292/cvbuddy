import React, { useContext, useState, useEffect } from 'react'

import styles from '../../../BuildResume.module.scss'
import { WorkHistoryItem } from './workHistoryItem'
import { AppContext } from 'shared/context/appContext'
import { useFormContext } from 'react-hook-form'

const WorkHistory = () => {
    const { state } = useContext(AppContext)
    const { experience } = state.userData
    const { control } = useFormContext()

    return (
        <>
            <h3 className={styles.title}> Work History</h3>
            {experience &&
                experience.map((item, index) => {
                    return (
                        <WorkHistoryItem
                            key={item.id}
                            experience={item}
                            index={index}
                            fieldName={`experience[${index}]`}
                        />
                    )
                })}

            {/* <button onClick={() => append({})}>append</button> */}

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
