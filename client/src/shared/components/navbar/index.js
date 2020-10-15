import React from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { routes } from 'routes'
import { removeToken } from 'shared/helpers/authenticationHelpers'
import styles from './Navbar.module.scss'

const Navbar = () => {
    let navigate = useNavigate()
    let location = useLocation()
    let locationData = location.pathname.split('/')
    if (locationData[1] === 'templates') return null

    const handleLogout = async () => {
        await removeToken()
        navigate(routes.login)
    }

    return (
        <nav className={styles.navbar}>
            <h1>
                <Link to="/">logo</Link>
            </h1>
            <ul className={styles.navigationList}>
                {/* <li>
                    <Link to="/resumes">resumes</Link>
                </li> */}
                <li>Settings</li>
                <li onClick={handleLogout}>Log out</li>
            </ul>
        </nav>
    )
}

export { Navbar }
