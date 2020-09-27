import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

const Navbar = () => {
    let location = useLocation()
    let locationData = location.pathname.split('/')
    if (locationData[1] === 'templates') return null
    return (
        <nav className={styles.navbar}>
            <h1>
                <Link to="/">logo</Link>
            </h1>
            <ul className={styles.navigationList}>
                <li>
                    <Link to="/resumes">resumes</Link>
                </li>
                <li>Settings</li>
                <li>Log out</li>
            </ul>
        </nav>
    )
}

export { Navbar }
