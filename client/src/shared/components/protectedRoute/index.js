import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { isAuthenticated } from 'shared/helpers/authenticationHelpers'

function ProtectedRoute({ children, ...rest }) {
    const [auth, setAuth] = useState(true)

    useEffect(() => {
        const checkAuth = async () => {
            if (!(await isAuthenticated())) {
                setAuth(false)
            } else {
                setAuth(true)
            }
        }

        checkAuth()
    }, [])

    if (!auth) {
        return <Navigate to="/login" />
    }

    return <Route {...rest} children={() => children} />
}

export { ProtectedRoute }
