import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from 'routes'
import { ALL_RESUMES_URL, DELETE_RESUME_URL } from 'shared/api/endPoints'
import Axios from 'axios'
import { DOWNLOAD_RESUME } from 'shared/api/endPoints'

const useMyResumeLogic = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

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
        Axios(`${DOWNLOAD_RESUME}/${id}`, {
            responseType: 'blob',
            headers: {
                Accept: 'application/pdf',
            },
        }).then((response) => {
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
    }

    const handleDelete = async (id, e) => {
        e.stopPropagation()

        try {
            await Axios.delete(`${DELETE_RESUME_URL}/${id}`)
            setData(data.filter((item) => item._id !== id))
        } catch (e) {
            console.log(e)
        }
    }

    const handleCardClick = (id) => {
        navigate(`/${routes.editResume}/${id}`)
    }

    return {
        data,
        setData,
        handleCardClick,
        handleDelete,
        downloadResume,
    }
}

export { useMyResumeLogic }
