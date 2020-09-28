import React, { useContext, useEffect } from 'react'
import styles from './BuildResume.module.scss'
import { Volga } from '../templates/volga'
import { Form } from './components/form'
import { Button } from 'shared/components/button'
import { ALL_RESUMES_URL, DELETE_RESUME_URL } from 'shared/api/endPoints'
import axios from 'axios'
import qs from 'qs'
import { AppContext } from 'shared/context/appContext'
import { useState } from 'react'

const BuildResume = () => {
    const [data, setData] = useState([])

    return (
        <div className={styles.BuildResumeWrapper}>
            <content className={styles.contentWrapper}>
                <Form />
            </content>
            <aside className={styles.sideArea}>
                <div className={styles.buttons}>
                    {/* <Button variant="primary" onClick={handleClick}>
                        Generate PDF
                    </Button> */}
                </div>
                <div className={styles.themeWrapper}>
                    <Volga className={styles.demo} />
                </div>
            </aside>
        </div>
    )
}

export { BuildResume }
