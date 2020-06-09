import React from 'react'
import styles from './summary.module.scss'
import { SectionTitle } from '../sectionTitle'

const Summary = ({ summary }) => {
    return (
        <section className={styles.sectionContainer}>
            <SectionTitle>Summary</SectionTitle>
            <p className={styles.summary}>{summary}</p>
        </section>
    )
}

export { Summary }
