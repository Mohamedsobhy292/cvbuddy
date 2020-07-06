import React, { useContext } from 'react'
import styles from './skills.module.scss'
import { AppContext } from 'shared/context/appContext'

const Skills = () => {
    const { state } = useContext(AppContext)
    const { skills, showSkillsLevel } = state.userData
    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Skills</h3>
            <ul className={styles.skillsContainer}>
                {skills &&
                    skills.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.name}{' '}
                                {item.level && showSkillsLevel && (
                                    <span className={styles.itemLevel}>
                                        - {item.level}
                                    </span>
                                )}
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export { Skills }
