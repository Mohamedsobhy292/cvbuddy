import React from 'react'
import { useMyResumeLogic } from './useMyResumeLogic'
import styles from './myResumes.module.scss'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { ResumeItem } from './components/resumeItem'
import { EmptyState } from './components/emptyState'
import { CreateResumeCard } from './components/createResumeCard'

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

            {!data?.length && <EmptyState />}

            {/* DATA */}

            {!!data?.length && (
                <h2 className={styles.pageTitle}>Your created Resumes</h2>
            )}

            <div className={styles.dataContainer}>
                {!!data?.length && (
                    <>
                        <ul className={styles.templatesList}>
                            <TransitionGroup className={styles.templatesList}>
                                {data.map((item, index) => {
                                    const delay = index * 100
                                    return (
                                        <CSSTransition
                                            in={true}
                                            key={item._id}
                                            appear={true}
                                            timeout={600}
                                            unmountOnExit
                                            classNames={{
                                                enter: styles.resumeItemEnter,
                                                enterActive:
                                                    styles.resumeItemEnterActive,
                                                appear: styles.resumeItemAppear,
                                                appearActive:
                                                    styles.resumeItemAppearActive,
                                                exitActive:
                                                    styles.resumeItemLeaveActive,
                                                exit: styles.resumeItemLeave,
                                            }}
                                        >
                                            <ResumeItem
                                                key={item._id}
                                                item={item}
                                                delay={delay}
                                                handleCardClick={
                                                    handleCardClick
                                                }
                                                handleDelete={handleDelete}
                                                downloadResume={downloadResume}
                                                isDownloading={isDownloading}
                                            />
                                        </CSSTransition>
                                    )
                                })}
                            </TransitionGroup>
                            <CreateResumeCard />
                        </ul>
                    </>
                )}
            </div>
        </div>
    )
}

export { MyResumes }
