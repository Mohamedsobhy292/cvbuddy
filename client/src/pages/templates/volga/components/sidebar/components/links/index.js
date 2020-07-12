import React, { useContext } from 'react'
import styles from './links.module.scss'
import { AppContext } from 'shared/context/appContext'

const Links = () => {
    const { state } = useContext(AppContext)
    const { links } = state.userData

    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Links</h3>
            <ul className={styles.SkillsContainer}>
                {!!links.length &&
                    links.map((link, index) => {
                        return (
                            <li key={index}>
                                {' '}
                                <a
                                    href={link?.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link?.label}
                                </a>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export { Links }
