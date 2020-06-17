import React from 'react'
import styles from './BuildResume.module.scss'
import { Volga } from '../templates/volga'
import { Form } from './components/form'

const BuildResume = () => {
    return (
        <div className={styles.BuildResumeWrapper}>
            <content className={styles.contentWrapper}>
                <Form />
            </content>
            <aside className={styles.sideArea}>
                <Volga className={styles.themeWrapper} />
            </aside>
        </div>
    )
}

export { BuildResume }
