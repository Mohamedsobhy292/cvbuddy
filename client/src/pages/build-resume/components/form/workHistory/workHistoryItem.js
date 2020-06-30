import React, { useContext, useRef } from 'react'
import classnames from 'classnames'

import { AppContext } from 'shared/context/appContext'

import { FormTextArea } from 'shared/components/formComponents/formTextArea'

import styles from '../../../BuildResume.module.scss'
import { DeleteIcon } from './deleteIcon'
import { useFormContext } from 'react-hook-form'
import { FormCheckBox } from 'shared/components/formComponents/formCheckbox'
import { WorkHistoryFormField } from './workHistoryFormField'
import { ArrowDownIcon } from './arrowDownIcon'

const WorkHistoryItem = ({
    experience,
    index,
    editMode,
    setEditMode,
    handleDelete,
}) => {
    const methods = useFormContext()
    const { watch } = methods
    const { dispatch } = useContext(AppContext)
    const ref = useRef()

    const isOpen = editMode === index

    const currentExperience = watch(`experience[${index}]`)

    const currentlyWorkHere = watch(`experience[${index}].currentlyWorkHere`)

    const handleFieldChange = () => {
        dispatch({
            type: 'UPDATE_EXPERIENCE_FIELD',
            payload: {
                name: 'experience',
                experience: currentExperience,
                index,
            },
        })
    }

    const toggle = () => {
        isOpen ? setEditMode(null) : setEditMode(index)
    }

    return (
        <div className={styles.experienceCard} key={index} ref={ref}>
            {/* DATA */}

            {currentExperience?.title && currentExperience?.company && (
                <div onClick={toggle} className={styles.dataContainer}>
                    <h3 className={styles.experienceTitle}>
                        {currentExperience?.title} at{' '}
                        {currentExperience?.company}
                    </h3>
                    <h4 className={styles.duration}>
                        {currentExperience?.startDate} -{' '}
                        {currentExperience?.currentlyWorkHere
                            ? 'present'
                            : currentExperience?.endDate}
                    </h4>
                    <div className={styles.iconsContainer}>
                        <ArrowDownIcon
                            width="16px"
                            className={classnames(
                                styles.arrowDown,
                                styles.icon,
                                {
                                    [styles.active]: isOpen,
                                }
                            )}
                            onClick={toggle}
                        />

                        <DeleteIcon
                            width="16px"
                            className={styles.icon}
                            onClick={(e) => {
                                e.stopPropagation()
                                handleFieldChange()
                                handleDelete(index)
                            }}
                        />
                    </div>
                </div>
            )}

            {/* EDIT MODE  */}

            <div
                className={classnames(styles.formContainer, {
                    [styles.hidden]: !isOpen,
                })}
            >
                {/* JOB TITLE/ */}

                <WorkHistoryFormField
                    label="Job title"
                    onBlur={handleFieldChange}
                    name={`experience[${index}].title`}
                    defaultValue={experience.title}
                />

                {/* COMPANY */}

                <WorkHistoryFormField
                    label="Company"
                    onBlur={handleFieldChange}
                    name={`experience[${index}].company`}
                    defaultValue={experience.company}
                />

                {/* CITY */}

                <div className={styles.formContainer}>
                    <WorkHistoryFormField
                        additionalClassName={styles.oneThird}
                        label="City"
                        onBlur={handleFieldChange}
                        name={`experience[${index}].city`}
                        defaultValue={experience.city}
                    />

                    {/* START DATE */}

                    <WorkHistoryFormField
                        additionalClassName={styles.oneThird}
                        label="Start Date"
                        onBlur={handleFieldChange}
                        name={`experience[${index}].startDate`}
                        defaultValue={experience.startDate}
                    />

                    {/* END DATE */}

                    <WorkHistoryFormField
                        additionalClassName={styles.oneThird}
                        label="End Date"
                        onBlur={handleFieldChange}
                        name={`experience[${index}].endDate`}
                        disabled={currentlyWorkHere}
                        defaultValue={experience.endDate}
                    >
                        <div className={styles.checkBoxWrapper}>
                            <FormCheckBox
                                onChange={handleFieldChange}
                                name={`experience[${index}].currentlyWorkHere`}
                                defaultValue={experience.currentlyWorkHere}
                            >
                                <span className={styles.label}>
                                    I'm currently work here
                                </span>
                            </FormCheckBox>
                        </div>
                    </WorkHistoryFormField>
                </div>

                {/* DESCRIPTION */}

                <WorkHistoryFormField
                    additionalClassName={styles.fullWidth}
                    label="description"
                    onBlur={handleFieldChange}
                    name={`experience[${index}].description`}
                    component={FormTextArea}
                    defaultValue={experience.description}
                />
            </div>
        </div>
    )
}

const WorkHistoryMemo = React.memo(WorkHistoryItem)

export { WorkHistoryMemo as WorkHistoryItem }
