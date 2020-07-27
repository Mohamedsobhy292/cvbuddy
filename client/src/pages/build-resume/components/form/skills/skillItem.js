import React from 'react'
import { FormInput } from 'shared/components/formComponents/FormInput'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { DeleteIcon } from 'shared/icons/deleteIcon'
import { InputLabel } from 'shared/components/inputLabel'

import { FormDropDown } from 'shared/components/formComponents/formDropDown'
import { LongArrowDown } from 'shared/icons/longArrowDown'

const SkillItem = ({ skill, index, remove, showSkillsLevel, move }) => {
    return (
        <div className={styles.skillItem} key={index}>
            <div className={styles.skillInputContainer}>
                <div className={styles.moveArrows}>
                    <LongArrowDown
                        className={styles.moveUpArrow}
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation()
                            move(index, index - 1)
                        }}
                    />
                    <LongArrowDown
                        className={styles.moveDownArrow}
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation()
                            move(index, index + 1)
                        }}
                    />
                </div>
                {index === 0 && <InputLabel>skill name</InputLabel>}

                <FormInput
                    name={`skills[${index}].name`}
                    defaultValue={skill.name}
                />
            </div>

            {showSkillsLevel && (
                <div className={styles.skillInputContainer}>
                    {index === 0 && <InputLabel>skill level</InputLabel>}
                    <FormDropDown
                        options={[
                            {
                                label: 'beginner',
                                value: 'beginner',
                            },
                            {
                                label: 'intermediate',
                                value: 'intermediate',
                            },
                            {
                                label: 'advanced',
                                value: 'advanced',
                            },
                        ]}
                        additionalClassName={styles.skillsLevelField}
                        name={`skills[${index}].level`}
                        defaultValue={skill.level}
                    />
                </div>
            )}

            <DeleteIcon
                width="16px"
                className={styles.deleteIcon}
                onClick={() => {
                    remove(index)
                }}
            />
        </div>
    )
}

export { SkillItem }
