import React from 'react'
import styles from './sidebar.module.scss'
import { PersonalInfo } from './components/personalInfo'
import { Links } from './components/links'
import { Skills } from './components/skills'
import { Languages } from './components/languages'

const Sidebar = () => {
    return (
        <aside className={styles.aside}>
            <PersonalInfo />
            <Links />
            <Skills />
            <Languages />
        </aside>
    )
}

export { Sidebar }
