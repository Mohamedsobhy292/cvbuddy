import React from 'react'
import { Navbar } from './shared/components/navbar'
import ChooseTemplate from './pages/choose-template'
import { BuildResume } from './pages/build-resume'
import { MyResumes } from './pages/my-resumes'
import { Volga } from './pages/templates/volga'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './shared/styles/globalStyles.scss'
import { AppStateProvider } from 'shared/context/appContext'

function App() {
    return (
        <BrowserRouter>
            <AppStateProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ChooseTemplate />} />
                    <Route path="build-resume" element={<BuildResume />} />
                    <Route path="edit-resume/:id" element={<BuildResume />} />
                    <Route path="/templates/volga" element={<Volga />} />
                    <Route path="/resumes" element={<MyResumes />} />
                </Routes>
            </AppStateProvider>
        </BrowserRouter>
    )
}

export default App
