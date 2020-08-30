import React, { useContext, useEffect } from 'react'
import styles from './volga.module.scss'
import { Header } from './components/header/index'
import { Summary } from './components/summary'
import { Experience } from './components/experience'
import { Sidebar } from './components/sidebar'
import { Education } from './components/education'
import { Certificates } from './components/certificates'
import { useLocation } from 'react-router-dom'
import qs from 'qs'
import { AppContext } from 'shared/context/appContext'

const Volga = ({ className = '' }) => {
    const location = useLocation()
    const data = qs.parse(location.search.substring(1))

    const { dispatch } = useContext(AppContext)

    useEffect(() => {
        dispatch({
            type: 'RESET_USER_INFO',
            payload: { ...data },
        })
    }, [])

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
