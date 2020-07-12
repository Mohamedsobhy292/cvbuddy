import React, { useContext } from 'react'
import styles from './education.module.scss'
import { SectionTitle } from '../sectionTitle'
import { AppContext } from 'shared/context/appContext'

const Education = () => {
    const { state } = useContext(AppContext)
    const { education } = state.userData
    return (
        <section className={styles.sectionContainer}>
            <SectionTitle>Education</SectionTitle>
            <div className={styles.educationListContainer}>
                <ul>
                    {education &&
                        education.map((item) => {
                            return (
                                <li
                                    className={styles.educationItem}
                                    key={item?.id}
                                >
                                    <h2 className={styles.title}>
                                        {item?.school}
                                    </h2>
                                    <h3 className={styles.company}>
                                        {item?.degree}
                                    </h3>
                                    <h4 className={styles.duration}>
                                        {item?.startDate} - {item?.endDate}
                                    </h4>

                                    <ul className={styles.descriptionList}>
                                        {item?.description}
                                    </ul>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </section>
    )
}

export { Education }
