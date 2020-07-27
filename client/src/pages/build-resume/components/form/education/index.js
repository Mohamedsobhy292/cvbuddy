import React, { useState, useRef, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { EducationItem } from './educationItem'
import { Button } from 'shared/components/button'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { useOnClickOutside } from 'shared/hooks/useClickOutside'
import { PlusIcon } from 'shared/icons/plusIcon'
import { AppContext } from 'shared/context/appContext'
import { useDebouncedCallback } from 'use-debounce/lib'
import { useDeepCompareEffect } from 'shared/hooks/useDeepCompareEffect'

const Education = () => {
    const [editMode, setEditMode] = useState(false)
    const { control, watch } = useFormContext()
    const { dispatch } = useContext(AppContext)

    const { fields: education, append, remove, move } = useFieldArray({
        control,
        name: 'education',
    })

    const educationValue = watch('education')

    const ref = useRef()
    useOnClickOutside(ref, () => setEditMode(false))

    const handleAdd = () => {
        append({
            id: uuidv4(),
        })
        setEditMode(education.length)
    }

    const [handleFieldChange] = useDebouncedCallback(() => {
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: {
                name: 'education',
                value: educationValue,
            },
        })
    }, 10)

    useDeepCompareEffect(handleFieldChange, [educationValue])

    return (
        <div ref={ref} className={styles.sectionContainer}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}> Education</h3>
                <p className={styles.sectionDescription}>
                    Include your last 10 years of relevant experience and dates
                    in this section. List your most recent position first.
                </p>
            </div>

            {/* DATA */}
            <div>
                {education &&
                    !!education.length &&
                    education.map((item, index) => {
                        return (
                            <EducationItem
                                key={item.id}
                                handleDelete={remove}
                                editMode={editMode}
                                setEditMode={setEditMode}
                                education={item}
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
                Add Education
            </Button>
        </div>
    )
}

const EducationMemo = React.memo(Education)

export { EducationMemo as Education }
