import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ChooseTemplate from './pages/choose-template'
import { BuildResume } from './pages/build-resume'
import { MyResumes } from './pages/my-resumes'
import { Volga } from './pages/templates/volga'
import { Routes, Route, useLocation } from 'react-router-dom'

const routes = [
    { path: '/', name: 'home', Component: MyResumes },
    {
        path: '/choose-template',
        name: 'chooseTemplate',
        Component: ChooseTemplate,
    },
    { path: '/build-resume', name: 'buildResume', Component: BuildResume },
    { path: '/edit-resume/:id"', name: 'editResume', Component: BuildResume },
]

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
                    {/* <Route path="/templates/volga" element={<Volga />} /> */}
                    <Route path="/" element={<MyResumes />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    )
}

export { AppRoutes }
