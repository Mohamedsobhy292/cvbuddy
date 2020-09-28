import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ChooseTemplate from './pages/choose-template'
import { BuildResume } from './pages/build-resume'
import { MyResumes } from './pages/my-resumes'
import { Volga } from './pages/templates/volga'
import { Routes, Route, useLocation } from 'react-router-dom'

function AppRoutes() {
    let location = useLocation()

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={1000}
                unmountOnExit
            >
                <Routes location={location}>
                    <Route
                        path="/choose-template"
                        element={<ChooseTemplate />}
                    />
                    <Route path="build-resume" element={<BuildResume />} />
                    <Route path="edit-resume/:id" element={<BuildResume />} />
                    <Route path="/templates/volga/:id" element={<Volga />} />
                    <Route path="/" element={<MyResumes />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    )
}

export { AppRoutes }
