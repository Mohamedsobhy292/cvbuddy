import React, { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import styles from './ChooseTemplate.module.scss'
import cvTemplate from './resume1.jpg'
import { RadioButton } from '../../shared/components/radioButton'
import { Button } from '../../shared/components/button'
import Arrow from './arrow-right'

const templates = [
    {
        name: 'developer',
    },
    {
        name: 'engineer',
    },
    {
        name: 'doctor',
    },
]

const ChooseTemplate = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null)

    const handleTemplateClick = (item) => {
        setSelectedTemplate(item.name)
    }

    return (
        <div className={styles.chooseTemplateWrapper}>
            <h2 className={styles.title}>Choose Resume Template</h2>

            <ul className={styles.templatesList}>
                {templates.map((item) => {
                    return (
                        <li
                            key={item.name}
                            className={classNames(styles.templateWrapper, {
                                [styles.isActive]:
                                    selectedTemplate === item.name,
                                [styles.isDisabled]:
                                    selectedTemplate &&
                                    selectedTemplate !== item.name,
                            })}
                            onClick={() => handleTemplateClick(item)}
                        >
                            <img src={cvTemplate} alt="cv template" />
                            <RadioButton
                                className={styles.itemRadio}
                                checked={selectedTemplate === item.name}
                            />
                            <div className={styles.titleWrapper}>
                                {item.name}
                            </div>
                        </li>
                    )
                })}
            </ul>

            <Link to="/build-resume" className={styles.proceedBtn}>
                PROCEED
                <span className={styles.arrow}>
                    <Arrow />
                </span>
            </Link>
        </div>
    )
}

export default ChooseTemplate
