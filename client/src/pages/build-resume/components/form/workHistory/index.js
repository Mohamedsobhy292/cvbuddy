import React from 'react'

import styles from '../../../BuildResume.module.scss'
import { WorkHistoryItem } from './workHistoryItem'
import { useFormContext, useFieldArray } from 'react-hook-form'

const WorkHistory = () => {
    const { control } = useFormContext()
    const { fields, append } = useFieldArray({
        control,
        name: 'workHistory',
    })
    const addDamage = () => append({})

    return (
        <>
            <h3 className={styles.title}> Work History</h3>
            {fields.map((key, index) => (
                <WorkHistoryItem name="workHistory" index={index} />
            ))}
            <button onClick={addDamage}>ADD</button>
        </>
    )
}

export { WorkHistory }
