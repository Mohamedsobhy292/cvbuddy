import React, { useContext } from 'react'
import { FormInput } from 'shared/components/formComponents/FormInput'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { DeleteIcon } from 'shared/icons/deleteIcon'
import { InputLabel } from 'shared/components/inputLabel'
import { useFormContext } from 'react-hook-form'
import { AppContext } from 'shared/context/appContext'
import { FormDropDown } from 'shared/components/formComponents/formDropDown'
import { useDeepCompareEffect } from 'shared/hooks/useDeepCompareEffect'

const LanguageItem = ({ language, index, remove }) => {
    const methods = useFormContext()

    const { watch } = methods
    const { dispatch } = useContext(AppContext)

    const currentLanguage = watch(`languages[${index}]`)

    const handleFieldChange = () => {
        dispatch({
            type: 'UPDATE_LANGUAGES_FIELD',
            payload: {
                languages: currentLanguage,
                index,
            },
        })
    }

    useDeepCompareEffect(handleFieldChange, [currentLanguage])

    const handleRemoveSkill = () => {
        dispatch({
            type: 'REMOVE_LANGUAGES_ITEM',
            payload: {
                index,
            },
        })
    }

    return (
        <div className={styles.skillItem} key={index}>
            <div className={styles.skillInputContainer}>
                {index === 0 && <InputLabel>Language name</InputLabel>}

                <FormInput
                    name={`languages[${index}].name`}
                    defaultValue={language.name}
                />
            </div>
            <div className={styles.skillInputContainer}>
                {index === 0 && <InputLabel>level</InputLabel>}
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
                    name={`languages[${index}].level`}
                    defaultValue={language.level}
                />
            </div>

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

export { LanguageItem }
