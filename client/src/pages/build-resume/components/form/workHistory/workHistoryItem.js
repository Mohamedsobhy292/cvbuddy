import React, { useState, useContext } from 'react'
import classnames from 'classnames'

import { AppContext } from 'shared/context/appContext'

import { InputLabel } from 'shared/components/inputLabel'
import { FormInput } from 'shared/components/formComponents/FormInput'
import { FormTextArea } from 'shared/components/formComponents/formTextArea'

import styles from '../../../BuildResume.module.scss'
import { EditIcon } from './editIcon.jsx'
import { DeleteIcon } from './deleteIcon'
import { useFormContext } from 'react-hook-form'

const WorkHistoryItem = ({
    experience,
    index,
    fieldName,
    editMode,
    seteEditMode,
}) => {
    const methods = useFormContext()
    const { getValues } = methods
    const val = getValues({ nest: true })

    const { dispatch } = useContext(AppContext)

    const handleFieldChange = (name) => (value) => {
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: {
                name: 'experience',
                value: val.experience,
            },
        })
        return value
    }

    return (
        <div className={styles.experienceCard} key={experience.id}>
            {/* EDIT MODE  */}

            {editMode === index && (
                <div className={styles.formContainer}>
                    <div className={styles.formControl}>
                        <InputLabel>Job title</InputLabel>
                        <FormInput
                            name={`experience[${index}].title`}
                            onChange={handleFieldChange}
                        />
                    </div>

                    <div className={styles.formControl}>
                        <InputLabel>Company</InputLabel>
                        <FormInput
                            name={`experience[${index}].company`}
                            onChange={handleFieldChange}
                        />
                    </div>

                    <div className={styles.formControl}>
                        <InputLabel>City</InputLabel>
                        <FormInput
                            name={`experience[0].city`}
                            onChange={handleFieldChange}
                        />
                    </div>

                    <div
                        className={classnames(
                            styles.formControl,
                            styles.fullWidth
                        )}
                    >
                        <InputLabel>Description</InputLabel>
                        <FormTextArea
                            onChange={handleFieldChange}
                            name={`experience[${index}].description`}
                        />
                    </div>
                </div>
            )}

            {/* DATA */}

            {editMode !== index && (
                <>
                    <h3 className={styles.experienceTitle}>
                        {experience.title} at {experience.company}
                    </h3>
                    <h4 className={styles.duration}>{experience.duration}</h4>
                    <div className={styles.iconsContainer}>
                        <EditIcon
                            width="16px"
                            className={styles.icon}
                            onClick={() => seteEditMode(index)}
                        />
                        <DeleteIcon width="16px" className={styles.icon} />
                    </div>
                </>
            )}
        </div>
    )
}

export { WorkHistoryItem }
