import React from 'react'
import styles from './header.module.scss'
import { UserIcon } from './user'

const Header = ({ firstName, lastName, jobTitle, mail }) => {
    return (
        <div className={styles.header}>
            <div className={styles.imgContainer}>
                <UserIcon className={styles.placeHolder} />
            </div>
            <div className={styles.contentContainer}>
                <h1 className={styles.name}>
                    {firstName} {lastName}
                </h1>
                <h2 className={styles.title}>{jobTitle}</h2>
            </div>
        </div>
    )
}

export { Header }
