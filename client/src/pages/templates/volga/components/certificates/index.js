import React, { useContext } from 'react'
import styles from './certificates.module.scss'
import { SectionTitle } from '../sectionTitle'
import { AppContext } from 'shared/context/appContext'

const Certificates = () => {
    const { state } = useContext(AppContext)
    const { certificates } = state.userData

    if (!certificates) return null
    return (
        <section className={styles.sectionContainer}>
            <SectionTitle>Certificates</SectionTitle>
            <div className={styles.educationListContainer}>
                <ul>
                    {certificates &&
                        certificates.map((item) => {
                            return (
                                <li
                                    className={styles.educationItem}
                                    key={item?.id}
                                >
                                    <h2 className={styles.title}>
                                        {item?.name}
                                    </h2>
                                    <h3 className={styles.company}>
                                        {item?.institution}
                                    </h3>
                                    <h4 className={styles.duration}>
                                        {item?.year}
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

export { Certificates }
