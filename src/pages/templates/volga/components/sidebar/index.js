import React from 'react'
import styles from './sidebar.module.scss'
import { MailIcon } from './mail'
import { PhoneIcon } from './phone'
import { PlaceIcon } from './place'

const Sidebar = ({ mail, phone }) => {
    return (
        <aside className={styles.aside}>
            {/* Personal Info */}
            <div>
                <h3 className={styles.sectionTitle}>Personal Info</h3>
                <h4 className={styles.item}>
                    <span className={styles.icon}>
                        <MailIcon />
                    </span>
                    {mail}
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
                <h4 className={styles.item}>
                    <span className={styles.icon}>
                        <MailIcon />
                    </span>
                    Website
                </h4>
            </div>
        </aside>
    )
}

export { Sidebar }
