import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

const GuestNavbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1>
                <Link to="/">logo</Link>
            </h1>
            <ul className={styles.navigationList}></ul>
        </nav>
    )
}

export { GuestNavbar }
