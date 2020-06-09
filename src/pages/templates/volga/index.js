import React from 'react'
import styles from './volga.module.scss'
import { Header } from './components/header/index'
import { Summary } from './components/summary'
import { Experience } from './components/experience'

const Volga = ({
    firstName,
    lastName,
    jobTitle,
    mail,
    summary,
    experience,
}) => {
    return (
        <div className={styles.templateWrapper}>
            <main className={styles.contentContainer}>
                {/* HEADER */}
                <Header
                    firstName={firstName}
                    lastName={lastName}
                    jobTitle={jobTitle}
                    mail={mail}
                />

                {/* SUMMARY */}
                <Summary summary={summary} />

                {/* EXPERIENCE */}
                <Experience experience={experience} />
            </main>
            <aside className={styles.aside}></aside>
        </div>
    )
}

export { Volga }
