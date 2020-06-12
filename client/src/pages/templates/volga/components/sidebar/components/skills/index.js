import React from 'react'
import styles from './skills.module.scss'

const Skills = () => {
    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Skills</h3>
            <ul className={styles.skillsContainer}>
                <li>Javascript</li>
                <li>Python</li>
                <li>C++</li>
                <li>Java</li>
                <li>Ruby on Rails</li>
            </ul>
        </div>
    )
}

export { Skills }
