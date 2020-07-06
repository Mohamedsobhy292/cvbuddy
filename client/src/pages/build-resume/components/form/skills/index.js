import React from 'react'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { Button } from 'shared/components/button'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { SkillItem } from './skillItem'
import { PlusIcon } from 'shared/icons/plusIcon'

const Skills = () => {
    const { control } = useFormContext()
    const { fields: skills, append, remove } = useFieldArray({
        control,
        name: 'skills',
    })

    return (
        <div className={styles.sectionContainer}>
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

            <Button
                variant="link"
                onClick={() => append({})}
                className={styles.addBtn}
            >
                <PlusIcon />
                Add Skill
            </Button>
        </div>
    )
}

export { Skills }
