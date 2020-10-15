import React from 'react'

import styles from './login.module.scss'
import { LoginIcon } from './loginIcon'

const loginMethods = [
    {
        label: 'facebook',
        link: `${process.env.REACT_APP_API_URL}/users/login/google`,
    },
    {
        label: 'google',
        link: `${process.env.REACT_APP_API_URL}/users/login/google`,
    },
    {
        label: 'linkedin',
        link: `${process.env.REACT_APP_API_URL}/users/login/google`,
    },
    {
        label: 'github',
        link: `${process.env.REACT_APP_API_URL}/users/login/google`,
    },
]

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.content}>
                <h1 className={styles.pageTitle}>Login</h1>
                <p className={styles.secondaryTitle}>
                    login and start creating awesome resumes
                </p>
                <ul className={styles.loginList}>
                    {loginMethods.map((item) => {
                        return (
                            <li
                                className={`${styles.loginMethod} ${
                                    styles[item.label]
                                }`}
                            >
                                <a href={item.link}>{item.label}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className={styles.iconContainer}>
                <LoginIcon />
            </div>
        </div>
    )
}

export { Login }
