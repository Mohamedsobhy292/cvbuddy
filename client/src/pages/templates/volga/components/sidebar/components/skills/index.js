import React, { useContext } from 'react'
import styles from './skills.module.scss'
import { AppContext } from 'shared/context/appContext'

const Skills = () => {
    const { state } = useContext(AppContext)
    const { skills } = state.userData
    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Skills</h3>
            <ul className={styles.skillsContainer}>
                {skills &&
                    skills.map((item) => {
                        return <li>{item.name}</li>
                    })}
            </ul>
        </div>
    )
}

export { Skills }
