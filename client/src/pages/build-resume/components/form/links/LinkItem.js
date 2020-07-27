import React from 'react'
import { FormInput } from 'shared/components/formComponents/FormInput'
import styles from 'pages/build-resume/BuildResume.module.scss'
import { DeleteIcon } from 'shared/icons/deleteIcon'
import { InputLabel } from 'shared/components/inputLabel'
import { LongArrowDown } from 'shared/icons/longArrowDown'

const LinkItem = ({ website, index, remove, move }) => {
    return (
        <div className={styles.skillItem} key={index}>
            <div className={styles.skillInputContainer}>
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
                {index === 0 && <InputLabel>Website Label</InputLabel>}

                <FormInput
                    name={`links[${index}].label`}
                    defaultValue={website.label}
                />
            </div>

            <div className={styles.skillInputContainer}>
                {index === 0 && <InputLabel>Website Link</InputLabel>}
                <FormInput
                    additionalClassName={styles.skillsLevelField}
                    name={`links[${index}].link`}
                    defaultValue={website.link}
                />
            </div>
            <DeleteIcon
                width="16px"
                className={styles.deleteIcon}
                onClick={() => {
                    remove(index)
                }}
            />
        </div>
    )
}

export { LinkItem }
