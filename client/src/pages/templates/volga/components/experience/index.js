import React from 'react'
import styles from './experience.module.scss'
import { SectionTitle } from '../sectionTitle'
import { Label } from 'shared/components/Label'

const Experience = ({ experience }) => {
    return (
        <section className={styles.sectionContainer}>
            <SectionTitle>Experience</SectionTitle>
            <div className={styles.experienceListContainer}>
                <ul>
                    {experience &&
                        experience.map((item, index) => {
                            if (!item) return false
                            return (
                                <li
                                    className={styles.experienceItem}
                                    key={index}
                                >
                                    <h2 className={styles.title}>
                                        {item?.title}

                                        {item?.isInternship && (
                                            <Label>INTERNSHIP</Label>
                                        )}
                                    </h2>
                                    <h3 className={styles.company}>
                                        {item.company}
                                    </h3>
                                    <h4 className={styles.duration}>
                                        {item.startDate} -{' '}
                                        {item.currentlyWorkHere
                                            ? 'present'
                                            : item.endDate}
                                    </h4>

                                    <ul className={styles.descriptionList}>
                                        {item.description}
                                    </ul>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </section>
    )
}

export { Experience }
