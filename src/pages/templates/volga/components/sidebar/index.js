import React from 'react'
import styles from './sidebar.module.scss'
import { PersonalInfo } from './components/personalInfo'

const Sidebar = ({ mail, phone }) => {
    return (
        <aside className={styles.aside}>
            <PersonalInfo phone={phone} mail={mail} />
        </aside>
    )
}

export { Sidebar }
