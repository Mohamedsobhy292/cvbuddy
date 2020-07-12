import React, { useContext } from 'react'
import classnames from 'classnames'

import { AppContext } from 'shared/context/appContext'

import { FormTextArea } from 'shared/components/formComponents/formTextArea'

import styles from 'pages/build-resume/BuildResume.module.scss'
import { DeleteIcon } from 'shared/icons/deleteIcon'
import { useFormContext } from 'react-hook-form'
import { EducationFormField } from './educationFormField'
import { ArrowDownIcon } from 'shared/icons/arrowDownIcon'

const EducationItem = ({
    education,
    index,
    editMode,
    setEditMode,
    handleDelete,
}) => {
    const methods = useFormContext()
    const { watch } = methods
    const { dispatch } = useContext(AppContext)

    const isOpen = editMode === index

    const currentEducation = watch(`education[${index}]`)

    const handleFieldChange = () => {
        dispatch({
            type: 'UPDATE_EDUCATION_FIELD',
            payload: {
                name: 'education',
                education: currentEducation,
                index,
            },
        })
    }

    const handleRemoveEducation = () => {
        dispatch({
            type: 'REMOVE_EDUCATION_ITEM',
            payload: {
                name: 'education',
                index,
            },
        })
    }

    const toggle = () => {
        isOpen ? setEditMode(null) : setEditMode(index)
    }

    return (
        <div className={styles.experienceCard} key={index}>
            {/* DATA */}

            {currentEducation?.school && currentEducation?.degree && (
                <div onClick={toggle} className={styles.dataContainer}>
                    <h3 className={styles.experienceTitle}>
                        {currentEducation?.school}
                    </h3>
                    <h3 className={styles.secondaryTitle}>
                        {currentEducation?.degree}
                    </h3>
                    <h4 className={styles.duration}>
                        {currentEducation?.startDate} -{' '}
                        {currentEducation?.endDate}
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
                                handleRemoveEducation()
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
                {/*  TITLE/ */}

                <EducationFormField
                    label="school name"
                    onBlur={handleFieldChange}
                    name={`education[${index}].school`}
                    defaultValue={education.school}
                />

                {/* DEGREE */}

                <EducationFormField
                    label="Degree"
                    onBlur={handleFieldChange}
                    name={`education[${index}].degree`}
                    defaultValue={education.degree}
                />

                {/* CITY */}

                <div className={styles.formContainer}>
                    <EducationFormField
                        additionalClassName={styles.oneThird}
                        label="City"
                        onBlur={handleFieldChange}
                        name={`education[${index}].city`}
                        defaultValue={education.city}
                    />

                    {/* START DATE */}

                    <EducationFormField
                        additionalClassName={styles.oneThird}
                        label="Start Date"
                        onBlur={handleFieldChange}
                        name={`education[${index}].startDate`}
                        defaultValue={education.startDate}
                    />

                    {/* END DATE */}

                    <EducationFormField
                        additionalClassName={styles.oneThird}
                        label="End Date"
                        onBlur={handleFieldChange}
                        name={`education[${index}].endDate`}
                        defaultValue={education.endDate}
                    />
                </div>

                {/* DESCRIPTION */}

                <EducationFormField
                    additionalClassName={styles.fullWidth}
                    label="description"
                    onBlur={handleFieldChange}
                    name={`education[${index}].description`}
                    component={FormTextArea}
                    defaultValue={education.description}
                />
            </div>
        </div>
    )
}

const EducationItemMemo = React.memo(EducationItem)

export { EducationItemMemo as EducationItem }
