import React from 'react'
import { useMyResumeLogic } from './useMyResumeLogic'
import styles from './myResumes.module.scss'
import cvTemplate from './resume1.jpg'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { PlusIcon } from 'shared/icons/plusIcon'
import { DownloadIcon } from 'shared/icons/downloadIcon'
import { DeleteIcon } from 'shared/icons/deleteIcon'
import { routes } from 'routes'
import { Link } from 'react-router-dom'

const MyResumes = () => {
    const { handleCardClick, handleDelete, data } = useMyResumeLogic()
    return (
        <div className={styles.chooseTemplateWrapper}>
            <h2 className={styles.pageTitle}>Your created Resumes</h2>

            <ul className={styles.templatesList}>
                {data.map((item) => {
                    return (
                        <li
                            key={item._id}
                            className={styles.templateItem}
                            onClick={() => handleCardClick(item._id)}
                        >
                            <div className={styles.imageContainer}>
                                <img src={cvTemplate} alt="cv template" />
                                {/* CARD ACTIONS */}
                                <ul className={styles.actions}>
                                    <li className={styles.iconContainer}>
                                        <DownloadIcon />
                                    </li>

                                    <li
                                        className={styles.iconContainer}
                                        onClick={(e) =>
                                            handleDelete(item._id, e)
                                        }
                                    >
                                        <DeleteIcon fill="#E31330" />
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.titleWrapper}>
                                {item.firstName} {item.lastName}
                                <span className={styles.lastUpdated}>
                                    last updated{' '}
                                    {formatDistanceToNowStrict(
                                        new Date(item.updatedAt),
                                        {
                                            addSuffix: true,
                                        }
                                    )}
                                </span>
                            </div>
                        </li>
                    )
                })}

                <li
                    key={9}
                    className={`${styles.addNewWrapper} ${styles.templateItem}`}
                >
                    <img src={cvTemplate} alt="cv template" />
                    <Link
                        className={styles.content}
                        to={`/${routes.buildResume}`}
                    >
                        <PlusIcon />
                        <h3>Create One More Resume</h3>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export { MyResumes }
