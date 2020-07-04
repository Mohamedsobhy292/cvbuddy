import React, { useState, useRef } from 'react'
import styles from 'pages/build-resume/BuildResume.module.scss'
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
        <div ref={ref} className={styles.sectionContainer}>
            <h3 className={styles.title}> Work History</h3>

            {/* DATA */}

            {experience &&
                !!experience.length &&
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

            {/* ADD BUTTON */}

            <Button onClick={handleAdd} variant="link">
                Add Experience
            </Button>
        </div>
    )
}

const WorkHistoryMemo = React.memo(WorkHistory)

export { WorkHistoryMemo as WorkHistory }
