import React from 'react'
import styles from './volga.module.scss'
import { UserIcon } from './user'

const Volga = ({ firstName, lastName, jobTitle, mail }) => {
    return (
        <div className={styles.templateWrapper}>
            <main className={styles.contentContainer}>
                <div className={styles.header}>
                    <div className={styles.imgContainer}>
                        <UserIcon className={styles.placeHolder} />
                    </div>
                    <h1>
                        {firstName} {lastName}
                    </h1>
                </div>
                <h2>{jobTitle}</h2>
                <h2>{mail}</h2>
            </main>
            <aside></aside>
        </div>
    )
}

export { Volga }
