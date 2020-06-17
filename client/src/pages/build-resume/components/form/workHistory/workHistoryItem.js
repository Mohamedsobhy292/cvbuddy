import React, { useState } from 'react'
import classnames from 'classnames'

import { InputLabel } from 'shared/components/inputLabel'
import { FormInput } from 'shared/components/formComponents/FormInput'
import { FormTextArea } from 'shared/components/formComponents/formTextArea'

import styles from '../../../BuildResume.module.scss'
import { EditIcon } from './editIcon.jsx'
import { DeleteIcon } from './deleteIcon'

const WorkHistoryItem = ({ experience, index }) => {
    const [editMode, seteEditMode] = useState(false)
    return (
        <div className={styles.experienceCard}>
            {/* EDIT MODE  */}

            {editMode && (
                <div className={styles.formContainer}>
                    <div className={styles.formControl}>
                        <InputLabel>Job title</InputLabel>
                        <FormInput name={`experience[${index}].jobTitle`} />
                    </div>

                    <div className={styles.formControl}>
                        <InputLabel>Company</InputLabel>
                        <FormInput name="experience.company" />
                    </div>

                    <div className={styles.formControl}>
                        <InputLabel>City</InputLabel>
                        <FormInput name="experience.city" />
                    </div>

                    <div
                        className={classnames(
                            styles.formControl,
                            styles.fullWidth
                        )}
                    >
                        <InputLabel>Description</InputLabel>
                        <FormTextArea name="experience.description" />
                    </div>
                </div>
            )}

            {/* DATA */}

            {!editMode && (
                <>
                    <h3 className={styles.experienceTitle}>
                        {experience.title} at {experience.company}
                    </h3>
                    <h4 className={styles.duration}>{experience.duration}</h4>
                    <div className={styles.iconsContainer}>
                        <EditIcon
                            width="16px"
                            className={styles.icon}
                            onClick={() => seteEditMode(true)}
                        />
                        <DeleteIcon width="16px" className={styles.icon} />
                    </div>
                </>
            )}
        </div>
    )
}

export { WorkHistoryItem }
