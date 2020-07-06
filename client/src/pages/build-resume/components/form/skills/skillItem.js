import React, { useContext } from 'react'
import { FormInput } from 'shared/components/formComponents/FormInput'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { DeleteIcon } from 'shared/icons/deleteIcon'
import { InputLabel } from 'shared/components/inputLabel'
import { useFormContext } from 'react-hook-form'
import { AppContext } from 'shared/context/appContext'
import { FormDropDown } from 'shared/components/formComponents/formDropDown'

const SkillItem = ({ skill, index, remove, showSkillsLevel }) => {
    const methods = useFormContext()
    const { watch } = methods
    const { dispatch } = useContext(AppContext)

    const currentSkill = watch(`skills[${index}]`)

    const handleFieldChange = () => {
        dispatch({
            type: 'UPDATE_SKILLS_FIELD',
            payload: {
                skills: currentSkill,
                index,
            },
        })
    }

    const handleRemoveSkill = () => {
        dispatch({
            type: 'REMOVE_SKILL_ITEM',
            payload: {
                index,
            },
        })
    }

    return (
        <div className={styles.skillItem} key={index}>
            <div className={styles.skillInputContainer}>
                {index === 0 && <InputLabel>skill name</InputLabel>}

                <FormInput
                    onBlur={handleFieldChange}
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
                        onBlur={handleFieldChange}
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
                    handleRemoveSkill(index)
                    remove(index)
                }}
            />
        </div>
    )
}

export { SkillItem }
