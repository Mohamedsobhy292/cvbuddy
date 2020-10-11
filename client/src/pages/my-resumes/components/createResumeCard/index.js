import React from 'react'
import { routes } from 'routes'
import styles from './createResumeCard.module.scss'
import cvTemplate from '../../resume1.jpg'
import { Link } from 'react-router-dom'
import { PlusIcon } from 'shared/icons/plusIcon'

const CreateResumeCard = () => {
    return (
        <div className={styles.addNewWrapper}>
            <img src={cvTemplate} alt="cv template" />
            <Link className={styles.content} to={`/${routes.chooseTemplate}`}>
                <PlusIcon />
                <h3>Create One More Resume</h3>
            </Link>
        </div>
    )
}

export { CreateResumeCard }
