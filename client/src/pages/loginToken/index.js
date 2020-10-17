import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const pattern = /token=([^&]*)/

const LoginToken = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const setToken = async () => {
            const search = location.search.replace('?', '')
            if (search) {
                const token = search.match(pattern)[1]
                await localStorage.setItem('cvbuddy_access_token', token)
                navigate('/')
            }
        }
        setToken()
    }, [location.search, navigate])
    return <div></div>
}

export { LoginToken }
