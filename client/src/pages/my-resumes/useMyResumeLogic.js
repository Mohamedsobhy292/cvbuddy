import { useNavigate } from 'react-router-dom'
import { routes } from 'routes'
import { ALL_RESUMES_URL, DELETE_RESUME_URL } from 'shared/api/endPoints'
import { useState, useEffect } from 'react'
import Axios from 'axios'

const useMyResumeLogic = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const token = await localStorage.getItem('cvbuddy_access_token')
            Axios(`${ALL_RESUMES_URL}`).then((res) => {
                setData(res.data.data)
            })
        }
        fetchData()
    }, [setData])

    const handleDelete = async (id, e) => {
        e.stopPropagation()
        const token = await localStorage.getItem('cvbuddy_access_token')

        try {
            await Axios.delete(`${DELETE_RESUME_URL}/${id}`, {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            })
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
    }
}

export { useMyResumeLogic }
