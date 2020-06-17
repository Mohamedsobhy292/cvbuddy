import React, { useContext } from 'react'

import styles from '../../../BuildResume.module.scss'
import { WorkHistoryItem } from './workHistoryItem'
import { AppContext } from 'shared/context/appContext'

const WorkHistory = () => {
    const { state } = useContext(AppContext)
    const { experience } = state.userData

    return (
        <>
            <h3 className={styles.title}> Work History</h3>
            {experience &&
                experience.map((experience, index) => {
                    return (
                        <WorkHistoryItem
                            experience={experience}
                            index={index}
                        />
                    )
                })}
        </>
    )
}

export { WorkHistory }
