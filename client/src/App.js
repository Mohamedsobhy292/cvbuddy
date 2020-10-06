import React from 'react'
import { Navbar } from './shared/components/navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import './shared/styles/globalStyles.scss'
import { AppStateProvider } from 'shared/context/appContext'
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
