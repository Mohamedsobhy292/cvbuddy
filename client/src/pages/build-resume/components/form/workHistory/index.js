import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { WorkHistoryItem } from './workHistoryItem'
import { Button } from 'shared/components/button'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { useOnClickOutside } from 'shared/hooks/useClickOutside'
import { PlusIcon } from 'shared/icons/plusIcon'

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
            key: uuidv4(),
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
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}> Work History</h3>
                <p className={styles.sectionDescription}>
                    Include your last 10 years of relevant experience and dates
                    in this section. List your most recent position first.
                </p>
            </div>

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

            <Button
                onClick={handleAdd}
                variant="tertiary"
                className={styles.addBtn}
            >
                <PlusIcon />
                Add Experience
            </Button>
        </div>
    )
}

const WorkHistoryMemo = React.memo(WorkHistory)

export { WorkHistoryMemo as WorkHistory }
