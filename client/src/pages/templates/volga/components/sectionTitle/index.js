import React from 'react'
import styles from './sectionTitle.module.scss'

const SectionTitle = ({ children }) => {
    return <h3 className={styles.sectionTitle}>{children}</h3>
}

export { SectionTitle }
