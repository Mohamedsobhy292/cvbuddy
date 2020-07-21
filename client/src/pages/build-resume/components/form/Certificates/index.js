import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { Button } from 'shared/components/button'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { CertificateItem } from './certificateItem'
import { useOnClickOutside } from 'shared/hooks/useClickOutside'
import { PlusIcon } from 'shared/icons/plusIcon'

const Certificates = () => {
    const [editMode, setEditMode] = useState(false)
    const { control } = useFormContext()
    const { fields: certificates, append, remove } = useFieldArray({
        control,
        name: 'certificates',
    })

    const ref = useRef()
    useOnClickOutside(ref, () => setEditMode(false))

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
                            remove={remove}
                            key={item.id}
                        />
                    )
                })}

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
