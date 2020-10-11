import React from 'react'
import { routes } from 'routes'
import { Link } from 'react-router-dom'
import { EmptyStateIcon } from '../../emptyStateIcon'
import styles from './emptyState.module.scss'

const EmptyState = () => {
    return (
        <>
            <EmptyStateIcon className={styles.emptyStateIcon} />
            <h2 className={styles.emptyStateTitle}>
                You didn't create any resumes yet
            </h2>
            <Link
                className={styles.createFirstResume}
                to={`/${routes.chooseTemplate}`}
            >
                Create your first resume now
            </Link>
        </>
    )
}

export { EmptyState }
