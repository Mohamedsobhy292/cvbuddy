import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import styles from './ChooseTemplate.module.scss'
import cvTemplate from './resume1.jpg'
import { RadioButton } from 'shared/components/radioButton'
import Arrow from './arrow-right'
import { routes } from 'routes'
import { CREATE_RESUME_URL } from 'shared/api/endPoints'
import Axios from 'axios'
import { Button } from 'shared/components/button'

const templates = [
    {
        name: 'Volga',
    },
    {
        name: 'la plata',
    },
    {
        name: 'Lena',
    },
]

const pattern = /token=([^&]*)/

const ChooseTemplate = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    const handleTemplateClick = (item) => {
        setSelectedTemplate(item.name)
    }

    const handleProceed = async () => {
        const { data } = await Axios.post(`${CREATE_RESUME_URL}`, {
            data: {},
        })
        const id = data.data._id
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

    return (
        <div className={styles.chooseTemplateWrapper}>
            <h2 className={styles.title}>Choose Resume Template</h2>

            <ul className={styles.templatesList}>
                {templates.map((item) => {
                    return (
                        <li
                            key={item.name}
                            className={classNames(styles.templateWrapper, {
                                [styles.isActive]:
                                    selectedTemplate === item.name,
                                [styles.isDisabled]:
                                    selectedTemplate &&
                                    selectedTemplate !== item.name,
                            })}
                            onClick={() => handleTemplateClick(item)}
                        >
                            <img src={cvTemplate} alt="cv template" />
                            <RadioButton
                                className={styles.itemRadio}
                                checked={selectedTemplate === item.name}
                            />
                            <div className={styles.titleWrapper}>
                                {item.name}
                            </div>
                        </li>
                    )
                })}
            </ul>

            <Button className={styles.proceedBtn} onClick={handleProceed}>
                PROCEED
                <span className={styles.arrow}>
                    <Arrow />
                </span>
            </Button>
            <a
                href="http://localhost:4000/users/login/google"
                className={styles.proceedBtn}
            >
                LOGIN WITH GOOGLE
                <span className={styles.arrow}>
                    <Arrow />
                </span>
            </a>
        </div>
    )
}

export default ChooseTemplate
