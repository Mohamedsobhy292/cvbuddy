import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from 'routes'
import { ALL_RESUMES_URL, DELETE_RESUME_URL } from 'shared/api/endPoints'
import Axios from 'axios'
import { DOWNLOAD_RESUME } from 'shared/api/endPoints'
import { toast } from 'react-toastify'
import { SuccessToast } from './components/toaster'
import { LOADING_STATUS } from 'shared/constants'

const pattern = /(status=[\w-]+)/g

const useMyResumeLogic = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const [isDownloading, setIsDownloading] = useState(null)
    const [status, setStatus] = useState(LOADING_STATUS.IDLE)

    useEffect(() => {
        setStatus(LOADING_STATUS.PENDING)
        const fetchData = async () => {
            await Axios(`${ALL_RESUMES_URL}`).then((res) => {
                setData(res.data.data)
            })
        }
        fetchData()
        setStatus(LOADING_STATUS.RESOLVED)
    }, [setData])

    useEffect(() => {
        const search = location.search.replace('?', '')

        if (search) {
            const status = search.match(pattern)
            status &&
                toast.success(<SuccessToast />, {
                    closeOnClick: true,
                    draggable: true,
                    toastId: 'sucess-toast',
                })

            navigate('/', { replace: true })
        }
    }, [location.search, navigate])

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

    return {
        status,
        data,
        handleCardClick,
        handleDelete,
        downloadResume,
        isDownloading,
    }
}

export { useMyResumeLogic }
