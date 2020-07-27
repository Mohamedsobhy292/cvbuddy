import React, { useState, useRef, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { Button } from 'shared/components/button'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { CertificateItem } from './certificateItem'
import { useOnClickOutside } from 'shared/hooks/useClickOutside'
import { PlusIcon } from 'shared/icons/plusIcon'
import { useDebouncedCallback } from 'use-debounce/lib'
import { useDeepCompareEffect } from 'shared/hooks/useDeepCompareEffect'
import { AppContext } from 'shared/context/appContext'

const Certificates = () => {
    const [editMode, setEditMode] = useState(false)
    const { control, watch } = useFormContext()
    const { dispatch } = useContext(AppContext)
    const { fields: certificates, append, remove, move } = useFieldArray({
        control,
        name: 'certificates',
    })

    const ref = useRef()
    useOnClickOutside(ref, () => setEditMode(false))

    const certificatesValue = watch('certificates')

    const [handleFieldChange] = useDebouncedCallback(() => {
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: {
                name: 'certificates',
                value: certificatesValue,
            },
        })
    }, 1000)

    useDeepCompareEffect(handleFieldChange, [certificatesValue])

    const handleAdd = () => {
        append({
            id: uuidv4(),
        })
        setEditMode(certificates.length)
    }

    return (
        <div className={styles.sectionContainer} ref={ref}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>Certificates</h3>
                <p className={styles.sectionDescription}>
                    Include your last 10 years of relevant experience and dates
                    in this section. List your most recent position first.
                </p>
            </div>

            <div>
                {/* DATA */}
                {certificates &&
                    !!certificates.length &&
                    certificates.map((item, index) => {
                        return (
                            <CertificateItem
                                editMode={editMode}
                                setEditMode={setEditMode}
                                certificate={item}
                                index={index}
                                handleDelete={remove}
                                move={move}
                                key={item.id}
                            />
                        )
                    })}
            </div>

            {/* ADD BUTTON */}

            <Button
                variant="tertiary"
                onClick={handleAdd}
                className={styles.addBtn}
            >
                <PlusIcon />
                Add Certificate
            </Button>
        </div>
    )
}

export { Certificates }
