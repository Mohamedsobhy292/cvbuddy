import React, { useContext } from 'react'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { Button } from 'shared/components/button'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { PlusIcon } from 'shared/icons/plusIcon'
import { LanguageItem } from './languageItem'
import { useDebouncedCallback } from 'use-debounce/lib'
import { AppContext } from 'shared/context/appContext'
import { useDeepCompareEffect } from 'shared/hooks/useDeepCompareEffect'

const Languages = () => {
    const { control, watch } = useFormContext()
    const { dispatch } = useContext(AppContext)
    const { fields: languages, append, remove, move } = useFieldArray({
        control,
        name: 'languages',
    })

    const languagesValue = watch('languages')

    const [handleFieldChange] = useDebouncedCallback(() => {
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: {
                name: 'languages',
                value: languagesValue,
            },
        })
    }, 1000)

    useDeepCompareEffect(handleFieldChange, [languagesValue])

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>Languages</h3>
                <p className={styles.sectionDescription}>
                    Include your last 10 years of relevant experience and dates
                    in this section. List your most recent position first.
                </p>
            </div>

            {/* DATA */}

            <div>
                {languages &&
                    !!languages.length &&
                    languages.map((item, index) => {
                        return (
                            <LanguageItem
                                language={item}
                                index={index}
                                remove={remove}
                                move={move}
                                key={item.id}
                            />
                        )
                    })}
            </div>

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
