import React from 'react'
import { Navbar } from './shared/components/navbar'
import ChooseTemplate from './pages/choose-template'
import { BuildResume } from './pages/build-resume'
import { Volga } from './pages/templates/volga'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './shared/styles/globalStyles.scss'

const details = {
    firstName: 'Mohamed',
    lastName: 'sobhy',
    mail: 'mohamedsobhy292@gmail.com',
    jobTitle: 'front end developer',
    summary:
        'Do you think youre living an ordinary life? You are so mistaken its difficult to even explain. The mere fact that you exist makes you extraordinary. The odds of you existing are less than winning the lottery, but here you are. Are you going to let this extraordinary opportunity pass?',
}

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ChooseTemplate />} />
                <Route path="build-resume/*" element={<BuildResume />} />
                <Route
                    path="/templates/volga"
                    element={<Volga {...details} />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
