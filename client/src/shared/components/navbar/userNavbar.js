import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from 'routes'
import { removeToken } from 'shared/helpers/authenticationHelpers'
import styles from './Navbar.module.scss'
import { AppContext } from 'shared/context/appContext'
import Axios from 'axios'
import { GET_CURRENT_USER } from 'shared/api/endPoints'

const UserNavBar = () => {
    const navigate = useNavigate()
    const {
        state: { currentUser },
    } = useContext(AppContext)

    const { dispatch } = useContext(AppContext)

    useEffect(() => {
        Axios(GET_CURRENT_USER).then((res) => {
            dispatch({
                type: 'UPDATE_CURRENT_USER',
                payload: res.data.data,
            })
        })
    }, [dispatch])

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
                {currentUser.firstName && (
                    <>
                        <li>
                            <div className={styles.userData}>
                                <img
                                    src={currentUser.imageUrl}
                                    alt={`${currentUser.firstName} avatar`}
                                />
                                {currentUser.firstName} {currentUser.lastName}
                            </div>
                        </li>
                        <li onClick={handleLogout}>Log out</li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export { UserNavBar }
