import React, { useContext } from 'react'
import styles from './volga.module.scss'
import { Header } from './components/header/index'
import { Summary } from './components/summary'
import { Experience } from './components/experience'
import { Sidebar } from './components/sidebar'
import { AppContext } from 'shared/context/appContext'

const Volga = ({ className }) => {
    const { state } = useContext(AppContext)
    const { mail, summary, experience, phone } = state.userData
    return (
        <div className={`${styles.templateWrapper} ${className}`}>
            <main className={styles.contentContainer}>
                {/* HEADER */}
                <Header />

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
