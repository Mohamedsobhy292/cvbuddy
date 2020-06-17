import React from 'react'
import styles from '../../../BuildResume.module.scss'
import { EditIcon } from './editIcon.jsx'
import { DeleteIcon } from './deleteIcon'

const WorkHistoryItem = ({ experience }) => {
    return (
        <div className={styles.experienceCard}>
            <h3 className={styles.experienceTitle}>
                {experience.title} at {experience.company}
            </h3>
            <h4 className={styles.duration}>{experience.duration}</h4>
            <div className={styles.iconsContainer}>
                <EditIcon width="16px" className={styles.icon} />
                <DeleteIcon width="16px" className={styles.icon} />
            </div>
        </div>
    )
}

export { WorkHistoryItem }
