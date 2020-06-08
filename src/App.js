import React from 'react'
import { Navbar } from './shared/components/navbar'
import ChooseTemplate from './pages/choose-template'
import Form from './pages/form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './shared/styles/globalStyles.scss'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ChooseTemplate />} />
                <Route path="form/*" element={<Form />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
