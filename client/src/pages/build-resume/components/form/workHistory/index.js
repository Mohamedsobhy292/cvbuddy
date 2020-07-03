import React, { useState, useRef, useEffect } from 'react'

import styles from '../../../BuildResume.module.scss'
import { WorkHistoryItem } from './workHistoryItem'
import { Button } from 'shared/components/button'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { useOnClickOutside } from 'shared/hooks/useClickOutside'

const WorkHistory = () => {
    const [editMode, setEditMode] = useState(false)
    const { control } = useFormContext()

    const { fields: experience, append, remove } = useFieldArray({
        control,
        name: 'experience',
    })

    const ref = useRef()
    useOnClickOutside(ref, () => setEditMode(false))

    const handleAdd = () => {
        append({
            title: 'new job role',
            company: 'big company',
            city: '',
            startDate: '',
            endDate: '',
            currentlyWorkHere: false,
            description: '',
        })
        setEditMode(experience.length)
    }

    return (
        <div ref={ref}>
            <h3 className={styles.title}> Work History</h3>
            {experience &&
                experience.map((item, index) => {
                    return (
                        <WorkHistoryItem
                            key={item.id}
                            handleDelete={remove}
                            editMode={editMode}
                            setEditMode={setEditMode}
                            experience={item}
                            index={index}
                        />
                    )
                })}

            <Button onClick={handleAdd} variant="primary">
                Add Experience
            </Button>
        </div>
    )
}

const WorkHistoryMemo = React.memo(WorkHistory)

export { WorkHistoryMemo as WorkHistory }
