import React, { useContext } from 'react'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { Button } from 'shared/components/button'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { LinkItem } from './LinkItem'
import { PlusIcon } from 'shared/icons/plusIcon'
import { useDebouncedCallback } from 'use-debounce/lib'
import { AppContext } from 'shared/context/appContext'
import { useDeepCompareEffect } from 'shared/hooks/useDeepCompareEffect'

const Links = () => {
    const { control, watch } = useFormContext()
    const { fields: links, append, remove, move } = useFieldArray({
        control,
        name: 'links',
    })

    const { dispatch } = useContext(AppContext)
    const skillsValue = watch('links')

    const [handleFieldChange] = useDebouncedCallback(() => {
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: {
                name: 'links',
                value: skillsValue,
            },
        })
    }, 1000)

    useDeepCompareEffect(handleFieldChange, [skillsValue])

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>Websites / Links</h3>
                <p className={styles.sectionDescription}>
                    Include your last 10 years of relevant experience and dates
                    in this section. List your most recent position first.
                </p>
            </div>

            {/* DATA */}
            <div>
                {links &&
                    links.map((item, index) => {
                        return (
                            <LinkItem
                                website={item}
                                index={index}
                                remove={remove}
                                key={item.id}
                                move={move}
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
                Add Link
            </Button>
        </div>
    )
}

export { Links }
