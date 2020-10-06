import React from 'react'
import { useMyResumeLogic } from './useMyResumeLogic'
import styles from './myResumes.module.scss'
import cvTemplate from './resume1.jpg'

import { PlusIcon } from 'shared/icons/plusIcon'

import { routes } from 'routes'
import { Link } from 'react-router-dom'
import { EmptyStateIcon } from './emptyStateIcon'
import { TransitionGroup } from 'react-transition-group'

import { ResumeItem } from './resumeItem'

const MyResumes = () => {
    const {
        handleCardClick,
        handleDelete,
        downloadResume,
        data,
        isDownloading,
    } = useMyResumeLogic()

    return (
        <div className={styles.chooseTemplateWrapper}>
            {/* EMPTY STATE */}

            {!data?.length && (
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
            )}

            {/* DATA */}
            {!!data?.length && (
                <>
                    <h2 className={styles.pageTitle}>Your created Resumes</h2>

                    <ul className={styles.templatesList}>
                        <TransitionGroup className={styles.templatesList}>
                            {data.map((item, index) => {
                                const delay = index * 100
                                return (
                                    <ResumeItem
                                        item={item}
                                        delay={delay}
                                        handleCardClick={handleCardClick}
                                        handleDelete={handleDelete}
                                        downloadResume={downloadResume}
                                        isDownloading={isDownloading}
                                    />
                                )
                            })}
                        </TransitionGroup>

                        <li
                            key={9}
                            className={`${styles.addNewWrapper} ${styles.templateItem}`}
                        >
                            <img src={cvTemplate} alt="cv template" />
                            <Link
                                className={styles.content}
                                to={`/${routes.chooseTemplate}`}
                            >
                                <PlusIcon />
                                <h3>Create One More Resume</h3>
                            </Link>
                        </li>
                    </ul>
                </>
            )}
        </div>
    )
}

export { MyResumes }
