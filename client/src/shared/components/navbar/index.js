import React from 'react'
import { routes } from 'routes'
import { GuestNavbar } from './guestNavBar'
import { UserNavBar } from './userNavbar'

const Navbar = ({ location }) => {
    if (location.pathname.includes(`${routes.templates}`)) return null
    return location.pathname !== `/${routes.login}` ? (
        <UserNavBar />
    ) : (
        <GuestNavbar />
    )
}

export { Navbar }
