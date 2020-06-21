import React from 'react'
import styles from './experience.module.scss'
import { SectionTitle } from '../sectionTitle'

const Experience = ({ experience }) => {
    return (
        <section className={styles.sectionContainer}>
            <SectionTitle>Experience</SectionTitle>
            <div className={styles.experienceListContainer}>
                <ul>
                    {experience &&
                        experience.map((item, index) => {
                            return (
                                <li
                                    className={styles.experienceItem}
                                    key={index}
                                >
                                    <h2 className={styles.title}>
                                        {item.title}
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
                                        {/* {item.description &&
                                            item.description.map(
                                                (item, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {item}
                                                        </li>
                                                    )
                                                }
                                            )} */}
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
