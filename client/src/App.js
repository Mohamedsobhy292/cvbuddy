import React from 'react'
import { Navbar } from './shared/components/navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import './shared/styles/globalStyles.scss'
import { AppStateProvider } from 'shared/context/appContext'
import 'shared/api/axiosInstance'
import { AppRoutes } from './appRoutes'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <BrowserRouter>
            <AppStateProvider>
                <Navbar />
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar
                    closeOnClick
                    transition={Slide}
                />
                <AppRoutes />
            </AppStateProvider>
        </BrowserRouter>
    )
}

export default App
