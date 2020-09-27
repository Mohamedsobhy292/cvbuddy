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
