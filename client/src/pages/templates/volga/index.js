import React, { useContext, useEffect } from 'react'
import styles from './volga.module.scss'
import { Header } from './components/header/index'
import { Summary } from './components/summary'
import { Experience } from './components/experience'
import { Sidebar } from './components/sidebar'
import { Education } from './components/education'
import { Certificates } from './components/certificates'
import { useParams } from 'react-router-dom'
import { AppContext } from 'shared/context/appContext'
import { GET_ONE_RESUME } from 'shared/api/endPoints'
import Axios from 'axios'

const Volga = ({ className = '' }) => {
    const { id } = useParams()
    const { dispatch } = useContext(AppContext)

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                Axios(`${GET_ONE_RESUME}/${id}`).then((res) => {
                    dispatch({
                        type: 'RESET_USER_INFO',
                        payload: { ...res.data.data },
                    })
                })
            }
        }
        fetchData()
    }, [dispatch, id])

    return (
        <div className={styles.templateWrapper}>
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
