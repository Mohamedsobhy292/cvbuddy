import React, { useState, useRef, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { WorkHistoryItem } from './workHistoryItem'
import { Button } from 'shared/components/button'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { useOnClickOutside } from 'shared/hooks/useClickOutside'
import { PlusIcon } from 'shared/icons/plusIcon'
import { useDeepCompareEffect } from 'shared/hooks/useDeepCompareEffect'
import { AppContext } from 'shared/context/appContext'
import { useDebouncedCallback } from 'use-debounce/lib'

const WorkHistory = () => {
    const [editMode, setEditMode] = useState(false)
    const { control, watch } = useFormContext()
    const { dispatch } = useContext(AppContext)

    const { fields: experience, append, remove, move } = useFieldArray({
        control,
        name: 'experience',
    })

    const experienceValue = watch('experience')

    const ref = useRef()
    useOnClickOutside(ref, () => setEditMode(false))

    const [handleFieldChange] = useDebouncedCallback(() => {
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: {
                name: 'experience',
                value: experienceValue,
            },
        })
    }, 10)

    useDeepCompareEffect(handleFieldChange, [experienceValue])

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
                    add your work experience in this section and list your most
                    recent position first.
                </p>
            </div>

            {/* DATA */}

            <div>
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
                                move={move}
                            />
                        )
                    })}
            </div>

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
