import React from 'react'

import { DownloadIcon } from 'shared/icons/downloadIcon'
import { DeleteIcon } from 'shared/icons/deleteIcon'
import { CSSTransition } from 'react-transition-group'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { Loader } from 'shared/components/loader'
import cvTemplate from './resume1.jpg'
import styles from './myResumes.module.scss'

const ResumeItem = ({
    item,
    delay,
    downloadResume,
    handleCardClick,
    handleDelete,
    isDownloading,
}) => {
    return (
        <CSSTransition
            in={true}
            key={item._id}
            appear={true}
            timeout={600}
            unmountOnExit
            classNames={{
                enter: styles.enter,
                appear: styles.appear,
                appearActive: styles.appearActive,
                enterActive: styles.enterActive,
                exit: styles.leave,
                exitActive: styles.leaveActive,
            }}
        >
            <li
                style={{
                    transitionDelay: `${delay}ms`,
                }}
                key={item._id}
                className={styles.templateItem}
                onClick={() => handleCardClick(item._id)}
            >
                <div className={styles.imageContainer}>
                    <img src={cvTemplate} alt="cv template" />
                    {/* CARD ACTIONS */}
                    <ul className={styles.actions}>
                        <li
                            onClick={(e) => downloadResume(item._id, e)}
                            className={styles.iconContainer}
                        >
                            <CSSTransition
                                in={isDownloading === item._id}
                                timeout={600}
                                unmountOnExit
                                classNames={{
                                    enter: styles.iconLoad,
                                    enterActive: styles.iconLoadActive,
                                    exit: styles.iconLoadleave,
                                    exitActive: styles.iconLoadLeaveActive,
                                }}
                            >
                                <Loader color="#494d70" size="16" />
                            </CSSTransition>

                            <CSSTransition
                                in={isDownloading !== item._id}
                                timeout={600}
                                key={2}
                                unmountOnExit
                                classNames={{
                                    enter: styles.iconLoad,
                                    enterActive: styles.iconLoadActive,
                                    exit: styles.iconLoadleave,
                                    exitActive: styles.iconLoadLeaveActive,
                                }}
                            >
                                <div>
                                    <DownloadIcon />
                                </div>
                            </CSSTransition>
                        </li>

                        <li
                            className={styles.iconContainer}
                            onClick={(e) => handleDelete(item._id, e)}
                        >
                            <DeleteIcon fill="#E31330" />
                        </li>
                    </ul>
                </div>

                <div className={styles.titleWrapper}>
                    {item.firstName} {item.lastName}
                    <span className={styles.lastUpdated}>
                        last updated{' '}
                        {formatDistanceToNowStrict(new Date(item.updatedAt), {
                            addSuffix: true,
                        })}
                    </span>
                </div>
            </li>
        </CSSTransition>
    )
}

export { ResumeItem }
