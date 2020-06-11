import React from 'react'
import styles from './sidebar.module.scss'
import { PersonalInfo } from './components/personalInfo'
import { Links } from './components/links'
import { Skills } from './components/skills'

const Sidebar = ({ mail, phone }) => {
    return (
        <aside className={styles.aside}>
            <PersonalInfo phone={phone} mail={mail} />
            <Links />
            <Skills />
        </aside>
    )
}

export { Sidebar }
