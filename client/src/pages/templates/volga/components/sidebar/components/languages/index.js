import React, { useContext } from 'react'
import styles from './languages.module.scss'
import { AppContext } from 'shared/context/appContext'

const Languages = () => {
    const { state } = useContext(AppContext)
    const { languages } = state.userData
    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Languages</h3>
            <ul className={styles.skillsContainer}>
                {languages &&
                    languages.map((item, index) => {
                        return (
                            <li key={index}>
                                {item?.name}{' '}
                                <span className={styles.itemLevel}>
                                    - {item?.level}
                                </span>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export { Languages }
