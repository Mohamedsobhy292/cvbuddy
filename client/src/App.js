import React from 'react'
import { Navbar } from './shared/components/navbar'
import ChooseTemplate from './pages/choose-template'
import { BuildResume } from './pages/build-resume'
import { MyResumes } from './pages/my-resumes'
import { Volga } from './pages/templates/volga'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './shared/styles/globalStyles.scss'
import { AppStateProvider } from 'shared/context/appContext'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import 'shared/api/axiosInstance'
import { AppRoutes } from './appRoutes'

function App() {
    return (
        <BrowserRouter>
            <AppStateProvider>
                <Navbar />
                <Route path="*">
                    <AppRoutes />
                </Route>
                <AppRoutes />
            </AppStateProvider>
        </BrowserRouter>
    )
}

export default App
