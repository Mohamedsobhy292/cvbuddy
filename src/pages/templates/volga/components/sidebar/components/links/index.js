import React from 'react'
import styles from './links.module.scss'

const Links = () => {
    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Links</h3>
            <ul className={styles.SkillsContainer}>
                <li>Linkedin</li>
                <li>Website</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Blog</li>
            </ul>
        </div>
    )
}

export { Links }
