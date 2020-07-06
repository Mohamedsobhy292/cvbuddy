import React from 'react'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { Button } from 'shared/components/button'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { LinkItem } from './LinkItem'
import { PlusIcon } from 'shared/icons/plusIcon'

const Links = () => {
    const { control } = useFormContext()
    const { fields: links, append, remove } = useFieldArray({
        control,
        name: 'links',
    })

    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.title}>Websites / Links</h3>

            {/* DATA */}
            {links &&
                links.map((item, index) => {
                    return (
                        <LinkItem
                            website={item}
                            index={index}
                            remove={remove}
                            key={item.id}
                        />
                    )
                })}

            {/* ADD BUTTON */}

            <Button
                variant="link"
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
