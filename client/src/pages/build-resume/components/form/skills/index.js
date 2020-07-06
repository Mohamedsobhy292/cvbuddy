import React, { useEffect, useContext } from 'react'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { Button } from 'shared/components/button'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { SkillItem } from './skillItem'
import { PlusIcon } from 'shared/icons/plusIcon'
import { FormCheckBox } from 'shared/components/formComponents/formCheckbox'
import { AppContext } from 'shared/context/appContext'

const Skills = () => {
    const { control, watch } = useFormContext()
    const { fields: skills, append, remove } = useFieldArray({
        control,
        name: 'skills',
    })
    const { dispatch } = useContext(AppContext)
    const showSkillsLevel = watch('showSkillsLevel')

    useEffect(() => {
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: {
                name: 'showSkillsLevel',
                value: showSkillsLevel,
            },
        })
    }, [showSkillsLevel, dispatch])

    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.title}> Skills</h3>

            {/* DATA */}
            {skills &&
                !!skills.length &&
                skills.map((item, index) => {
                    return (
                        <SkillItem
                            showSkillsLevel={showSkillsLevel}
                            skill={item}
                            index={index}
                            remove={remove}
                            key={item.id}
                        />
                    )
                })}

            <FormCheckBox
                className={styles.checkBoxWrapper}
                name="showSkillsLevel"
                defaultValue={false}
            >
                <span className={styles.label}>Show skill level</span>
            </FormCheckBox>

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
