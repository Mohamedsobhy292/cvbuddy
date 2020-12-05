import axios from 'axios'
import { API_URL } from './endPoints'

axios.defaults.baseURL = API_URL

axios.interceptors.request.use(async (config) => {
    const token = await localStorage.getItem('cvbuddy_access_token')
    return {
        ...config,
        headers: {
            ...config.params,
            Authorization: token ? `bearer ${token}` : '',
        },
    }
})

axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
    },
    function (error) {
        if (error.response.status === 401) {
            return (window.location.href = '/login')
        }
        return Promise.reject(error)
    }
)
