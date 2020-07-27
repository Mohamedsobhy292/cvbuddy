import React, { useEffect, useContext } from 'react'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { Button } from 'shared/components/button'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { SkillItem } from './skillItem'
import { PlusIcon } from 'shared/icons/plusIcon'
import { FormCheckBox } from 'shared/components/formComponents/formCheckbox'
import { AppContext } from 'shared/context/appContext'
import { useDebouncedCallback } from 'use-debounce/lib'
import { useDeepCompareEffect } from 'shared/hooks/useDeepCompareEffect'

const Skills = () => {
    const { control, watch } = useFormContext()
    const { fields: skills, append, remove, move } = useFieldArray({
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

    const skillsValue = watch('skills')

    const [handleFieldChange] = useDebouncedCallback(() => {
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: {
                name: 'skills',
                value: skillsValue,
            },
        })
    }, 1000)

    useDeepCompareEffect(handleFieldChange, [skillsValue])

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}> Skills</h3>
                <p className={styles.sectionDescription}>
                    Include your last 10 years of relevant experience and dates
                    in this section. List your most recent position first.
                </p>
            </div>

            {/* DATA */}

            <div>
                {skills &&
                    !!skills.length &&
                    skills.map((item, index) => {
                        return (
                            <SkillItem
                                showSkillsLevel={showSkillsLevel}
                                skill={item}
                                index={index}
                                remove={remove}
                                move={move}
                                key={item.id}
                            />
                        )
                    })}
            </div>
            {/* DATA */}

            {skills && !!skills.length && (
                <FormCheckBox
                    className={styles.checkBoxWrapper}
                    name="showSkillsLevel"
                    defaultValue={false}
                >
                    <span className={styles.label}>Show skill level</span>
                </FormCheckBox>
            )}

            {/* ADD BUTTON */}
            <Button
                variant="tertiary"
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
