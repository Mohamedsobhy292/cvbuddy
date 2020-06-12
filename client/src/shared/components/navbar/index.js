import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Navbar.module.scss'

const Navbar = () => {
    let location = useLocation()
    let locationData = location.pathname.split('/')
    if (locationData[1] === 'templates') return null
    return (
        <nav className={styles.navbar}>
            <h1>logo</h1>
            <ul className={styles.navigationList}>
                <li>account</li>
                <li>Settings</li>
                <li>Log out</li>
            </ul>
        </nav>
    )
}

export { Navbar }
