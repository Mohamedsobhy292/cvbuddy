import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from 'routes'
import { ALL_RESUMES_URL, DELETE_RESUME_URL } from 'shared/api/endPoints'
import Axios from 'axios'
import { DOWNLOAD_RESUME } from 'shared/api/endPoints'
import { toast } from 'react-toastify'

const pattern = /(status=[\w-]+)/g

const SuccessToast = ({ closeToast }) => {
    return (
        <div>
            Lorem ipsum dolor
            <button onClick={closeToast}>Close</button>
        </div>
    )
}

const useMyResumeLogic = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const [isDownloading, setIsDownloading] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            Axios(`${ALL_RESUMES_URL}`).then((res) => {
                setData(res.data.data)
            })
        }
        fetchData()
    }, [setData])

    useEffect(() => {
        const search = location.search.replace('?', '')

        if (search) {
            const status = search.match(pattern)
            status &&
                toast.success('🦄 Wow so easy!', {
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0.1,
                })
        }
    }, [location.search])

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
        data,
        handleCardClick,
        handleDelete,
        downloadResume,
        isDownloading,
    }
}

export { useMyResumeLogic }
