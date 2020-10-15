import React, { useContext } from 'react'
import styles from './BuildResume.module.scss'
import { Volga } from '../templates/volga'
import { Form } from './components/form'
import { Button } from 'shared/components/button'
import { AppContext } from 'shared/context/appContext'
import Axios from 'axios'
import { DOWNLOAD_RESUME, UPADTE_RESUME_URL } from 'shared/api/endPoints'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react'
import { Loader } from 'shared/components/loader'
import { CSSTransition } from 'react-transition-group'
import { routes } from 'routes'

const componentState = {
    save_changes: 'save_changes',
    generate_pdf: 'generate_pdf',
}

const BuildResume = () => {
    const [loadingState, setLoadingState] = useState(null)
    const { state } = useContext(AppContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const updateData = async () => {
        const data = state.userData
        if (id) {
            return Axios.put(`${UPADTE_RESUME_URL}/${id}`, {
                data,
            })
        }
    }

    const handleSaveChangesClick = async () => {
        setLoadingState(componentState.save_changes)
        await updateData()
        setLoadingState(false)
        navigate(routes.myResumes)
    }

    const downloadResume = async () => {
        const response = await Axios(`${DOWNLOAD_RESUME}/${id}`, {
            responseType: 'blob',
            headers: {
                Accept: 'application/pdf',
            },
        })

        const blob = new Blob([response.data], {
            type: 'application/pdf',
        })
        const blobURL = URL.createObjectURL(blob)

        window.open(blobURL)

        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `${id}.pdf`
        link.click()
    }

    const handleGeneratePDF = async () => {
        setLoadingState(componentState.generate_pdf)
        await updateData()
        await downloadResume()
        setLoadingState(false)
    }

    return (
        <div className={styles.BuildResumeWrapper}>
            <content className={styles.contentWrapper}>
                <Form />
            </content>
            <aside className={styles.sideArea}>
                <div className={styles.themeWrapper}>
                    <Volga className={styles.demo} />
                </div>
                <div className={styles.bottomBar}>
                    <div className={styles.buttonsWrapper}>
                        <Button
                            variant="tertiary"
                            className={styles.saveChangesButton}
                            onClick={handleSaveChangesClick}
                        >
                            Save Changes
                            <CSSTransition
                                in={
                                    loadingState === componentState.save_changes
                                }
                                timeout={500}
                                unmountOnExit
                                classNames={{
                                    enter: styles.enter,
                                    enterActive: styles.enterActive,
                                    exit: styles.exit,
                                    exitActive: styles.exitActive,
                                }}
                            >
                                <Loader
                                    color="#8b78f1"
                                    size="16"
                                    extraClass={styles.loader}
                                />
                            </CSSTransition>
                        </Button>
                        <Button variant="primary" onClick={handleGeneratePDF}>
                            Generate PDF
                            <CSSTransition
                                in={
                                    loadingState === componentState.generate_pdf
                                }
                                timeout={500}
                                unmountOnExit
                                classNames={{
                                    enter: styles.enter,
                                    enterActive: styles.enterActive,
                                    exit: styles.exit,
                                    exitActive: styles.exitActive,
                                }}
                            >
                                <Loader
                                    color="#fff"
                                    size="16"
                                    extraClass={styles.loader}
                                />
                            </CSSTransition>
                        </Button>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export { BuildResume }
