import React, { useContext } from 'react'
import classnames from 'classnames'

import { AppContext } from 'shared/context/appContext'

import { FormTextArea } from 'shared/components/formComponents/formTextArea'

import styles from 'pages/build-resume/BuildResume.module.scss'
import { DeleteIcon } from 'shared/icons/deleteIcon'
import { useFormContext } from 'react-hook-form'
import { CertificateFormField } from './certificateField'
import { ArrowDownIcon } from 'shared/icons/arrowDownIcon'
import { useDeepCompareEffect } from 'shared/hooks/useDeepCompareEffect'

const CertificateItem = ({
    certificate,
    index,
    editMode,
    setEditMode,
    handleDelete,
}) => {
    const methods = useFormContext()
    const { watch } = methods
    const { dispatch } = useContext(AppContext)

    const isOpen = editMode === index

    const currentCertificate = watch(`certificates[${index}]`)

    const val = watch('certificates')

    const handleFieldChange = () => {
        dispatch({
            type: 'UPDATE_CERTIFICATE_ITEM',
            payload: {
                certificates: currentCertificate,
                index,
            },
        })
    }

    useDeepCompareEffect(handleFieldChange, [currentCertificate])

    const handleRemoveEducation = () => {
        dispatch({
            type: 'REMOVE_CERTIFICATES_ITEM',
            payload: {
                name: 'certificates',
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

            {currentCertificate?.name && currentCertificate?.institution && (
                <div onClick={toggle} className={styles.dataContainer}>
                    <h3 className={styles.experienceTitle}>
                        {currentCertificate?.name}
                    </h3>
                    <h3 className={styles.secondaryTitle}>
                        {currentCertificate?.institution}
                    </h3>
                    <h4 className={styles.duration}>
                        {currentCertificate?.year}
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

                <CertificateFormField
                    label="certificate"
                    name={`certificates[${index}].name`}
                    defaultValue={certificate.name}
                />

                {/* INSTITUTION */}

                <CertificateFormField
                    label="Institution"
                    name={`certificates[${index}].institution`}
                    defaultValue={certificate.institution}
                />

                <div className={styles.formContainer}>
                    {/* YEAR */}
                    <CertificateFormField
                        additionalClassName={styles.oneThird}
                        label="Year"
                        name={`certificates[${index}].year`}
                        defaultValue={certificate.year}
                    />
                </div>

                {/* DESCRIPTION */}

                <CertificateFormField
                    additionalClassName={styles.fullWidth}
                    label="description"
                    name={`certificates[${index}].description`}
                    component={FormTextArea}
                    defaultValue={certificate.description}
                />
            </div>
        </div>
    )
}

const CertificateItemMemo = React.memo(CertificateItem)

export { CertificateItemMemo as CertificateItem }
