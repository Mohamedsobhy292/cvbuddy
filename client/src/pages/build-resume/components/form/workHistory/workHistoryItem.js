import React, { useContext, useRef } from 'react'
import classnames from 'classnames'

import { AppContext } from 'shared/context/appContext'

import { FormRichTextEditor } from 'shared/components/formComponents/formRichTextEditor'

import styles from 'pages/build-resume/BuildResume.module.scss'
import { DeleteIcon } from 'shared/icons/deleteIcon'
import { useFormContext } from 'react-hook-form'
import { FormCheckBox } from 'shared/components/formComponents/formCheckbox'
import { WorkHistoryFormField } from './workHistoryFormField'
import { ArrowDownIcon } from 'shared/icons/arrowDownIcon'
import { LongArrowDown } from 'shared/icons/longArrowDown'
import { Label } from 'shared/components/Label'

const WorkHistoryItem = ({
    move,
    experience,
    index,
    editMode,
    setEditMode,
    handleDelete,
}) => {
    const methods = useFormContext()
    const { watch } = methods
    const ref = useRef()

    const isOpen = editMode === index

    const currentExperience = watch(`experience[${index}]`)

    const currentlyWorkHere = watch(`experience[${index}].currentlyWorkHere`)

    const toggle = () => {
        isOpen ? setEditMode(null) : setEditMode(index)
    }

    return (
        <div className={styles.experienceCard} key={index} ref={ref}>
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
            {/* DATA */}

            {currentExperience?.title && currentExperience?.company && (
                <div onClick={toggle} className={styles.dataContainer}>
                    <h3 className={styles.experienceTitle}>
                        {currentExperience.title} at{' '}
                        {currentExperience?.company}
                        {currentExperience.isInternship && (
                            <Label className={styles.internshipLabel}>
                                INTERNSHIP
                            </Label>
                        )}
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
                    name={`experience[${index}].title`}
                    defaultValue={experience.title}
                />

                {/* COMPANY */}

                <WorkHistoryFormField
                    label="Company"
                    name={`experience[${index}].company`}
                    defaultValue={experience.company}
                >
                    <div className={styles.checkBoxWrapper}>
                        <FormCheckBox
                            name={`experience[${index}].isInternship`}
                            defaultValue={experience.isInternship}
                        >
                            <span className={styles.label}>
                                This is internship
                            </span>
                        </FormCheckBox>
                    </div>
                </WorkHistoryFormField>

                {/* CITY */}

                <div className={styles.formContainer}>
                    <WorkHistoryFormField
                        additionalClassName={styles.oneThird}
                        label="City"
                        name={`experience[${index}].city`}
                        defaultValue={experience.city}
                    />

                    {/* START DATE */}

                    <WorkHistoryFormField
                        additionalClassName={styles.oneThird}
                        label="Start Date"
                        name={`experience[${index}].startDate`}
                        defaultValue={experience.startDate}
                    />

                    {/* END DATE */}

                    <WorkHistoryFormField
                        additionalClassName={styles.oneThird}
                        label="End Date"
                        name={`experience[${index}].endDate`}
                        disabled={currentlyWorkHere}
                        defaultValue={experience.endDate}
                    >
                        <div className={styles.checkBoxWrapper}>
                            <FormCheckBox
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
                    name={`experience[${index}].description`}
                    label="description"
                    component={FormRichTextEditor}
                    defaultValue={experience.description}
                />
            </div>
        </div>
    )
}

const WorkHistoryMemo = React.memo(WorkHistoryItem)

export { WorkHistoryMemo as WorkHistoryItem }
