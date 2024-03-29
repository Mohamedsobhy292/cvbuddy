import React from 'react'
import classnames from 'classnames'

import styles from 'pages/build-resume/BuildResume.module.scss'
import { DeleteIcon } from 'shared/icons/deleteIcon'
import { useFormContext } from 'react-hook-form'
import { EducationFormField } from './educationFormField'
import { ArrowDownIcon } from 'shared/icons/arrowDownIcon'
import { FormRichTextEditor } from 'shared/components/formComponents/formRichTextEditor'
import { LongArrowDown } from 'shared/icons/longArrowDown'

const EducationItem = ({
    education,
    index,
    editMode,
    setEditMode,
    handleDelete,
    move,
}) => {
    const methods = useFormContext()
    const { watch } = methods

    const isOpen = editMode === index

    const currentEducation = watch(`education[${index}]`)

    const toggle = () => {
        isOpen ? setEditMode(null) : setEditMode(index)
    }

    return (
        <div className={styles.experienceCard} key={index}>
            {/* MOVE ARROWS */}
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

            <div onClick={toggle} className={styles.dataContainer}>
                <h3 className={styles.experienceTitle}>
                    {currentEducation?.school}
                </h3>
                <h3 className={styles.secondaryTitle}>
                    {currentEducation?.degree}
                </h3>
                <h4 className={styles.duration}>
                    {currentEducation?.startDate &&
                        `${currentEducation?.startDate} -`}{' '}
                    {currentEducation?.endDate}
                </h4>
                <div className={styles.iconsContainer}>
                    <ArrowDownIcon
                        width="16px"
                        className={classnames(styles.arrowDown, styles.icon, {
                            [styles.active]: isOpen,
                        })}
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

            {/* EDIT MODE  */}

            <div
                className={classnames(styles.formContainer, {
                    [styles.hidden]: !isOpen,
                })}
            >
                {/*  TITLE/ */}

                <EducationFormField
                    label="school name"
                    name={`education[${index}].school`}
                    defaultValue={education.school}
                />

                {/* DEGREE */}

                <EducationFormField
                    label="Degree"
                    name={`education[${index}].degree`}
                    defaultValue={education.degree}
                />

                {/* CITY */}

                <div className={styles.formContainer}>
                    <EducationFormField
                        additionalClassName={styles.oneThird}
                        label="City"
                        name={`education[${index}].city`}
                        defaultValue={education.city}
                    />

                    {/* START DATE */}

                    <EducationFormField
                        additionalClassName={styles.oneThird}
                        label="Start Date"
                        name={`education[${index}].startDate`}
                        defaultValue={education.startDate}
                    />

                    {/* END DATE */}

                    <EducationFormField
                        additionalClassName={styles.oneThird}
                        label="End Date"
                        name={`education[${index}].endDate`}
                        defaultValue={education.endDate}
                    />
                </div>

                {/* DESCRIPTION */}

                <EducationFormField
                    additionalClassName={styles.fullWidth}
                    label="description"
                    name={`education[${index}].description`}
                    component={FormRichTextEditor}
                    defaultValue={education.description}
                />
            </div>
        </div>
    )
}

const EducationItemMemo = React.memo(EducationItem)

export { EducationItemMemo as EducationItem }
