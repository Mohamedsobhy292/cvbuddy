import React, { useContext } from 'react'
import { FormInput } from 'shared/components/formComponents/FormInput'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { DeleteIcon } from 'shared/icons/deleteIcon'
import { InputLabel } from 'shared/components/inputLabel'
import { useFormContext } from 'react-hook-form'
import { AppContext } from 'shared/context/appContext'

const LinkItem = ({ website, index, remove }) => {
    const methods = useFormContext()
    const { watch } = methods
    const { dispatch } = useContext(AppContext)

    const currentLink = watch(`links[${index}]`)

    const handleFieldChange = () => {
        dispatch({
            type: 'UPDATE_LINKS_ITEM',
            payload: {
                links: currentLink,
                index,
            },
        })
    }

    const handleRemoveSkill = () => {
        dispatch({
            type: 'REMOVE_LINKS_ITEM',
            payload: {
                index,
            },
        })
    }

    return (
        <div className={styles.skillItem} key={index}>
            <div className={styles.skillInputContainer}>
                {index === 0 && <InputLabel>Website Label</InputLabel>}

                <FormInput
                    onBlur={handleFieldChange}
                    name={`links[${index}].name`}
                    defaultValue={website.label}
                />
            </div>

            <div className={styles.skillInputContainer}>
                {index === 0 && <InputLabel>Website Link</InputLabel>}
                <FormInput
                    onBlur={handleFieldChange}
                    additionalClassName={styles.skillsLevelField}
                    name={`links[${index}].level`}
                    defaultValue={website.link}
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

export { LinkItem }
