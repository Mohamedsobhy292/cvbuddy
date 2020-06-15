import React, { useContext } from 'react'
import styles from './header.module.scss'
import { UserIcon } from './user'
import { AppContext } from 'shared/context/appContext'

const Header = () => {
    const { state } = useContext(AppContext)
    const { firstName, lastName, jobTitle } = state.userData
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
