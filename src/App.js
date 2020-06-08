import React from 'react'
import { Navbar } from './shared/components/navbar'
import ChooseTemplate from './pages/choose-template'
import { BuildResume } from './pages/build-resume'
import { Volga } from './pages/templates/volga'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './shared/styles/globalStyles.scss'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ChooseTemplate />} />
                <Route path="build-resume/*" element={<BuildResume />} />
                <Route path="/templates/volga" element={<Volga />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
