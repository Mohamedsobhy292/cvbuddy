import React, { useState } from 'react'

import styles from '../../../BuildResume.module.scss'
import { WorkHistoryItem } from './workHistoryItem'
import { Button } from 'shared/components/button'
import { useFormContext, useFieldArray } from 'react-hook-form'

const WorkHistory = () => {
    const [editMode, seteEditMode] = useState(false)
    const { control } = useFormContext()
    const { fields, append } = useFieldArray({
        control,
        name: 'experience',
    })

    const addExperience = () => {
        append({})
    }

    console.log(fields)

    return (
        <>
            <h3 className={styles.title}> Work History</h3>
            {fields &&
                fields.map((item, index) => {
                    return (
                        <WorkHistoryItem
                            fields={fields}
                            editMode={editMode}
                            seteEditMode={seteEditMode}
                            key={item.id}
                            experience={item}
                            index={index}
                            fieldName={`experience[${index}]`}
                        />
                    )
                })}

            <Button onClick={addExperience} variant="primary">
                Add Experience
            </Button>
        </>
    )
}

export { WorkHistory }
