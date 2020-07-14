import React, { useContext } from 'react'
import styles from './summary.module.scss'
import { SectionTitle } from '../sectionTitle'
import { AppContext } from 'shared/context/appContext'

const Summary = () => {
    const { state } = useContext(AppContext)
    const { summary } = state.userData
    if (!summary) return null
    return (
        <section className={styles.sectionContainer}>
            <SectionTitle>Summary</SectionTitle>
            <p className={styles.summary}>{summary}</p>
        </section>
    )
}

export { Summary }
