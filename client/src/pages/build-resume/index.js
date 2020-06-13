import React, { useState } from 'react'
import classnames from 'classnames'

import styles from './BuildResume.module.scss'
import { InputField } from '../../shared/components/inputField'
import { InputLabel } from '../../shared/components/inputLabel'
import { TextArea } from '../../shared/components/textArea'
import { Volga } from '../templates/volga'

const BuildResume = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [jobTitle, setjobTitle] = useState('')
    const [summary, setSummary] = useState('')

    return (
        <div className={styles.BuildResumeWrapper}>
            <content className={styles.contentWrapper}>
                <h3 className={styles.title}>
                    Enter your Personal Information
                </h3>

                <div className={styles.formContainer}>
                    <div className={styles.formControl}>
                        <InputLabel>First Name</InputLabel>
                        <InputField
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className={styles.formControl}>
                        <InputLabel>Last Name</InputLabel>
                        <InputField
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className={styles.formControl}>
                        <InputLabel>Email</InputLabel>
                        <InputField
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={styles.formControl}>
                        <InputLabel>Job title</InputLabel>
                        <InputField
                            value={jobTitle}
                            onChange={(e) => setjobTitle(e.target.value)}
                        />
                    </div>

                    <div
                        className={classnames(
                            styles.formControl,
                            styles.fullWidth
                        )}
                    >
                        <InputLabel>Job title</InputLabel>
                        <InputField />
                    </div>

                    <div
                        className={classnames(
                            styles.formControl,
                            styles.fullWidth
                        )}
                    >
                        <InputLabel>Summary</InputLabel>
                        <TextArea
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        />
                    </div>
                </div>
            </content>
            <aside className={styles.sideArea}>
                <Volga
                    className={styles.themeWrapper}
                    firstName={firstName}
                    lastName={lastName}
                    mail={email}
                    jobTitle={jobTitle}
                />
            </aside>
        </div>
    )
}

export { BuildResume }
