import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
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
