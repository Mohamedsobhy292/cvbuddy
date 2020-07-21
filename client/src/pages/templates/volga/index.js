import React, { useContext } from 'react'
import styles from './volga.module.scss'
import { Header } from './components/header/index'
import { Summary } from './components/summary'
import { Experience } from './components/experience'
import { Sidebar } from './components/sidebar'
import { AppContext } from 'shared/context/appContext'
import { Education } from './components/education'
import { Certificates } from './components/certificates'

const Volga = ({ className }) => {
    return (
        <div className={`${styles.templateWrapper} ${className}`}>
            <main className={styles.contentContainer}>
                {/* HEADER */}
                <Header />

                {/* SUMMARY */}
                <Summary />

                {/* EXPERIENCE */}
                <Experience />
                {/* Education */}
                <Education />
                <Certificates />
            </main>
            <Sidebar />
        </div>
    )
}

export { Volga }
