import React, { useState, useEffect, useContext } from 'react'

import styles from '../../../BuildResume.module.scss'
import { WorkHistoryItem } from './workHistoryItem'
import { Button } from 'shared/components/button'
import { useFormContext } from 'react-hook-form'

const WorkHistory = () => {
    const [editMode, seteEditMode] = useState(false)
    const { getValues } = useFormContext()
    const experience = getValues('experience')

    return (
        <>
            <h3 className={styles.title}> Work History</h3>
            {experience &&
                experience.map((item, index) => {
                    return (
                        <WorkHistoryItem
                            experiences={experience}
                            editMode={editMode}
                            seteEditMode={seteEditMode}
                            key={item.id}
                            experience={item}
                            index={index}
                            fieldName={`experience[${index}]`}
                        />
                    )
                })}

            <Button variant="primary">Add Experience</Button>
        </>
    )
}

const WorkHistoryMemo = React.memo(WorkHistory)

export { WorkHistoryMemo as WorkHistory }
