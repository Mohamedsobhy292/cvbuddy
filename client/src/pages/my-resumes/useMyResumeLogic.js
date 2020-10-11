import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from 'routes'
import { ALL_RESUMES_URL, DELETE_RESUME_URL } from 'shared/api/endPoints'
import Axios from 'axios'
import { DOWNLOAD_RESUME } from 'shared/api/endPoints'

const pattern = /token=([^&]*)/

const useMyResumeLogic = () => {
    const [data, setData] = useState([])
    console.log('data', data)
    const navigate = useNavigate()
    const [isDownloading, setIsDownloading] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const fetchData = async () => {
            Axios(`${ALL_RESUMES_URL}`).then((res) => {
                setData(res.data.data)
            })
        }
        fetchData()
    }, [setData])

    const downloadResume = (id, e) => {
        e.stopPropagation()
        setIsDownloading(id)
        Axios(`${DOWNLOAD_RESUME}/${id}`, {
            responseType: 'blob',
            headers: {
                Accept: 'application/pdf',
            },
        })
            .then((response) => {
                const blob = new Blob([response.data], {
                    type: 'application/pdf',
                })
                const blobURL = URL.createObjectURL(blob)

                window.open(blobURL)

                const link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = `${id}.pdf`
                link.click()
            })
            .finally(() => setIsDownloading(false))
    }

    const handleDelete = async (id, e) => {
        e.stopPropagation()
        try {
            await Axios.delete(`${DELETE_RESUME_URL}/${id}`)
            setData((data) => data.filter((item) => item._id !== id))
        } catch (e) {
            console.log(e)
        }
    }

    const handleCardClick = (id) => {
        navigate(`/${routes.editResume}/${id}`)
    }

    useEffect(() => {
        const search = location.search.replace('?', '')
        if (search) {
            const token = search.match(pattern)[1]
            localStorage.setItem('cvbuddy_access_token', token)
            navigate('/')
        }
    }, [location.search, navigate])

    return {
        data,
        handleCardClick,
        handleDelete,
        downloadResume,
        isDownloading,
    }
}

export { useMyResumeLogic }
