import React, { useRef, useState } from 'react'
import styles from '../../../BuildResume.module.scss'
import { Button } from 'shared/components/button'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useOnClickOutside } from 'shared/hooks/useClickOutside'
import { SkillItem } from './skillItem'

const Skills = () => {
    const [editMode, setEditMode] = useState(false)
    const { control } = useFormContext()
    const { fields: skills, append, remove } = useFieldArray({
        control,
        name: 'skills',
    })

    const ref = useRef()
    useOnClickOutside(ref, () => setEditMode(false))

    return (
        <div ref={ref} className={styles.sectionContainer}>
            <h3 className={styles.title}> Skills</h3>

            {/* DATA */}
            {skills &&
                !!skills.length &&
                skills.map((item, index) => {
                    return (
                        <SkillItem
                            skill={item}
                            index={index}
                            remove={remove}
                            key={item.id}
                        />
                    )
                })}

            {/* ADD BUTTON */}

            <Button variant="link" onClick={() => append({})}>
                Add Skill
            </Button>
        </div>
    )
}

export { Skills }
