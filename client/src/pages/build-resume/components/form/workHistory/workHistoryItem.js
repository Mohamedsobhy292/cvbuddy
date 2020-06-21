import React, { useContext, useState } from 'react'
import classnames from 'classnames'

import { AppContext } from 'shared/context/appContext'

import { InputLabel } from 'shared/components/inputLabel'
import { FormInput } from 'shared/components/formComponents/FormInput'
import { FormTextArea } from 'shared/components/formComponents/formTextArea'

import styles from '../../../BuildResume.module.scss'
import { EditIcon } from './editIcon.jsx'
import { DeleteIcon } from './deleteIcon'
import { useFormContext } from 'react-hook-form'
import { FormCheckBox } from 'shared/components/formComponents/formCheckbox'

const WorkHistoryItem = ({ experience, index }) => {
    const [editMode, seteEditMode] = useState(null)
    const methods = useFormContext()
    const { watch } = methods
    const values = watch({ nest: true })

    const currentlyWorkHere = watch(`experience[${index}].currentlyWorkHere`)

    const { dispatch } = useContext(AppContext)

    const handleFieldChange = () => (value) => {
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: {
                name: 'experience',
                value: values?.experience,
            },
        })
        return value
    }

    return (
        <div className={styles.experienceCard} key={experience.id}>
            {/* EDIT MODE  */}

            {/* {editMode === index && ( */}
            <div className={styles.formContainer}>
                <div className={styles.formControl}>
                    {/* TITLE */}
                    <InputLabel>Job title</InputLabel>
                    <FormInput
                        name={`experience[${index}].title`}
                        onChange={handleFieldChange}
                        defaultValue={experience.title}
                    />
                </div>

                {/* COMPANY */}

                <div className={styles.formControl}>
                    <InputLabel>Company</InputLabel>
                    <FormInput
                        name={`experience[${index}].company`}
                        onChange={handleFieldChange}
                        defaultValue={experience.company}
                    />
                </div>

                <div className={styles.formContainer}>
                    {/* START DATE */}

                    <div
                        className={classnames(
                            styles.formControl,
                            styles.oneThird
                        )}
                    >
                        <InputLabel>Start Date</InputLabel>
                        <FormInput
                            name={`experience[${index}].startDate`}
                            onChange={handleFieldChange}
                            defaultValue={experience.startDate}
                        />
                    </div>

                    {/* END DATE */}

                    <div
                        className={classnames(
                            styles.formControl,
                            styles.oneThird
                        )}
                    >
                        <InputLabel>End Date</InputLabel>

                        <FormInput
                            name={`experience[${index}].endDate`}
                            onChange={handleFieldChange}
                            disabled={currentlyWorkHere}
                            defaultValue={experience.endDate}
                        />

                        <div className={styles.checkBoxWrapper}>
                            <FormCheckBox
                                name={`experience[${index}].currentlyWorkHere`}
                            >
                                <span className={styles.label}>
                                    I'm currently work here
                                </span>
                            </FormCheckBox>
                        </div>
                    </div>

                    {/* CITY */}

                    <div
                        className={classnames(
                            styles.formControl,
                            styles.oneThird
                        )}
                    >
                        <InputLabel>City</InputLabel>
                        <FormInput
                            name={`experience[0].city`}
                            onChange={handleFieldChange}
                            defaultValue={experience.city}
                        />
                    </div>
                </div>

                {/* DESCRIPTION */}

                <div
                    className={classnames(styles.formControl, styles.fullWidth)}
                >
                    <InputLabel>Description</InputLabel>
                    <FormTextArea
                        onChange={handleFieldChange}
                        name={`experience[${index}].description`}
                    />
                </div>
            </div>
            {/* )} */}

            {/* DATA */}

            {editMode !== index && (
                <>
                    <h3 className={styles.experienceTitle}>
                        {experience.title} at {experience.company}
                    </h3>
                    <h4 className={styles.duration}>
                        {experience.startDate} - {experience.endDate}
                    </h4>
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
