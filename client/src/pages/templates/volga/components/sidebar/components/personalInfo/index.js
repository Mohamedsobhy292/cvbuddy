import React, { useContext } from 'react'
import styles from './personalInfo.module.scss'
import { MailIcon } from './mail'
import { PhoneIcon } from './phone'
import { PlaceIcon } from './place'
import { AppContext } from 'shared/context/appContext'

const PersonalInfo = () => {
    const { state } = useContext(AppContext)
    const { email, phone } = state.userData
    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Personal Info</h3>
            <h4 className={styles.item}>
                <span className={styles.icon}>
                    <MailIcon />
                </span>
                {email}
            </h4>
            <h4 className={styles.item}>
                <span className={styles.icon}>
                    <PhoneIcon />
                </span>
                {phone}
            </h4>
            <h4 className={styles.item}>
                <span className={styles.icon}>
                    <PlaceIcon />
                </span>
                Berlin,Germany
            </h4>
        </div>
    )
}

export { PersonalInfo }
