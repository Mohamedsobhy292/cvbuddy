import React from 'react'
import styles from './volga.module.scss'
import { Header } from './components/header/index'
import { Summary } from './components/summary'
import { Experience } from './components/experience'
import { Sidebar } from './components/sidebar'

const Volga = ({
    className,
    firstName,
    lastName,
    jobTitle,
    mail,
    summary,
    experience,
    phone,
}) => {
    return (
        <div className={`${styles.templateWrapper} ${className}`}>
            <main className={styles.contentContainer}>
                {/* HEADER */}
                <Header
                    firstName={firstName}
                    lastName={lastName}
                    jobTitle={jobTitle}
                />

                {/* SUMMARY */}
                <Summary summary={summary} />

                {/* EXPERIENCE */}
                <Experience experience={experience} />
            </main>
            <Sidebar mail={mail} phone={phone} />
        </div>
    )
}

export { Volga }
