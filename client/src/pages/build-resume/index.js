import React, { useContext } from 'react'
import styles from './BuildResume.module.scss'
import { Volga } from '../templates/volga'
import { Form } from './components/form'
import { Button } from 'shared/components/button'
import axios from 'axios'
import qs from 'qs'
import { AppContext } from 'shared/context/appContext'

const BuildResume = () => {
    const {
        state: { userData },
    } = useContext(AppContext)
    const handleClick = () => {
        axios
            .get('http://localhost:4000/', {
                responseType: 'blob',
                headers: {
                    Accept: 'application/pdf',
                },
                params: {
                    userData: qs.stringify(userData),
                },
            })
            .then((response) => {
                console.log(response)
                const blob = new Blob([response.data], {
                    type: 'application/pdf',
                })
                const blobURL = URL.createObjectURL(blob)

                window.open(blobURL)

                const link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = `your-file-name.pdf`
                link.click()
            })
    }
    return (
        <div className={styles.BuildResumeWrapper}>
            <content className={styles.contentWrapper}>
                <Form />
            </content>
            <aside className={styles.sideArea}>
                <div className={styles.buttons}>
                    <Button variant="primary" onClick={handleClick}>
                        Generate PDF
                    </Button>
                </div>
                <div className={styles.themeWrapper}>
                    <Volga className={styles.demo} />
                </div>
            </aside>
        </div>
    )
}

export { BuildResume }
