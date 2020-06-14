import React, { useContext } from 'react'
import styles from './BuildResume.module.scss'
import { Volga } from '../templates/volga'
import { Form } from './components/form'
import { AppContext } from 'shared/context/appContext'

const BuildResume = () => {
    const state = useContext(AppContext)
    return (
        <div className={styles.BuildResumeWrapper}>
            <content className={styles.contentWrapper}>
                <h3 className={styles.title}>
                    Enter your Personal Information
                </h3>

                <Form />
            </content>
            <aside className={styles.sideArea}>
                <Volga className={styles.themeWrapper} {...state.state} />
            </aside>
        </div>
    )
}

export { BuildResume }
