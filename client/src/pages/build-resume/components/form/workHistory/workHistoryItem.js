import React, { useContext, useRef } from 'react'
import classnames from 'classnames'

import { AppContext } from 'shared/context/appContext'

import { FormTextArea } from 'shared/components/formComponents/formTextArea'

import styles from '../../../BuildResume.module.scss'
import { DeleteIcon } from './deleteIcon'
import { useFormContext } from 'react-hook-form'
import { FormCheckBox } from 'shared/components/formComponents/formCheckbox'
import { WorkHistoryFormField } from './workHistoryFormField'
import { useOnClickOutside } from 'shared/hooks/useClickOutside'
import { ArrowDownIcon } from './arrowDownIcon'

const WorkHistoryItem = ({ experience, index, editMode, setEditMode }) => {
    const methods = useFormContext()
    const { watch } = methods
    const { dispatch } = useContext(AppContext)
    const ref = useRef()

    useOnClickOutside(ref, () => setEditMode(false))

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

            <div onClick={toggle} className={styles.dataContainer}>
                <h3 className={styles.experienceTitle}>
                    {currentExperience?.title} at {currentExperience?.company}
                </h3>
                <h4 className={styles.duration}>
                    {experience.startDate} - {experience.endDate}
                </h4>
                <div className={styles.iconsContainer}>
                    <ArrowDownIcon
                        width="16px"
                        className={classnames(styles.arrowDown, styles.icon, {
                            [styles.active]: isOpen,
                        })}
                        onClick={toggle}
                    />

                    <DeleteIcon width="16px" className={styles.icon} />
                </div>
            </div>

            {/* EDIT MODE  */}

            <div
                className={classnames(styles.formContainer, {
                    [styles.hidden]: !isOpen,
                })}
            >
                <WorkHistoryFormField
                    label="Job title"
                    onBlur={handleFieldChange}
                    name={`experience[${index}].title`}
                />

                {/* COMPANY */}

                <WorkHistoryFormField
                    label="Company"
                    onBlur={handleFieldChange}
                    name={`experience[${index}].company`}
                />

                <div className={styles.formContainer}>
                    <WorkHistoryFormField
                        additionalClassName={styles.oneThird}
                        label="City"
                        onBlur={handleFieldChange}
                        name={`experience[${index}].city`}
                    />

                    {/* START DATE */}

                    <WorkHistoryFormField
                        additionalClassName={styles.oneThird}
                        label="Start Date"
                        onBlur={handleFieldChange}
                        name={`experience[${index}].startDate`}
                    />

                    {/* END DATE */}

                    <WorkHistoryFormField
                        additionalClassName={styles.oneThird}
                        label="End Date"
                        onBlur={handleFieldChange}
                        name={`experience[${index}].endDate`}
                        disabled={currentlyWorkHere}
                    >
                        <div className={styles.checkBoxWrapper}>
                            <FormCheckBox
                                onChange={handleFieldChange}
                                name={`experience[${index}].currentlyWorkHere`}
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
                />
            </div>
        </div>
    )
}

export { WorkHistoryItem }
