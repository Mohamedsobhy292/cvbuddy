const isAuthenticated = async () => {
    const token = await localStorage.getItem('cvbuddy_access_token')
    return token
}

const removeToken = async () => {
    await localStorage.removeItem('cvbuddy_access_token')
}

export { isAuthenticated, removeToken }
