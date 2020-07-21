import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { EducationItem } from './educationItem'
import { Button } from 'shared/components/button'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { useOnClickOutside } from 'shared/hooks/useClickOutside'
import { PlusIcon } from 'shared/icons/plusIcon'

const Education = () => {
    const [editMode, setEditMode] = useState(false)
    const { control } = useFormContext()

    const { fields: education, append, remove } = useFieldArray({
        control,
        name: 'education',
    })

    const ref = useRef()
    useOnClickOutside(ref, () => setEditMode(false))

    const handleAdd = () => {
        append({
            id: uuidv4(),
        })
        setEditMode(education.length)
    }

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
                Add Education
            </Button>
        </div>
    )
}

const EducationMemo = React.memo(Education)

export { EducationMemo as Education }
