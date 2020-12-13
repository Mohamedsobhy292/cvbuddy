import React from 'react'
import { Navbar } from './shared/components/navbar'
import ChooseTemplate from './pages/choose-template'
import { BuildResume } from './pages/build-resume'
import { MyResumes } from './pages/my-resumes'
import { Volga } from './pages/templates/volga'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Login } from 'pages/login'
import { ProtectedRoute } from 'shared/components/protectedRoute'
import { LoginToken } from 'pages/loginToken'
import { routes } from 'routes'

function AppRoutes() {
    const location = useLocation()

    return (
        <>
            <Navbar location={location} />
            <Routes location={location}>
                <Route path={routes.login} element={<Login />} />

                <Route path={routes.loginToken} element={<LoginToken />} />

                <Route
                    path={routes.chooseTemplate}
                    element={<ChooseTemplate />}
                />

                <ProtectedRoute
                    path={`${routes.editResume}/:id`}
                    element={<BuildResume />}
                />

                <ProtectedRoute
                    path={`${routes.templates}/volga/:id`}
                    element={<Volga />}
                />

                <ProtectedRoute path="/" element={<MyResumes />} />

                <Route path="*" element={<p>not found</p>} />
            </Routes>
        </>
    )
}

export { AppRoutes }
