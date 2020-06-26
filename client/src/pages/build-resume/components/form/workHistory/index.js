import React, { useState } from 'react'

import styles from '../../../BuildResume.module.scss'
import { WorkHistoryItem } from './workHistoryItem'
import { Button } from 'shared/components/button'
import { useFormContext } from 'react-hook-form'

const WorkHistory = () => {
    const [editMode, setEditMode] = useState(false)
    const { watch } = useFormContext()
    const experience = watch('experience')

    return (
        <>
            <h3 className={styles.title}> Work History</h3>
            {experience &&
                experience.map((item, index) => {
                    return (
                        <WorkHistoryItem
                            key={index}
                            editMode={editMode}
                            setEditMode={setEditMode}
                            experience={item}
                            index={index}
                        />
                    )
                })}

            <Button variant="primary">Add Experience</Button>
        </>
    )
}

const WorkHistoryMemo = React.memo(WorkHistory)

export { WorkHistoryMemo as WorkHistory }
