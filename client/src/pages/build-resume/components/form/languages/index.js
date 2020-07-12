import React from 'react'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { Button } from 'shared/components/button'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { PlusIcon } from 'shared/icons/plusIcon'
import { LanguageItem } from './languageItem'

const Languages = () => {
    const { control } = useFormContext()
    const { fields: languages, append, remove } = useFieldArray({
        control,
        name: 'languages',
    })

    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.title}>Languages</h3>
            {/* DATA */}
            {languages &&
                !!languages.length &&
                languages.map((item, index) => {
                    return (
                        <LanguageItem
                            language={item}
                            index={index}
                            remove={remove}
                            key={item.id}
                        />
                    )
                })}

            {/* ADD BUTTON */}
            <Button
                variant="tertiary"
                onClick={() => append({})}
                className={styles.addBtn}
            >
                <PlusIcon />
                Add Language
            </Button>
        </div>
    )
}

export { Languages }