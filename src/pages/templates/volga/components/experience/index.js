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
                        experience.map((item) => {
                            return (
                                <li className={styles.experienceItem}>
                                    <h2 className={styles.title}>
                                        {item.title}
                                    </h2>
                                    <h3 className={styles.company}>
                                        {item.company}
                                    </h3>
                                    <h4 className={styles.duration}>
                                        {item.duration}
                                    </h4>

                                    <ul className={styles.descriptionList}>
                                        {item.description.map((item) => {
                                            return <li>{item}</li>
                                        })}
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
